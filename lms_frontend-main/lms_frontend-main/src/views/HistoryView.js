export default class HistoryView {
  constructor(container) {
    this.container = container;
  }

  render() {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    this.container.innerHTML = `
      <div class="max-w-5xl mx-auto p-6 animate-fade-in pb-20">
        <div class="flex items-center mb-8">
            <a href="/learn/tbc-detail" data-link class="flex items-center gap-2 text-gray-500 hover:text-teal-700 font-bold">
                <div class="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">←</div>
                Kembali
            </a>
        </div>

        <h1 class="text-3xl font-black text-teal-900 mb-6">Riwayat Kuis</h1>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            ${history.length === 0 
              ? `<div class="p-10 text-center text-gray-400">Belum ada riwayat ujian.</div>` 
              : `
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                            <th class="p-4 font-bold">Materi</th>
                            <th class="p-4 font-bold">Tanggal</th>
                            <th class="p-4 font-bold">Persentase</th>
                            <th class="p-4 font-bold">Status</th>
                            <th class="p-4 font-bold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 text-sm">
                        ${history.map(item => `
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="p-4 font-semibold text-gray-700">${item.chapterTitle}</td>
                            <td class="p-4 text-gray-500">${item.date}</td>
                            <td class="p-4 font-bold text-gray-800">${item.score}%</td>
                            <td class="p-4">
                                <span class="px-3 py-1 rounded-full text-xs font-bold ${item.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}">
                                    ${item.passed ? 'Lulus' : 'Gagal'}
                                </span>
                            </td>
                            <td class="p-4 text-right">
                                <a href="/learn/history/detail/${item.id}" data-link class="inline-block px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-800 hover:text-white transition-all text-xs">
                                    Lihat Detail
                                </a>
                            </td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
              </div>
            `}
        </div>
      </div>
    `;
  }
}