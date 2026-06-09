import{c as p}from"./CourseData-Dpr4Tk8o.js";class y{constructor(t,e){this.container=t,this.chapterId=parseInt(e),this.data=p.find(l=>l.id===this.chapterId);const n=parseInt(localStorage.getItem("userLevel"))||1,o=parseInt(localStorage.getItem(`progress_chapter_${this.chapterId}`))||0,r=n>this.chapterId;r?this.maxUnlockedIndex=this.data.modules.length-1:this.maxUnlockedIndex=o,this.currentModuleIndex=r?0:o}render(){if(!this.data){this.container.innerHTML='<div class="p-10 text-center text-red-500 font-bold">Materi tidak ditemukan.</div>';return}this.renderLayout(),this.loadModule(this.currentModuleIndex)}renderLayout(){this.container.innerHTML=`
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
    `,document.getElementById("btn-prev").onclick=()=>this.changeModule(-1),document.getElementById("btn-next").onclick=()=>this.changeModule(1)}loadModule(t){const e=this.data.modules,n=e[t],o=document.getElementById("module-list");o.innerHTML=e.map((s,a)=>{const i=a===t,u=a<this.maxUnlockedIndex,d=a>this.maxUnlockedIndex;let g=i?"bg-teal-50 border-teal-200 text-teal-900 border shadow-sm ring-1 ring-teal-100":"hover:bg-gray-100 text-gray-600";d&&(g="opacity-40 cursor-not-allowed bg-gray-50 text-gray-400");let c=`<span class="text-xs font-bold">${a+1}</span>`,h=i?"bg-teal-600 text-white":"bg-gray-200 text-gray-500";return(u||i)&&!d&&(a<t||a<=this.maxUnlockedIndex&&a!==t)&&(c="✓",h="bg-green-500 text-white"),d&&(c="🔒",h="bg-gray-200 text-gray-400"),`
        <button ${d?"":`onclick="window.changeModuleExternal(${a})"`} class="w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all ${g}">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${h}">
                ${c}
            </div>
            <span class="text-sm font-medium leading-tight">${s.title}</span>
        </button>
        `}).join(""),window.changeModuleExternal=s=>{s<=this.maxUnlockedIndex&&(this.currentModuleIndex=s,this.loadModule(s),window.scrollTo({top:0,behavior:"smooth"}))};const r=document.getElementById("module-content");r.innerHTML=`
        <div class="flex items-center gap-2 mb-6">
            <span class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider">
                Bagian ${t+1} / ${e.length}
            </span>
        </div>
        <h2 class="text-3xl font-black text-gray-900 mb-8 leading-tight">${n.title}</h2>
        
        ${n.videoUrl?`
        <div class="aspect-w-16 aspect-h-9 bg-black rounded-2xl overflow-hidden shadow-lg mb-10 border border-gray-100">
            <iframe class="w-full h-[400px]" src="${n.videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
        `:""}

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            ${n.content}
        </div>
    `;const l=document.getElementById("btn-prev"),x=document.getElementById("btn-next"),m=document.getElementById("btn-quiz");t===0?l.classList.add("hidden"):l.classList.remove("hidden"),t===e.length-1?(x.classList.add("hidden"),m.classList.remove("hidden")):(x.classList.remove("hidden"),m.classList.add("hidden"))}changeModule(t){const e=this.currentModuleIndex+t;e>=0&&e<this.data.modules.length&&(t>0&&e>this.maxUnlockedIndex&&(this.maxUnlockedIndex=e,localStorage.setItem(`progress_chapter_${this.chapterId}`,e)),this.currentModuleIndex=e,this.loadModule(e),window.scrollTo({top:0,behavior:"smooth"}))}}export{y as default};
