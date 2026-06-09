import{c as o}from"./CourseData-Dpr4Tk8o.js";class u{constructor(t,e){this.container=t,this.chapterId=parseInt(e);const s=o.find(i=>i.id===this.chapterId);this.data=JSON.parse(JSON.stringify(s)),this.data.quiz=this.shuffleArray(this.data.quiz),this.data.quiz.forEach(i=>{const r=i.options[i.correct];i.options=this.shuffleArray(i.options),i.correct=i.options.indexOf(r)}),this.currentQuestion=0,this.score=0,this.userAnswers=[]}shuffleArray(t){for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t}render(){this.data&&this.showQuestion()}showQuestion(){const t=this.data.quiz[this.currentQuestion],e=this.currentQuestion/this.data.quiz.length*100;this.container.innerHTML=`
      <div class="max-w-2xl mx-auto p-6 mt-8 animate-fade-in">
        <div class="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
          <div class="bg-teal-500 h-full rounded-full transition-all duration-500" style="width: ${e}%"></div>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
          <span class="absolute top-0 right-0 bg-teal-50 text-teal-600 px-4 py-2 rounded-bl-2xl font-bold text-sm">
            Soal ${this.currentQuestion+1}/${this.data.quiz.length}
          </span>

          <h3 class="text-xl font-bold text-gray-800 mb-6 mt-4 leading-snug">${t.question}</h3>

          <div class="space-y-3">
            ${t.options.map((s,i)=>`
              <button class="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:bg-teal-50 transition-all font-medium text-gray-600 group flex items-start gap-3" onclick="handleAnswer(${i})">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-bold shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">${String.fromCharCode(65+i)}</span>
                <span class="leading-snug">${s}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `,window.handleAnswer=s=>this.handleAnswer(s)}handleAnswer(t){const e=this.data.quiz[this.currentQuestion].correct;this.userAnswers.push({questionId:this.currentQuestion,questionText:this.data.quiz[this.currentQuestion].question,selected:t,selectedText:this.data.quiz[this.currentQuestion].options[t],correct:e,correctText:this.data.quiz[this.currentQuestion].options[e]}),t===e&&this.score++,this.currentQuestion++,this.currentQuestion<this.data.quiz.length?this.showQuestion():this.finishQuiz()}finishQuiz(){const t=this.data.quiz.length,e=Math.round(this.score/t*100),s=e>=75,i={id:Date.now(),chapterId:this.chapterId,chapterTitle:this.data.title,date:new Date().toLocaleString("id-ID",{dateStyle:"long",timeStyle:"short"}),score:e,passed:s,totalQuestions:t,correctCount:this.score,userAnswers:this.userAnswers,quizSnapshot:this.data.quiz},r=JSON.parse(localStorage.getItem("quizHistory"))||[];if(r.unshift(i),localStorage.setItem("quizHistory",JSON.stringify(r)),s){const a=parseInt(localStorage.getItem("userLevel"))||1;this.chapterId===a&&a<3&&localStorage.setItem("userLevel",a+1),this.chapterId===3&&(localStorage.setItem("tbcCourseCompleted","true"),setTimeout(()=>{Swal.fire({title:"🎉 Selamat!",html:"Anda telah menyelesaikan kursus.<br><b>Fitur DIAGNOSIS sekarang sudah TERBUKA.</b>",icon:"success",confirmButtonText:"Mantap!",confirmButtonColor:"#0d9488"})},800))}this.container.innerHTML=`
      <div class="max-w-xl mx-auto p-8 mt-12 text-center bg-white rounded-3xl shadow-2xl border-4 ${s?"border-green-100":"border-red-50"} animate-pop-in">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-5xl ${s?"bg-green-100":"bg-red-100"}">
          ${s?"🏆":"😢"}
        </div>
        
        <h2 class="text-3xl font-black ${s?"text-green-600":"text-red-500"} mb-2">
          ${s?"Lulus!":"Belum Lulus"}
        </h2>
        
        <p class="text-gray-500 mb-8">Skor: <span class="font-bold text-2xl text-gray-800">${e}%</span></p>

        <div class="flex flex-col gap-3">
            <a href="/learn/history/detail/${i.id}" data-link class="btn-primary py-3 rounded-xl font-bold bg-white text-teal-600 border-2 border-teal-100 hover:bg-teal-50">
               Lihat Detail Jawaban
            </a>
            <a href="/learn/tbc-detail" data-link class="btn-primary py-4 rounded-xl font-bold shadow-lg shadow-teal-200">
               Kembali ke Materi
            </a>
        </div>
      </div>
    `}}export{u as default};
