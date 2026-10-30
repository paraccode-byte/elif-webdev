# ELIF WEBDEV — Company Profile & Digital Marketing Platform

Website Company Profile resmi **ELIF WEBDEV** (*One Stop Digital Solution*). Dirancang dengan konsep visual **Dark Futuristic Glassmorphism**, performa tinggi berbasis Next.js App Router, TypeScript, dan Tailwind CSS, serta struktur konten terpusat yang siap digunakan untuk konversi prospek bisnis melalui integrasi WhatsApp otomatis.

---

## 1. Deskripsi Proyek

ELIF WEBDEV adalah penyedia solusi digital terintegrasi yang membantu bisnis membangun dan memperkuat kehadiran digital melalui:
- **Web Development**: Pembuatan Company Profile, Landing Page konversi tinggi, E-Commerce, dan Website Kustom.
- **AI & Automation**: AI Customer Service 24/7 dan WhatsApp Chatbot otomatis.
- **Software Development**: Custom CMS, dashboard bisnis, dan RESTful API.
- **Digital Marketing**: Manajemen periklanan Meta Ads (Instagram & Facebook), TikTok Ads, dan YouTube Ads.
- **Digital Infrastructure**: Domain bisnis, High-speed Cloud Hosting, VPS, dan SSL.
- **Website Maintenance**: Pemeliharaan sistem berkala, backup rutin, dan audit keamanan.

Website ini dibangun tanpa database atau backend eksternal, seluruh data dikelola secara modular melalui file konfigurasi TypeScript lokal yang aman, cepat, dan mudah dipelihara.

---

## 2. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| **Next.js (App Router)** | Framework React modern dengan optimasi Server & Client Components |
| **TypeScript** | Pengetikan statis untuk keandalan dan pencegahan bug |
| **Tailwind CSS v4** | Desain styling utility-first bertema Dark Glassmorphism |
| **Framer Motion** | Animasi halus, micro-interactions, dan transisi modern |
| **Lucide React** | Ikon grafis vektor UI profesional |
| **Google Fonts** | Tipografi: *Plus Jakarta Sans* (Heading) & *Geist* (Body UI) |
| **Vercel** | Platform deployment siap produksi |

---

## 3. Persyaratan Sistem

- **Node.js**: Versi `18.18.0` atau yang lebih baru (Disarankan Node.js v20 atau v22 LTS).
- **npm**: Versi `9.x` atau yang lebih baru.

---

## 4. Cara Menjalankan Proyek

### 4.1 Instalasi Dependensi
```bash
npm install
```

### 4.2 Menjalankan Server Pengembangan (Development)
```bash
npm run dev
```
Buka peramban (browser) di alamat [http://localhost:3000](http://localhost:3000).

### 4.3 Menjalankan Pemeriksaan Kode (Lint & Type Check)
```bash
npm run lint
npx tsc --noEmit
```

### 4.4 Menjalankan Build Produksi
```bash
npm run build
npm start
```

---

## 5. Struktur Folder Proyek

```text
elif-webdev/
├── public/
│   ├── images/
│   │   ├── logo.jpeg               # File logo resmi
│   │   ├── portfolio/              # Aset gambar portofolio demo
│   │   ├── services/               # Aset ilustrasi layanan
│   │   └── favicon/                # Ikon favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, font, schema SEO global
│   │   ├── page.tsx                # Halaman Beranda (10 sections)
│   │   ├── globals.css             # Design tokens & tema Glassmorphism
│   │   ├── not-found.tsx           # Halaman error 404 kustom
│   │   ├── sitemap.ts              # XML Sitemap generator otomatis
│   │   ├── robots.ts               # Robots.txt generator
│   │   ├── tentang/page.tsx        # Halaman Profil, Visi & Misi
│   │   ├── layanan/
│   │   │   ├── page.tsx            # Halaman indeks seluruh layanan
│   │   │   └── [slug]/page.tsx     # Halaman dinamis detail layanan
│   │   ├── portofolio/
│   │   │   ├── page.tsx            # Galeri showcase demo & filter kategori
│   │   │   └── [slug]/page.tsx     # Detail demonstrasi proyek
│   │   ├── harga/page.tsx          # Halaman paket & simulasi biaya
│   │   ├── artikel/
│   │   │   ├── page.tsx            # Indeks artikel blog & search filter
│   │   │   └── [slug]/page.tsx     # Halaman baca artikel lengkap
│   │   ├── faq/page.tsx            # Halaman 14 tanya jawab interaktif
│   │   └── kontak/page.tsx         # Halaman kontak & formulir WhatsApp
│   │
│   ├── components/
│   │   ├── layout/                 # Navbar, Footer, PageContainer
│   │   ├── sections/               # Hero, Workflow, Pricing, Testimonials, dll.
│   │   └── ui/                     # GlassCard, GlowButton, GuidedChat, dll.
│   │
│   ├── config/
│   │   ├── site.ts                 # Identitas brand, nomor WhatsApp, sosial media
│   │   ├── navigation.ts           # Menu navigasi desktop & mobile
│   │   └── pricing.ts              # Data paket harga & ketentuan
│   │
│   ├── data/
│   │   ├── services.ts             # Data lengkap 6 layanan
│   │   ├── portfolio.ts            # Data proyek demonstrasi
│   │   ├── articles.ts             # Data 8 artikel edukatif
│   │   ├── faqs.ts                 # Data 14 tanya jawab
│   │   ├── workflow.ts             # Data 7 tahap alur kerja
│   │   └── advantages.ts           # Nilai keunggulan brand
│   │
│   ├── lib/
│   │   ├── whatsapp.ts             # Generator URL WhatsApp & prefilled pesan
│   │   ├── format-price.ts         # Formatter Rupiah Indonesia
│   │   ├── seo.ts                  # Schema.org & Meta tags builder
│   │   └── utils.ts                # Helper styling tailwind-merge
│   │
│   └── types/
│       └── index.ts                # Definisi TypeScript interface terpadu
│
├── .env.example                    # Template variabel lingkungan
├── next.config.ts                  # Konfigurasi Next.js & remote images
├── tailwind.config.ts              # Konfigurasi Tailwind CSS v4
├── tsconfig.json                   # Konfigurasi TypeScript
└── package.json
```

---

## 6. Panduan Pengelolaan & Kustomisasi Konten

Seluruh data di website ini tersentralisasi agar Anda dapat melakukan perubahan hanya dari satu berkas tanpa mengubah susunan kode tampilan.

### 6.1 Mengganti Logo
1. Simpan logo baru Anda di folder `public/images/logo.jpeg` (atau format `.png`).
2. Jika menggunakan nama berkas berbeda, perbarui path di berkas `src/config/site.ts`:
   ```ts
   export const siteConfig = {
     logo: "/images/nama-logo-baru.png",
     ...
   };
   ```

### 6.2 Mengganti Warna & Tema Visual
Buka berkas `src/app/globals.css`. Design tokens berada di bagian paling atas:
```css
:root {
  --background: #0F1724;    /* Warna latar belakang utama */
  --primary: #5CE7FE;       /* Warna aksen Cyan futuristik */
  --secondary: #17283A;     /* Warna aksen panel */
  ...
}
```

### 6.3 Mengubah Informasi Bisnis & Kontak
Buka berkas `src/config/site.ts`. Anda dapat mengubah nama brand, tagline, email, dan akun media sosial:
```ts
export const siteConfig = {
  name: "ELIF WEBDEV",
  tagline: "Build Your Digital Presence. Grow Your Business.",
  contact: {
    whatsapp: "6285147501617",
    whatsappFormatted: "+62 851-4750-1617",
    email: "elif.web.dev@gmail.com",
  },
  social: {
    facebook: "https://web.facebook.com/...",
    instagram: "https://www.instagram.com/...",
    tiktok: "https://www.tiktok.com/...",
  },
};
```

### 6.4 Mengubah Nomor WhatsApp & Prefilled Pesan
Buka berkas `src/lib/whatsapp.ts`.
- Ganti konstanta `WHATSAPP_PHONE`:
  ```ts
  export const WHATSAPP_PHONE = "6285147501617"; // Format internasional tanpa simbol +
  ```
- Di berkas yang sama, Anda juga dapat menyesuaikan template kalimat pesan otomatis untuk tiap paket dan layanan pada objek `WHATSAPP_MESSAGES`.

### 6.5 Mengubah Harga Paket Website
Buka berkas `src/config/pricing.ts`. Seluruh nominal paket (Basic, Professional, Enterprise) dan rincian fitur dikelola di sini:
```ts
export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 420000, // Nominal angka integer
    ...
  },
  ...
];
```

### 6.6 Mengubah atau Menambah Layanan
Buka berkas `src/data/services.ts`. Anda dapat menambahkan kategori layanan baru dengan menyertakan:
- `slug`: Path URL (contoh: `/layanan/nama-layanan`)
- `title`: Judul layanan
- `shortDescription` & `description`
- `benefits`: Keunggulan layanan
- `features`: Fitur ruang lingkup
- `workflow`: Tahapan pengerjaan
- `faqs`: Tanya jawab spesifik

Halaman detail baru akan secara otomatis dibuat oleh sistem Next.js App Router melalui rute dinamis `/layanan/[slug]`.

### 6.7 Menambah Artikel Blog Baru
Buka berkas `src/data/articles.ts`. Tambahkan objek artikel baru pada array `articlesData`:
```ts
{
  id: "art-9",
  slug: "judul-artikel-anda",
  title: "Judul Lengkap Artikel Edukatif",
  excerpt: "Ringkasan pengantar 1-2 kalimat.",
  category: "Bisnis & UMKM",
  publishedAt: "2026-11-01",
  readingTime: "5 menit baca",
  thumbnail: "https://images.unsplash.com/...",
  author: "ELIF WEBDEV Editorial",
  tags: ["Website", "Tips"],
  content: [
    "Paragraf pertama materi artikel...",
    "Paragraf kedua materi artikel...",
  ],
}
```

### 6.8 Menambah Proyek Portofolio Demo
Buka berkas `src/data/portfolio.ts`. Tambahkan proyek demonstrasi baru ke dalam array `portfolioProjects`. Pastikan nilai `isDemo: true` tetap dipertahankan sesuai standar transparansi brand.

### 6.9 Mengganti Domain (Go-Live)
1. Buka berkas `src/config/site.ts`.
2. Ubah nilai `url` dari placeholder ke domain aktif Anda:
   ```ts
   url: "https://elifwebdev.com", // Ganti dari https://your-domain.com
   ```
3. Seluruh meta tag Canonical, Open Graph, Sitemap XML, dan Schema.org JSON-LD akan otomatis tersinkronisasi menggunakan domain baru ini.

---

## 7. Panduan Deployment ke Vercel

Proyek ini telah dikonfigurasi dan diuji secara penuh agar siap di-deploy ke **Vercel** dalam hitungan menit:

1. **Buat Git Repository**:
   Inisialisasi atau commit perubahan ke repository GitHub / GitLab / Bitbucket Anda:
   ```bash
   git add .
   git commit -m "feat: complete ELIF WEBDEV company profile platform"
   git push origin main
   ```

2. **Import ke Vercel**:
   - Masuk ke dashboard [vercel.com](https://vercel.com).
   - Klik tombol **"Add New..."** lalu pilih **"Project"**.
   - Pilih repository Git proyek `elif-webdev`.

3. **Konfigurasi Project**:
   - Framework Preset: **Next.js** (terdeteksi otomatis).
   - Root Directory: `./`.
   - Build Command: `next build` (default).
   - Output Directory: `.next` (default).

4. **Environment Variables**:
   Jika ingin menentukan domain produksi, tambahkan variabel:
   - `NEXT_PUBLIC_SITE_URL`: `https://domain-anda.com` (atau biarkan default Vercel domain).

5. **Klik Deploy**:
   Tunggu proses build selesai (rata-rata 1–2 menit). Website Anda langsung aktif di seluruh dunia dengan dukungan CDN global dan SSL gratis.

---

## 8. Lisensi & Hak Cipta

&copy; 2026 **ELIF WEBDEV**. Seluruh hak cipta dilindungi.
One Stop Digital Solution — Build Your Digital Presence. Grow Your Business.
