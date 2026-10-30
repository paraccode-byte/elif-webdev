"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#0F1724]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-[#0F1724]/60 backdrop-blur-md border-b border-white/[0.05] py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#5CE7FE]/40 group-hover:border-[#5CE7FE] transition-colors shadow-[0_0_15px_rgba(92,231,254,0.2)]">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                priority
                className="object-cover"
                onError={(e) => {
                  // Fallback to URL if local image is unavailable
                  (e.target as HTMLImageElement).src = siteConfig.logoFallback;
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-[#5CE7FE] transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#5CE7FE] font-medium -mt-1 hidden xs:block">
                One Stop Digital Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative font-sans",
                    isActive
                      ? "text-[#5CE7FE] bg-[#5CE7FE]/10"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#5CE7FE] rounded-full shadow-[0_0_8px_#5CE7FE]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#5CE7FE] text-[#0F1724] hover:bg-[#86efff] shadow-[0_0_20px_rgba(92,231,254,0.35)] hover:shadow-[0_0_25px_rgba(92,231,254,0.5)] transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Konsultasi WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] border border-[#5CE7FE]/30"
              aria-label="Konsultasi WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0F1724]/98 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors",
                    isActive
                      ? "text-[#5CE7FE] bg-[#5CE7FE]/10 border border-[#5CE7FE]/20"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#5CE7FE]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/[0.08]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-[#5CE7FE] text-[#0F1724] hover:bg-[#86efff] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(92,231,254,0.35)]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasi WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
