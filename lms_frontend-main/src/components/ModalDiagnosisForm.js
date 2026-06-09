export function showDiagnosisModal({ onSubmit }) {
  const modal = document.createElement("div");
  modal.id = "diagnosisModal";
  
  // Styling Overlay
  Object.assign(modal.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 77, 64, 0.6)", // Overlay Hijau Teal
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999",
    backdropFilter: "blur(4px)"
  });

  modal.innerHTML = `
    <div class="diagnosis-card" style="background: white; padding: 2.5rem; border-radius: 20px; max-width: 650px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative; border-top: 8px solid #00897b;">
      <div class="flex justify-between items-center mb-6">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #004d40;">Skrining Gejala Tuberkulosis</h2>
        <button id="closeDiagnosis" style="font-size: 2rem; border: none; background: none; cursor: pointer; color: #999;">&times;</button>
      </div>
      
      <form id="diagnosisForm" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Umur</label>
          <input type="number" id="Age" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required placeholder="Contoh: 22"/>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Jenis Kelamin</label>
          <select id="Gender" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="0">Pria</option>
            <option value="1">Wanita</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Nyeri Dada</label>
          <select id="Chest_Pain" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="1">Ya</option>
            <option value="0">Tidak</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Tingkat Keparahan Batuk</label>
          <select id="Cough_Severity" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih Tingkat Keparahan...</option>
            <option value="0">Tidak Batuk</option>
            <option value="1">Batuk Sangat Ringan (Jarang)</option>
            <option value="2">Batuk Ringan</option>
            <option value="3">Batuk Ringan (Mengganggu Tidur)</option>
            <option value="4">Batuk Sedang</option>
            <option value="5">Sering Batuk</option>
            <option value="6">Batuk Cukup Berat</option>
            <option value="7">Batuk Berat</option>
            <option value="8">Batuk Sangat Berat</option>
            <option value="9">Batuk Ekstrem (Terus Menerus)</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Sesak Nafas</label>
          <select id="Breathlessness" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih Tingkat Sesak...</option>
            <option value="0">Bernafas Normal</option>
            <option value="1">Sedikit Sesak saat Aktivitas Berat</option>
            <option value="2">Sesak Ringan saat Jalan Cepat</option>
            <option value="3">Sesak Ringan saat Jalan Biasa</option>
            <option value="4">Sesak Sedang (Perlu Berhenti Sebentar)</option>
            <option value="5">Sesak Sedang (Sering Berhenti)</option>
            <option value="6">Sesak Cukup Berat (Aktivitas Ringan Terganggu)</option>
            <option value="7">Sesak Berat (Sulit Bicara Panjang)</option>
            <option value="8">Sesak Sangat Berat</option>
            <option value="9">Sesak Ekstrem (Bahkan saat Istirahat)</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Kelelahan</label>
          <select id="Fatigue" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih Tingkat Kelelahan...</option>
            <option value="0">Segar Bugar</option>
            <option value="1">Sedikit Lelah (Wajar)</option>
            <option value="2">Lelah Ringan</option>
            <option value="3">Lelah Ringan (Perlu Istirahat Tambahan)</option>
            <option value="4">Lelah Sedang</option>
            <option value="5">Lelah Sedang (Aktivitas Menurun)</option>
            <option value="6">Lelah Cukup Berat</option>
            <option value="7">Lelah Berat (Sulit Bangun dari Tempat Tidur)</option>
            <option value="8">Lelah Sangat Berat</option>
            <option value="9">Kelelahan Ekstrem (Tidak Bisa Beraktivitas)</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Penurunan Berat Badan (kg)</label>
          <input type="number" step="0.1" id="Weight_Loss" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required placeholder="Contoh: 5.5"/>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Demam</label>
          <select id="Fever" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="0">Tidak Demam</option>
            <option value="1">Demam Rendah (Meriang)</option>
            <option value="2">Demam Tinggi</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Keringat Malam</label>
          <select id="Night_Sweats" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="1">Ya</option>
            <option value="0">Tidak</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Produksi Dahak</label>
          <select id="Sputum_Production" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="0">Tidak Ada</option>
            <option value="1">Sedikit</option>
            <option value="2">Banyak</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Darah dalam Dahak</label>
          <select id="Blood_in_Sputum" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="1">Ya</option>
            <option value="0">Tidak</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Riwayat Merokok</label>
          <select id="Smoking_History" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="2">Tidak Pernah</option>
            <option value="1">Sudah Berhenti</option>
            <option value="0">Perokok Aktif</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem;" class="md:col-span-2">
          <label style="display: block; font-weight: bold; font-size: 0.75rem; color: #666; text-transform: uppercase;">Riwayat Tuberkulosis Sebelumnya</label>
          <select id="Previous_TB_History" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 10px;" required>
            <option value="" disabled selected>Pilih...</option>
            <option value="1">Ya</option>
            <option value="0">Tidak</option>
          </select>
        </div>

        <button type="submit" style="grid-column: span 2; background: #00897b; color: white; padding: 1rem; border: none; border-radius: 15px; font-weight: bold; cursor: pointer; font-size: 1rem; transition: background 0.3s;" onmouseover="this.style.background='#00695c'" onmouseout="this.style.background='#00897b'">MULAI ANALISIS GEJALA</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  // Fungsi Tutup
  document.getElementById("closeDiagnosis").addEventListener("click", () => {
    modal.remove();
  });

  // Submit Form
  const form = modal.querySelector("#diagnosisForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Mengambil data dan mengubah ke Number sesuai kebutuhan Model AI
    const keys = [
      "Age", "Gender", "Chest_Pain", "Cough_Severity", "Breathlessness", 
      "Fatigue", "Weight_Loss", "Fever", "Night_Sweats", 
      "Sputum_Production", "Blood_in_Sputum", "Smoking_History", "Previous_TB_History"
    ];

    const data = {};
    keys.forEach(key => {
      data[key] = Number(form.querySelector(`#${key}`).value);
    });

    if (typeof onSubmit === "function") onSubmit(data);
    modal.remove();
  });
}