export default class ExamDetailView {
  constructor(container, historyId) {
    this.container = container;
    this.historyId = parseInt(historyId);
    // Cari data di localStorage berdasarkan ID history
    const allHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
    this.data = allHistory.find(h => h.id === this.historyId);
  }

  render() {
    if (!this.data) {
        this.container.innerHTML = `<div class="p-10 text-center text-red-500">Data riwayat tidak ditemukan.</div>`;
        return;
    }

    this.container.innerHTML = `
      <div class="max-w-6xl mx-auto p-6 animate-fade-in pb-20">
        <div class="mb-6 flex justify-between items-center">
            <h1 class="text-2xl font-black text-gray-800">Hasil Exam</h1>
            <a href="/learn/history" data-link class="text-gray-400 hover:text-gray-800 font-bold text-2xl">×</a>
        </div>

        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-4">
                    <p class="text-gray-500 text-sm mb-6">Tanggal Ujian: <br> <span class="text-gray-800 font-medium">${this.data.date}</span></p>
                    
                    <div class="flex justify-between items-end mb-8">
                        <div class="text-center">
                            <p class="text-gray-400 text-sm font-bold uppercase">Total Soal</p>
                            <p class="text-4xl font-light text-gray-600 mt-2">${this.data.totalQuestions}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-teal-500 text-sm font-bold uppercase">Score</p>
                            <p class="text-5xl font-black ${this.data.passed ? 'text-green-500' : 'text-red-500'} mt-2">${this.data.score}</p>
                        </div>
                    </div>

                    <div class="border-t pt-4">
                        <p class="text-sm text-gray-600 leading-relaxed">
                            ${this.data.passed 
                                ? "Selamat! Anda telah lulus dari ujian ini. Pertahankan prestasimu." 
                                : "Mohon maaf, Anda belum lulus. Silakan pelajari materi kembali."}
                        </p>
                    </div>
                </div>
            </div>

            <div class="md:w-2/3 space-y-6">
                <h3 class="font-bold text-gray-800 text-lg border-b pb-2">Kategori : ${this.data.chapterTitle}</h3>

                ${this.data.quizData.map((q, qIndex) => {
                    // Logika Jawaban User
                    const userAnswer = this.data.userAnswers.find(a => a.questionId === qIndex);
                    const userSelected = userAnswer ? userAnswer.selected : -1;
                    const correctIndex = q.correct;
                    const isUserCorrect = userSelected === correctIndex;

                    return `
                    <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div class="flex gap-4">
                            <div class="shrink-0">
                                <span class="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${isUserCorrect ? 'bg-green-100 text-green-600 border border-green-200' : 'bg-red-100 text-red-600 border border-red-200'}">
                                    ${qIndex + 1}
                                </span>
                            </div>
                            
                            <div class="flex-1">
                                <p class="text-gray-800 font-medium mb-4 leading-relaxed">${q.question}</p>
                                
                                <div class="space-y-3">
                                    ${q.options.map((opt, optIndex) => {
                                        // LOGIKA WARNA SESUAI REQUEST:
                                        let btnClass = "border-gray-200 text-gray-500"; // Default
                                        let icon = `<span class="font-bold mr-2 text-gray-300">${String.fromCharCode(65 + optIndex)}</span>`;

                                        // 1. Jika User memilih opsi ini
                                        if (userSelected === optIndex) {
                                            if (isUserCorrect) {
                                                // Benar: Hijaukan
                                                btnClass = "border-green-500 bg-green-50 text-green-700 font-bold";
                                                icon = `<span class="font-bold mr-2 text-green-600">✓</span>`;
                                            } else {
                                                // Salah: Merahkan
                                                btnClass = "border-red-500 bg-red-50 text-red-700 font-bold";
                                                icon = `<span class="font-bold mr-2 text-red-600">✕</span>`;
                                            }
                                        } 
                                        
                                        // 2. KUNCI JAWABAN (Constraint: Jangan tampilkan jika user salah)
                                        // Jika user salah, jawaban benar TETAP PUTIH (tidak dikasih tahu)
                                        // Jika user benar, jawaban benar sudah hijau karena logic poin 1 di atas.
                                        
                                        return `
                                        <div class="p-3 border rounded-xl text-sm flex items-center ${btnClass}">
                                            ${icon} ${opt}
                                        </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
      </div>
    `;
  }
}