class n{constructor(e){this.container=e}render(){const e=parseInt(localStorage.getItem("userLevel"))||1,t=localStorage.getItem("tbcCourseCompleted")==="true",l=3;let a=0,s="Mulai Pembelajaran Sekarang";t?(a=100,s="Belajar Lagi"):(a=Math.round((e-1)/l*100),a>0&&(s="Lanjutkan Belajar")),this.container.innerHTML=`
      <section class="max-w-6xl mx-auto p-6 animate-fade-in">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-[color:var(--color-darkblue)] mb-3">Pembelajaran UKS</h1>
          <p class="text-lg opacity-70">Tingkatkan pengetahuan kesehatanmu untuk sekolah yang lebih sehat.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group-card">
            
            <div class="md:w-1/2 relative group">
              <img src="/materi-tbc.png" alt="Edukasi Tuberkulosis" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute top-4 left-4">
                <span class="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Kelas Gratis
                </span>
              </div>
              ${t?`
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                
              </div>`:""}
            </div>

            <div class="md:w-1/2 p-8 flex flex-col justify-center">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-[color:var(--color-peach)] font-bold text-sm tracking-widest uppercase">Materi Utama</span>
                <div class="h-1 w-12 bg-[color:var(--color-peach)]"></div>
              </div>
              
              <h2 class="text-3xl font-bold text-[color:var(--color-darkblue)] mb-2">Edukasi Pencegahan Tuberkulosis (TBC)</h2>
              
              <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                Pelajari apa itu TBC, cara penularan, serta langkah efektif melindungi diri dan teman-temanmu sesuai standar Kemenkes RI.
              </p>

              <div class="mb-8">
                <div class="flex justify-between items-end mb-2">
                    <span class="text-sm font-bold text-gray-500 uppercase tracking-wide">Status Belajar</span>
                    <span class="text-lg font-black text-teal-600">${a}%</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200">
                    <div class="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(20,184,166,0.5)]" 
                         style="width: ${a}%"></div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">
                    ${a===0?"Belum dimulai":a===100?"Semua materi telah diselesaikan!":"Sedang berjalan..."}
                </p>
              </div>
              <div class="space-y-3 mb-8 border-t border-gray-100 pt-4">
                <div class="flex items-center gap-3 text-sm text-gray-500">
                  <span class="text-[color:var(--color-peach)]">✔</span> Terbuka untuk seluruh pengguna 
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-500">
                  <span class="text-[color:var(--color-peach)]">✔</span> Materi interaktif & Video
                </div>
              </div>

              <a href="/learn/tbc-detail" data-link class="btn-primary w-full text-center py-4 rounded-2xl shadow-lg shadow-teal-900/20 transform hover:-translate-y-1 transition-all font-bold text-lg flex items-center justify-center gap-2">
                ${t?"<span>🎓</span>":"<span>🚀</span>"} 
                ${s}
              </a>
            </div>
          </div>
          
          <p class="text-center mt-8 text-sm text-gray-400 italic">
            *Materi ini disusun berdasarkan Tata Laksana Tuberkulosis Anak dan Remaja Berstandar Kemenkes RI.
          </p>
        </div>
      </section>
    `}}export{n as default};
