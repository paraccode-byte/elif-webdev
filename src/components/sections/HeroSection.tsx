import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Sparkles, Terminal, Code2, Globe2 } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glows and Tech Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#5CE7FE]/15 via-[#0284C7]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#5CE7FE]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#5CE7FE]/10 text-[#5CE7FE] border border-[#5CE7FE]/30 shadow-[0_0_20px_rgba(92,231,254,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#5CE7FE] animate-pulse" />
              ONE STOP DIGITAL SOLUTION
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15]">
              Bangun Bisnis Anda. <br />
              <span className="text-gradient">Perkuat Kehadiran Digital Anda.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Solusi website, teknologi AI, software development, hingga digital marketing untuk membantu bisnis Anda berkembang dan menjangkau lebih banyak pelanggan.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GlowButton
                href={whatsappUrl}
                external
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-5 h-5 fill-current" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Konsultasi Sekarang
              </GlowButton>

              <GlowButton
                href="/layanan"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Jelajahi Layanan
              </GlowButton>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Ultra Cepat</p>
                  <p className="text-[11px] text-slate-400 leading-tight">Next.js Engine</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Terpercaya</p>
                  <p className="text-[11px] text-slate-400 leading-tight">Solusi Terpadu</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Siap Iklan</p>
                  <p className="text-[11px] text-slate-400 leading-tight">Meta & TikTok</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tech Futuristic Glassmorphism Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Futuristic Tech Console Graphic */}
            <div className="w-full max-w-md relative">
              {/* Outer Cyan Glow Backing */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5CE7FE] to-[#0284C7] rounded-3xl opacity-30 blur-2xl animate-pulse" />

              {/* Main Futuristic Card Container */}
              <div className="relative rounded-2xl bg-[#0F1724]/90 border border-[#5CE7FE]/30 p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(15,23,36,0.8)] space-y-5">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#5CE7FE] font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>elif-engine // production</span>
                  </div>
                </div>

                {/* Animated Code Mockup / Service Pipeline */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/[0.06] font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[#5CE7FE]">const clientSolution = &#123;</span>
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <p><span className="text-slate-500">website:</span> <span className="text-emerald-400">&quot;Modern Glassmorphism&quot;</span>,</p>
                    <p><span className="text-slate-500">performance:</span> <span className="text-emerald-400">&quot;100% Core Web Vitals&quot;</span>,</p>
                    <p><span className="text-slate-500">aiIntegration:</span> <span className="text-cyan-300">true</span>,</p>
                    <p><span className="text-slate-500">marketingAds:</span> <span className="text-cyan-300">[&quot;Meta&quot;, &quot;TikTok&quot;]</span>,</p>
                    <p><span className="text-slate-500">status:</span> <span className="text-amber-300">&quot;Ready to Scale&quot;</span></p>
                  </div>
                  <div className="text-[#5CE7FE]">&#125;;</div>
                </div>

                {/* Floating Metric Chips */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Development</p>
                      <p className="text-xs font-bold text-white">Full-Stack Next.js</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Coverage</p>
                      <p className="text-xs font-bold text-white">Seluruh Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Active Status Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#5CE7FE]/10 border border-[#5CE7FE]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200">Konsultasi WhatsApp Aktif</span>
                  </div>
                  <Link
                    href="/harga"
                    className="text-[#5CE7FE] hover:underline font-semibold text-[11px]"
                  >
                    Mulai Rp420rb &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
