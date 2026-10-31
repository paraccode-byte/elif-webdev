import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, MessageCircle, Sparkles, Layers } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTASection from "@/components/sections/CTASection";
import { portfolioProjects } from "@/data/portfolio";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({ title: "Proyek Demo Tidak Ditemukan" });
  }

  return constructMetadata({
    title: `${project.title} — Demo Proyek ${project.categoryLabel}`,
    description: project.description,
    image: project.image,
    urlPath: `/portofolio/${project.slug}`,
  });
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Portofolio", url: "/portofolio" },
    { name: project.title, url: `/portofolio/${project.slug}` },
  ]);

  const whatsappUrl = getWhatsAppUrl(
    WHATSAPP_MESSAGES.portfolio(project.title)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageContainer
        breadcrumbs={[
          { label: "Portofolio", href: "/portofolio" },
          { label: project.title },
        ]}
      >
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-[#5CE7FE] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Galeri Portofolio</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 mb-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/[0.06] text-slate-300 border border-white/[0.08]">
              {project.categoryLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl mb-12 bg-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Description (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="text-xl font-bold font-heading text-white mb-4">
                Tentang Arsitektur Proyek Demonstrasi Ini
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                {project.fullDescription}
              </p>

              <h3 className="text-base font-bold font-heading text-white mb-3">
                Fitur Unggulan yang Diimplementasikan:
              </h3>
              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <div className="w-5 h-5 rounded-full bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Sidebar Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-base font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#5CE7FE]" />
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-[#5CE7FE] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div>
                  <span className="text-[11px] text-slate-400 block">Status Proyek</span>
                  <span className="text-xs font-bold text-white">Demonstrasi Showcase</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Pendekatan Desain</span>
                  <span className="text-xs font-bold text-white">Dark Glassmorphism Modern</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-[#5CE7FE]/30 bg-gradient-to-br from-[#5CE7FE]/10 to-transparent">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5CE7FE] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  Buat Sistem Serupa
                </div>
                <h4 className="text-base font-bold font-heading text-white">
                  Tertarik Menerapkan Konsep Ini?
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Kami dapat mengadaptasi struktur desain dan alur WhatsApp ini sesuai produk dan materi bisnis Anda.
                </p>
                <GlowButton
                  href={whatsappUrl}
                  external
                  variant="primary"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4 fill-current" />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Konsultasikan via WhatsApp
                </GlowButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
}
