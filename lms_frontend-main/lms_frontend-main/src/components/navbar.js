import { navigate } from "../routes.js";

export function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "bg-white shadow-md sticky top-0 z-50 w-full border-b border-[color:var(--color-lightgray)] transition-all duration-300";

  const path = window.location.pathname;

  navbar.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a href="/" data-link class="flex items-center gap-2">
          <img src="/uks-icon.png" alt="CatCare Logo" class="h-10 w-10" />
          <span class="font-extrabold text-xl text-[color:var(--color-darkblue)] tracking-tight">Muhammadiyah 36</span>
        </a>

        <div class="hidden md:flex items-center space-x-6" id="navLinks">
          ${createNavLink("/learn", "Pembelajaran", path)}
          ${createNavLink("/diagnosis", "Diagnosis", path)}
          ${createNavLink("/about", "Tentang", path)}
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
          ${createNavLink("/", "Home", path)}
          ${createNavLink("/learn", "Learning", path)}
          ${createNavLink("/diagnosis", "Diagnosis", path)}
          ${createNavLink("/about", "About", path)}
        </div>
      </div>
    </div>
  `;

  // Toggle mobile menu logic
  const mobileBtn = navbar.querySelector("#mobileMenuButton");
  const mobileMenu = navbar.querySelector("#mobileMenu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // SPA NAVIGATION (NOTIFIKASI LOGIN SUDAH DIHAPUS)
  navbar.querySelectorAll("a[data-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      
      // Langsung navigasi tanpa cek user/localStorage
      history.pushState(null, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
      
      // Tutup menu mobile jika terbuka
      mobileMenu?.classList.add("hidden");
    });
  });

  return navbar;
}

function createNavLink(href, label, currentPath) {
  const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  return `<a href="${href}" data-link class="nav-link ${isActive ? "nav-link-active" : ""}">${label}</a>`;
}

export function highlightActiveNav() {
  const links = document.querySelectorAll("a[data-link]");
  const path = window.location.pathname;
  links.forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("nav-link-active");
    } else {
      link.classList.remove("nav-link-active");
    }
  });
}