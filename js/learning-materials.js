/**
 * Deskripsi:
 * Mengatur interaksi pada halaman materi pembelajaran SkillHub.

 * Fitur:
 * 1. Menyimpan data daftar materi pembelajaran.
 * 2. Menampilkan daftar materi dan materi yang sedang aktif.
 * 3. Menampilkan deskripsi, jenis, dan durasi materi.
 * 4. Menandai materi sebagai selesai atau belum selesai.
 * 5. Menghitung dan menampilkan progres penyelesaian modul.
 * 6. Menyimpan dan memuat progres menggunakan localStorage.

 * Catatan:
 * Konten video, PDF, dan kuis masih berupa placeholder.
 * localStorage digunakan untuk penyimpanan pada browser
 * pengguna, bukan sebagai database server.
 */

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // BAGIAN 1: DATA MATERI PEMBELAJARAN
  // ==========================================================

  /**
   * Array lessons menyimpan data seluruh materi dalam modul.
   *
   * Setiap objek memiliki properti:
   * - title       : judul materi.
   * - type        : jenis materi (video, pdf, atau quiz).
   * - duration    : estimasi waktu belajar.
   * - description : deskripsi singkat materi.
   *
   * Data ini digunakan untuk membuat daftar materi dan
   * menampilkan informasi materi yang sedang dipilih.
   */
  const lessons = [
    {
      title: "Introduction to Social Media Marketing",
      type: "video",
      duration: "12 menit",
      description: "Pengantar pemasaran melalui media sosial."
    },
    {
      title: "Platform Overview",
      type: "pdf",
      duration: "25 menit",
      description: "Memahami karakteristik platform media sosial."
    },
    {
      title: "Content Strategy",
      type: "video",
      duration: "18 menit",
      description: "Menyusun strategi konten yang efektif."
    },
    {
      title: "Campaign Planning",
      type: "pdf",
      duration: "20 menit",
      description: "Menyusun rencana kampanye digital."
    },
    {
      title: "Practice & Case Study",
      type: "quiz",
      duration: "15 menit",
      description: "Latihan penerapan konsep pemasaran."
    }
  ];

  // ==========================================================
  // BAGIAN 2: MENGAMBIL ELEMEN HTML
  // ==========================================================

  /**
   * Mengambil elemen-elemen yang digunakan untuk menampilkan:
   * - Daftar materi.
   * - Konten materi aktif.
   * - Bar progres.
   * - Label progres.
   */
  const list = document.querySelector("#lesson-list");
  const content = document.querySelector("#lesson-content");
  const progressBar = document.querySelector("#module-progress-bar");
  const progressLabel = document.querySelector("#module-progress-label");

  /**
   * Menghentikan eksekusi script jika ada elemen penting
   * yang tidak ditemukan pada halaman saat ini.
   *
   * Pemeriksaan ini mencegah error ketika script dijalankan
   * pada halaman yang tidak memiliki struktur materi.
   */
  if (!list || !content || !progressBar || !progressLabel) return;

  // ==========================================================
  // BAGIAN 3: MEMUAT PROGRES DARI LOCALSTORAGE
  // ==========================================================

  /**
   * Kunci penyimpanan progres pada browser.
   * Nilai ini digunakan untuk menyimpan indeks materi
   * yang telah diselesaikan.
   */
  const storageKey = "skillhub-module-2-completed";

  // Array untuk menampung indeks materi yang telah selesai.
  let completed = [];

  try {
    /**
     * Membaca data progres dari localStorage.
     *
     * Jika belum ada data tersimpan, gunakan array kosong.
     * JSON.parse() mengubah teks JSON menjadi nilai JavaScript.
     */
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");

    // Memastikan data yang tersimpan benar-benar berbentuk array.
    if (Array.isArray(saved)) {

      /**
       * Memvalidasi setiap indeks materi.
       *
       * Indeks harus berupa bilangan bulat, tidak negatif,
       * dan berada dalam rentang indeks array lessons.
       */
      completed = saved.filter(
        (index) =>
          Number.isInteger(index) &&
          index >= 0 &&
          index < lessons.length
      );
    }
  } catch {
    /**
     * Jika data tidak valid atau gagal dibaca, gunakan array
     * kosong agar halaman tetap dapat dijalankan.
     */
    completed = [];
  }

  // Indeks materi aktif. Nilai 0 berarti materi pertama.
  let activeLesson = 0;

  // ==========================================================
  // BAGIAN 4: MENYIMPAN PROGRES BELAJAR
  // ==========================================================

  /**
   * Menyimpan daftar indeks materi selesai ke localStorage.
   *
   * JSON.stringify() mengubah array menjadi teks JSON
   * sebelum disimpan oleh browser.
   */
  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed));
    } catch {
      /**
       * Jika penyimpanan gagal, progres tetap tersedia
       * dalam variabel completed selama halaman terbuka.
       */
    }
  }

  // ==========================================================
  // BAGIAN 5: MEMPERBARUI INDIKATOR PROGRES
  // ==========================================================

  /**
   * Menghitung persentase penyelesaian materi dan memperbarui
   * tampilan bar progres serta label jumlah materi selesai.
   *
   * Rumus:
   * Persentase = (jumlah materi selesai / jumlah seluruh materi)
   *              x 100
   */
  function updateProgress() {

    // Menghitung persentase progres dan membulatkannya.
    const percent = Math.round(
      (completed.length / lessons.length) * 100
    );

    // Mengatur lebar bar sesuai persentase penyelesaian.
    progressBar.style.width = `${percent}%`;

    // Menampilkan jumlah materi selesai dibanding total materi.
    progressLabel.textContent =
      `${completed.length}/${lessons.length} selesai`;

    // Memperbarui label aksesibilitas pada wadah bar progres.
    progressBar.parentElement.setAttribute(
      "aria-label",
      `Progres materi ${percent}%`
    );
  }

  // ==========================================================
  // BAGIAN 6: MENAMPILKAN DAFTAR MATERI
  // ==========================================================

  /**
   * Membuat ulang daftar materi berdasarkan data lessons.
   *
   * Setiap materi ditampilkan sebagai tombol yang berisi:
   * - Nomor dan judul materi.
   * - Tanda centang jika materi sudah selesai.
   * - Jenis materi jika belum selesai.
   *
   * Materi aktif diberi class tambahan agar tampil berbeda.
   */
  function renderList() {

    // Menghapus daftar lama sebelum membuat daftar terbaru.
    list.replaceChildren();

    // Membuat satu tombol untuk setiap materi.
    lessons.forEach((lesson, index) => {
      const button = document.createElement("button");

      // Mengatur tipe dan tampilan dasar tombol materi.
      button.type = "button";
      button.className =
        "mb-2 flex w-full items-start justify-between gap-3 rounded-xl border p-3 text-left transition hover:bg-blue-50";

      // Membedakan tampilan materi aktif dengan materi lainnya.
      if (index === activeLesson) {
        button.classList.add("border-brand-500", "bg-blue-50");
      } else {
        button.classList.add("border-slate-200");
      }

      // Membuat elemen teks untuk nomor dan judul materi.
      const text = document.createElement("span");
      text.className = "text-sm font-medium";
      text.textContent = `${index + 1}. ${lesson.title}`;

      // Membuat elemen status materi.
      const status = document.createElement("span");
      status.className = "shrink-0 text-xs";

      /**
       * Menampilkan tanda centang untuk materi yang selesai.
       * Jika belum selesai, tampilkan jenis materi dalam huruf
       * kapital, misalnya VIDEO, PDF, atau QUIZ.
       */
      status.textContent = completed.includes(index)
        ? "✓"
        : lesson.type.toUpperCase();

      // Memasukkan judul dan status ke dalam tombol.
      button.append(text, status);

      /**
       * Ketika tombol materi diklik:
       * 1. Perbarui indeks materi aktif.
       * 2. Render ulang daftar agar penanda aktif berubah.
       * 3. Tampilkan konten materi yang dipilih.
       */
      button.addEventListener("click", () => {
        activeLesson = index;
        renderList();
        renderLesson();
      });

      // Menambahkan tombol ke dalam daftar materi.
      list.append(button);
    });
  }

  // ==========================================================
  // BAGIAN 7: MENAMPILKAN KONTEN MATERI AKTIF
  // ==========================================================

  /**
   * Menampilkan detail materi berdasarkan activeLesson.
   *
   * Konten yang dibuat:
   * - Judul materi.
   * - Deskripsi materi.
   * - Jenis dan durasi materi.
   * - Area placeholder sesuai jenis materi.
   * - Tombol untuk mengubah status penyelesaian.
   */
  function renderLesson() {

    // Mengambil data materi yang sedang aktif.
    const lesson = lessons[activeLesson];

    // Menghapus konten sebelumnya.
    content.replaceChildren();

    // --------------------------------------------------------
    // Membuat judul materi.
    // --------------------------------------------------------
    const heading = document.createElement("h2");
    heading.className = "text-2xl";
    heading.textContent = lesson.title;

    // --------------------------------------------------------
    // Membuat deskripsi materi.
    // --------------------------------------------------------
    const description = document.createElement("p");
    description.className = "mt-3 leading-7 text-slate-600";
    description.textContent = lesson.description;

    // --------------------------------------------------------
    // Membuat informasi jenis dan durasi materi.
    // Contoh: VIDEO · 12 menit.
    // --------------------------------------------------------
    const meta = document.createElement("p");
    meta.className = "mt-2 text-sm text-slate-500";
    meta.textContent = `${lesson.type.toUpperCase()} · ${lesson.duration}`;

    // --------------------------------------------------------
    // Membuat area media pembelajaran.
    // Konten video, PDF, dan kuis belum diintegrasikan.
    // --------------------------------------------------------
    const media = document.createElement("div");
    media.className =
      "mt-6 flex min-h-48 items-center justify-center rounded-xl bg-slate-100 p-6 text-center";

    const placeholder = document.createElement("p");
    placeholder.className = "text-slate-500";

    /**
     * Menentukan teks placeholder berdasarkan jenis materi.
     *
     * video : tempat untuk integrasi video.
     * pdf   : tempat untuk menampilkan dokumen PDF.
     * quiz  : tempat untuk mengembangkan kuis interaktif.
     */
    if (lesson.type === "video") {
      placeholder.textContent =
        "Area video pembelajaran. Tambahkan video lokal pada tahap berikutnya.";
    } else if (lesson.type === "pdf") {
      placeholder.textContent =
        "Area materi bacaan. Hubungkan dokumen PDF yang sesuai.";
    } else {
      placeholder.textContent =
        "Area kuis. Fitur soal dan penilaian dapat ditambahkan kemudian.";
    }

    // Memasukkan teks placeholder ke area media.
    media.append(placeholder);

    // ========================================================
    // BAGIAN 8: TOMBOL STATUS PENYELESAIAN MATERI
    // ========================================================

    // Membuat tombol untuk menandai materi selesai atau belum.
    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.className = "btn-primary mt-6";

    /**
     * Label tombol mengikuti status materi saat ini.
     * Materi selesai     : "Tandai Belum Selesai".
     * Materi belum selesai: "Tandai sebagai Selesai".
     */
    completeButton.textContent = completed.includes(activeLesson)
      ? "Tandai Belum Selesai"
      : "Tandai sebagai Selesai";

    // Menangani perubahan status penyelesaian materi.
    completeButton.addEventListener("click", () => {

      // Jika sudah selesai, hapus indeks dari daftar completed.
      if (completed.includes(activeLesson)) {
        completed = completed.filter(
          (index) => index !== activeLesson
        );
      } else {
        // Jika belum selesai, tambahkan indeks materi ke daftar.
        completed.push(activeLesson);
      }

      // Menyimpan perubahan progres ke localStorage.
      saveProgress();

      // Memperbarui status pada daftar materi.
      renderList();

      // Memperbarui label tombol dan konten materi.
      renderLesson();

      // Menghitung ulang progres keseluruhan.
      updateProgress();
    });

    // Memasukkan seluruh elemen ke area konten materi.
    content.append(heading, description, meta, media, completeButton);
  }

  // ==========================================================
  // BAGIAN 9: INISIALISASI TAMPILAN
  // ==========================================================

  /**
   * Menjalankan seluruh fungsi render saat halaman dibuka.
   *
   * Urutan:
   * 1. Menampilkan daftar materi.
   * 2. Menampilkan materi pertama sebagai materi aktif.
   * 3. Menampilkan progres berdasarkan data tersimpan.
   */
  renderList();
  renderLesson();
  updateProgress();
});
