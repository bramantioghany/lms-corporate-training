/**
 * Deskripsi:
 * Mengatur interaksi navigasi umum pada aplikasi SkillHub,
 * meliputi menu hamburger pada landing page dan sidebar
 * pada halaman dashboard serta halaman materi pembelajaran.

 * Fitur:
 * 1. Membuka dan menutup menu navigasi mobile.
 * 2. Mengubah ikon hamburger menjadi ikon silang.
 * 3. Memperbarui atribut aksesibilitas menu.
 * 4. Menutup menu mobile setelah tautan dipilih atau tombol
      Escape ditekan.
 * 5. Membuka dan menutup sidebar dashboard.

 * Catatan:
 * Script dijalankan setelah DOM selesai dimuat.
 * Pemeriksaan elemen dilakukan agar script tetap aman
 * digunakan pada halaman yang tidak memiliki menu tertentu.
 */

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // BAGIAN 1: MENU HAMBURGER PADA LANDING PAGE
  // ==========================================================

  // Mengambil elemen tombol hamburger, menu mobile, dan ikon SVG.
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const menuIcon = document.querySelector("#menu-icon");

  // Memastikan tombol dan menu tersedia sebelum memasang event.
  if (mobileMenuButton && mobileMenu) {

    /**
     * Menutup menu navigasi mobile.
     *
     * Tindakan:
     * - Menambahkan class "hidden" agar menu disembunyikan.
     * - Mengatur aria-expanded menjadi "false".
     * - Mengubah aria-label menjadi "Buka menu navigasi".
     * - Mengembalikan ikon menjadi tiga garis hamburger.
     */
    function closeMobileMenu() {
      mobileMenu.classList.add("hidden");

      // Memperbarui status menu untuk teknologi bantu.
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.setAttribute(
        "aria-label",
        "Buka menu navigasi"
      );

      // Mengembalikan SVG ke bentuk ikon hamburger.
      if (menuIcon) {
        menuIcon.innerHTML =
          '<path d="M4 6h16M4 12h16M4 18h16"></path>';
      }
    }

    /**
     * Menangani klik tombol hamburger.
     *
     * Jika menu sedang terbuka, menu ditutup.
     * Jika menu sedang tertutup, menu ditampilkan.
     *
     * Status menu ditentukan berdasarkan atribut aria-expanded.
     */
    mobileMenuButton.addEventListener("click", () => {
      const isOpen =
        mobileMenuButton.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        // Menu sedang terbuka, sehingga perlu ditutup.
        closeMobileMenu();
      } else {
        // Menampilkan menu dengan menghapus class "hidden".
        mobileMenu.classList.remove("hidden");

        // Memperbarui status dan label tombol.
        mobileMenuButton.setAttribute("aria-expanded", "true");
        mobileMenuButton.setAttribute(
          "aria-label",
          "Tutup menu navigasi"
        );

        // Mengubah ikon hamburger menjadi ikon silang.
        if (menuIcon) {
          menuIcon.innerHTML =
            '<path d="M18 6 6 18M6 6l12 12"></path>';
        }
      }
    });

    // --------------------------------------------------------
    // Menutup menu setelah tautan navigasi dipilih.
    // Contoh: Home, Courses, About, atau Contact.
    // --------------------------------------------------------
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // --------------------------------------------------------
    // Menutup menu ketika pengguna menekan tombol Escape.
    // Berguna untuk meningkatkan kemudahan navigasi keyboard.
    // --------------------------------------------------------
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================
  // BAGIAN 2: SIDEBAR DASHBOARD DAN HALAMAN MATERI
  // ==========================================================

  // Mengambil tombol pengendali sidebar dan elemen sidebar.
  const sidebarButton = document.querySelector("#menu-toggle");
  const sidebar = document.querySelector("#sidebar");

  // Memastikan kedua elemen tersedia pada halaman saat ini.
  if (sidebarButton && sidebar) {

    /**
     * Menampilkan atau menyembunyikan sidebar.
     *
     * Jika sidebar terlihat, sidebar disembunyikan.
     * Jika sidebar tersembunyi, sidebar ditampilkan.
     *
     * Atribut aria-expanded diperbarui agar status sidebar
     * dapat dikenali oleh teknologi bantu.
     */
    sidebarButton.addEventListener("click", () => {

      // Sidebar dianggap terbuka jika tidak memiliki class "hidden".
      const isOpen = !sidebar.classList.contains("hidden");

      // Mengubah visibilitas sidebar sesuai status sebelumnya.
      sidebar.classList.toggle("hidden", isOpen);

      // Menyimpan status terbaru sebagai string "true" atau "false".
      sidebarButton.setAttribute("aria-expanded", String(!isOpen));
    });
  }
});