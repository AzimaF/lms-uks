import DiagnosisModel from "../models/DiagnosisModel.js";
import DiagnosisView from "../views/DiagnosisView.js";
import { showDiagnosisModal } from "../components/ModalDiagnosisForm.js";

export default class DiagnosisPresenter {
  constructor() {
    this.model = new DiagnosisModel();
    this.view = new DiagnosisView();
    this.init();
  }

  init() {
    this.view.renderContent();
    // Menggunakan arrow function untuk mempertahankan konteks 'this'
    setTimeout(() => {
      this.view.bindImageUpload((file) => this.handleImageUpload(file));
      this.view.bindModalTrigger(() => this.openModal());
    }, 0);
  }

  async handleImageUpload(file) {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id || null;

      this.view.showLoader();

      // Panggil Model
      const result = await this.model.predictImage(file, userId);
      
      // Jika Model mengembalikan error di dalam JSON (tapi status 200/400)
      if (result.error) {
         this.view.notify(result.error);
      } else {
         this.view.showImageResult(result);
      }

    } catch (error) {
      console.error(error);
      // Tangkap pesan error spesifik jika ada
      const message = error.message || "Gagal memproses gambar.";
      this.view.notify(message);
    } finally {
      this.view.hideLoader();
    }
  }

  async handleFormSubmit(data) {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id || null;

      this.view.showLoader();

      // Kirim Data Gejala ke Backend
      const result = await this.model.predict({ userId, data });
      
      // Result sekarang mengandung 'shap_explanation' (Array Text)
      // View akan merender ini.
      this.view.showFormResult(data, result);
      
      return result;
    } catch (error) {
      console.error("Form Error:", error);
      this.view.notify("Gagal melakukan prediksi gejala.");
      throw error;
    } finally {
      this.view.hideLoader();
    }
  }

  openModal() {
    // Callback saat user submit form di Modal
    showDiagnosisModal({ onSubmit: (data) => this.handleFormSubmit(data) });
  }
}