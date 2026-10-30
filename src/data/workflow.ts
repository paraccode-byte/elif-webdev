import { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Konsultasi Kebutuhan",
    description:
      "Mendiskusikan profil bisnis, target pasar, preferensi visual, dan tujuan yang ingin dicapai melalui website Anda.",
    iconName: "MessageSquare",
  },
  {
    step: 2,
    title: "Analisis & Perencanaan",
    description:
      "Menyusun struktur arsitektur halaman, alur konversi pengunjung, serta strategi teknologi yang paling efektif.",
    iconName: "Compass",
  },
  {
    step: 3,
    title: "Penawaran & Persetujuan",
    description:
      "Memberikan rincian ruang lingkup paket yang transparan tanpa biaya tersembunyi untuk konfirmasi pengerjaan.",
    iconName: "FileCheck2",
  },
  {
    step: 4,
    title: "Proses Pengerjaan",
    description:
      "Pembangunan website dengan kode Next.js & Tailwind CSS modern, responsif mobile, dan standar performa tinggi.",
    iconName: "Laptop",
  },
  {
    step: 5,
    title: "Review & Revisi",
    description:
      "Presentasi link staging/demo untuk evaluasi bersama serta penyempurnaan sesuai batas revisi paket.",
    iconName: "CheckCircle",
  },
  {
    step: 6,
    title: "Peluncuran (Go-Live)",
    description:
      "Konfigurasi domain, sertifikat SSL, deployment ke server cloud, serta submisi sitemap ke Google Search Console.",
    iconName: "Rocket",
  },
  {
    step: 7,
    title: "Dukungan Pasca-Peluncuran",
    description:
      "Garansi teknis dan pendampingan operasional sesuai masa garansi paket untuk memastikan website berjalan mulus.",
    iconName: "Headphones",
  },
];
