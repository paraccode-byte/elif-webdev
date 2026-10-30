export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig: {
  mainNav: NavItem[];
  footerNav: {
    solutions: NavItem[];
    company: NavItem[];
    resources: NavItem[];
  };
} = {
  mainNav: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Layanan", href: "/layanan" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Harga", href: "/harga" },
    { label: "Artikel", href: "/artikel" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],
  footerNav: {
    solutions: [
      { label: "Web Development", href: "/layanan/web-development" },
      { label: "AI & Otomasi", href: "/layanan/ai-automation" },
      { label: "Software & API", href: "/layanan/software-development" },
      { label: "Digital Marketing", href: "/layanan/digital-marketing" },
      { label: "Digital Infrastructure", href: "/layanan/digital-infrastructure" },
      { label: "Website Maintenance", href: "/layanan/website-maintenance" },
    ],
    company: [
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Portofolio Demo", href: "/portofolio" },
      { label: "Paket & Harga", href: "/harga" },
      { label: "Hubungi Kami", href: "/kontak" },
    ],
    resources: [
      { label: "Artikel & Wawasan", href: "/artikel" },
      { label: "Tanya Jawab (FAQ)", href: "/faq" },
      { label: "Konsultasi WhatsApp", href: "/kontak" },
    ],
  },
};
