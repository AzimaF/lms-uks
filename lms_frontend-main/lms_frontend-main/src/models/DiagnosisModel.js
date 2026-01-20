import axios from "axios";

export default class DiagnosisModel {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
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

  // DiagnosisModel.js
  // DiagnosisModel.js
  async predictImage(file, userId) {
    const formData = new FormData();
    formData.append("image", file); 
    // Jika tidak login, kirim string "guest" atau null
    formData.append("userId", userId || "guest"); 

    try {
        const res = await this.api.post("/predict-image", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
    } catch (error) {
        // Log ini untuk melihat apakah error dari browser atau server
        console.error("Error di Model Frontend:", error);
        throw new Error(error.response?.data?.error || "Gagal terhubung ke server");
    }
  }
}
