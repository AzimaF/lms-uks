require("dotenv").config();
const Hapi = require("@hapi/hapi");
const axios = require("axios");
const FormData = require("form-data");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "0.0.0.0", // <- biar gak ke-bind ke localhost doang
    routes: {
      cors: {
        origin: ["*"],
        additionalHeaders: ["cache-control", "x-requested-with"],
      },
    },
  });

  // REGISTER
  server.route({
    method: "POST",
    path: "/register",
    handler: async (request, h) => {
      const { name, email, password } = request.payload;
      const hashed = await bcrypt.hash(password, 10);
      try {
        const existing = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );
        if (existing.rows.length) {
          return h.response({ error: "Email already registered." }).code(400);
        }

        const res = await pool.query(
          "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
          [name, email, hashed]
        );
        return res.rows[0];
      } catch (err) {
        console.error(err);
        return h.response({ error: "Registration failed." }).code(500);
      }
    },
  });

  // LOGIN
  server.route({
    method: "POST",
    path: "/login",
    handler: async (request, h) => {
      const { email, password } = request.payload;
      try {
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        if (
          !user.rows.length ||
          !(await bcrypt.compare(password, user.rows[0].password))
        ) {
          return h.response({ error: "Invalid credentials." }).code(401);
        }
        return {
          id: user.rows[0].id,
          name: user.rows[0].name,
          email: user.rows[0].email,
        };
      } catch (err) {
        console.error(err);
        return h.response({ error: "Login failed." }).code(500);
      }
    },
  });

  // PREDICT FORM
  // PREDICT FORM - Ganti bagian ini di server.js Anda
server.route({
  method: "POST",
  path: "/predict",
  handler: async (request, h) => {
    const { userId, data } = request.payload;
    console.log(`Received prediction request from user ${userId}`);
    console.log(`Data: ${JSON.stringify(data)}`);
    
    try {
      // 1. Mengirim data ke port 7860 (Port Flask Anda)
      const response = await axios.post(
        "http://127.0.0.1:7860/predict",
        { data }
      );

      // 2. Ambil label prediksi untuk disimpan ke Database (misal: "Tuberkulosis")
      const predictionLabel = response.data.prediction || "No prediction";

      // 3. Simpan riwayat ke Database (Hanya teks hasil, bukan gambar SHAP)
      await pool.query(
        "INSERT INTO history (user_id, method, input, result) VALUES ($1, 'form', $2, $3)",
        [userId || 'anonymous', JSON.stringify(data), predictionLabel]
      );

      // 4. SANGAT PENTING: Kembalikan 'response.data' secara utuh
      // Ini akan mengirimkan {prediction, confidence, description, treatment, shap_img} ke frontend
      return response.data;

    } catch (err) {
      console.error("🔥 /predict error:", err.message);
      // Jika error karena server AI mati
      return h.response({ error: "Gagal terhubung ke server AI Python." }).code(500);
    }
  },
});

  // PREDICT IMAGE
  server.route({
    method: "POST",
    path: "/predict-image",
    options: {
        payload: {
            output: "file", // SANGAT PENTING: Harus "file" untuk kestabilan pengiriman file
            parse: true,
            multipart: true,
            maxBytes: 10 * 1024 * 1024, // Naikkan limit ke 10MB
        },
    },
    handler: async (request, h) => {
    // Tambahkan log ini untuk melihat apakah request sampai ke Node.js
    console.log("-----------------------------------------");
    console.log("📩 REQUEST MASUK DARI FRONTEND!");
    
    try {
        const { image, userId } = request.payload;
        console.log("File diterima:", image ? image.filename : "TIDAK ADA FILE");

        if (!image) {
            return h.response({ error: "File rontgen tidak ditemukan" }).code(400);
        }

        const fs = require("fs");
        const formData = new FormData();
        
        // Kirim ke Flask dengan key "file" sesuai app.py
        formData.append("file", fs.createReadStream(image.path), {
            filename: image.filename,
            contentType: image.headers["content-type"],
        });

        // Pastikan URL mengarah ke port Python (7860)
        const response = await axios.post(
            "http://127.0.0.1:7860/predict-image", 
            formData,
            { headers: formData.getHeaders() }
        );

        console.log("✅ AI Response:", response.data.prediction);
        return response.data;

    } catch (err) {
        console.error("🔥 Error di Node.js:", err.response?.data || err.message);
        return h.response({ error: "Gagal analisis gambar.", details: err.message }).code(500);
    }
  },
});

  await server.start();
  console.log("🚀 Server running at:", server.info.uri);
};

init();
