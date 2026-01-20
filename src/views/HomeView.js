export default class HomeView {
  constructor() {
    this.navbarContainer = document.getElementById("navbar");
    this.footerContainer = document.getElementById("footer");
    this.container = document.querySelector("main");
  }

  renderNavbar(navbarElement) {
    if (this.navbarContainer) {
      this.navbarContainer.innerHTML = "";
      this.navbarContainer.appendChild(navbarElement);
    }
  }

  renderFooter(footerElement) {
    if (this.footerContainer) {
      this.footerContainer.innerHTML = "";
      this.footerContainer.appendChild(footerElement);
    }
  }

  renderContent() {
    const isCompleted = localStorage.getItem("tbcCourseCompleted") === "true";

    let diagnosisButtonHero;
    let diagnosisButtonBottom;

    if (isCompleted) {
        // Tombol Terbuka (Link Biasa)
        diagnosisButtonHero = `<a href="/diagnosis" data-link class="btn-primary text-center px-8 shadow-lg">Mulai Cek Gejala</a>`;
        diagnosisButtonBottom = `<a href="/diagnosis" data-link class="btn-primary text-lg px-10 py-3 shadow-xl">Mulai Diagnosis Sekarang</a>`;
    } else {
        // Tombol Terkunci (Menggunakan SweetAlert)
        const sweetAlertAction = `
            Swal.fire({
                title: 'Akses Dibatasi',
                text: 'Silakan selesaikan seluruh materi pembelajaran di menu [Pelajari Materi TBC] hingga tuntas untuk membuka fitur ini.',
                icon: 'info',
                confirmButtonText: 'Siap Belajar',
                confirmButtonColor: '#0d9488'
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.href = '/learn';
                }
            });
        `;
        
        const safeAction = sweetAlertAction.replace(/\n/g, '');

        diagnosisButtonHero = `
            <button onclick="${safeAction}" 
                    class="bg-gray-200 text-gray-500 px-8 py-3 rounded-xl font-bold cursor-not-allowed border-2 border-gray-300 shadow-sm flex items-center justify-center gap-2">
                🔒 Diagnosis Terkunci
            </button>`;
        
        diagnosisButtonBottom = `
            <button onclick="${safeAction}" 
                    class="bg-gray-200 text-gray-500 text-lg px-10 py-3 rounded-xl font-bold cursor-not-allowed border-2 border-gray-300 shadow-sm flex items-center justify-center gap-2">
                🔒 Diagnosis Terkunci
            </button>`;
    }

    this.container.innerHTML = `
      <section class="w-full max-w-6xl mx-auto px-4">
        <div class="card mb-12 bg-gradient-to-br from-white to-[color:var(--color-lightblue)]">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1 flex flex-col justify-center gap-6">
              <div class="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-bold w-fit">
                LMS UKS SMP MUHAMMADIYAH 36
              </div>
              <h1 class="text-4xl md:text-5xl font-bold text-[color:var(--color-darkblue)] leading-tight">
                Sehat Paru-Paru, <br />
                <span class="text-[color:var(--color-peach)]">Prestasi Menanti</span>
              </h1>
              <p class="text-lg text-[color:var(--color-darkblue)] leading-relaxed opacity-80">
                Selamat datang di platform edukasi digital Usaha Kesehatan Sekolah (UKS). Mari kenali gejala Tuberkulosis (TBC) lebih dini dan jaga kesehatan lingkungan sekolah kita bersama.
                ${!isCompleted ? '<br><span class="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded mt-2 inline-block">⚠️ Selesaikan materi belajar untuk membuka diagnosis</span>' : ''}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                ${diagnosisButtonHero}
                <a href="/learn" data-link class="border-2 border-[color:var(--color-peach)] text-[color:var(--color-peach)] px-8 py-3 rounded-xl font-bold hover:bg-[color:var(--color-peach)] hover:text-white transition-all text-center">Pelajari Materi TBC</a>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center relative">
              <img src="/uks-home.png" alt="Logo UKS Muhammadiyah 36" class="h-64 w-64 object-contain transform hover:scale-105 transition-transform duration-300 mb-10" />
              <div class="absolute bottom-0 right-0 md:static md:mt-4 text-right">
                <span class="text-base md:text-lg text-[color:var(--color-darkblue)] font-medium opacity-60">
                  Mitra peduli kesehatan pernapasan siswa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="features" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${this.featureCard(
            "Skrining TBC",
            "Gunakan sistem cerdas untuk menganalisis gejala awal TBC secara mandiri.",
            `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`
          )}

          ${this.featureCard(
            "Modul Pembelajaran",
            "Akses materi interaktif tentang pencegahan TBC yang mudah dipahami.",
            `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`
          )}

          ${this.featureCard(
            "Rekomendasi Hasil",
            "Dapatkan hasil analisis dan saran rujukan ke Puskesmas atau Rumah Sakit terdekat.",
            `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />`
          )}
        </div>

        <div class="my-16">
          <h2 class="text-3xl font-bold text-[color:var(--color-darkblue)] text-center mb-8">Cara Menggunakan Layanan</h2>
          <div class="grid md:grid-cols-3 gap-8">
            ${this.howItWorksStep(
              "Pilih Menu Diagnosis",
              "Klik tombol cek gejala untuk memulai proses skrining TBC."
            )}
            ${this.howItWorksStep(
              "Isi Data Gejala",
              "Berikan informasi sejujur mungkin mengenai kondisi batuk atau sesak napas yang dirasakan."
            )}
            ${this.howItWorksStep(
              "Dapatkan Rekomendasi",
              "Sistem akan memberikan hasil awal dan langkah medis yang perlu dilakukan."
            )}
          </div>
        </div>

        <div class="my-16 bg-[color:var(--color-lightblue)] rounded-xl p-8 shadow-inner border-l-8 border-[color:var(--color-peach)]">
          <h2 class="text-2xl font-bold text-[color:var(--color-darkblue)] mb-4">Pesan Dari Tim UKS</h2>
          <div class="flex flex-col md:flex-row gap-6 justify-center italic">
            ${this.testimonialCard(
              "Dr. Andi (Pembina UKS)",
              "Kesehatan kalian adalah prioritas. Jangan takut untuk melapor jika merasa ada gejala batuk lebih dari 2 minggu."
            )}
            ${this.testimonialCard(
              "Tim PMR Sekolah",
              "Mari kita putus rantai penyebaran TBC dengan etika batuk yang benar dan menjaga kebersihan kelas."
            )}
          </div>
        </div>

        <div class="my-16 text-center">
          <h2 class="text-2xl font-bold text-[color:var(--color-darkblue)] mb-4">Ingin tahu kondisi kesehatanmu?</h2>
          <p class="text-[color:var(--color-darkblue)] opacity-70 mb-6">Cek gejala secara mandiri, cepat, dan rahasia.</p>
          ${diagnosisButtonBottom}
        </div>
      </section>
    `;
  }

  featureCard(title, desc, iconPath) {
    return `
      <div class="card hover:-translate-y-2 transition-transform duration-300">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full bg-[color:var(--color-peach)] flex items-center justify-center shadow-md text-white">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              ${iconPath}
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[color:var(--color-darkblue)]">${title}</h3>
          <p class="text-sm text-[color:var(--color-darkblue)] opacity-70">${desc}</p>
        </div>
      </div>
    `;
  }

  howItWorksStep(title, desc) {
    return `
      <div class="card p-6 flex flex-col gap-4 items-start border-l-4 border-[color:var(--color-peach)]">
        <div class="w-10 h-10 rounded-full bg-[color:var(--color-darkblue)] flex items-center justify-center text-white font-bold text-lg shadow">
          ✓
        </div>
        <h3 class="text-lg font-semibold text-[color:var(--color-darkblue)]">${title}</h3>
        <p class="text-sm text-[color:var(--color-darkblue)] opacity-70">${desc}</p>
      </div>
    `;
  }

  testimonialCard(name, comment) {
    return `
      <div class="bg-white rounded-lg p-6 shadow-md w-full md:w-1/2">
        <p class="text-sm text-[color:var(--color-darkblue)] leading-relaxed">"${comment}"</p>
        <p class="mt-4 text-right text-sm font-bold text-[color:var(--color-peach)]">— ${name}</p>
      </div>
    `;
  }

  bindStartCheckup(handler) {
    const btn = document.querySelector('a[data-link][href="/diagnosis"]');
    if (btn) btn.addEventListener("click", handler);
  }

  bindLearnMore() {
    const btn = document.querySelector('a[data-link][href="/#features"]');
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector("#features");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }
}