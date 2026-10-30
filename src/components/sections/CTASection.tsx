import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
  badge?: string;
}

export default function CTASection({
  title = "Siap Mengembangkan Bisnis Anda ke Level Berikutnya?",
  description = "Diskusikan kebutuhan digital bisnis Anda bersama ELIF WEBDEV dan temukan solusi yang tepat.",
  badge = "KONSULTASI AWAL GRATIS",
}: CTASectionProps) {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5CE7FE]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#17283A]/90 to-[#0F1724]/90 border border-[#5CE7FE]/30 p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(92,231,254,0.15)] overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#5CE7FE]/20 rounded-full blur-3xl pointer-events-none" />

          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#5CE7FE]/15 text-[#5CE7FE] border border-[#5CE7FE]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE7FE] animate-ping" />
              {badge}
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl mx-auto leading-tight mb-4">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton
              href={whatsappUrl}
              external
              variant="primary"
              size="lg"
              icon={<MessageCircle className="w-5 h-5 fill-current" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Konsultasi Gratis via WhatsApp
            </GlowButton>

            <GlowButton
              href="/layanan"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Lihat Seluruh Layanan
            </GlowButton>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            *Konsultasi awal untuk analisis kebutuhan bisnis Anda bersifat gratis dan tanpa komitmen.
          </p>
        </div>
      </div>
    </section>
  );
}
