import { courseData } from "./CourseData.js";

export default class QuizView {
  constructor(container, chapterId) {
    this.container = container;
    this.chapterId = parseInt(chapterId);
    
    // Ambil data asli
    const originalData = courseData.find(c => c.id === this.chapterId);
    
    // Clone data agar tidak merusak data asli saat di-shuffle
    this.data = JSON.parse(JSON.stringify(originalData));
    
    // --- FITUR BARU: SHUFFLE SOAL & JAWABAN ---
    // Acak urutan soal
    this.data.quiz = this.shuffleArray(this.data.quiz);

    // Acak urutan jawaban (opsi A, B, C, D) untuk setiap soal
    this.data.quiz.forEach(q => {
        // Simpan jawaban benar yang asli (string teksnya)
        const correctAnswerText = q.options[q.correct];
        
        // Acak opsi jawaban
        q.options = this.shuffleArray(q.options);
        
        // Cari index baru dari jawaban benar setelah diacak
        q.correct = q.options.indexOf(correctAnswerText);
    });
    // ------------------------------------------

    this.currentQuestion = 0;
    this.score = 0;
    this.userAnswers = []; 
  }

  // Helper Function untuk Mengacak Array (Fisher-Yates Shuffle)
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    if (!this.data) return;
    this.showQuestion();
  }

  showQuestion() {
    const question = this.data.quiz[this.currentQuestion];
    const progress = ((this.currentQuestion) / this.data.quiz.length) * 100;

    this.container.innerHTML = `
      <div class="max-w-2xl mx-auto p-6 mt-8 animate-fade-in">
        <div class="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
          <div class="bg-teal-500 h-full rounded-full transition-all duration-500" style="width: ${progress}%"></div>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
          <span class="absolute top-0 right-0 bg-teal-50 text-teal-600 px-4 py-2 rounded-bl-2xl font-bold text-sm">
            Soal ${this.currentQuestion + 1}/${this.data.quiz.length}
          </span>

          <h3 class="text-xl font-bold text-gray-800 mb-6 mt-4 leading-snug">${question.question}</h3>

          <div class="space-y-3">
            ${question.options.map((option, index) => `
              <button class="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:bg-teal-50 transition-all font-medium text-gray-600 group flex items-start gap-3" onclick="handleAnswer(${index})">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-bold shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">${String.fromCharCode(65 + index)}</span>
                <span class="leading-snug">${option}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    window.handleAnswer = (index) => this.handleAnswer(index);
  }

  handleAnswer(selectedIndex) {
    const correctIndex = this.data.quiz[this.currentQuestion].correct;
    
    this.userAnswers.push({
        questionId: this.currentQuestion,
        questionText: this.data.quiz[this.currentQuestion].question, // Simpan teks soal
        selected: selectedIndex,
        selectedText: this.data.quiz[this.currentQuestion].options[selectedIndex], // Simpan teks jawaban user
        correct: correctIndex,
        correctText: this.data.quiz[this.currentQuestion].options[correctIndex] // Simpan teks jawaban benar
    });

    if (selectedIndex === correctIndex) this.score++;

    this.currentQuestion++;
    if (this.currentQuestion < this.data.quiz.length) {
      this.showQuestion();
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    const totalQuestions = this.data.quiz.length;
    const percentage = Math.round((this.score / totalQuestions) * 100);
    const isPassed = percentage >= 75;

    // --- SIMPAN KE RIWAYAT (HISTORY) ---
    const historyItem = {
        id: Date.now(),
        chapterId: this.chapterId,
        chapterTitle: this.data.title,
        date: new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }),
        score: percentage,
        passed: isPassed,
        totalQuestions: totalQuestions,
        correctCount: this.score,
        userAnswers: this.userAnswers, // Jawaban detail dengan teks
        // Tidak perlu menyimpan quizData mentah karena urutannya sudah diacak di sini
    };

    const existingHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
    existingHistory.unshift(historyItem); 
    localStorage.setItem("quizHistory", JSON.stringify(existingHistory));

    // Update Level User jika Lulus
    if (isPassed) {
        const currentLevel = parseInt(localStorage.getItem("userLevel")) || 1;
        if (this.chapterId === currentLevel && currentLevel < 3) {
            localStorage.setItem("userLevel", currentLevel + 1);
        }

        // --- CEK KELULUSAN KURSUS & TAMPILKAN NOTIFIKASI ---
        if (this.chapterId === 3) {
            localStorage.setItem("tbcCourseCompleted", "true");
            
            // Notifikasi SweetAlert
            setTimeout(() => {
                Swal.fire({
                    title: '🎉 Selamat!',
                    html: 'Anda telah menyelesaikan kursus.<br><b>Fitur DIAGNOSIS sekarang sudah TERBUKA.</b>',
                    icon: 'success',
                    confirmButtonText: 'Mantap!',
                    confirmButtonColor: '#0d9488'
                });
            }, 800);
        }
        // ---------------------------------------------------
    }

    this.container.innerHTML = `
      <div class="max-w-xl mx-auto p-8 mt-12 text-center bg-white rounded-3xl shadow-2xl border-4 ${isPassed ? 'border-green-100' : 'border-red-50'} animate-pop-in">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-5xl ${isPassed ? 'bg-green-100' : 'bg-red-100'}">
          ${isPassed ? '🏆' : '😢'}
        </div>
        
        <h2 class="text-3xl font-black ${isPassed ? 'text-green-600' : 'text-red-500'} mb-2">
          ${isPassed ? 'Lulus!' : 'Belum Lulus'}
        </h2>
        
        <p class="text-gray-500 mb-8">Skor: <span class="font-bold text-2xl text-gray-800">${percentage}%</span></p>

        <div class="flex flex-col gap-3">
            <a href="/learn/history/detail/${historyItem.id}" data-link class="btn-primary py-3 rounded-xl font-bold bg-white text-teal-600 border-2 border-teal-100 hover:bg-teal-50">
               Lihat Detail Jawaban
            </a>
            <a href="/learn/tbc-detail" data-link class="btn-primary py-4 rounded-xl font-bold shadow-lg shadow-teal-200">
               Kembali ke Materi
            </a>
        </div>
      </div>
    `;
  }
}