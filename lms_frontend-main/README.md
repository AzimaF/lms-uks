# Frontend - Sistem Deteksi Dini TBC & LMS Berbasis AI

Repository ini berisi kode sumber (*source code*) untuk bagian **Frontend (Antarmuka Pengguna)** dari aplikasi Deteksi Dini Tuberkulosis dan *Learning Management System* (LMS).

Aplikasi ini dikembangkan sebagai antarmuka web yang **terbuka untuk umum (tanpa login)**, di mana pengguna dipandu melalui alur edukasi terlebih dahulu sebelum dapat menggunakan fitur deteksi dini berbasis kecerdasan buatan (*Artificial Intelligence*). Frontend ini berkomunikasi dengan layanan Backend (Python/Flask) untuk memproses data medis.

## 🌟 Fitur Utama

### 1. Akses Terbuka (No Login)
- Aplikasi dirancang untuk akses langsung.
- Tidak ada sistem registrasi atau login; semua fitur langsung tersedia bagi pengguna sesuai alur yang ditentukan.

### 2. Learning Management System (LMS)
Fitur edukasi yang wajib diselesaikan sebelum melakukan deteksi:
- **Pre-Test:** Kuis awal untuk mengukur pengetahuan pengguna.
- **Modul Edukasi:** Materi pembelajaran interaktif tentang TBC (Gejala, Pencegahan, Pengobatan).
- **Post-Test:** Evaluasi akhir untuk mengukur peningkatan pemahaman.
- **Gamifikasi (Fitur Unlock):** Menu "Deteksi AI" terkunci secara *default* dan hanya terbuka otomatis setelah pengguna menyelesaikan Post-Test.

### 3. Deteksi Dini & Explainable AI
Setelah fitur terbuka, pengguna dapat melakukan:
- **Skrining Gejala:** Input data klinis (Batuk, Demam, dll) untuk analisis risiko.
- **Analisis X-Ray:** Upload citra Rontgen paru-paru.
- **Visualisasi SHAP:** Menampilkan *heatmap* pada gambar Rontgen untuk menunjukkan area yang terindikasi infeksi (Transparansi AI).
- **Saran Medis:** Rekomendasi tindakan berdasarkan hasil prediksi.

## 🛠️ Teknologi yang Digunakan

- **Core:** HTML5, CSS3, JavaScript (Modern ES6+)
- **Styling:** [Sebutkan Framework CSS Anda, misal: Bootstrap 5 / Tailwind CSS]
- **HTTP Client:** Fetch API / Axios (untuk komunikasi dengan Backend Flask)
- **Build Tool:** [Sebutkan jika pakai, misal: Vite / Webpack]
- **Alerts/UI:** SweetAlert2 (untuk notifikasi interaktif)

## 🚀 Cara Menjalankan (Development)

Pastikan layanan **Backend (Python Flask)** sudah berjalan di `http://localhost:5000` agar fitur prediksi berfungsi.

### Cara 1: Menggunakan Node.js & Vite (Direkomendasikan)
Jika proyek ini menggunakan bundler:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Jalankan Server Development:**
    ```bash
    npm run dev
    ```
3.  Buka browser di alamat yang muncul (biasanya `http://localhost:5173`).

### Cara 2: Menggunakan Live Server (HTML Standar)
Jika proyek ini adalah HTML/JS murni:

1.  Buka folder proyek di **Visual Studio Code**.
2.  Install ekstensi **Live Server**.
3.  Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.

## 🔗 Konfigurasi Koneksi API

Frontend ini dikonfigurasi untuk menghubungkan data ke Backend Flask. Pengaturan endpoint terdapat di file konfigurasi JavaScript (misal: `src/js/api.js`):

- **Base URL:** `http://localhost:5000`
- **Endpoints:**
  - `POST /predict` : Mengirim data gejala klinis.
  - `POST /predict-image` : Mengirim gambar Rontgen untuk analisis CNN + SHAP.

## ⚠️ Logika "Fitur Terkunci"

Untuk keperluan demonstrasi atau *reset* alur pengguna (agar fitur Deteksi kembali terkunci):
1.  Buka **Inspect Element** di browser (F12).
2.  Masuk ke tab **Application** > **Local Storage**.
3.  Hapus *key* yang menyimpan status kelulusan LMS (misal: `lms_completed`).
4.  Refresh halaman, dan fitur Deteksi akan kembali terkunci.

---
