const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChapterView-DnG5aHmj.js","assets/CourseData-Dpr4Tk8o.js","assets/QuizView-CwaBMNmR.js","assets/CourseDashboard-DfxDFMWz.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const w="modulepreload",S=function(t){return"/lms-uks/"+t},g={},c=function(e,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(l=>{if(l=S(l),l in g)return;g[l]=!0;const d=l.endsWith(".css"),k=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${k}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":w,d||(u.as="script"),u.crossOrigin="",u.href=l,s&&u.setAttribute("nonce",s),document.head.appendChild(u),d)return new Promise((x,y)=>{u.addEventListener("load",x),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return n.then(o=>{for(const s of o||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})};class C{constructor(){this.navbarContainer=document.getElementById("navbar"),this.footerContainer=document.getElementById("footer"),this.container=document.querySelector("main")}renderNavbar(e){this.navbarContainer&&(this.navbarContainer.innerHTML="",this.navbarContainer.appendChild(e))}renderFooter(e){this.footerContainer&&(this.footerContainer.innerHTML="",this.footerContainer.appendChild(e))}renderContent(){const e=localStorage.getItem("tbcCourseCompleted")==="true";let a,r;if(e)a='<a href="/diagnosis" data-link class="btn-primary text-center px-8 shadow-lg">Mulai Cek Gejala</a>',r='<a href="/diagnosis" data-link class="btn-primary text-lg px-10 py-3 shadow-xl">Mulai Diagnosis Sekarang</a>';else{const i=`
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
        `.replace(/\n/g,"");a=`
            <button onclick="${i}" 
                    class="bg-gray-200 text-gray-500 px-8 py-3 rounded-xl font-bold cursor-not-allowed border-2 border-gray-300 shadow-sm flex items-center justify-center gap-2">
                🔒 Diagnosis Terkunci
            </button>`,r=`
            <button onclick="${i}" 
                    class="bg-gray-200 text-gray-500 text-lg px-10 py-3 rounded-xl font-bold cursor-not-allowed border-2 border-gray-300 shadow-sm flex items-center justify-center gap-2">
                🔒 Diagnosis Terkunci
            </button>`}this.container.innerHTML=`
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
                ${e?"":'<br><span class="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded mt-2 inline-block">⚠️ Selesaikan materi belajar untuk membuka diagnosis</span>'}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                ${a}
                <a href="/learn" data-link class="border-2 border-[color:var(--color-peach)] text-[color:var(--color-peach)] px-8 py-3 rounded-xl font-bold hover:bg-[color:var(--color-peach)] hover:text-white transition-all text-center">Pelajari Materi TBC</a>
              </div>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center relative">
              <img src="uks-home.png" alt="Logo UKS Muhammadiyah 36" class="h-64 w-64 object-contain transform hover:scale-105 transition-transform duration-300 mb-10" />
              <div class="absolute bottom-0 right-0 md:static md:mt-4 text-right">
                <span class="text-base md:text-lg text-[color:var(--color-darkblue)] font-medium opacity-60">
                  Mitra peduli kesehatan pernapasan siswa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="features" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${this.featureCard("Skrining TBC","Gunakan sistem cerdas untuk menganalisis gejala awal TBC secara mandiri.",'<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />')}

          ${this.featureCard("Modul Pembelajaran","Akses materi interaktif tentang pencegahan TBC yang mudah dipahami.",'<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />')}

          ${this.featureCard("Rekomendasi Hasil","Dapatkan hasil analisis dan saran rujukan ke Puskesmas atau Rumah Sakit terdekat.",'<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />')}
        </div>

        <div class="my-16">
          <h2 class="text-3xl font-bold text-[color:var(--color-darkblue)] text-center mb-8">Cara Menggunakan Layanan</h2>
          <div class="grid md:grid-cols-3 gap-8">
            ${this.howItWorksStep("Pilih Menu Diagnosis","Klik tombol cek gejala untuk memulai proses skrining TBC.")}
            ${this.howItWorksStep("Isi Data Gejala","Berikan informasi sejujur mungkin mengenai kondisi batuk atau sesak napas yang dirasakan.")}
            ${this.howItWorksStep("Dapatkan Rekomendasi","Sistem akan memberikan hasil awal dan langkah medis yang perlu dilakukan.")}
          </div>
        </div>

        <div class="my-16 bg-[color:var(--color-lightblue)] rounded-xl p-8 shadow-inner border-l-8 border-[color:var(--color-peach)]">
          <div class="flex items-center gap-3 mb-6">
             <div class="w-10 h-10 rounded-full bg-[color:var(--color-peach)] flex items-center justify-center text-white shadow-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
             </div>
             <h2 class="text-2xl font-bold text-[color:var(--color-darkblue)]">Pesan Tokoh & Slogan Nasional</h2>
          </div>

          <div class="flex flex-col md:flex-row gap-6 justify-center">
            ${this.testimonialCard("Budi Gunadi Sadikin (Menteri Kesehatan RI)","Target kami tahun depan (Pada tahun 2025), deteksi 1 juta kasus TBC. Penemuan lebih banyak kasus ini untuk mengejar target eliminasi TBC pada 2030.","https://kemkes.go.id/id/tiga-inovasi-memerangi-tbc")}
            ${this.testimonialCard("Slogan TOSS (Temukan, Obati, Sampai Sembuh) TBC","Temukan penyakitnya, obati sampai sembuh, karena jika tidak diobati, penyakit ini berpotensi menular kepada yang lain.","https://bantenprov.go.id/index.php/berita/berantas-tbc-dengan-toss-tbc#:~:text=Warga%20sedulur%20Banten%2C%20pemerintah%20telah,akan%20menular%20kepada%20yang%20lain.")}
          </div>
          <p class="text-center text-xs text-gray-500 mt-4 italic">*Klik pada kartu kutipan untuk membaca artikel selengkapnya.</p>
        </div>
        <div class="my-16 text-center">
          <h2 class="text-2xl font-bold text-[color:var(--color-darkblue)] mb-4">Ingin tahu kondisi kesehatanmu?</h2>
          <p class="text-[color:var(--color-darkblue)] opacity-70 mb-6">Cek gejala secara mandiri, cepat, dan rahasia.</p>
          ${r}
        </div>
      </section>
    `}featureCard(e,a,r){return`
      <div class="card hover:-translate-y-2 transition-transform duration-300">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-12 h-12 rounded-full bg-[color:var(--color-peach)] flex items-center justify-center shadow-md text-white">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              ${r}
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-[color:var(--color-darkblue)]">${e}</h3>
          <p class="text-sm text-[color:var(--color-darkblue)] opacity-70">${a}</p>
        </div>
      </div>
    `}howItWorksStep(e,a){return`
      <div class="card p-6 flex flex-col gap-4 items-start border-l-4 border-[color:var(--color-peach)]">
        <div class="w-10 h-10 rounded-full bg-[color:var(--color-darkblue)] flex items-center justify-center text-white font-bold text-lg shadow">
          ✓
        </div>
        <h3 class="text-lg font-semibold text-[color:var(--color-darkblue)]">${e}</h3>
        <p class="text-sm text-[color:var(--color-darkblue)] opacity-70">${a}</p>
      </div>
    `}testimonialCard(e,a,r){return`
      <a href="${r}" target="_blank" rel="noopener noreferrer" 
         class="group bg-white rounded-lg p-6 shadow-md w-full md:w-1/2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[color:var(--color-peach)] cursor-pointer block relative overflow-hidden">
        
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-[color:var(--color-peach)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>

        <p class="text-sm text-[color:var(--color-darkblue)] leading-relaxed italic group-hover:text-teal-800 transition-colors">
            "${a}"
        </p>
        <div class="mt-4 flex items-center justify-end gap-2">
            <div class="h-[1px] w-8 bg-[color:var(--color-peach)]"></div>
            <p class="text-xs font-bold text-[color:var(--color-peach)] uppercase tracking-wider text-right">
                ${e}
            </p>
        </div>
      </a>
    `}bindStartCheckup(e){const a=document.querySelector('a[data-link][href="/diagnosis"]');a&&a.addEventListener("click",e)}bindLearnMore(){const e=document.querySelector('a[data-link][href="/#features"]');e&&e.addEventListener("click",a=>{a.preventDefault();const r=document.querySelector("#features");r&&r.scrollIntoView({behavior:"smooth"})})}}class _{constructor(){this.container=document.querySelector("main")}renderContent(){this.container.innerHTML=`
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center min-h-[80vh] bg-[color:var(--color-lightergray)] px-2 py-8">
          <div class="max-w-3xl w-full mx-auto">
            <div class="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-[color:var(--color-border)] relative overflow-hidden" style="animation: fadeInUp 0.6s ease-out both;">
              
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
              
              <img src="uks-icon.png" alt="Logo UKS Muhammadiyah 36" class="h-24 w-24 mb-2 drop-shadow-md transform hover:scale-110 transition-transform duration-500" />
              
              <div class="text-center">
                <h1 class="text-3xl font-extrabold text-[color:var(--color-darkblue)] mb-2">LMS UKS SMP Muhammadiyah 36</h1>
                <p class="text-teal-600 font-bold tracking-wider uppercase text-sm">Teknologi untuk Sekolah Sehat</p>
              </div>
              
              <div class="text-[color:var(--color-darkblue)] text-lg opacity-90 text-justify space-y-6 leading-relaxed px-2 md:px-4">
                
                <p>
                  <strong>LMS UKS Muhammadiyah 36</strong> adalah platform digital kesehatan yang dirancang khusus untuk mendukung program <b>Sekolah Sehat</b>. Fokus utama dengan memberikan edukasi komprehensif dan deteksi dini terhadap penyakit Tuberkulosis (TBC) bagi seluruh pengguna khususnya para siswa/i dan warga sekolah.
                </p>

                <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm relative overflow-hidden">
                  <div class="flex gap-4 items-start">
                    <div>
                        <h4 class="font-bold text-blue-900 mb-1">Misi Nasional</h4>
                        <p class="text-blue-800 text-base">
                            Platform ini hadir sebagai wujud nyata dukungan sekolah dalam membantu <b>Kementerian Kesehatan Republik Indonesia</b> membasmi TBC. Kami berkomitmen mengambil peran aktif memutus mata rantai penularan sejak dini demi mewujudkan cita-cita <b>Indonesia Bebas Tuberkulosis pada tahun 2030</b>.
                        </p>
                    </div>
                  </div>
                </div>

                <p>
                  Melalui pemanfaatan teknologi kecerdasan buatan (AI) untuk analisis gejala awal, platform ini membantu pengguna memahami kondisi kesehatan paru-paru mereka secara cepat, mandiri, dan rahasia. Dengan deteksi sedini mungkin adalah kunci utama pencegahan.
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
    `}}function M(t){const e=document.getElementById("navbar"),a=document.getElementById("footer");["/learn/chapter","/learn/quiz","/learn/tbc-detail","/learn/history"].some(i=>t.startsWith(i))?(e&&(e.style.display="none"),a&&(a.style.display="none")):(e&&(e.style.display=""),a&&(a.style.display=""))}async function h(t){M(t);let e=f[t];const a=t.match(/^\/learn\/chapter\/(\d+)$/);if(!e&&a){const o=a[1];e=async()=>{const{default:s}=await c(async()=>{const{default:d}=await import("./ChapterView-DnG5aHmj.js");return{default:d}},__vite__mapDeps([0,1])),l=document.querySelector("main");new s(l,o).render()}}const r=t.match(/^\/learn\/quiz\/(\d+)$/);if(!e&&r){const o=r[1];e=async()=>{const{default:s}=await c(async()=>{const{default:d}=await import("./QuizView-CwaBMNmR.js");return{default:d}},__vite__mapDeps([2,1])),l=document.querySelector("main");new s(l,o).render()}}const n=t.match(/^\/learn\/history\/detail\/(\d+)$/);if(!e&&n){const o=n[1];e=async()=>{const{default:s}=await c(async()=>{const{default:d}=await import("./ExamDetailView-pf6xK2u8.js");return{default:d}},[]),l=document.querySelector("main");new s(l,o).render()}}e||(e=f["/"]),await e();const i=document.getElementById("navbar");if(i&&i.style.display!=="none")try{const{highlightActiveNav:o}=await c(async()=>{const{highlightActiveNav:s}=await Promise.resolve().then(()=>j);return{highlightActiveNav:s}},void 0);o()}catch{}}window.addEventListener("popstate",()=>{h(window.location.pathname)});const f={"/":async()=>{const{default:t}=await c(async()=>{const{default:e}=await import("./HomePresenter-D0ft3TV9.js");return{default:e}},[]);new t(new C)},"/diagnosis":async()=>{if(!(localStorage.getItem("tbcCourseCompleted")==="true")){Swal.fire({title:"🔒 Fitur Terkunci!",text:"Anda harus menyelesaikan Pembelajaran TBC (Chapter 1-3) dan Lulus Kuis Akhir terlebih dahulu untuk mengakses fitur Diagnosis.",icon:"warning",confirmButtonText:"Baik, Saya Belajar Dulu",confirmButtonColor:"#0d9488"}).then(()=>{c(async()=>{const{default:a}=await import("./LearningView-DUjSHDUy.js");return{default:a}},[]).then(({default:a})=>{const r=document.querySelector("main");new a(r).render()}),history.pushState(null,null,"/learn")});return}const{default:e}=await c(async()=>{const{default:a}=await import("./DiagnosisPresenter-DyvjIxRR.js");return{default:a}},[]);return new e},"/learn":async()=>{const{default:t}=await c(async()=>{const{default:r}=await import("./LearningView-DUjSHDUy.js");return{default:r}},[]),e=document.querySelector("main");new t(e).render()},"/learn/tbc-detail":async()=>{const{default:t}=await c(async()=>{const{default:r}=await import("./CourseDashboard-DfxDFMWz.js");return{default:r}},__vite__mapDeps([3,1])),e=document.querySelector("main");new t(e).render()},"/learn/history":async()=>{const{default:t}=await c(async()=>{const{default:a}=await import("./HistoryView-C66bhu_j.js");return{default:a}},[]),e=document.querySelector("main");new t(e).render()},"/about":async()=>{const{default:t}=await c(async()=>{const{default:e}=await import("./AboutPresenter-BUmj0eJF.js");return{default:e}},[]);new t(new _)}};function v(){const t=document.createElement("nav");t.className="bg-white shadow-md sticky top-0 z-50 w-full border-b border-[color:var(--color-lightgray)] transition-all duration-300";const e=window.location.pathname;t.innerHTML=`
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a href="/" data-link class="flex items-center gap-2">
          <img src="uks-icon.png" alt="CatCare Logo" class="h-10 w-10" />
          <span class="font-extrabold text-xl text-[color:var(--color-darkblue)] tracking-tight">Muhammadiyah 36</span>
        </a>

        <div class="hidden md:flex items-center space-x-6" id="navLinks">
          ${m("/learn","Pembelajaran",e)}
          ${m("/diagnosis","Diagnosis",e)}
          ${m("/about","Tentang",e)}
        </div>

        <div class="hidden md:flex items-center">
          <a href="/diagnosis" data-link class="btn-primary text-sm px-5 py-2 rounded-full">Cek Kesehatanmu Sekarang</a>
        </div>

        <button id="mobileMenuButton" class="md:hidden text-[color:var(--color-darkblue)]">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div id="mobileMenu" class="hidden md:hidden py-4 bg-white border-t border-[color:var(--color-lightgray)]">
        <div class="flex flex-col space-y-4 px-2" id="mobileNavLinks">
          ${m("/","Home",e)}
          ${m("/learn","Learning",e)}
          ${m("/diagnosis","Diagnosis",e)}
          ${m("/about","About",e)}
        </div>
      </div>
    </div>
  `;const a=t.querySelector("#mobileMenuButton"),r=t.querySelector("#mobileMenu");return a&&r&&a.addEventListener("click",()=>{r.classList.toggle("hidden")}),t.querySelectorAll("a[data-link]").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault();const o=n.getAttribute("href");history.pushState(null,"",o),window.dispatchEvent(new PopStateEvent("popstate")),r==null||r.classList.add("hidden")})}),t}function m(t,e,a){const r=t==="/"?a==="/":a.startsWith(t);return`<a href="${t}" data-link class="nav-link ${r?"nav-link-active":""}">${e}</a>`}function p(){const t=document.querySelectorAll("a[data-link]"),e=window.location.pathname;t.forEach(a=>{a.getAttribute("href")===e?a.classList.add("nav-link-active"):a.classList.remove("nav-link-active")})}const j=Object.freeze(Object.defineProperty({__proto__:null,createNavbar:v,highlightActiveNav:p},Symbol.toStringTag,{value:"Module"}));function b(){const t=document.createElement("footer");return t.className="bg-white border-t mt-auto",t.innerHTML=`
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="uks-icon.png" alt="Logo UKS" class="h-8 w-8 object-contain" />
            <h3 class="text-lg font-bold text-[color:var(--color-darkblue)]">UKS Muhammadiyah 36</h3>
          </div>
          <p class="text-gray-600 leading-relaxed text-sm">
            Layanan kesehatan digital SMP Muhammadiyah 36 yang berfokus pada edukasi dan deteksi dini kesehatan paru-paru (TBC) untuk menciptakan lingkungan sekolah yang sehat dan bebas penyakit.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4 text-[color:var(--color-darkblue)]">Navigasi</h3>
          <ul class="space-y-3">
            <li>
              <a href="/learn" data-link class="text-gray-600 hover:text-gray-900 hover:underline transition-all text-sm flex items-center gap-2">
                <span>→</span> Materi Belajar TBC
              </a>
            </li>
            <li>
              <a href="/diagnosis" data-link class="text-gray-600 hover:text-gray-900 hover:underline transition-all text-sm flex items-center gap-2">
                <span>→</span> Skrining Gejala
              </a>
            </li>
            <li>
              <a href="/about" data-link class="text-gray-600 hover:text-gray-900 hover:underline transition-all text-sm flex items-center gap-2">
                <span>→</span> Tentang UKS Kami
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Kontak & Alamat</h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            Jl. Tebet Timur II No.35, Tebet Tim., Kec. Tebet, <br>
            Kota Jakarta Selatan, Daerah Khusus Ibukota <br>
            Jakarta 12820 <br>
            Telp: (021) 8295772
          </p>
          <div class="flex space-x-4">
            <a href="https://web.facebook.com/smpmuganam/?locale=id_ID&_rdc=1&_rdr#" class="text-gray-500 hover:text-blue-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/muh36_tebet/" class="text-gray-500 hover:text-pink-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="https://wa.me/6285886321900" class="text-gray-500 hover:text-green-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t mt-8 pt-8 text-center text-gray-600">
        <p>&copy; Copyright UKS SMP Muhammadiyah 36</p>
      </div>
    </div>
  `,t}const L=Object.freeze(Object.defineProperty({__proto__:null,createFooter:b},Symbol.toStringTag,{value:"Module"}));function T(){window.addEventListener("DOMContentLoaded",()=>{document.getElementById("navbar").appendChild(v()),document.getElementById("footer").appendChild(b());const t=location.hash.replace("#","")||"/";h(t).then(()=>{p()}),document.body.addEventListener("click",e=>{const a=e.target.closest("a[data-link]");if(a){e.preventDefault();let n=new URL(a.href).pathname.replace("/lms-uks","");n===""&&(n="/"),history.pushState(null,"","#"+n),h(n).then(()=>{window.scrollTo({top:0,behavior:"smooth"}),p()})}}),window.addEventListener("hashchange",()=>{const e=location.hash.replace("#","")||"/";h(e).then(()=>{p()})})})}T();export{_ as A,c as _,L as f,j as n};
