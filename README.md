# Portofolio Web — Muhamad Haekal

Portofolio dengan desain modern gradient dark theme (mengikuti referensi video yang kamu kirim), dibangun pakai Next.js + Tailwind CSS.

## 1. Cara Menjalankan di Komputer Kamu

Pastikan sudah install [Node.js](https://nodejs.org/) versi 18 ke atas. Cek dengan:

```bash
node -v
```

Lalu buka folder proyek ini di terminal, dan jalankan:

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 2. WAJIB dilakukan sebelum publish

Data kamu sudah aku isi dari CV (nama, sekolah, pendidikan, pengalaman, skill, prestasi). Yang masih perlu kamu lengkapi di `data/content.ts`:

- **`profile.github`** — ganti `"https://github.com/"` dengan link profil GitHub kamu
- **`profile.linkedin`** dan **`profile.instagram`** — isi kalau punya, atau hapus dari `Hero.tsx`/`Footer.tsx` kalau tidak dipakai
- **`profile.cvUrl`** — link Google Drive ke file CV kamu (atur sharing "Anyone with the link")
- **Link GitHub tiap proyek** — di array `projects`, tiap project punya field `repo`. Ganti `"https://github.com/"` dengan link repo asli proyek SportBook, Katalog Film, dan Quranly kamu
- **`link`** (demo) di tiap proyek — isi kalau proyeknya sudah online, atau hapus field-nya kalau belum ada demo

Foto profil sudah otomatis diambil dari CV kamu dan disimpan di `public/profile.png`. Kalau mau ganti foto, cukup timpa file itu dengan foto baru (nama file harus tetap `profile.png`, atau ganti juga path-nya di `profile.avatar` pada `data/content.ts`).

## 3. Formulir Kontak

Form di bagian Contact saat ini baru tampilan saja (belum benar-benar mengirim email). Supaya berfungsi, cara termudah dan gratis:

1. Daftar di [formspree.io](https://formspree.io) atau [web3forms.com](https://web3forms.com)
2. Buat form baru, salin URL endpoint yang diberikan
3. Di `components/Contact.tsx`, ganti fungsi `handleSubmit` agar mengirim `fetch` ke endpoint tersebut (dokumentasi lengkap ada di situs masing-masing layanan)

## 4. Deploy Gratis ke Vercel

**Cara termudah (lewat GitHub):**

1. Buat repository baru di [GitHub](https://github.com/new), lalu upload folder proyek ini.
2. Buka [vercel.com](https://vercel.com), login pakai akun GitHub.
3. Klik **Add New → Project**, pilih repository portofolio kamu.
4. Framework Preset otomatis terdeteksi sebagai **Next.js** — biarkan default, klik **Deploy**.
5. Tunggu ± 1 menit, kamu dapat link seperti `https://portofolio-kamu.vercel.app`.

**Cara alternatif (lewat CLI):**

```bash
npm install -g vercel
vercel login
vercel
```

Setiap update, jalankan `vercel --prod`.

## 5. Struktur Folder

```
app/
  layout.tsx        → wrapper utama + judul tab browser
  page.tsx           → menyusun urutan section
  globals.css         → font & style global
components/
  Navbar.tsx          → navigasi atas
  Hero.tsx            → perkenalan + foto + blob gradient
  About.tsx            → tentang saya + statistik
  Skills.tsx           → grid keterampilan
  Services.tsx          → fokus area / layanan
  Projects.tsx          → galeri proyek
  Experience.tsx         → timeline pengalaman, pendidikan, prestasi
  Contact.tsx            → form & info kontak
  Footer.tsx              → footer
  FadeIn.tsx               → animasi muncul saat scroll
data/
  content.ts               → SEMUA teks & data kamu (edit di sini)
public/
  profile.png                → foto profil (diambil dari CV)
```

## 6. Kustomisasi Warna (opsional)

Warna diatur di `tailwind.config.js` bagian `colors.ink` (background gelap) dan `colors.brand` (biru/ungu/cyan). Ganti kode hex-nya sesuai selera.

---

Semangat PKL-nya! 🚀
