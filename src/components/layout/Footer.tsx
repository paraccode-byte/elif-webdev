"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = 2026;
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <footer className="border-t border-white/[0.08] bg-[#0B111A] text-slate-400 font-sans pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#5CE7FE]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#5CE7FE]/40 group-hover:border-[#5CE7FE] transition-colors shadow-[0_0_15px_rgba(92,231,254,0.2)]">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = siteConfig.logoFallback;
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-wider text-white group-hover:text-[#5CE7FE] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#5CE7FE] font-medium">
                  {siteConfig.positioning}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#5CE7FE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#5CE7FE] group-hover:bg-[#5CE7FE]/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: {siteConfig.contact.whatsappFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-[#5CE7FE] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#5CE7FE] group-hover:bg-[#5CE7FE]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email: {siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#5CE7FE]/50 text-slate-300 hover:text-[#5CE7FE] hover:bg-[#5CE7FE]/10 transition-all text-xs font-medium flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#5CE7FE]/50 text-slate-300 hover:text-[#5CE7FE] hover:bg-[#5CE7FE]/10 transition-all text-xs font-medium flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#5CE7FE]/50 text-slate-300 hover:text-[#5CE7FE] hover:bg-[#5CE7FE]/10 transition-all text-xs font-medium flex items-center gap-1.5"
              >
                <span>TikTok</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-4">
              Layanan Digital
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#5CE7FE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#5CE7FE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-white mb-4">
              Informasi & Bantuan
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#5CE7FE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400">
              <p className="font-semibold text-white mb-1">Jangkauan Layanan:</p>
              <p>Melayani UMKM, bisnis lokal, dan perusahaan di seluruh Indonesia secara daring.</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} <strong className="text-white font-medium">{siteConfig.name}</strong>. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>One Stop Digital Solution</span>
            <span>&bull;</span>
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
