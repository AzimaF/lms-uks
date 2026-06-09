# TBC Detection AI Backend (Flask)

Repository ini berisi layanan *backend* untuk aplikasi **Deteksi Dini Tuberkulosis & LMS**. Layanan ini dibangun menggunakan **Python (Flask)** dan bertanggung jawab untuk menangani logika kecerdasan buatan (*Artificial Intelligence*), pemrosesan citra medis, serta menyediakan fitur transparansi hasil prediksi menggunakan **Explainable AI (SHAP)**.

Backend ini bekerja sebagai API Service yang menerima permintaan dari aplikasi utama (Frontend/LMS) untuk melakukan analisis risiko TBC baik melalui gejala klinis maupun citra Rontgen paru.

## 🌟 Fitur Utama

- **Hybrid AI Prediction System:**
  - **Analisis Data Tabular:** Memprediksi risiko TBC berdasarkan input gejala klinis (seperti batuk, demam, berat badan turun) menggunakan model Machine Learning.
  - **Analisis Citra (CNN):** Mendeteksi indikasi TBC pada citra X-Ray paru-paru menggunakan algoritma *Convolutional Neural Network* (CNN).
- **Explainable AI (SHAP):**
  - **Visualisasi Heatmap:** Menghasilkan gambar *overlay* (merah/biru) pada Rontgen untuk menunjukkan area paru-paru yang terinfeksi.
  - **Interpretasi Gejala:** Menampilkan grafik kontribusi setiap gejala terhadap hasil prediksi (apakah gejala tersebut meningkatkan atau menurunkan risiko).
- **Image Preprocessing:**
  - Otomatis memotong (*cropping*) border hitam pada gambar Rontgen.
  - Normalisasi dan *resizing* gambar agar sesuai dengan input model.
- **Medical Advice Generator:** Memberikan saran medis otomatis berdasarkan hasil prediksi yang didapat.

## 🛠️ Teknologi yang Digunakan

Backend ini dibangun menggunakan teknologi dan *library* berikut:

- **Core:** Python 3.8+
- **Framework:** Flask (Microframework)
- **Machine Learning & Deep Learning:**
  - TensorFlow / Keras (untuk model CNN)
  - Scikit-Learn (untuk model Tabular)
  - Joblib (untuk memuat model `.pkl`)
- **Explainable AI:** SHAP (SHapley Additive exPlanations)
- **Image Processing:** OpenCV, Pillow (PIL)
- **Data Manipulation:** NumPy, Pandas
- **Visualization:** Matplotlib

## 📂 Struktur File Penting

Pastikan file-file berikut tersedia dalam direktori utama agar aplikasi berjalan lancar:

- `app.py`: Entry point utama aplikasi Flask.
- `model.h5`: File model CNN yang sudah dilatih (untuk prediksi gambar).
- `best_model.pkl`: File model Machine Learning (untuk prediksi gejala).
- `label_encoders.pkl`: File encoder untuk memproses data kategori.
- `disease_mapping.json`: File JSON berisi pemetaan saran medis.

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan backend di komputer lokal:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```