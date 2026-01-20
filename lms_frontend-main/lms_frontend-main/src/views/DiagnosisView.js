export default class DiagnosisView {
  constructor() {
    this.imageInput = document.getElementById("catImage");
    this.imagePreview = document.getElementById("imagePreview");
    this.uploadButton = document.getElementById("uploadBtn");
    this.resultBox = document.getElementById("result");
    this.notification = document.getElementById("notification");
    this.notificationText = document.getElementById("notificationText");
    this.modalTrigger = document.getElementById("openDiagnosis");
  }

  bindImageUpload(callback) {
    this.uploadButton.addEventListener("click", () => this.imageInput.click());
    this.imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.src = reader.result;
        this.imagePreview.classList.remove("hidden");
        callback(file);
      };
      reader.readAsDataURL(file);
    });
  }

  bindModalTrigger(callback) {
    this.modalTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      callback();
    });
  }

  // --- FUNGSI GENERATE PDF ---
  generatePDF(elementId, filename) {
    const element = document.getElementById(elementId);
    
    if (!element) return;

    // 1. Hapus animasi sementara agar hasil cetak stabil (tidak pudar)
    const originalClasses = element.className;
    element.classList.remove("animate-fadeIn", "animate-pop-in", "card"); // Hapus 'card' juga jika ada

    // 2. Konfigurasi PDF
    const opt = {
      margin:       [0.5, 0.5, 0.5, 0.5],
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
          scale: 2,             
          useCORS: true,        
          scrollY: 0,           
          scrollX: 0,
          letterRendering: true,
          backgroundColor: "#ffffff" // PAKSA background putih solid
      },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // 3. Tombol Loading
    const btn = document.activeElement;
    let originalText = "";
    if(btn) {
        originalText = btn.innerText;
        btn.innerText = "⏳ Memproses...";
        btn.disabled = true;
    }

    // Eksekusi dengan jeda agar style stabil
    setTimeout(() => {
        html2pdf().set(opt).from(element).save().then(() => {
            if(btn) {
                btn.innerText = originalText;
                btn.disabled = false;
            }
            element.className = originalClasses; // Kembalikan class asli
        }).catch(err => {
            console.error("Gagal mencetak PDF:", err);
            if(btn) {
                btn.innerText = "Gagal";
                setTimeout(() => { btn.innerText = originalText; btn.disabled = false; }, 2000);
            }
        });
    }, 500);
  }

  showFormResult(data, result) {
    const section = document.getElementById("formDiagnosisSection");
    if (!section) return;

    section.classList.remove("hidden");
    
    // Tampilan Hasil Gejala (Sudah Bagus)
    section.innerHTML = `
    <div id="print-area-gejala" class="mt-8 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 bg-white w-full max-w-4xl mx-auto text-left relative">
      
      <div class="absolute top-8 right-8" data-html2canvas-ignore="true">
        <button id="btn-pdf-gejala" class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Unduh PDF
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
        <img src="/uks-icon.png" alt="Logo" class="h-12 w-12 object-contain">
        <div>
            <h2 class="text-2xl font-black text-teal-800">Hasil Analisis Gejala</h2>
            <p class="text-xs text-gray-500">LMS UKS SMP Muhammadiyah 36 - Tanggal: ${new Date().toLocaleDateString('id-ID')}</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div class="space-y-6">
            <div class="border-b border-gray-50 pb-4">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Status Diagnosis</span>
                <p class="text-2xl font-extrabold text-blue-900 mt-1">${result.prediction}</p>
                <p class="text-sm font-bold text-blue-500 mt-1">Tingkat Keyakinan: ${result.confidence}</p>
            </div>
            <div>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Saran Petugas UKS</span>
                <div class="p-5 bg-teal-50 rounded-2xl border border-teal-100 mt-2 font-medium text-teal-900 leading-relaxed text-sm text-justify">
                    ${result.treatment}
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Analisis Faktor (SHAP):</span>
            <div class="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-2">
                <img src="data:image/png;base64,${result.shap_img}" alt="SHAP Plot" class="w-full h-auto" crossorigin="anonymous" />
            </div>
            
            <div class="space-y-3">
                <p class="text-[13px] font-bold text-gray-700">🔍 Cara Membaca Grafik:</p>
                <div class="flex items-start gap-3">
                    <div class="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0"></div>
                    <p class="text-[11px] text-gray-600 leading-relaxed">
                        <strong>Bar Merah:</strong> Gejala yang memperkuat indikasi <strong>TBC</strong>. 
                    </p>
                </div>
                <div class="flex items-start gap-3">
                    <div class="w-3 h-3 rounded-full bg-blue-500 mt-1 shrink-0"></div>
                    <p class="text-[11px] text-gray-600 leading-relaxed">
                        <strong>Bar Biru:</strong> Faktor yang menunjukkan kondisi Anda lebih mengarah ke <strong>Normal</strong>.
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      <div class="mt-8 pt-4 border-t border-gray-100 text-center">
        <p class="text-[10px] text-gray-400 italic">Dokumen ini hasil analisis komputer (AI) dan bukan pengganti diagnosis dokter. Segera hubungi Puskesmas jika gejala berlanjut.</p>
      </div>
    </div>`;

    section.scrollIntoView({ behavior: 'smooth' });

    document.getElementById("btn-pdf-gejala").addEventListener("click", () => {
        this.generatePDF("print-area-gejala", "Hasil_Diagnosis_Gejala_UKS.pdf");
    });
  }

  showImageResult(data) {
    const section = document.getElementById("imageDiagnosisSection");
    if (!section) return;
    section.classList.remove("hidden");
    
    // PERBAIKAN: Hapus class 'card' dan samakan strukturnya dengan Gejala agar PDF solid
    section.innerHTML = `
    <div id="print-area-rontgen" class="mt-8 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 bg-white w-full max-w-4xl mx-auto text-left relative">
      
      <div class="absolute top-8 right-8" data-html2canvas-ignore="true">
        <button id="btn-pdf-rontgen" class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Unduh PDF
        </button>
      </div>

      <div class="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
        <img src="/uks-icon.png" alt="Logo" class="h-12 w-12 object-contain">
        <div>
            <h2 class="text-2xl font-bold text-blue-700">Hasil Analisis Rontgen</h2>
            <p class="text-xs text-gray-500">LMS UKS SMP Muhammadiyah 36 - Tanggal: ${new Date().toLocaleDateString('id-ID')}</p>
        </div>
      </div>

      <div class="space-y-6">
        <div class="text-center p-4 bg-blue-50 rounded-2xl">
            <p class="text-3xl font-black text-blue-900">${data.prediction}</p>
            <p class="text-sm font-bold text-blue-500 mt-1">Confidence: ${data.confidence}</p>
        </div>

        <div class="py-2 flex flex-col items-center">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 self-start">Area Analisis (Heatmap):</p>
            <div class="rounded-2xl overflow-hidden border-2 border-gray-50 shadow-inner bg-black flex justify-center max-w-md">
                <img src="data:image/png;base64,${data.shap_img}" alt="SHAP Rontgen" class="w-auto h-64 object-contain" crossorigin="anonymous"/>
            </div>
            <p class="text-[10px] text-gray-400 mt-3 italic self-start">
                *Warna pada gambar menunjukkan area paru-paru yang dideteksi oleh AI sebagai dasar pengambilan keputusan diagnosis.
            </p>
        </div>

        <div class="border-t pt-4 text-left">
            <p class="text-gray-700 leading-relaxed text-justify">${data.treatment_suggestion}</p>
        </div>
      </div>
      
      <div class="mt-6 pt-4 border-t border-gray-100 text-center">
        <p class="text-[10px] text-gray-400 italic">Dokumen ini hasil analisis komputer (AI) dan bukan pengganti diagnosis dokter.</p>
      </div>
    </div>`;

    document.getElementById("btn-pdf-rontgen").addEventListener("click", () => {
        this.generatePDF("print-area-rontgen", "Hasil_Rontgen_UKS.pdf");
    });
  }

  notify(msg) {
    if (!this.notificationText || !this.notification) return;

    this.notificationText.textContent = msg;
    this.notification.classList.remove("Hidden");
    this.notification.classList.add("show");

    setTimeout(() => {
      this.notification.classList.remove("show");
      setTimeout(() => {
        this.notification.classList.add("Hidden");
      }, 500);
    }, 3000);
  }

  bindFormSubmit(callback) {
    const form = document.getElementById("diagnosisForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      callback(data);
    });
  }

  showLoader() {
    document.getElementById("loader").classList.remove("hidden");
  }

  hideLoader() {
    document.getElementById("loader").classList.add("hidden");
  }

  renderContent() {
    const container = document.querySelector("main");
    if (!container) return;

    container.innerHTML = `
    <div id="loader" class="hidden fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 border-t-blue-600 animate-spin"></div>
    </div>

    <div class="container mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6 border border-[color:var(--color-border)]" style="animation: fadeInUp 0.6s ease-out both;">
        <div class="flex flex-col items-center gap-4 mb-8">
          <img src="/uks-icon.png" alt="Logo UKS" class="h-20 w-20 mb-2 drop-shadow-lg transform hover:scale-105 transition-transform duration-300" />
          <h1 class="text-4xl font-extrabold text-[color:var(--color-darkblue)] tracking-tight">LMS UKS SMP Muhammadiyah 36</h1>
          <p class="text-[color:var(--color-darkblue)] text-center text-lg font-semibold opacity-80">
            Skrining Penyakit TBC
          </p>
        </div>

        <form id="diagnosisForm" class="flex flex-col gap-5 w-full items-center">
          <div class="flex flex-col gap-3 w-full max-w-sm items-center">
            <label for="catImage" class="block text-base font-bold text-[color:var(--color-darkblue)] mb-1 self-start">
              Hasil Rontgen Paru-Paru
            </label>
            <div class="upload-area w-full flex flex-col items-center cursor-pointer transition-all duration-300">
              <img id="imagePreview" class="hidden h-36 w-36 object-cover rounded-xl mb-3 border-2 border-[color:var(--color-border)] shadow-lg mb-4" />
              <input id="catImage" name="catImage" type="file" accept="image/*" class="hidden" />
              <button type="button" id="uploadBtn" class="btn-primary flex items-center gap-2 w-full justify-center text-base py-2 min-h-0">
                Upload Foto
              </button>
              <p class="text-sm text-[color:var(--color-darkblue)] mt-2 opacity-70">
                Drag & Drop or Click to Select Image
              </p>
            </div>
            <p id="imageError" class="hidden text-sm text-red-600 mt-1"></p>
          </div>
          <div id="imageDiagnosisSection" class="mt-10 hidden w-full"></div>
          
          <div class="border-b border-[color:var(--color-border)] w-full py-4 px-2 mb-4"></div>
          <span class="text-gray-400 font-bold">ATAU</span>
          <div class="border-b border-[color:var(--color-border)] w-full py-4 px-2 mb-4"></div>

          <div class="w-full flex justify-center">
            <button id="openDiagnosis" type="button" class="btn-primary w-full max-w-sm px-6 py-2 text-base font-bold min-h-0">
              Input Gejala
            </button>
          </div>
        </form>
        <div id="formDiagnosisSection" class="mt-10 hidden w-full"></div>

        <div id="result" class="mt-8 hidden w-full"></div>
        <div id="notification" class="notification hidden">
          <div class="bg-[color:var(--color-peach)] text-white px-6 py-4 rounded-xl shadow-xl">
            <p id="notificationText"></p>
          </div>
        </div>
      </div>
    </div>
  `;

    this.imageInput = document.getElementById("catImage");
    this.imagePreview = document.getElementById("imagePreview");
    this.uploadButton = document.getElementById("uploadBtn");
    this.resultBox = document.getElementById("result");
    this.notification = document.getElementById("notification");
    this.notificationText = document.getElementById("notificationText");
    this.modalTrigger = document.getElementById("openDiagnosis");
  }
}