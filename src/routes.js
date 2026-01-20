import HomeView from "./views/HomeView.js";
import AboutView from "./views/AboutView.js";

function updateLayout(path) {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  const immersivePaths = [
    "/learn/chapter",
    "/learn/quiz",
    "/learn/tbc-detail",
    "/learn/history"
  ]; 

  const isImmersive = immersivePaths.some(p => path.startsWith(p));

  if (isImmersive) {
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";
  } else {
    if (navbar) navbar.style.display = ""; 
    if (footer) footer.style.display = "";
  }
}

export async function navigate(path) {
  
  updateLayout(path);

  let handler = routes[path];

  // --- LOGIKA ROUTE DINAMIS ---
  
  const chapterMatch = path.match(/^\/learn\/chapter\/(\d+)$/);
  if (!handler && chapterMatch) {
    const chapterId = chapterMatch[1]; 
    handler = async () => {
      const { default: ChapterView } = await import("./views/ChapterView.js");
      const container = document.querySelector("main");
      new ChapterView(container, chapterId).render();
    };
  }

  const quizMatch = path.match(/^\/learn\/quiz\/(\d+)$/);
  if (!handler && quizMatch) {
    const quizId = quizMatch[1]; 
    handler = async () => {
      const { default: QuizView } = await import("./views/QuizView.js");
      const container = document.querySelector("main");
      new QuizView(container, quizId).render();
    };
  }

  const historyMatch = path.match(/^\/learn\/history\/detail\/(\d+)$/);
  if (!handler && historyMatch) {
    const historyId = historyMatch[1];
    handler = async () => {
        const { default: ExamDetailView } = await import("./views/ExamDetailView.js");
        const container = document.querySelector("main");
        new ExamDetailView(container, historyId).render();
    };
  }
  // -----------------------------

  if (!handler) {
      handler = routes["/"];
  }

  await handler();

  const navbar = document.getElementById("navbar");
  if (navbar && navbar.style.display !== "none") {
    try {
      const { highlightActiveNav } = await import("./components/navbar.js");
      highlightActiveNav();
    } catch (e) {}
  }
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});

const routes = {
  "/": async () => {
    const { default: HomePresenter } = await import("./presenters/HomePresenter.js");
    new HomePresenter(new HomeView());
  },

  // --- LOGIKA PENGUNCIAN DIAGNOSIS DENGAN SWEETALERT ---
  "/diagnosis": async () => {
    const isCourseCompleted = localStorage.getItem("tbcCourseCompleted") === "true";

    if (!isCourseCompleted) {
        // Tampilkan Modal Cantik
        Swal.fire({
            title: '🔒 Fitur Terkunci!',
            text: 'Anda harus menyelesaikan Pembelajaran TBC (Chapter 1-3) dan Lulus Kuis Akhir terlebih dahulu untuk mengakses fitur Diagnosis.',
            icon: 'warning',
            confirmButtonText: 'Baik, Saya Belajar Dulu',
            confirmButtonColor: '#0d9488' // Warna Teal
        }).then(() => {
            // Redirect setelah klik OK
            import("./views/LearningView.js").then(({ default: LearningView }) => {
                const container = document.querySelector("main");
                const view = new LearningView(container);
                view.render();
            });
            history.pushState(null, null, "/learn");
        });
        
        return;
    }

    const { default: DiagnosisPresenter } = await import("./presenters/DiagnosisPresenter.js");
    return new DiagnosisPresenter();
  },
  // -----------------------------------

  "/learn": async () => {
    const { default: LearningView } = await import("./views/LearningView.js");
    const container = document.querySelector("main");
    const view = new LearningView(container);
    view.render();
  },

  "/learn/tbc-detail": async () => {
    const { default: CourseDashboard } = await import("./views/CourseDashboard.js");
    const container = document.querySelector("main");
    const view = new CourseDashboard(container);
    view.render();
  },

  "/learn/history": async () => {
    const { default: HistoryView } = await import("./views/HistoryView.js");
    const container = document.querySelector("main");
    new HistoryView(container).render();
  },

  "/about": async () => {
    const { default: AboutPresenter } = await import("./presenters/AboutPresenter.js");
    new AboutPresenter(new AboutView());
  },
};