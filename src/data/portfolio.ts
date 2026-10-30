import { PortfolioProject } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "demo-restaurant",
    slug: "bistro-delight-restaurant",
    title: "Bistro & Gourmet Experience",
    category: "restaurant",
    categoryLabel: "Restaurant Website",
    description:
      "Website restoran modern dengan integrasi menu interaktif, reservasi meja via WhatsApp, dan galeri hidangan responsif.",
    fullDescription:
      "Demonstrasi website kuliner premium yang memadukan estetika visual menggugah selera dengan fungsionalitas pemesanan cepat. Dilengkapi katalog menu digital dengan filter alergen, integrasi reservasi meja langsung ke WhatsApp staf resto, dan peta lokasi interaktif.",
    keyFeatures: [
      "Katalog menu makanan & minuman interaktif dengan kategori",
      "Sistem pemesanan & reservasi meja cepat terhubung ke WhatsApp",
      "Galeri foto hidangan resolusi tinggi dengan lazy loading",
      "Tampilan ulasan Google Maps & petunjuk arah",
      "Desain mobile-first untuk pelanggan yang browsing dari ponsel",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WhatsApp Integration"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
  },
  {
    id: "demo-ecommerce",
    slug: "aurora-boutique-ecommerce",
    title: "Aurora Modern Fashion Store",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "Toko online pakaian & aksesoris dengan katalog filter varian produk, cart ringkas, dan direct checkout WhatsApp.",
    fullDescription:
      "Demonstrasi platform e-commerce direct-to-consumer (D2C) yang ringan dan cepat. Mengusung konsep belanja minimalis tanpa alur checkout rumit—pengunjung dapat memilih ukuran, warna, lalu mengirim rincian order langsung ke WhatsApp admin toko dalam 1 klik.",
    keyFeatures: [
      "Katalog produk dengan filter kategori, harga, dan varian",
      "Shopping cart berbasis frontend tanpa registrasi rumit",
      "Format order otomatis ke WhatsApp beserta total tagihan",
      "Badge stok produk & integrasi promo banner",
      "Optimasi Core Web Vitals untuk konversi maksimal",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Local Storage Cart"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
  },
  {
    id: "demo-company-profile",
    slug: "nexus-corporate-consulting",
    title: "Nexus Global Consulting",
    category: "company-profile",
    categoryLabel: "Company Profile",
    description:
      "Website korporat profesional untuk firma konsultan manajemen dan legalitas bisnis dengan citra kredibel.",
    fullDescription:
      "Demonstrasi company profile korporasi kelas atas dengan tema modern dark glassmorphism. Menampilkan profil jajaran tim konsultan, ruang lingkup jasa korporat, rekam jejak studi kasus demonstrasi, dan formulir penjadwalan meeting bisnis terenkripsi.",
    keyFeatures: [
      "Desain arsitektur informasi terstruktur untuk audiens B2B",
      "Struktur profil tim profesional dan bidang keahlian",
      "Modul wawasan artikel & publikasi industri",
      "Formulir brief proyek interaktif dengan validasi data",
      "Integrasi Schema.org Organization untuk visibilitas mesin pencari",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Schema.org"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
  },
  {
    id: "demo-property",
    slug: "grand-sapphire-residence",
    title: "Grand Sapphire Living",
    category: "property",
    categoryLabel: "Property Website",
    description:
      "Landing page showcase perumahan modern dengan denah unit interaktif, kalkulator simulasi cicilan, dan booking survei.",
    fullDescription:
      "Demonstrasi website pemasaran real estate dan hunian residensial. Dirancang untuk menarik calon pembeli melalui visualisasi 3D render, spesifikasi tipe rumah, rute akses transportasi terdekat, serta formulir pendaftaran survei lokasi langsung ke tim marketing.",
    keyFeatures: [
      "Showcase tipe hunian dengan denah lantai & spesifikasi material",
      "Galeri fasilitas kawasan perumahan (clubhouse, taman, security)",
      "Simulasi estimasi cicilan sederhana untuk calon konsumen",
      "Tombol 'Jadwalkan Kunjungan Lokasi' via WhatsApp",
      "Download brosur digital dalam format responsif",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Glassmorphism UI", "WhatsApp CTA"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
  },
];
