import { PricingPlan, AdditionalServicePrice } from "@/types";
import { formatRupiah } from "@/lib/format-price";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 420000,
    formattedPrice: formatRupiah(420000),
    pageLimit: 3,
    revisions: 2,
    supportDays: 14,
    popular: false,
    description:
      "Solusi website sederhana untuk bisnis yang baru memulai membangun kehadiran digital.",
    features: [
      "Maksimal 3 halaman utama",
      "Desain responsif mobile & desktop",
      "Landing page atau company profile sederhana",
      "Integrasi tombol WhatsApp langsung",
      "Konfigurasi SEO dasar",
      "Optimasi kecepatan loading",
      "2 kali revisi pengerjaan",
      "Dukungan teknis 14 hari pasca-peluncuran",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.basic,
  },
  {
    id: "professional",
    name: "Professional",
    price: 650000,
    formattedPrice: formatRupiah(650000),
    pageLimit: 7,
    revisions: 3,
    supportDays: 30,
    popular: true,
    badge: "PALING DIREKOMENDASIKAN",
    description:
      "Website profesional untuk bisnis yang ingin meningkatkan kredibilitas dan memperluas jangkauan digital.",
    features: [
      "Maksimal 7 halaman kustom",
      "Desain UI/UX profesional & futuristik",
      "Company profile & showcase produk/layanan",
      "Halaman layanan spesifik & formulir kontak WhatsApp",
      "Modul artikel/blog statis terintegrasi",
      "Integrasi interaktif WhatsApp & Social Media",
      "SEO on-page menyeluruh & meta tags",
      "XML Sitemap & Schema Markup terpasang",
      "Optimasi performa & Core Web Vitals",
      "3 kali revisi terarah",
      "Dukungan teknis 30 hari pasca-peluncuran",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.professional,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 1200000,
    formattedPrice: formatRupiah(1200000),
    pageLimit: 12,
    revisions: 4,
    supportDays: 60,
    popular: false,
    description:
      "Solusi website custom untuk kebutuhan bisnis dengan struktur dan kebutuhan yang lebih kompleks.",
    features: [
      "Maksimal 12 halaman custom",
      "Desain UI/UX bespoke eksklusif",
      "Animasi premium & micro-interactions halus",
      "Struktur arsitektur halaman kompleks",
      "Modul artikel / portfolio showcase dinamis",
      "1 integrasi API eksternal sederhana (WhatsApp / Email / Maps)",
      "SEO teknis, on-page lanjutan & structured data",
      "Optimasi performa high-tier",
      "4 kali revisi mendalam",
      "Dukungan prioritas 60 hari pasca-peluncuran",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.enterprise,
  },
];

export const pricingTerms =
  "Harga paket merupakan biaya pengerjaan sesuai ruang lingkup yang tercantum. Biaya domain, hosting, VPS, lisensi berbayar, layanan pihak ketiga, serta kebutuhan tambahan di luar paket dihitung secara terpisah kecuali dinyatakan lain.";

export const additionalServicePrices: AdditionalServicePrice[] = [
  {
    id: "ai-bot",
    name: "AI Customer Service & WhatsApp Chatbot",
    category: "AI & Otomasi",
    startingPrice: "Mulai Rp750.000",
    description:
      "Bot otomatis cerdas untuk menjawab pertanyaan calon pelanggan 24/7 dan mengarahkan prospek penjualan.",
    isSimulated: true,
    notes: "Estimasi biaya implementasi awal; biaya token/API pihak ketiga disesuaikan pemakaian.",
  },
  {
    id: "custom-software",
    name: "CMS Custom & REST API Development",
    category: "Software Development",
    startingPrice: "Mulai Rp1.500.000",
    description:
      "Pengembangan sistem backend, dashboard operasional internal, atau integrasi endpoint data kustom.",
    isSimulated: true,
    notes: "Disesuaikan dengan kompleksitas skema database dan alur bisnis operasional.",
  },
  {
    id: "digital-marketing",
    name: "Manajemen Iklan Meta, TikTok & YouTube Ads",
    category: "Digital Marketing",
    startingPrice: "Mulai Rp500.000 / campaign",
    description:
      "Riset audiens, copywriting iklan, setup pixel, tracking konversi, dan optimasi performa kampanye.",
    isSimulated: true,
    notes: "Biaya jasa pengelolaan terpisah dari anggaran iklan (ad spend) yang disetorkan langsung ke platform iklan.",
  },
  {
    id: "infrastructure",
    name: "Setup Domain, Cloud Hosting & VPS Server",
    category: "Digital Infrastructure",
    startingPrice: "Mulai Rp350.000 / tahun",
    description:
      "Penyediaan domain bisnis (.com, .id, .co.id), setup hosting berkecepatan tinggi, SSL keamanan, atau konfigurasi VPS Linux.",
    isSimulated: true,
    notes: "Harga bervariasi sesuai spesifikasi resource RAM/CPU dan ekstensi domain.",
  },
  {
    id: "maintenance",
    name: "Paket Pemeliharaan Rutin (Website Maintenance)",
    category: "Maintenance",
    startingPrice: "Mulai Rp250.000 / bulan",
    description:
      "Pembaruan konten berkala, perbaikan bug, audit dependency, backup data terjadwal, dan monitoring uptime.",
    isSimulated: true,
    notes: "Tersedia opsi kontrak bulanan atau tahunan dengan diskon khusus.",
  },
];
