export const profile = {
  name: "Muhamad Haekal",
  firstName: "Muhamad Haekal",
  role: "Software Engineer",
  school: "SMK Negeri 10 Jakarta — Rekayasa Perangkat Lunak",
  tagline:
    "Siswa kelas XII RPL dengan minat kuat di Quality Assurance dan IT Infrastructure, terbuka untuk kesempatan PKL.",
  bio: "Saya siswa kelas XII SMKN 10 Jakarta jurusan Rekayasa Perangkat Lunak dengan minat kuat di bidang Quality Assurance dan IT Infrastructure, dan berharap dapat belajar banyak hal baru melalui program PKL.",
  location: "Pancoran, Jakarta Selatan, Indonesia",
  phone: "+62-8571-9991-893",
  email: "belajarhaekal@gmail.com",
  github: "https://github.com/Muhamad-Haekal",
  instagram: "https://instagram.com/haekal_muhh",
  cvUrl: "https://drive.google.com/file/d/1LN4H3fpL-eaSCXMSxruzLa6tfOH4JzRK/view?usp=drivesdk",
  avatar: "/profile.jpg",
  avatarInitials: "MH",
};

export const stats = [
  { label: "Proyek Dibangun", value: "3+" },
  { label: "Sertifikasi & Pelatihan", value: "2" },
  { label: "Tahun Belajar RPL", value: "2" },
];

export const about = {
  paragraphs: [
    profile.bio,
    "Selama masa sekolah, saya aktif di Pramuka SMKN 10 Jakarta untuk mengasah kepemimpinan dan kerja tim, serta pernah meraih Juara 2 Film Dokumenter Tingkat Nasional bertema kepramukaan.",
  ],
  focusAreas: ["Quality Assurance", "IT Infrastructure", "Cyber Security"],
};

export const education = [
  {
    period: "2024 — Sekarang",
    title: "SMK Negeri 10 Jakarta",
    subtitle: "Rekayasa Perangkat Lunak",
  },
  {
    period: "2021 — 2024",
    title: "MTs Jauharotun Naqiyah",
    subtitle: "Jakarta Timur",
  },
];

export const experience = [
  {
    period: "2025 — 2026",
    title: "IT Support — TEFA SMK Negeri 10 Jakarta",
    description:
      "Menangani troubleshooting laptop serta mempelajari hardware dan jaringan, memperkuat minat di bidang IT Infrastructure.",
  },
  {
    period: "2024 — Sekarang",
    title: "Pelatihan Cyber Security — SMK Negeri 10 Jakarta",
    description:
      "Mempelajari dasar-dasar keamanan sistem dan bug hunting, memperkuat minat di bidang Quality Assurance.",
  },
  {
    period: "2024 — Sekarang",
    title: "Pramuka SMKN 10 Jakarta",
    description:
      "Terlibat aktif dalam kegiatan kepramukaan, kepemimpinan, dan pengembangan karakter.",
  },
];

export const achievements = [
  {
    period: "2024 — Sekarang",
    title: "Juara 2 Film Dokumenter Tingkat Nasional",
    description:
      "Meraih juara kedua dalam kompetisi film dokumenter bertema kepramukaan di tingkat nasional.",
  },
];

export const skills = [
  { name: "Flutter & Go" },
  { name: "React & React Native" },
  { name: "JavaScript" },
  { name: "HTML & CSS" },
  { name: "MySQL" },
  { name: "Tailwind CSS" },
  { name: "Hardware Troubleshooting" },
  { name: "Cyber Security" },
  { name: "Kerja Tim & Komunikasi" },
];

export const services = [
  {
    title: "Front-End Development",
    description:
      "Membangun antarmuka web dan mobile yang rapi dan responsif memakai React, React Native, dan Tailwind CSS.",
  },
  {
    title: "Quality Assurance",
    description:
      "Menguji fungsionalitas aplikasi, menemukan bug, dan memastikan produk berjalan sesuai yang diharapkan.",
  },
  {
    title: "IT Support & Infrastructure",
    description:
      "Troubleshooting perangkat keras dan jaringan, dengan pemahaman dasar keamanan sistem.",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "SportBook",
    description:
      "Aplikasi pemesanan lapangan olahraga dengan backend layanan yang menangani jadwal dan pemesanan pengguna.",
    stack: ["Flutter", "Go", "MySQL"],
    image: "/sportbook.png",
    link: "#",
    repo: "https://github.com/Muhamad-Haekal/SportBook",
  },
  {
    id: "02",
    title: "Katalog Film",
    description:
      "Aplikasi mobile untuk menjelajah dan menyimpan daftar film favorit, dibangun dengan React Native.",
    stack: ["React Native", "Expo"],
    link: "#",
    repo: "https://github.com/Muhamad-Haekal/Katalog-Film",
  },
  {
    id: "03",
    title: "Quranly",
    description:
      "Aplikasi web untuk membaca Al-Qur'an dengan tampilan yang bersih dan mudah dinavigasi.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    image: "/quranly.png",
    link: "#",
    repo: "https://github.com/Muhamad-Haekal/Quranly",
  },
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Telepon", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { label: "GitHub", value: "Lihat profil", href: profile.github },
];
