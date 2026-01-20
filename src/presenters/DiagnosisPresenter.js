// import DiagnosisModel from "../models/DiagnosisModel.js"; 

import DiagnosisView from "../views/DiagnosisView.js";
// Pastikan path ini sesuai dengan struktur folder Anda (components/views)
import { showDiagnosisModal } from "../components/ModalDiagnosisForm.js";

export default class DiagnosisPresenter {
  constructor() {
    // this.model = new DiagnosisModel(); // Tidak perlu model lagi
    this.view = new DiagnosisView();
    this.init();
  }

  init() {
    this.view.renderContent();
    // Gunakan arrow function agar 'this' tetap merujuk ke class Presenter
    setTimeout(() => {
      this.view.bindImageUpload((file) => this.handleImageUpload(file));
      this.view.bindModalTrigger(() => this.openModal());
    }, 0);
  }

  // --- TAMBAHAN PENTING: URL SERVER AI ANDA ---
  getApiUrl() {
    // Ganti dengan URL Hugging Face Anda
    return "https://fazima-uks-tbc-api.hf.space/predict"; 
  }

  // --- LOGIKA UPLOAD GAMBAR ---
  async handleImageUpload(file) {
    this.view.showLoader();
    try {
      console.log("Mengupload gambar ke Hugging Face...");

      // Siapkan data form
      const formData = new FormData();
      formData.append("file", file); // Key 'file' wajib sama dengan di app.py

      // Panggil API langsung
      const response = await fetch(this.getApiUrl(), {
        method: "POST",
        body: formData, // Browser otomatis mengatur Content-Type untuk FormData
      });

      const result = await response.json();
      console.log("Hasil AI Gambar:", result);

      if (response.ok) {
        this.view.showImageResult(result);
        this.view.notify("Analisis Rontgen Selesai!");
      } else {
        throw new Error(result.error || "Gagal memproses gambar");
      }

    } catch (error) {
      console.error(error);
      this.view.notify("Gagal koneksi ke server AI. Coba lagi nanti.");
    } finally {
      this.view.hideLoader();
    }
  }

  // --- LOGIKA INPUT GEJALA ---
  async handleFormSubmit(data) {
    this.view.showLoader();
    try {
      console.log("Mengirim gejala ke Hugging Face...", data);

      // Panggil API langsung
      const response = await fetch(this.getApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data }), // Format JSON harus { data: ... } sesuai app.py
      });

      const result = await response.json();
      console.log("Hasil AI Form:", result);

      if (response.ok) {
        this.view.showFormResult(data, result);
        this.view.notify("Analisis Gejala Selesai!");
        return result;
      } else {
        throw new Error(result.error || "Gagal memproses data");
      }

    } catch (error) {
      console.error(error);
      this.view.notify("Gagal koneksi ke server AI.");
      throw error;
    } finally {
      this.view.hideLoader();
    }
  }

  openModal() {
    showDiagnosisModal({ onSubmit: (data) => this.handleFormSubmit(data) });
  }
}