import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // --- PERUBAHAN UTAMA DI SINI ---
  // Menambahkan base URL sesuai nama repository GitHub agar aset terbaca
  base: "/lms-uks/", 
  // -------------------------------

  server: {
    historyApiFallback: true,
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["cat-icon.svg", "cat-icon-192.png", "cat-icon-512.png"],
      manifest: {
        name: "lms",
        short_name: "lms",
        description: "Aplikasi diagnosis penyakit tuberkulosis",
        
        // --- PERUBAHAN PWA ---
        // start_url harus mengarah ke folder repository, bukan root domain
        start_url: "/lms-uks/",
        scope: "/lms-uks/",
        // ---------------------

        display: "standalone",
        theme_color: "#3B82F6",
        background_color: "#FFFFFF",
        icons: [
          {
            src: "cat-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "cat-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});