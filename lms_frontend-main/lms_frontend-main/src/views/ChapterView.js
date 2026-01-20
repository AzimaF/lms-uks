import { courseData } from "./CourseData.js";

export default class ChapterView {
  constructor(container, chapterId) {
    this.container = container;
    this.chapterId = parseInt(chapterId);
    this.data = courseData.find(c => c.id === this.chapterId);
    
    // 1. LOGIKA PENENTUAN STATUS UNLOCK
    const userLevel = parseInt(localStorage.getItem("userLevel")) || 1;
    
    // Ambil progres spesifik chapter ini dari memori (jika ada)
    const savedProgress = parseInt(localStorage.getItem(`progress_chapter_${this.chapterId}`)) || 0;

    // KONDISI FULL UNLOCK:
    // Jika User Level lebih tinggi dari Chapter ini (artinya sudah lulus chapter ini)
    // ATAU jika User pernah mencapai modul terakhir di chapter ini.
    const isChapterCompleted = userLevel > this.chapterId;

    if (isChapterCompleted) {
        // Jika sudah tamat, buka semua (index maksimal = jumlah modul - 1)
        this.maxUnlockedIndex = this.data.modules.length - 1;
    } else {
        // Jika belum tamat, gunakan progres terakhir yang tersimpan
        this.maxUnlockedIndex = savedProgress;
    }

    // Mulai buka dari modul terakhir yang diakses (atau modul 0 jika baru)
    // Agar user tidak perlu klik-klik next dari awal lagi
    this.currentModuleIndex = isChapterCompleted ? 0 : savedProgress;
  }

  render() {
    if (!this.data) {
        this.container.innerHTML = `<div class="p-10 text-center text-red-500 font-bold">Materi tidak ditemukan.</div>`;
        return;
    }

    this.renderLayout();
    this.loadModule(this.currentModuleIndex);
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="w-full bg-white border-b border-gray-200 sticky top-0 z-30 px-4 md:px-8 py-3 shadow-sm flex items-center justify-between">
        <div class="flex items-center">
            <a href="/learn/tbc-detail" data-link class="group inline-flex items-center gap-3 text-gray-600 hover:text-teal-700 transition-colors mr-6 pr-6 border-r border-gray-300">
                <div class="p-2 rounded-full group-hover:bg-gray-100 transition-all">
                    <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </div>
            </a>
            
            <h1 class="text-lg font-bold text-gray-800 truncate max-w-xs md:max-w-md">
                ${this.data.title}
            </h1>
        </div>
        
        <div class="hidden md:block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Progres Tersimpan Otomatis
        </div>
      </div>

      <div class="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        
        <aside class="w-full md:w-80 bg-gray-50 border-r border-gray-200 flex-shrink-0 md:h-[calc(100vh-64px)] md:sticky md:top-[64px] overflow-y-auto">
            <div class="p-6">
                <h2 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Daftar Modul</h2>
                <div class="space-y-2" id="module-list"></div>
            </div>
        </aside>

        <main class="flex-1 bg-white p-6 md:p-12 pb-24 animate-fade-in relative">
            <div id="module-content" class="max-w-3xl mx-auto"></div>

            <div class="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <button id="btn-prev" class="hidden px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                    ← Sebelumnya
                </button>
                
                <button id="btn-next" class="ml-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2">
                    Selanjutnya →
                </button>

                <a href="/learn/quiz/${this.data.id}" id="btn-quiz" data-link class="hidden ml-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2">
                    Kerjakan Kuis 📝
                </a>
            </div>
        </main>
      </div>
    `;

    document.getElementById("btn-prev").onclick = () => this.changeModule(-1);
    document.getElementById("btn-next").onclick = () => this.changeModule(1);
  }

  loadModule(index) {
    const modules = this.data.modules;
    const currentMod = modules[index];

    // RENDER SIDEBAR LIST
    const listContainer = document.getElementById("module-list");
    listContainer.innerHTML = modules.map((mod, i) => {
        const isActive = i === index;
        const isDone = i < this.maxUnlockedIndex; 
        
        // Logika Kunci: Hanya terkunci jika index > maxUnlockedIndex
        const isLocked = i > this.maxUnlockedIndex;

        let btnClass = isActive 
            ? 'bg-teal-50 border-teal-200 text-teal-900 border shadow-sm ring-1 ring-teal-100' 
            : 'hover:bg-gray-100 text-gray-600';
        
        if (isLocked) {
            btnClass = 'opacity-40 cursor-not-allowed bg-gray-50 text-gray-400';
        }

        let iconContent = `<span class="text-xs font-bold">${i + 1}</span>`;
        let iconBg = isActive ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500';

        if ((isDone || isActive) && !isLocked) {
             // Jika sudah terbuka, kita bisa kasih tanda centang untuk yang sudah lewat
             if (i < index || (i <= this.maxUnlockedIndex && i !== index)) {
                 iconContent = '✓';
                 iconBg = 'bg-green-500 text-white';
             }
        }
        
        if (isLocked) {
            iconContent = '🔒';
            iconBg = 'bg-gray-200 text-gray-400';
        }

        // Kalau tidak terkunci, boleh di-klik (Lompat-lompat)
        const clickAction = isLocked ? '' : `onclick="window.changeModuleExternal(${i})"`;

        return `
        <button ${clickAction} class="w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${btnClass}">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}">
                ${iconContent}
            </div>
            <span class="text-sm font-medium leading-tight">${mod.title}</span>
        </button>
        `;
    }).join('');

    window.changeModuleExternal = (i) => {
        if (i <= this.maxUnlockedIndex) {
            this.currentModuleIndex = i;
            this.loadModule(i);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // RENDER KONTEN
    const contentContainer = document.getElementById("module-content");
    contentContainer.innerHTML = `
        <div class="flex items-center gap-2 mb-6">
            <span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider">
                Bagian ${index + 1} / ${modules.length}
            </span>
        </div>
        <h2 class="text-3xl font-black text-gray-900 mb-8 leading-tight">${currentMod.title}</h2>
        
        ${currentMod.videoUrl ? `
        <div class="aspect-w-16 aspect-h-9 bg-black rounded-2xl overflow-hidden shadow-lg mb-10 border border-gray-100">
            <iframe class="w-full h-[400px]" src="${currentMod.videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
        ` : ''}

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            ${currentMod.content}
        </div>
    `;

    // LOGIKA TOMBOL NEXT/PREV
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnQuiz = document.getElementById("btn-quiz");

    if (index === 0) {
        btnPrev.classList.add("hidden");
    } else {
        btnPrev.classList.remove("hidden");
    }

    if (index === modules.length - 1) {
        btnNext.classList.add("hidden");
        btnQuiz.classList.remove("hidden");
    } else {
        btnNext.classList.remove("hidden");
        btnQuiz.classList.add("hidden");
    }
  }

  changeModule(step) {
    const nextIndex = this.currentModuleIndex + step;
    
    if (nextIndex >= 0 && nextIndex < this.data.modules.length) {
        
        // JIKA MAJU KE MATERI BARU, BUKA KUNCI DAN SIMPAN
        if (step > 0 && nextIndex > this.maxUnlockedIndex) {
            this.maxUnlockedIndex = nextIndex;
            // 2. SIMPAN PROGRES KE LOCALSTORAGE
            localStorage.setItem(`progress_chapter_${this.chapterId}`, nextIndex);
        }

        this.currentModuleIndex = nextIndex;
        this.loadModule(nextIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}