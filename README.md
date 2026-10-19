# SkillHub — LMS Corporate Training

SkillHub adalah prototype website **Learning Management System (LMS)** yang dirancang untuk membantu perusahaan menyediakan pelatihan terstruktur bagi karyawannya. Website ini memungkinkan pengguna menjelajahi kursus, melihat progres pembelajaran, mengakses materi, dan menandai pelajaran yang telah diselesaikan.

Proyek ini dikembangkan sebagai bagian dari pembelajaran **Full Stack Web Development**, dengan fokus pada struktur HTML semantik, responsive web design, Tailwind CSS, dan interaktivitas menggunakan JavaScript.

## 📌 Fitur Utama

### 1. Landing Page
- Menampilkan identitas dan pengenalan platform SkillHub.
- Menyediakan navigasi ke bagian Home, Courses, About, dan Contact.
- Menampilkan daftar kursus pelatihan.
- Menyediakan tombol untuk masuk ke halaman dashboard.
- Memiliki navigasi hamburger pada tampilan mobile.
- Menggunakan sticky navbar agar navigasi tetap mudah diakses saat halaman digulir.

### 2. Student Dashboard
- Menampilkan profil karyawan atau peserta pelatihan.
- Menyediakan ringkasan progres pembelajaran.
- Menampilkan daftar tugas dan informasi statusnya.
- Menampilkan progres kursus melalui indikator visual.
- Menyediakan navigasi menuju halaman materi pembelajaran.

### 3. Learning Materials
- Menampilkan daftar pelajaran dalam suatu modul.
- Memungkinkan pengguna memilih pelajaran untuk melihat kontennya.
- Menyediakan fitur menandai pelajaran sebagai selesai atau belum selesai.
- Memperbarui progres penyelesaian materi berdasarkan status pelajaran.
- Menyimpan status penyelesaian materi menggunakan browser `localStorage`.

## 🛠️ Teknologi yang Digunakan

- HTML5: Menyusun struktur halaman website menggunakan elemen semantik.
- CSS3: Mengatur styling dan tampilan website agar lebih menarik.
- Tailwind CSS v3: Membuat layout, komponen, dan desain responsif menggunakan utility classes.
- JavaScript (Vanilla JS): Mengatur interaksi pengguna dan pembaruan konten halaman secara dinamis.
- Node.js & npm: Menjalankan perintah build serta mendukung proses pengembangan Tailwind CSS.
- LocalStorage: Menyimpan status penyelesaian materi pembelajaran pada browser pengguna.

## 📁 Struktur Folder

```text
lms-corporate-training/
├── assets/
│   ├── images/
│   └── videos/
├── css/
│   ├── input.css
│   └── output.css
├── js/
│   ├── main.js
│   ├── dashboard.js
│   └── learning-material.js
├── pages/
│   ├── dashboard.html
│   └── learning-material.html
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Penjelasan Folder dan File

- `index.html` — halaman utama atau landing page SkillHub.
- `pages/dashboard.html` — halaman dashboard peserta pelatihan.
- `pages/learning-material.html` — halaman materi pembelajaran.
- `assets/images/` — direktori untuk menyimpan aset gambar.
- `assets/videos/` — direktori untuk menyimpan aset video.
- `css/input.css` — file sumber CSS yang berisi direktif Tailwind dan styling kustom.
- `css/output.css` — file CSS hasil proses build Tailwind yang digunakan oleh halaman website.
- `js/main.js` — mengatur interaksi umum, termasuk hamburger menu dan navigasi sidebar jika tersedia pada halaman.
- `js/dashboard.js` — file JavaScript untuk fungsionalitas dashboard.
- `js/learning-material.js` — mengatur daftar pelajaran, konten materi, status penyelesaian, dan progres pembelajaran.
- `tailwind.config.js` — mengatur lokasi file yang dipindai Tailwind dan konfigurasi tema.
- `postcss.config.js` — konfigurasi PostCSS untuk pemrosesan CSS.
- `package.json` — menyimpan konfigurasi proyek dan perintah npm.
- `package-lock.json` — mengunci versi dependensi yang terpasang.

## 🚀 Instalasi dan Menjalankan Proyek

### Prasyarat

Pastikan perangkat Anda sudah memiliki:
- [Node.js dan npm](https://nodejs.org/)
- Visual Studio Code atau editor kode sejenis.
- Browser modern seperti Google Chrome atau Microsoft Edge.

### 1. Buka Folder Proyek

Buka folder `lms-corporate-training` melalui Visual Studio Code.

### 2. Instal Dependensi

Buka terminal pada root folder proyek, kemudian jalankan:

```bash
npm install
```

Perintah ini memasang dependensi yang tercantum dalam `package.json`.

### 3. Build Tailwind CSS

Jalankan perintah berikut untuk menghasilkan atau memperbarui file `css/output.css`:

```bash
npm run build:css
```

### 4. Jalankan Mode Development

Untuk membuat Tailwind memantau perubahan pada file yang dikonfigurasi, jalankan:

```bash
npm run watch:css
```

Biarkan terminal tetap berjalan selama pengembangan agar perubahan class Tailwind dapat diproses otomatis.

### 5. Buka Website

Buka `index.html` melalui ekstensi **Live Server** di Visual Studio Code atau buka file tersebut langsung di browser.

Untuk pengalaman pengembangan yang lebih nyaman, disarankan menggunakan Live Server.

## 🧭 Panduan Penggunaan

1. **Buka landing page.** Pengguna akan melihat pengenalan SkillHub dan daftar kursus.
2. **Jelajahi halaman.** Gunakan navigasi untuk menuju bagian Courses, About, atau Contact.
3. **Buka dashboard.** Klik tombol Sign In atau Mulai Sekarang untuk menuju halaman dashboard prototype.
4. **Lihat progres pembelajaran.** Periksa ringkasan kursus dan daftar tugas pada dashboard.
5. **Buka materi pembelajaran.** Pilih My Course atau tautan materi yang tersedia.
6. **Pilih pelajaran.** Klik salah satu pelajaran pada daftar untuk melihat kontennya.
7. **Tandai pelajaran selesai.** Gunakan kontrol penyelesaian materi untuk memperbarui progres.
8. **Lanjutkan pembelajaran.** Status penyelesaian yang disimpan pada `localStorage` dapat tetap tersedia ketika halaman dibuka kembali menggunakan browser yang sama.

## 📱 Responsive Design

SkillHub dirancang agar dapat digunakan pada berbagai ukuran layar:
- **Desktop:** menampilkan navigasi utama dan layout konten yang lebih luas.
- **Tablet:** menyesuaikan susunan elemen agar tetap nyaman dibaca.
- **Mobile:** menggunakan layout yang lebih ringkas dan hamburger menu untuk navigasi.

Tampilan responsif dibuat menggunakan utility classes Tailwind CSS dan breakpoint yang sesuai.

## ⚙️ Catatan Teknis

- File `css/output.css` merupakan hasil generate Tailwind CSS. Hindari mengedit file ini secara manual karena perubahan dapat tertimpa ketika proses build dijalankan.
- Styling kustom dan direktif Tailwind dikelola melalui `css/input.css`.
- Jika menambahkan class Tailwind baru ke HTML atau JavaScript, jalankan proses build atau pastikan mode watch sedang aktif.
- Data penyelesaian materi disimpan secara lokal melalui browser `localStorage`, bukan database server.
- Tombol Sign In saat ini hanya mengarahkan pengguna ke dashboard. Sistem autentikasi dan manajemen akun belum diimplementasikan.
- Konten kursus, tugas, profil, dan materi yang ditampilkan merupakan data prototype, kecuali jika suatu bagian sudah dihubungkan dengan sumber data lain.

## 🔒 Batasan Proyek

Versi ini berfokus pada prototype antarmuka dan interaktivitas frontend. Beberapa fitur yang belum tersedia secara penuh antara lain:

- Backend API dan database untuk menyimpan data pengguna.
- Autentikasi, registrasi, dan otorisasi berbasis peran.
- Dashboard administrator atau pengelola pelatihan.
- Sistem pengumpulan dan penilaian tugas yang terhubung ke server.
- Penyimpanan progres lintas perangkat dan akun.
- Integrasi video pembelajaran atau dokumen materi secara penuh jika asetnya belum ditambahkan.

Fitur-fitur tersebut dapat dikembangkan pada tahap selanjutnya untuk menjadikan SkillHub sebagai aplikasi LMS full-stack.

## 🔮 Pengembangan Selanjutnya

Beberapa pengembangan yang dapat dipertimbangkan:
- Membangun backend menggunakan Node.js dan Express.
- Mengintegrasikan database seperti MySQL atau PostgreSQL.
- Membuat sistem login dan role-based access control.
- Menambahkan fitur CRUD untuk kursus, modul, tugas, dan pengguna.
- Mengintegrasikan video pembelajaran serta kuis interaktif.
- Menghubungkan progres belajar dengan database.
- Menambahkan validasi, unit testing, dan pengujian end-to-end.

## 👨‍💻 Tujuan Pembelajaran

Melalui proyek ini, pengembang berlatih untuk:
- Menyusun halaman web dengan HTML semantik.
- Membangun desain responsif menggunakan Tailwind CSS.
- Mengelola file dan struktur proyek frontend.
- Membuat interaksi halaman dengan JavaScript.
- Memanipulasi DOM dan menggunakan `localStorage`.
- Menyusun dokumentasi proyek yang siap dipublikasikan ke GitHub.

---

**SkillHub — Learn, Grow, and Succeed.**

*Prototype LMS Corporate Training untuk pembelajaran dan pengembangan keterampilan karyawan.*