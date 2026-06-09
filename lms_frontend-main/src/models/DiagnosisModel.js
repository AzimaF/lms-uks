import axios from "axios";

export default class DiagnosisModel {
  constructor() {
    this.api = axios.create({
      // PERUBAHAN 1: Arahkan langsung ke Localhost Python Anda
      // Jangan lupa http:// (bukan https)
      baseURL: "http://127.0.0.1:5000", 
    });
  }

  async predict(payload) {
    try {
      const res = await this.api.post("/predict", payload);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Prediction failed");
    }
  }

  async predictImage(file, userId) {
    const formData = new FormData();
    
    // PERUBAHAN 2 (SANGAT PENTING): 
    // Ubah "image" menjadi "file" agar sesuai dengan app.py (request.files['file'])
    formData.append("file", file); 
    
    // Jika tidak login, kirim string "guest"
    formData.append("userId", userId || "guest"); 

    try {
        const res = await this.api.post("/predict-image", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
    } catch (error) {
        console.error("Error di Model Frontend:", error);
        
        // Tangkap pesan error spesifik dari backend (misal: "Bukan Rontgen")
        const errorMessage = error.response?.data?.error || "Gagal terhubung ke server";
        throw new Error(errorMessage);
    }
  }
}