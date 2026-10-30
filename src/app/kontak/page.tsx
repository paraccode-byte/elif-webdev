"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    service: "Web Development",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const servicesList = [
    "Web Development (Company Profile / Landing Page / E-Commerce)",
    "AI & Automation (AI Customer Service / WhatsApp Chatbot)",
    "Software Development (Custom CMS / REST API)",
    "Digital Marketing (Meta Ads / TikTok Ads / YouTube Ads)",
    "Digital Infrastructure (Domain / Hosting / VPS)",
    "Website Maintenance & Pemeliharaan Rutin",
    "Konsultasi Umum Lainnya",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Pesan atau kebutuhan proyek wajib diisi";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct WhatsApp prefilled message
    const formattedMessage = `Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai proyek digital:
- Nama: ${formData.name.trim()}
${formData.businessName.trim() ? `- Bisnis: ${formData.businessName.trim()}\n` : ""}- Layanan: ${formData.service}
- Kebutuhan Proyek:
${formData.message.trim()}`;

    const waUrl = getWhatsAppUrl(formattedMessage);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <PageContainer breadcrumbs={[{ label: "Kontak" }]}>
      <SectionHeading
        badge="HUBUNGI KAMI"
        title="Diskusikan Kebutuhan Digital Anda"
        subtitle="Terhubung langsung dengan tim ELIF WEBDEV untuk konsultasi kebutuhan website, AI, dan strategi pemasaran bisnis Anda."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Contact Information & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold font-heading text-white">
              Saluran Komunikasi Resmi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Kami melayani konsultasi secara daring untuk pelaku usaha di seluruh Indonesia. Hubungi kami melalui WhatsApp, Email, maupun platform media sosial resmi kami.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl("Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai kebutuhan digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#5CE7FE]/40 hover:bg-[#5CE7FE]/10 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">WhatsApp Resmi</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#5CE7FE] transition-colors">
                      {siteConfig.contact.whatsappFormatted}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#5CE7FE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#5CE7FE]/40 hover:bg-[#5CE7FE]/10 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#5CE7FE]/20 text-[#5CE7FE] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email Korespondensi</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#5CE7FE] transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#5CE7FE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs uppercase font-bold text-slate-300 tracking-wider block mb-3">
                Media Sosial Kami
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-[#5CE7FE] hover:bg-white/[0.06] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-[#5CE7FE] hover:bg-white/[0.06] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-[#5CE7FE] hover:bg-white/[0.06] transition-colors flex items-center justify-center gap-1"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Frontend Consultation Form (7 cols) */}
        <div className="lg:col-span-7">
          <GlassCard className="p-6 sm:p-10 border-[#5CE7FE]/30">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Formulir Konsultasi Kebutuhan Proyek
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                Isi rincian di bawah ini untuk langsung menyusun pesan otomatis ke WhatsApp tim kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Nama Lengkap <span className="text-[#5CE7FE]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.12] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5CE7FE] transition-colors"
                />
                {errors.name && (
                  <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Nama Bisnis / Perusahaan (Opsional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Nama Bisnis / Brand <span className="text-slate-400 text-[11px] font-normal lowercase">(opsional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kopi Nusantara Roastery"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.12] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5CE7FE] transition-colors"
                />
              </div>

              {/* Layanan yang Dibutuhkan */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Layanan yang Anda Butuhkan <span className="text-[#5CE7FE]">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0F1724] border border-white/[0.12] text-sm text-white focus:outline-none focus:border-[#5CE7FE] transition-colors cursor-pointer"
                >
                  {servicesList.map((svc, idx) => (
                    <option key={idx} value={svc} className="bg-[#0F1724] text-white">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Kebutuhan / Pesan Proyek */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Jelaskan Kebutuhan Proyek Anda <span className="text-[#5CE7FE]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan gambaran website atau tantangan digital yang ingin Anda selesaikan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.12] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#5CE7FE] transition-colors"
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#5CE7FE] text-[#0F1724] hover:bg-[#86efff] font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(92,231,254,0.35)] transition-all cursor-pointer active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kirim & Mulai Konsultasi via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-sans">
                Formulir ini bekerja di sisi peramban Anda untuk memformat percakapan awal dan langsung mengarahkan Anda ke WhatsApp resmi kami.
              </p>
            </form>
          </GlassCard>
        </div>
      </div>
    </PageContainer>
  );
}
