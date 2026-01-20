import { courseData } from "./CourseData.js";

export default class CourseDashboard {
  constructor(container) {
    this.container = container;
  }

  render() {
    const currentLevel = parseInt(localStorage.getItem("userLevel")) || 1;

    this.container.innerHTML = `
      <div class="max-w-5xl mx-auto p-6 animate-fade-in pb-20">
        
        <div class="flex justify-between items-center mb-8">
            <a href="/learn" data-link class="group flex items-center gap-3 text-gray-500 hover:text-teal-700 transition-all">
                <div class="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:bg-teal-50 group-hover:border-teal-200 transition-all">
                    <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </div>
                <span class="font-bold text-lg group-hover:underline decoration-teal-500 underline-offset-4">
                    Kembali ke Menu Utama
                </span>
            </a>

            <a href="/learn/history" data-link class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-teal-600 font-bold hover:bg-teal-50 hover:border-teal-200 shadow-sm transition-all text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Riwayat Kuis
            </a>
        </div>

        <div class="mb-12 text-center">
            <h1 class="text-4xl font-black text-teal-900 mb-3">Kurikulum TBC UKS</h1>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">
                Selesaikan setiap chapter secara berurutan untuk membuka materi selanjutnya dan mendapatkan sertifikat.
            </p>
        </div>
        
        <div class="space-y-6">
          ${courseData.map((chapter) => {
            const isLocked = chapter.id > currentLevel;
            const isCompleted = chapter.id < currentLevel;
            
            // Style Logika
            let cardStyle = isLocked 
                ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed" 
                : "border-teal-100 bg-white hover:border-teal-300 hover:shadow-xl transform hover:-translate-y-1";
            
            let iconStyle = isLocked 
                ? "bg-gray-200 text-gray-400" 
                : (isCompleted ? "bg-green-100 text-green-600" : "bg-teal-100 text-teal-600");

            let btnHtml = isLocked 
                ? `<button disabled class="bg-gray-200 text-gray-400 px-6 py-2 rounded-xl font-bold cursor-not-allowed text-sm">Terkunci</button>`
                : `<a href="/learn/chapter/${chapter.id}" data-link class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition-all inline-block">
                    ${isCompleted ? 'Ulangi Materi' : 'Mulai'}
                   </a>`;

            return `
              <div class="relative p-8 rounded-3xl shadow-sm border-2 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ${cardStyle}">
                
                <div class="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 text-2xl font-black shadow-inner ${iconStyle}">
                  ${isCompleted 
                    ? `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>` 
                    : (isLocked ? `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>` : chapter.id)
                  }
                </div>

                <div class="flex-1 text-center md:text-left">
                  <h3 class="text-2xl font-bold text-gray-800 mb-2">${chapter.title}</h3>
                  <p class="text-gray-500 leading-relaxed">${chapter.description}</p>
                </div>

                <div>${btnHtml}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
}