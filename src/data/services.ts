import { ServiceCategory } from "@/types";

export const servicesData: ServiceCategory[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    badge: "Solusi Utama",
    shortDescription:
      "Membangun website profesional, modern, responsif, dan berorientasi konversi untuk memperkuat kehadiran digital bisnis Anda.",
    description:
      "Membangun website profesional yang dirancang untuk memperkuat identitas bisnis, meningkatkan kredibilitas, dan mempermudah pelanggan menemukan informasi mengenai produk atau layanan.",
    iconName: "Globe",
    subServices: [
      "Company Profile Website",
      "High-Converting Landing Page",
      "E-Commerce Website",
      "Custom Web Application",
      "Website Redesign & Upgrade",
    ],
    benefits: [
      {
        title: "Tingkatkan Kredibilitas Bisnis",
        description:
          "Website dengan desain futuristik dan profesional membangun kepercayaan instan bagi calon pelanggan dan mitra bisnis.",
      },
      {
        title: "Optimasi Mobile & Kecepatan",
        description:
          "Didesain mobile-first dengan waktu muat ultra-cepat untuk pengalaman pengguna maksimal dan Core Web Vitals optimal.",
      },
      {
        title: "Struktur SEO Ready",
        description:
          "Pondasi ramah mesin pencari sejak awal, memudahkan website Anda diindeks dan ditemukan di halaman pencarian Google.",
      },
      {
        title: "Konversi Menuju WhatsApp",
        description:
          "Tombol aksi langsung mengarahkan pengunjung menjadi prospek nyata ke nomor WhatsApp bisnis Anda.",
      },
    ],
    features: [
      "Arsitektur modern berbasis Next.js & TypeScript",
      "Desain Glassmorphism responsif di semua resolusi",
      "Integrasi formulir interaktif & tautan WhatsApp otomatis",
      "Optimasi gambar, aset, dan skrip untuk performa tinggi",
      "Setup Google Analytics, Search Console, & Sitemap XML",
      "Keamanan standar tinggi tanpa celah database eksternal",
    ],
    workflow: [
      {
        step: 1,
        title: "Analisis Kebutuhan",
        description: "Mendiskusikan profil bisnis, audiens target, dan struktur halaman yang dibutuhkan.",
      },
      {
        step: 2,
        title: "Perancangan UI/UX",
        description: "Menyusun tata letak visual, komposisi warna, dan hierarki navigasi yang intuitif.",
      },
      {
        step: 3,
        title: "Coding & Implementasi",
        description: "Pengembangan menggunakan kode bersih Next.js, animasi interaktif, dan performa tinggi.",
      },
      {
        step: 4,
        title: "Review & Peluncuran",
        description: "Pengujian lintas perangkat, penyempurnaan revisi, dan deployment ke server produksi.",
      },
    ],
    faqs: [
      {
        question: "Berapa lama proses pembuatan website?",
        answer:
          "Untuk paket Basic rata-rata 3–5 hari kerja, paket Professional 7–12 hari kerja, dan paket custom disesuaikan dengan skala kompleksitas fitur.",
      },
      {
        question: "Apakah website sudah bisa dibuka dengan baik di ponsel?",
        answer:
          "Tentu. Semua website dibangun dengan pendekatan mobile-first sehingga tampil rapi dan nyaman digunakan di ponsel, tablet, maupun desktop.",
      },
      {
        question: "Apakah saya bisa mengubah konten di kemudian hari?",
        answer:
          "Bisa. Kami menyusun struktur konfigurasi yang teratur dan menyediakan dukungan purna jual serta opsi maintenance berkala.",
      },
    ],
    relatedSlugs: ["digital-marketing", "ai-automation", "digital-infrastructure"],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    badge: "Teknologi Cerdas",
    shortDescription:
      "Otomatisasi pelayanan pelanggan dan percakapan bisnis dengan teknologi kecerdasan buatan untuk efisiensi 24/7.",
    description:
      "Menghadirkan solusi otomasi dan kecerdasan buatan untuk membantu bisnis meningkatkan efisiensi komunikasi serta pelayanan pelanggan.",
    iconName: "Bot",
    subServices: [
      "AI Customer Service",
      "AI Chatbot Interaktif",
      "Chatbot WhatsApp Otomatis",
      "Lead Qualification Assistant",
      "Automated FAQ Responder",
    ],
    benefits: [
      {
        title: "Pelayanan Pelanggan 24 Jam Nonstop",
        description:
          "Calon pelanggan mendapatkan jawaban instan kapan saja tanpa harus menunggu admin aktif secara manual.",
      },
      {
        title: "Efisiensi Biaya Operasional",
        description:
          "Mengurangi beban kerja repetitif tim customer care sehingga fokus pada penjualan bernilai tinggi.",
      },
      {
        title: "Penyaringan Prospek Cepat",
        description:
          "Sistem otomatis mengidentifikasi kebutuhan pelanggan sebelum diteruskan ke admin penutup transaksi.",
      },
      {
        title: "Respon Konsisten & Akurat",
        description:
          "Informasi produk, harga, dan panduan disampaikan dengan nada profesional yang seragam.",
      },
    ],
    features: [
      "Integrasi webhook WhatsApp Business",
      "Knowledge base khusus yang dilatih dengan data produk Anda",
      "Kemampuan eskalasi langsung ke customer service manusia",
      "Skenario percakapan cabang (conditional logic) yang fleksibel",
      "Dashboard analitik log percakapan dan ringkasan pertanyaan",
    ],
    workflow: [
      {
        step: 1,
        title: "Eksplorasi Skenario",
        description: "Mengumpulkan daftar FAQ, pola pertanyaan pelanggan, dan tujuan automasi.",
      },
      {
        step: 2,
        title: "Pelatihan Model & Aturan",
        description: "Mengonfigurasi prompt AI dan integrasi logic percakapan yang aman.",
      },
      {
        step: 3,
        title: "Uji Coba Percakapan",
        description: "Melakukan simulasi chat untuk memastikan ketepatan dan keramahan respon bot.",
      },
      {
        step: 4,
        title: "Deploy & Integrasi",
        description: "Menyambungkan bot ke nomor WhatsApp atau widget web secara aktif.",
      },
    ],
    faqs: [
      {
        question: "Apakah AI chatbot bisa salah menjawab pertanyaan?",
        answer:
          "Kami menerapkan batasan ketat (system prompt guardrails) agar AI hanya menjawab sesuai sumber pengetahuan bisnis Anda dan mengarahkan ke CS manusia bila di luar materi.",
      },
      {
        question: "Apakah nomor WhatsApp biasa bisa digunakan untuk chatbot?",
        answer:
          "Direkomendasikan menggunakan nomor khusus WhatsApp Business agar integrasi API berjalan optimal tanpa mengganggu nomor pribadi Anda.",
      },
    ],
    relatedSlugs: ["web-development", "software-development"],
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    badge: "Solusi Kustom",
    shortDescription:
      "Pengembangan sistem software kustom, CMS, dan arsitektur REST API untuk menyederhanakan proses bisnis internal.",
    description:
      "Mengembangkan sistem perangkat lunak dan integrasi API sesuai kebutuhan operasional bisnis.",
    iconName: "Code2",
    subServices: [
      "Custom CMS Development",
      "RESTful API Development",
      "Third-party API Integration",
      "Internal Business Dashboards",
      "Database Modeling & Optimization",
    ],
    benefits: [
      {
        title: "Sesuai Alur Kerja Unik Bisnis",
        description:
          "Sistem dirancang mengikuti aturan main bisnis Anda, bukan memaksa bisnis menyesuaikan software template kaku.",
      },
      {
        title: "Skalabilitas Jangka Panjang",
        description:
          "Arsitektur modular yang siap tumbuh seiring pertambahan volume transaksi dan pengguna.",
      },
      {
        title: "Integrasi Lintas Platform",
        description:
          "Menghubungkan website, sistem inventaris, payment gateway, dan CRM melalui API handal.",
      },
    ],
    features: [
      "RESTful API standar industri dengan dokumentasi jelas",
      "Autentikasi aman berbasis JWT/OAuth",
      "Validasi data berlapis di sisi server",
      "Clean architecture yang mudah dirawat developer lain",
    ],
    workflow: [
      {
        step: 1,
        title: "SRS & Skema Data",
        description: "Memetakan entitas data, endpoint API, dan alur otorisasi hak akses pengguna.",
      },
      {
        step: 2,
        title: "Core Implementation",
        description: "Pembangunan backend logic, endpoint service, dan unit testing fungsionalitas.",
      },
      {
        step: 3,
        title: "Integrasi & UAT",
        description: "Menghubungkan frontend UI dengan backend serta pengujian beban performa.",
      },
      {
        step: 4,
        title: "Dokumentasi & Serah Terima",
        description: "Menyediakan panduan integrasi API dan panduan operasional sistem.",
      },
    ],
    faqs: [
      {
        question: "Teknologi backend apa yang biasa digunakan?",
        answer:
          "Kami terbiasa menggunakan TypeScript, Node.js, Next.js API Routes, Express, PostgreSQL, MySQL, maupun serverless cloud functions.",
      },
      {
        question: "Apakah kode sumber (source code) menjadi hak milik klien?",
        answer:
          "Ya, seluruh source code hasil pengerjaan kustom diserahkan sepenuhnya kepada klien.",
      },
    ],
    relatedSlugs: ["web-development", "digital-infrastructure"],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    badge: "Akselerasi Penjualan",
    shortDescription:
      "Layanan pemasaran digital terintegrasi melalui Meta Ads, TikTok Ads, dan YouTube Ads untuk menjangkau pembeli potensial.",
    description:
      "Membantu bisnis menjangkau calon pelanggan melalui strategi pemasaran digital dan kampanye periklanan pada platform media sosial. Keunggulan utama kami: kami tidak hanya membuat website, tetapi juga membantu Anda memasarkannya secara terukur.",
    iconName: "TrendingUp",
    subServices: [
      "Meta Ads (Facebook & Instagram Advertising)",
      "TikTok Ads Campaign Management",
      "YouTube Video Ads & Discovery Ads",
      "Landing Page Funnel Optimization",
      "Pixel & Conversion Tracking Setup",
    ],
    benefits: [
      {
        title: "Sinergi Website & Iklan Terpadu",
        description:
          "Website yang baru dibuat langsung dipadukan dengan strategi periklanan terukur tanpa perlu mencari agency terpisah.",
      },
      {
        title: "Target Audiens Tertarget",
        description:
          "Iklan ditargetkan berdasarkan demografi, minat, dan perilaku pengguna yang paling berpotensi membeli produk Anda.",
      },
      {
        title: "Pelacakan Konversi Akurat",
        description:
          "Pemasangan Meta Pixel dan TikTok Pixel untuk melacak setiap klik, view konten, dan chat WhatsApp yang masuk.",
      },
      {
        title: "Optimasi Biaya Per Prospek",
        description:
          "A/B testing materi kreatif iklan dan penyesuaian bidding untuk memaksimalkan return on ad spend (ROAS).",
      },
    ],
    features: [
      "Riset kompetitor dan angle copywriting persuasif",
      "Penyusunan format visual iklan feed, reels, dan story",
      "Setup Business Manager, Ad Account, dan integrasi domain",
      "Laporan evaluasi performa kampanye berkala",
    ],
    workflow: [
      {
        step: 1,
        title: "Briefing Produk & Audiens",
        description: "Menentukan keunggulan utama produk, target konsumen, dan penawaran khusus.",
      },
      {
        step: 2,
        title: "Persiapan Aset Iklan",
        description: "Membuat teks copywriting, materi grafis/video, serta setup tracking pixel.",
      },
      {
        step: 3,
        title: "Peluncuran Kampanye",
        description: "Menjalankan iklan dengan alokasi budget bertahap untuk fase testing awal.",
      },
      {
        step: 4,
        title: "Monitoring & Scaling",
        description: "Menganalisis matriks biaya per chat/lead dan memperbesar alokasi pada iklan pemenang.",
      },
    ],
    faqs: [
      {
        question: "Berapa anggaran iklan yang disarankan untuk pemula?",
        answer:
          "Untuk pengujian awal Meta atau TikTok Ads, kami menyarankan anggaran harian mulai dari Rp50.000 hingga Rp100.000 agar sistem algoritma memiliki data pembelajaran yang cukup.",
      },
      {
        question: "Apakah biaya jasa sudah termasuk anggaran saldo iklan?",
        answer:
          "Tidak. Biaya jasa pengelolaan terpisah dari saldo iklan (ad spend) yang dibayarkan langsung menggunakan kartu kredit/debit ke pihak Meta atau TikTok.",
      },
    ],
    relatedSlugs: ["web-development", "digital-infrastructure"],
  },
  {
    id: "digital-infrastructure",
    slug: "digital-infrastructure",
    title: "Digital Infrastructure",
    badge: "Pondasi Handal",
    shortDescription:
      "Penyediaan domain bisnis, cloud web hosting, VPS server berkecepatan tinggi, dan sertifikat keamanan SSL.",
    description:
      "Menyediakan kebutuhan infrastruktur digital agar website dan aplikasi bisnis dapat berjalan secara optimal dengan uptime maksimal.",
    iconName: "Server",
    subServices: [
      "Registrasi Domain Bisnis (.com, .id, .co.id, dll)",
      "High-Speed SSD Cloud Web Hosting",
      "Virtual Private Server (VPS Linux)",
      "SSL Certificate & Security Hardening",
      "DNS Management & Email Bisnis Terkelola",
    ],
    benefits: [
      {
        title: "Uptime Stabil & Terpercaya",
        description:
          "Server berkinerja tinggi menjamin website Anda selalu dapat diakses oleh pelanggan kapan saja.",
      },
      {
        title: "Perlindungan Keamanan SSL",
        description:
          "Enkripsi HTTPS standar industri melindungi data pengunjung dan mencegah peringatan 'Not Secure' di browser.",
      },
      {
        title: "Email Profesional Berbasis Domain",
        description:
          "Gunakan alamat email berbobot seperti nama@bisnisanda.com untuk korespondensi resmi.",
      },
    ],
    features: [
      "Konfigurasi DNS Cloudflare untuk caching dan mitigasi DDoS",
      "Penyimpanan NVMe ultra-cepat untuk respon server instan",
      "Setup backup otomatis berkala",
      "Bantuan migrasi website dari hosting lama tanpa downtime",
    ],
    workflow: [
      {
        step: 1,
        title: "Pemilihan Nama & Spesifikasi",
        description: "Mengecek ketersediaan domain dan menghitung estimasi kebutuhan bandwidth serta RAM server.",
      },
      {
        step: 2,
        title: "Setup & Konfigurasi",
        description: "Melakukan instalasi OS, web server (Nginx/Apache), sertifikat SSL, dan hardening keamanan.",
      },
      {
        step: 3,
        title: "Pointing DNS & Integrasi",
        description: "Menghubungkan domain ke server dan memastikan propagasi berjalan lancar di seluruh dunia.",
      },
    ],
    faqs: [
      {
        question: "Apa bedanya Web Hosting biasa dengan VPS?",
        answer:
          "Shared hosting berbagi sumber daya server dengan pengguna lain (cocok untuk website awal). VPS memberikan resource CPU dan RAM dedicated independen untuk performa stabil dan beban trafik tinggi.",
      },
      {
        question: "Apakah domain yang dibeli menjadi kepemilikan saya?",
        answer:
          "Tentu. Domain sepenuhnya didaftarkan atas identitas kepemilikan Anda.",
      },
    ],
    relatedSlugs: ["web-development", "software-development"],
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance",
    badge: "Layanan Tambahan",
    shortDescription:
      "Layanan pemeliharaan berkala untuk menjaga website Anda tetap aman, cepat, bebas bug, dan selalu mutakhir.",
    description:
      "Menyediakan layanan pemeliharaan komprehensif mencakup update konten, perbaikan bug, update dependency, backup, monitoring, dan pemeliharaan keamanan.",
    iconName: "ShieldCheck",
    subServices: [
      "Pembaruan Konten & Banner Berkala",
      "Penanganan & Perbaikan Bug Cepat",
      "Update Dependency & Library Keamanan",
      "Backup Data Database & File Terjadwal",
      "Monitoring Uptime & Deteksi Kendala",
      "Audit Kecepatan & Pembersihan Cache",
    ],
    benefits: [
      {
        title: "Ketenangan Pikiran Tanpa Repot",
        description:
          "Anda fokus mengelola operasional bisnis, urusan teknis website diserahkan kepada tim ahli kami.",
      },
      {
        title: "Pencegahan Kerentanan Hacker",
        description:
          "Update sistem rutin menutup celah keamanan sebelum dapat dimanfaatkan pihak tak bertanggung jawab.",
      },
      {
        title: "Ketersediaan Cadangan Data",
        description:
          "Backup berkala memastikan data bisnis selalu dapat dipulihkan kapan pun dibutuhkan.",
      },
    ],
    features: [
      "Laporan ringkas status kesehatan website bulanan",
      "Prioritas penanganan kendala jika website mengalami gangguan",
      "Audit link rusak (broken link) berkala",
    ],
    workflow: [
      {
        step: 1,
        title: "Audit Awal Kondisi",
        description: "Mengevaluasi versi CMS/framework, kecepatan, dan celah keamanan yang ada.",
      },
      {
        step: 2,
        title: "Jadwal Pemeliharaan",
        description: "Menetapkan timeline backup rutin dan jendela waktu update sistem non-jam sibuk.",
      },
      {
        step: 3,
        title: "Laporan & Monitoring",
        description: "Memantau status uptime 24/7 dan memberikan ringkasan tindakan yang dilakukan.",
      },
    ],
    faqs: [
      {
        question: "Apakah website yang dibuat di tempat lain bisa menggunakan layanan maintenance ini?",
        answer:
          "Bisa, setelah kami melakukan review singkat terhadap framework dan kode sumber yang digunakan website Anda.",
      },
    ],
    relatedSlugs: ["web-development", "digital-infrastructure"],
  },
];
