export const courseData = [
  {
    id: 1,
    title: "Chapter 1: Mengenal Kuman TBC",
    description: "Memahami definisi, penyebab, patogenesis, dan gejala klinis Tuberkulosis sesuai standar Kemenkes RI.",
    modules: [
      {
        id: "1-1",
        title: "Definisi & Penyebab TBC",
        videoUrl: "https://www.youtube.com/embed/zFQLKLhnFPg?si=zVzqCkDmYnp6Q_r_", //Cara Penularan TBC Tuberkulosis Yang Paling Umum-Dokter Saddam Ismail
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Apa itu Tuberkulosis?</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            <strong>Tuberkulosis (TBC)</strong> adalah penyakit menular yang disebabkan oleh bakteri <em>Mycobacterium tuberculosis</em>. Bakteri ini paling sering menyerang paru-paru (TBC Paru), namun juga dapat menyebar dan menyerang organ tubuh lainnya seperti selaput otak, tulang, kelenjar getah bening, dan ginjal (TBC Ekstra Paru).
          </p>
          
          <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 my-6 shadow-sm">
            <h4 class="font-bold text-blue-900 text-lg mb-2">Fakta Penting:</h4>
            <ul class="list-disc ml-5 space-y-2 text-blue-800">
              <li>TBC murni disebabkan oleh infeksi bakteri, <strong>bukan penyakit keturunan</strong>.</li>
              <li>TBC juga <strong>bukan</strong> disebabkan oleh guna-guna, santet, atau keracunan makanan.</li>
            </ul>
          </div>

          <h3 class="text-2xl font-bold text-teal-800 mb-4">Karakteristik Bakteri</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Bakteri TBC bersifat <em>aerob</em> (membutuhkan oksigen untuk hidup) dan tahan terhadap asam, sehingga dikenal sebagai <strong>Bakteri Tahan Asam (BTA)</strong>. Bakteri ini memiliki kemampuan unik untuk bertahan hidup dalam kondisi "tidur" (dorman) di dalam tubuh manusia selama bertahun-tahun tanpa menimbulkan gejala, kondisi ini disebut <em>Infeksi TBC Laten</em>.
          </p>
        `
      },
      {
        id: "1-2",
        title: "Cara Penularan & Patogenesis",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Mekanisme Penularan</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            TBC menyebar melalui udara (<em>airborne disease</em>). Penularan terjadi ketika pasien TBC paru aktif (biasanya orang dewasa atau remaja) batuk, bersin, berbicara keras, atau bernyanyi. Aktivitas ini melepaskan percikan dahak mikroskopis yang disebut <strong>droplet nuclei</strong> ke udara.
          </p>
          
          <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
            <p class="text-yellow-900 font-semibold mb-2">⚠️ Risiko Penularan Meningkat Jika:</p>
            <ul class="list-disc ml-5 text-gray-700 space-y-1">
              <li>Berada di ruangan sempit, tertutup, dan lembab.</li>
              <li>Sirkulasi udara (ventilasi) buruk sehingga kuman terperangkap.</li>
              <li>Kontak yang lama dan erat dengan pasien TBC aktif.</li>
            </ul>
          </div>

          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Perlu diingat bahwa TBC <strong>tidak menular</strong> melalui perlengkapan makan (piring/gelas), pakaian, jabat tangan, atau penggunaan toilet bersama. Bakteri TBC di udara dapat mati jika terkena sinar matahari langsung (sinar ultraviolet).
          </p>

          <h3 class="text-2xl font-bold text-teal-800 mb-4 mt-8">Tahapan Perjalanan Penyakit</h3>
          <ol class="list-decimal ml-6 space-y-3 text-lg text-gray-700">
            <li><strong>Tahap Pajanan:</strong> Seseorang menghirup udara yang mengandung bakteri TBC. Bakteri masuk ke saluran napas menuju paru-paru.</li>
            <li><strong>Tahap Infeksi:</strong> Sistem imun tubuh berusaha melawan bakteri. Jika imun kuat, bakteri akan "dikurung" (tidak sakit, tidak menular). Ini disebut Infeksi Laten.</li>
            <li><strong>Tahap Sakit TBC:</strong> Jika daya tahan tubuh menurun (seperti pada balita atau penderita HIV), bakteri yang terkurung tadi menjadi aktif kembali, berkembang biak, dan merusak jaringan tubuh.</li>
          </ol>
        `
      },
      {
        id: "1-3",
        title: "Gejala Klinis pada Anak & Remaja",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Gejala TBC pada Anak</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Gejala TBC pada anak seringkali tidak khas dan sulit dibedakan dengan penyakit lain. Berikut adalah gejala umum yang perlu diwaspadai:
          </p>
          <ul class="list-disc ml-6 space-y-2 mb-6 text-gray-700 text-lg">
            <li><strong>Batuk Lama:</strong> Batuk yang berlangsung lebih dari 2 minggu dan tidak membaik meskipun sudah diobati.</li>
            <li><strong>Demam Lama:</strong> Demam lebih dari 2 minggu tanpa sebab yang jelas (bukan tifoid/malaria). Biasanya demam tidak terlalu tinggi.</li>
            <li><strong>Berat Badan Turun:</strong> Berat badan turun drastis atau tidak naik (gagal tumbuh) dalam 2 bulan terakhir meskipun gizi sudah diperbaiki.</li>
            <li><strong>Lesu/Malaise:</strong> Anak tampak lemas dan kurang aktif bermain seperti biasanya.</li>
          </ul>

          <h3 class="text-2xl font-bold text-teal-800 mb-4 mt-8">Gejala TBC pada Remaja</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Pada usia remaja (10-19 tahun), gejala TBC seringkali mirip dengan orang dewasa dan berpotensi menular:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="bg-red-50 p-4 rounded-xl border border-red-100">
              <span class="text-red-700 font-bold block mb-1">Batuk Berdarah</span>
              <p class="text-sm text-gray-600">Dahak bercampur darah, menandakan peradangan paru yang lanjut.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl border border-red-100">
              <span class="text-red-700 font-bold block mb-1">Keringat Malam</span>
              <p class="text-sm text-gray-600">Berkeringat banyak di malam hari (baju basah) tanpa melakukan aktivitas fisik.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl border border-red-100">
              <span class="text-red-700 font-bold block mb-1">Nyeri Dada</span>
              <p class="text-sm text-gray-600">Dapat disertai sesak napas.</p>
            </div>
          </div>
        `
      },
      {
        id: "1-4",
        title: "Kelompok Risiko Tinggi",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Siapa yang Paling Berisiko?</h3>
          <p class="mb-4 text-lg text-gray-700">Meskipun semua orang bisa tertular, kelompok berikut memiliki risiko tertinggi untuk terinfeksi dan jatuh sakit:</p>
          
          <ul class="list-decimal ml-6 space-y-3 mb-6 text-gray-700 text-lg">
            <li><strong>Kontak Serumah:</strong> Anak atau orang yang tinggal satu rumah dengan pasien TBC paru aktif.</li>
            <li><strong>Balita (Usia < 5 tahun):</strong> Sistem kekebalan tubuh balita belum sempurna, sehingga jika terinfeksi mudah menyebar menjadi TBC berat (seperti TBC otak).</li>
            <li><strong>Imunitas Rendah (Imunokompromais):</strong>
                <ul class="list-disc ml-6 mt-1 text-gray-600">
                    <li>Anak dengan HIV/AIDS.</li>
                    <li>Gizi buruk atau malnutrisi berat.</li>
                    <li>Penderita Diabetes Melitus.</li>
                    <li>Pasien yang mengonsumsi obat steroid jangka panjang.</li>
                </ul>
            </li>
          </ul>
          
          <div class="bg-teal-600 text-white p-6 rounded-xl mt-8">
            <p class="font-bold text-lg mb-2">Ringkasan Materi:</p>
            <p>TBC disebabkan bakteri dan menular lewat udara. Waspadai gejala batuk lama (>2 minggu) dan demam tanpa sebab jelas, terutama pada anak yang memiliki kontak erat dengan pasien TBC.</p>
          </div>
        `
      }
    ],
    quiz: [
      { 
        question: "Apa penyebab utama penyakit Tuberkulosis (TBC)?", 
        options: ["Faktor keturunan/genetik", "Bakteri Mycobacterium tuberculosis", "Guna-guna atau santet", "Keracunan makanan basi"], 
        correct: 1 
      },
      { 
        question: "Bagaimana cara penularan kuman TBC yang paling utama?", 
        options: ["Melalui tukar menukar alat makan", "Melalui gigitan nyamuk", "Melalui udara (percikan dahak/droplet)", "Melalui sentuhan kulit"], 
        correct: 2 
      },
      { 
        question: "Manakah yang BUKAN merupakan gejala umum TBC pada anak?", 
        options: ["Batuk lama lebih dari 2 minggu", "Demam tinggi mendadak seperti demam berdarah", "Berat badan turun atau tidak naik", "Anak tampak lesu dan kurang aktif"], 
        correct: 1 
      },
      { 
        question: "Kelompok mana yang paling berisiko mengalami sakit TBC berat?", 
        options: ["Anak usia sekolah (SD)", "Remaja atletis", "Balita (< 5 tahun) dan anak dengan gizi buruk", "Orang dewasa sehat"], 
        correct: 2 
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Perisai Diri (Pencegahan & Pengendalian)",
    description: "Strategi pencegahan TBC: TPT, Vaksinasi, dan Pengendalian Infeksi.",
    modules: [
      {
        id: "2-1",
        title: "Pencegahan dengan TPT & Vaksinasi",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">1. Vaksinasi BCG</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Vaksin BCG (<em>Bacille Calmette-Guerin</em>) berisi bakteri yang dilemahkan. Vaksin ini sangat efektif untuk <strong>mencegah TBC berat</strong> pada anak, seperti TBC Meningitis (radang selaput otak) dan TBC Milier.
          </p>
          <ul class="list-disc ml-6 space-y-1 mb-6 text-gray-700">
            <li>Wajib diberikan pada bayi usia <strong>0-1 bulan</strong> (segera setelah lahir).</li>
            <li>Disuntikkan di lengan kanan atas.</li>
          </ul>

          <h3 class="text-2xl font-bold text-teal-800 mb-4">2. Terapi Pencegahan TBC (TPT)</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            TPT adalah pemberian obat khusus kepada orang sehat yang berisiko tinggi (sudah terinfeksi kuman TBC tapi belum sakit). Tujuannya adalah membunuh kuman TBC di dalam tubuh agar tidak berkembang menjadi penyakit TBC aktif di kemudian hari.
          </p>
          <div class="bg-green-50 p-5 rounded-xl border border-green-200">
            <p class="font-bold text-green-900 mb-2">Prioritas Penerima TPT:</p>
            <ul class="list-disc ml-5 text-green-800">
              <li>Anak usia di bawah 5 tahun yang tinggal serumah dengan pasien TBC.</li>
              <li>Anak dengan HIV/AIDS (ODHIV).</li>
              <li>Anggota keluarga lain yang kontak erat (setelah dipastikan tidak sakit TBC melalui pemeriksaan).</li>
            </ul>
          </div>
        `
      },
      {
        id: "2-2",
        title: "Pengendalian Lingkungan & Ventilasi",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Pentingnya Ventilasi Udara</h3>
          <p class="mb-4 text-lg text-gray-700 leading-relaxed">
            Kuman TBC dapat bertahan hidup di udara dalam ruangan yang tertutup, gelap, dan lembab selama beberapa jam. Oleh karena itu, pengaturan sirkulasi udara (ventilasi) sangat penting untuk mengurangi risiko penularan.
          </p>
          
          <h4 class="font-bold text-gray-800 text-lg mb-2">Langkah Pencegahan di Sekolah & Rumah:</h4>
          <ul class="list-disc ml-6 space-y-3 text-lg text-gray-700">
            <li><strong>Buka Jendela & Pintu:</strong> Pastikan udara segar dapat masuk dan udara dari dalam ruangan dapat keluar (ventilasi silang). Ini akan "mengencerkan" konsentrasi kuman di udara.</li>
            <li><strong>Biarkan Matahari Masuk:</strong> Sinar matahari mengandung ultraviolet (UV) yang dapat membunuh bakteri TBC secara alami.</li>
            <li><strong>Hindari Kepadatan:</strong> Usahakan agar ruangan tidak terlalu penuh sesak oleh orang.</li>
          </ul>
        `
      },
      {
        id: "2-3",
        title: "Etika Batuk & Higiene Respirasi",
        videoUrl: "https://www.youtube.com/embed/pKr2R7_I9w8?si=0ALkXy8k4fcGPLZj", //Video Kie-Etika Batuk dan Bersin Yang Benar
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Etika Batuk yang Benar</h3>
          <p class="mb-4 text-lg text-gray-700">
            Untuk memutus rantai penularan, setiap orang (baik yang sakit maupun sehat) wajib menerapkan etika batuk yang benar:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="border-2 border-teal-100 rounded-xl p-4 text-center">
              <span class="text-4xl mb-2 block">💪</span>
              <p class="font-bold text-gray-800">Gunakan Lengan Atas</p>
              <p class="text-sm text-gray-500">Tutup hidung dan mulut dengan lengan atas bagian dalam saat batuk/bersin. Jangan gunakan telapak tangan!</p>
            </div>
            <div class="border-2 border-teal-100 rounded-xl p-4 text-center">
              <span class="text-4xl mb-2 block">🤧</span>
              <p class="font-bold text-gray-800">Gunakan Tisu</p>
              <p class="text-sm text-gray-500">Tutup mulut dengan tisu, lalu segera buang tisu kotor ke tempat sampah tertutup.</p>
            </div>
            <div class="border-2 border-teal-100 rounded-xl p-4 text-center">
              <span class="text-4xl mb-2 block">😷</span>
              <p class="font-bold text-gray-800">Pakai Masker</p>
              <p class="text-sm text-gray-500">Wajib menggunakan masker jika sedang menderita batuk atau flu.</p>
            </div>
            <div class="border-2 border-teal-100 rounded-xl p-4 text-center">
              <span class="text-4xl mb-2 block">🧼</span>
              <p class="font-bold text-gray-800">Cuci Tangan</p>
              <p class="text-sm text-gray-500">Segera cuci tangan dengan sabun dan air mengalir setelah batuk atau bersin.</p>
            </div>
          </div>
        `
      },
      {
        id: "2-4",
        title: "Strategi Pengobatan: TOSS TBC",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-4">Gerakan TOSS TBC</h3>
          <p class="mb-4 text-lg text-gray-700">
            Pemerintah Indonesia menggalakkan gerakan <strong>TOSS TBC</strong> sebagai kunci keberhasilan penanggulangan TBC. TOSS adalah singkatan dari:
          </p>
          
          <ul class="space-y-4 text-lg text-gray-700">
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white px-3 py-1 rounded font-bold">T</span>
              <div>
                <strong>Temukan:</strong> Kenali gejala TBC di lingkungan sekitar secara aktif. Ajak orang yang batuk lebih dari 2 minggu untuk periksa ke Puskesmas.
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white px-3 py-1 rounded font-bold">O</span>
              <div>
                <strong>Obati:</strong> Segera obati pasien TBC dengan tepat. Obat TBC disediakan gratis oleh pemerintah di fasilitas kesehatan.
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white px-3 py-1 rounded font-bold">S</span>
              <div>
                <strong>Sampai Sembuh:</strong> Pengobatan harus dilakukan tuntas sampai sembuh. Jangan berhenti minum obat sendiri meskipun gejala sudah hilang.
              </div>
            </li>
          </ul>

          <div class="mt-8 bg-gray-100 p-6 rounded-xl">
            <h4 class="font-bold text-gray-800 mb-2">Prinsip Pengobatan:</h4>
            <p class="text-gray-700">Pengobatan TBC membutuhkan waktu minimal <strong>6 bulan</strong>. Obat harus diminum setiap hari tanpa putus untuk mencegah bakteri menjadi kebal obat (Resistensi Obat).</p>
          </div>
        `
      }
    ],
    quiz: [
      { 
        question: "Apa kepanjangan dari slogan TOSS TBC?", 
        options: ["Tolong Orang Sakit Segera", "Temukan Obat Sampai Sembuh", "Tidak Obat Susah Sembuh", "Tetap Optimis Selalu Sehat"], 
        correct: 1 
      },
      { 
        question: "Mengapa ventilasi udara (jendela terbuka) penting untuk pencegahan TBC?", 
        options: ["Agar ruangan menjadi dingin", "Untuk mengurangi konsentrasi kuman di udara & masuk sinar matahari", "Agar debu bisa masuk", "Supaya hemat listrik"], 
        correct: 1 
      },
      { 
        question: "Manakah cara etika batuk yang BENAR?", 
        options: ["Menutup mulut dengan telapak tangan", "Batuk diarahkan ke teman", "Menutup mulut dengan lengan atas bagian dalam atau tisu", "Tidak perlu menutup mulut"], 
        correct: 2 
      },
      { 
        question: "Apa tujuan utama pemberian TPT (Terapi Pencegahan TBC)?", 
        options: ["Menyembuhkan TBC aktif", "Mencegah infeksi laten berkembang menjadi sakit TBC aktif", "Menggantikan vaksin BCG", "Mengobati batuk pilek biasa"], 
        correct: 1 
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: Ringkasan & Evaluasi Akhir",
    description: "Ujian komprehensif untuk menguji pemahaman seluruh materi TBC.",
    modules: [
      {
        id: "3-1",
        title: "Rangkuman Materi TBC",
        videoUrl: "",
        content: `
          <h3 class="text-2xl font-bold text-teal-800 mb-6">Poin Kunci Pembelajaran</h3>
          
          <div class="space-y-6 text-lg text-gray-700">
            <div class="border-l-4 border-teal-500 pl-4">
              <h4 class="font-bold text-teal-900">1. Penyebab & Penularan</h4>
              <p>TBC disebabkan oleh bakteri <em>Mycobacterium tuberculosis</em>, bukan penyakit keturunan. Menular lewat udara (percikan dahak), bukan lewat alat makan.</p>
            </div>

            <div class="border-l-4 border-teal-500 pl-4">
              <h4 class="font-bold text-teal-900">2. Gejala Waspada</h4>
              <p>Waspadai batuk lebih dari 2 minggu, demam lama, berat badan turun drastis, dan keringat malam. Pada anak, gejala seringkali berupa lesu dan gagal tumbuh.</p>
            </div>

            <div class="border-l-4 border-teal-500 pl-4">
              <h4 class="font-bold text-teal-900">3. Pencegahan Utama</h4>
              <p>Vaksinasi BCG untuk bayi, TPT untuk kontak serumah, menjaga ventilasi udara yang baik, serta menerapkan etika batuk.</p>
            </div>

            <div class="border-l-4 border-teal-500 pl-4">
              <h4 class="font-bold text-teal-900">4. Kunci Kesembuhan</h4>
              <p>Pengobatan TBC wajib tuntas minimal <strong>6 bulan</strong> tanpa putus. Disiplin minum obat adalah kunci utama kesembuhan.</p>
            </div>
          </div>

          <div class="mt-10 text-center">
            <p class="text-xl font-bold text-orange-600 mb-2">Siap untuk Ujian Akhir?</p>
            <p class="text-gray-600">Evaluasi ini terdiri dari 20 pertanyaan acak dari seluruh materi. Pastikan Anda siap sebelum memulai!</p>
          </div>
        `
      }
    ],
    quiz: [
      // --- MATERI PENYEBAB & PENULARAN ---
      { 
        question: "Apa nama bakteri penyebab penyakit Tuberkulosis?", 
        options: ["Escherichia coli", "Mycobacterium tuberculosis", "Salmonella typhi", "Streptococcus pneumoniae"], 
        correct: 1 
      },
      { 
        question: "Bagaimana cara penularan utama kuman TBC?", 
        options: ["Melalui makanan basi", "Melalui gigitan serangga", "Melalui percikan dahak di udara (droplet)", "Melalui sentuhan kulit"], 
        correct: 2 
      },
      { 
        question: "Manakah mitos yang SALAH tentang TBC?", 
        options: ["TBC disebabkan oleh bakteri", "TBC bisa disembuhkan", "TBC adalah penyakit keturunan/kutukan", "TBC menular lewat udara"], 
        correct: 2 
      },
      { 
        question: "Apakah TBC bisa menular lewat piring atau gelas bekas pasien?", 
        options: ["Ya, sangat menular", "Tidak menular lewat alat makan", "Mungkin saja", "Hanya jika tidak dicuci"], 
        correct: 1 
      },
      
      // --- MATERI GEJALA KLINIS ---
      { 
        question: "Berapa lama durasi batuk yang dicurigai sebagai gejala TBC?", 
        options: ["1-2 hari", "Kurang dari 1 minggu", "Lebih dari 2 minggu", "Hanya saat malam hari"], 
        correct: 2 
      },
      { 
        question: "Apa gejala khas TBC pada anak yang sering terlewatkan?", 
        options: ["Batuk berdarah hebat", "Berat badan tidak naik atau turun drastis (Gagal Tumbuh)", "Sakit kepala migrain", "Gatal-gatal di seluruh tubuh"], 
        correct: 1 
      },
      { 
        question: "Gejala 'keringat malam' pada pasien TBC terjadi saat...", 
        options: ["Berolahraga berat di malam hari", "Tidur malam tanpa melakukan aktivitas fisik", "Memakai selimut tebal", "Cuaca sedang panas"], 
        correct: 1 
      },
      { 
        question: "Batuk berdarah (hemoptisis) lebih sering ditemukan pada kelompok usia mana?", 
        options: ["Bayi baru lahir", "Balita", "Remaja dan Dewasa", "Semua umur sama"], 
        correct: 2 
      },

      // --- MATERI FAKTOR RISIKO ---
      { 
        question: "Siapa kelompok anak yang paling berisiko tertular TBC berat?", 
        options: ["Anak usia sekolah (SD)", "Anak balita (< 5 tahun) dan imunokompromais", "Remaja atletis", "Bayi yang sudah divaksin lengkap"], 
        correct: 1 
      },
      { 
        question: "Penyakit penyerta apa yang memperparah risiko sakit TBC?", 
        options: ["HIV/AIDS dan Diabetes Melitus", "Panu dan Kurap", "Sakit gigi berlubang", "Maag dan Asam Lambung"], 
        correct: 0 
      },

      // --- MATERI PENCEGAHAN ---
      { 
        question: "Vaksin apa yang diberikan untuk mencegah TBC berat pada bayi?", 
        options: ["Vaksin Polio", "Vaksin Hepatitis B", "Vaksin BCG", "Vaksin Campak"], 
        correct: 2 
      },
      { 
        question: "Kapan waktu ideal pemberian vaksin BCG?", 
        options: ["Usia 0-1 bulan (segera setelah lahir)", "Saat masuk sekolah TK", "Saat usia 17 tahun", "Saat sudah sakit TBC"], 
        correct: 0 
      },
      { 
        question: "Apa tujuan pemberian Terapi Pencegahan TBC (TPT)?", 
        options: ["Mengobati pasien yang sudah sakit parah", "Mencegah orang sehat yang terinfeksi agar tidak jatuh sakit", "Menggantikan fungsi makanan", "Menyembuhkan batuk pilek biasa"], 
        correct: 1 
      },
      { 
        question: "Mengapa membuka jendela rumah/kelas itu penting?", 
        options: ["Supaya bisa melihat pemandangan", "Agar sirkulasi udara lancar dan sinar matahari masuk membunuh kuman", "Supaya debu jalanan masuk", "Agar ruangan menjadi dingin"], 
        correct: 1 
      },

      // --- MATERI ETIKA BATUK & PENGOBATAN ---
      { 
        question: "Bagaimana cara menutup mulut saat batuk yang BENAR?", 
        options: ["Menggunakan telapak tangan kosong", "Tidak perlu ditutup", "Menggunakan lengan atas bagian dalam atau tisu", "Menggunakan kerah baju teman"], 
        correct: 2 
      },
      { 
        question: "Apa kepanjangan dari slogan TOSS TBC?", 
        options: ["Tolong Orang Sakit Segera", "Temukan Obat Sampai Sembuh", "Tidak Obat Susah Sembuh", "Tetap Optimis Selalu Sehat"], 
        correct: 1 
      },
      { 
        question: "Berapa lama minimal pengobatan TBC harus dijalani?", 
        options: ["3 hari", "1 minggu", "1 bulan", "6 bulan"], 
        correct: 3 
      },
      { 
        question: "Apa akibatnya jika pasien berhenti minum obat TBC sebelum waktunya?", 
        options: ["Langsung sembuh total", "Kuman menjadi kebal obat (Resistensi) dan lebih susah diobati", "Tidak ada akibat apa-apa", "Pasien menjadi lebih sehat"], 
        correct: 1 
      },
      { 
        question: "Apa yang harus dilakukan jika ada anggota keluarga serumah yang sakit TBC?", 
        options: ["Mengucilkan dan memisahkan alat makannya selamanya", "Mendukung pengobatannya dan membawa seluruh kontak serumah untuk diperiksa", "Menyembunyikan penyakitnya dari tetangga", "Membelikan obat batuk warung saja"], 
        correct: 1 
      },
      { 
        question: "Apakah TBC bisa disembuhkan?", 
        options: ["Tidak bisa, penyakit seumur hidup", "Bisa, dengan pengobatan rutin dan tuntas", "Bisa sembuh sendiri tanpa obat", "Hanya bisa diredakan gejalanya"], 
        correct: 1 
      }
    ]
  }
];