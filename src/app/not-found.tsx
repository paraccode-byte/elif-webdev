import React from "react";
import { Compass, Home, MessageCircle } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlassCard from "@/components/ui/GlassCard";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#5CE7FE]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10 text-center">
        <GlassCard className="p-8 sm:p-12 border-[#5CE7FE]/30 bg-gradient-to-b from-white/[0.06] to-transparent">
          {/* Tech 404 Illustration Badge */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(92,231,254,0.2)]">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <span className="text-4xl sm:text-6xl font-extrabold font-mono text-[#5CE7FE] block tracking-tight mb-2">
            404
          </span>

          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
            Halaman Tidak Ditemukan
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-8">
            Tampaknya alamat yang Anda tuju telah dipindahkan, dihapus, atau belum tersedia dalam sistem kami.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GlowButton
              href="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Kembali ke Beranda
            </GlowButton>

            <GlowButton
              href={whatsappUrl}
              external
              variant="secondary"
              size="md"
              icon={<MessageCircle className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Konsultasi via WhatsApp
            </GlowButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
