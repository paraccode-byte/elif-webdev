export const WHATSAPP_PHONE = "6285147501617";

export const WHATSAPP_MESSAGES = {
  general: "Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai layanan digital yang tersedia.",
  basic: "Halo ELIF WEBDEV, saya tertarik memesan paket website Basic seharga Rp420.000. Saya ingin mengetahui informasi lebih lanjut.",
  professional: "Halo ELIF WEBDEV, saya tertarik memesan paket website Professional seharga Rp650.000. Saya ingin berkonsultasi lebih lanjut.",
  enterprise: "Halo ELIF WEBDEV, saya tertarik dengan paket website Enterprise seharga Rp1.200.000. Saya ingin mendiskusikan kebutuhan proyek saya.",
  marketing: "Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai layanan Digital Marketing dan periklanan digital.",
  ai: "Halo ELIF WEBDEV, saya tertarik berkonsultasi mengenai solusi AI Customer Service & Chatbot WhatsApp untuk bisnis saya.",
  software: "Halo ELIF WEBDEV, saya ingin mendiskusikan kebutuhan Software Development / Custom CMS & API.",
  infrastructure: "Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai kebutuhan Domain, Web Hosting, dan Server/VPS.",
  maintenance: "Halo ELIF WEBDEV, saya tertarik dengan layanan Website Maintenance & Pemeliharaan Berkala.",
  portfolio: (projectName: string) => `Halo ELIF WEBDEV, saya melihat demo proyek "${projectName}" di website dan tertarik membuat sistem serupa.`,
  service: (serviceName: string) => `Halo ELIF WEBDEV, saya tertarik berkonsultasi mengenai layanan ${serviceName}.`,
};

/**
 * Returns a valid WhatsApp web/direct link with encoded message
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.general): string {
  const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
