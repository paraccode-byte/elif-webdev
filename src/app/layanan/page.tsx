import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import { servicesData } from "@/data/services";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Sparkles, Megaphone } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Layanan Solusi Digital Terintegrasi",
  description:
    "Eksplorasi layanan lengkap ELIF WEBDEV: Jasa pembuatan website profesional, AI chatbot WhatsApp, custom software, digital marketing Meta/TikTok ads, dan infrastruktur cloud.",
  urlPath: "/layanan",
});

export default function LayananIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Layanan", url: "/layanan" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageContainer breadcrumbs={[{ label: "Layanan" }]}>
        <SectionHeading
          badge="EKOSISTEM LAYANAN"
          title="Solusi Digital Lengkap untuk Setiap Fase Bisnis"
          subtitle="Dari perancangan website profesional, otomatisasi AI, hingga pemasaran digital berbayar yang terukur dalam satu atap layanan."
        />

        {/* Highlight Banner: Website + Digital Marketing Synergy */}
        <div className="mb-12">
          <GlassCard className="p-6 sm:p-8 border-[#5CE7FE]/40 bg-gradient-to-r from-[#17283A] via-[#0F1724] to-[#17283A]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE7FE]/15 text-[#5CE7FE]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Keunggulan Terintegrasi
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Bangun Website Sekaligus Dapatkan Dukungan Pemasaran Digital
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans">
                  ELIF WEBDEV tidak sekadar menyerahkan website jadi. Kami membantu Anda memasarkannya secara terukur ke audiens tertarget melalui Meta Ads (Instagram & Facebook), TikTok Ads, dan YouTube Ads.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/layanan/digital-marketing"
                  className="px-5 py-2.5 rounded-xl bg-[#5CE7FE] text-[#0F1724] hover:bg-[#86efff] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(92,231,254,0.3)]"
                >
                  <Megaphone className="w-4 h-4" />
                  <span>Pelajari Digital Marketing</span>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Services Grid (All 6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </PageContainer>

      <CTASection
        title="Punya Kebutuhan Digital Spesifik untuk Bisnis Anda?"
        description="Konsultasikan langsung dengan tim kami untuk mendapatkan rekomendasi kombinasi layanan yang paling efisien."
      />
    </>
  );
}
