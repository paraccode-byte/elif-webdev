import React from "react";
import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CTASection from "@/components/sections/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Info } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Portofolio Proyek Demonstrasi — Karya & Arsitektur Web",
  description:
    "Lihat galeri proyek demonstrasi website kuliner, e-commerce, company profile, dan properti berteknologi Next.js dan Tailwind CSS.",
  urlPath: "/portofolio",
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Portofolio", url: "/portofolio" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageContainer breadcrumbs={[{ label: "Portofolio" }]}>
        <SectionHeading
          badge="SHOWCASE KARYA"
          title="Galeri Portofolio Proyek Demonstrasi"
          subtitle="Eksplorasi ragam arsitektur desain, layout interaktif, dan alur konversi WhatsApp yang kami bangun untuk berbagai model bisnis."
        />

        {/* Demo Notice Banner */}
        <div className="mb-10 max-w-4xl mx-auto">
          <GlassCard className="p-4 sm:p-5 border-[#5CE7FE]/30 bg-[#5CE7FE]/5 flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
            <Info className="w-5 h-5 text-[#5CE7FE] shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">
              <strong>Catatan Transparansi:</strong> Seluruh karya yang ditampilkan di halaman ini merupakan <em>proyek demonstrasi (demo showcase)</em> yang kami bangun untuk mendemonstrasikan standar kualitas desain, kecepatan, dan fungsionalitas teknis tim ELIF WEBDEV.
            </p>
          </GlassCard>
        </div>

        {/* Portfolio Grid with Interactive Filters */}
        <PortfolioSection showFilter={true} />
      </PageContainer>

      <CTASection
        title="Ingin Membangun Website Serupa untuk Bisnis Anda?"
        description="Pilih gaya dan fitur yang Anda sukai dari proyek demo kami, dan kami akan menyesuaikannya dengan identitas brand Anda."
      />
    </>
  );
}
