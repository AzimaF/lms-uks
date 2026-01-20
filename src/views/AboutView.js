export default class AboutView {
  constructor() {
    this.container = document.querySelector("main");
  }

  renderContent() {
    this.container.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center min-h-[80vh] bg-[color:var(--color-lightergray)] px-2 py-8">
          <div class="max-w-3xl w-full mx-auto">
            <div class="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-[color:var(--color-border)] relative overflow-hidden" style="animation: fadeInUp 0.6s ease-out both;">
              
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
              
              <img src="/uks-icon.png" alt="Logo UKS Muhammadiyah 36" class="h-24 w-24 mb-2 drop-shadow-md transform hover:scale-110 transition-transform duration-500" />
              
              <div class="text-center">
                <h1 class="text-3xl font-extrabold text-[color:var(--color-darkblue)] mb-2">LMS UKS SMP Muhammadiyah 36</h1>
                <p class="text-teal-600 font-bold tracking-wider uppercase text-sm">Teknologi untuk Sekolah Sehat</p>
              </div>
              
              <div class="text-[color:var(--color-darkblue)] text-lg opacity-90 text-justify space-y-6 leading-relaxed px-2 md:px-4">
                
                <p>
                  <strong>LMS UKS Muhammadiyah 36</strong> adalah platform digital kesehatan yang dirancang khusus untuk mendukung program <b>Sekolah Sehat</b>. Fokus utama kami adalah memberikan edukasi komprehensif dan deteksi dini terhadap penyakit Tuberkulosis (TBC) bagi seluruh siswa dan warga sekolah.
                </p>

                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm relative overflow-hidden">
                  <div class="flex gap-4 items-start">
                    <div>
                        <h4 class="font-bold text-blue-900 mb-1">Misi Nasional</h4>
                        <p class="text-blue-800 text-base">
                            Platform ini hadir sebagai wujud nyata dukungan sekolah dalam membantu <b>Kementerian Kesehatan Republik Indonesia</b> membasmi TBC. Kami berkomitmen mengambil peran aktif memutus mata rantai penularan sejak dini demi mewujudkan cita-cita <b>Indonesia Bebas Tuberkulosis pada tahun 2050</b>.
                        </p>
                    </div>
                  </div>
                </div>

                <p>
                  Melalui pemanfaatan teknologi kecerdasan buatan (AI) untuk analisis gejala awal, platform ini membantu pengguna memahami kondisi kesehatan paru-paru mereka secara cepat, mandiri, dan rahasia. Kami percaya bahwa deteksi sedini mungkin adalah kunci utama pencegahan.
                </p>

                <p>
                  Selain fitur skrining, platform ini juga berfungsi sebagai pusat pembelajaran digital yang menyediakan modul kesehatan interaktif. UKS Muhammadiyah 36 berkomitmen untuk menjadi asisten kesehatan digital terbaik demi mewujudkan generasi pelajar yang sehat, cerdas, dan bebas TBC.
                </p>
              </div>

              <div class="mt-8 pt-8 border-t border-gray-100 w-full text-center">
                <p class="text-sm font-bold text-[color:var(--color-peach)] uppercase tracking-widest mb-1">
                  Bersama Mewujudkan Sekolah Bebas TBC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}