import React from "react";
import { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTASection from "@/components/sections/CTASection";
import { pricingPlans, pricingTerms, additionalServicePrices } from "@/config/pricing";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = constructMetadata({
  title: "Paket & Harga Pembuatan Website Profesional",
  description:
    "Daftar harga transparan jasa pembuatan website ELIF WEBDEV: Basic Rp420.000, Professional Rp650.000, Enterprise Rp1.200.000, serta simulasi biaya AI dan Digital Marketing.",
  urlPath: "/harga",
});

export default function HargaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Harga", url: "/harga" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageContainer breadcrumbs={[{ label: "Harga & Paket" }]}>
        <SectionHeading
          badge="INVESTASI TRANSPARAN"
          title="Paket Website Profesional dengan Nilai Maksimal"
          subtitle="Pilihan paket pengerjaan yang dirancang sesuai kebutuhan skala UMKM, bisnis lokal, hingga korporasi modern."
        />

        {/* 3 Core Website Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Terms & Conditions Notice */}
        <div className="mb-16">
          <GlassCard className="p-5 sm:p-6 border-[#5CE7FE]/30 bg-[#5CE7FE]/5 max-w-4xl mx-auto flex items-start gap-4">
            <Info className="w-5 h-5 text-[#5CE7FE] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-sans">
              <p className="font-bold text-white">Ketentuan & Transparansi Biaya:</p>
              <p className="leading-relaxed">{pricingTerms}</p>
            </div>
          </GlassCard>
        </div>

        {/* Simulated Additional Services Section */}
        <div className="mb-16">
          <div className="mb-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-[#5CE7FE] border border-white/[0.1] mb-3">
              SIMULASI BIAYA LAYANAN LAINNYA
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Estimasi Biaya AI, Software, Marketing & Infrastruktur
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              Biaya aktual dapat disesuaikan dengan skala kompleksitas fungsionalitas dan volume pengguna yang Anda butuhkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServicePrices.map((item) => (
              <GlassCard key={item.id} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#5CE7FE] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/[0.06] text-amber-300 border border-amber-300/20">
                      Simulasi
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2">
                    {item.name}
                  </h3>

                  <div className="text-xl font-extrabold font-heading text-white mb-3">
                    {item.startingPrice}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                {item.notes && (
                  <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 font-sans">
                    <span className="text-slate-300 font-medium">Catatan:</span> {item.notes}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Custom Solution Inquiry Banner */}
        <GlassCard className="p-8 sm:p-12 border-[#5CE7FE]/30 bg-gradient-to-r from-[#17283A] to-[#0F1724] text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
            Butuh Struktur Halaman Khusus atau Fitur yang Lebih Kompleks?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 font-sans">
            Kami siap menyusun penawaran kustom (custom quotation) yang dirancang khusus menyesuaikan roadmap digital bisnis Anda.
          </p>
          <GlowButton
            href={getWhatsAppUrl("Halo ELIF WEBDEV, saya ingin berkonsultasi mengenai paket kustom website dan kebutuhan digital bisnis saya.")}
            external
            variant="primary"
            size="md"
            icon={<MessageCircle className="w-4 h-4 fill-current" />}
            iconPosition="left"
          >
            Konsultasikan Kebutuhan Kustom Anda
          </GlowButton>
        </GlassCard>
      </PageContainer>

      <CTASection />
    </>
  );
}
