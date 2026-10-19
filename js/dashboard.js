/**
 * Deskripsi:
 * Menangani inisialisasi dan interaksi pada halaman dashboard.
 *
 * Fitur:
 * 1. Mencari tautan pada bagian assignments yang mengarah
 *    ke halaman learning-material.html.
 * 2. Menyiapkan event klik untuk pengembangan navigasi tugas
 *    atau kursus pada tahap berikutnya.
 * 3. Menampilkan pesan bahwa dashboard siap digunakan.
 *
 * Catatan:
 * Navigasi halaman saat ini tetap dilakukan oleh atribut href.
 * Event klik yang disediakan belum menjalankan tindakan tambahan.
 */

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // BAGIAN 1: MENGAMBIL TAUTAN MATERI PADA DAFTAR TUGAS
  // ==========================================================

  /**
   * Mencari seluruh tautan di dalam elemen dengan ID
   * "assignments" yang memiliki href "learning-material.html".
   *
   * querySelectorAll() menghasilkan kumpulan elemen yang
   * sesuai dengan selector CSS tersebut.
   */
  const assignmentLinks = document.querySelectorAll(
    '#assignments a[href="learning-material.html"]'
  );

  // ==========================================================
  // BAGIAN 2: MENYIAPKAN EVENT KLIK TAUTAN
  // ==========================================================

  // Memasang event klik pada setiap tautan yang ditemukan.
  assignmentLinks.forEach((link) => {
    link.addEventListener("click", () => {

      /**
       * Navigasi halaman ditangani secara otomatis oleh href.
       *
       * Belum ada tindakan tambahan yang dijalankan di sini.
       * Pada pengembangan berikutnya, bagian ini dapat digunakan
       * untuk menyiapkan ID kursus atau ID tugas yang dipilih.
       *
       * Contoh pengembangan:
       * - Mengidentifikasi tugas yang dipilih.
       * - Mengirimkan ID materi melalui URL.
       * - Mengambil informasi kursus dari sumber data.
       */
    });
  });

  // ==========================================================
  // BAGIAN 3: KONFIRMASI INISIALISASI DASHBOARD
  // ==========================================================

  // Menampilkan pesan pada console browser untuk membantu
  // pengembang memastikan script telah dijalankan.
  console.log("Dashboard SkillHub siap digunakan.");
});