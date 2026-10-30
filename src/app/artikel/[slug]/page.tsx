import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Tag, MessageCircle } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTASection from "@/components/sections/CTASection";
import { articlesData } from "@/data/articles";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { formatDateIndo } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return constructMetadata({ title: "Artikel Tidak Ditemukan" });
  }

  return constructMetadata({
    title: `${article.title}`,
    description: article.excerpt,
    image: article.thumbnail,
    urlPath: `/artikel/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    keywords: [...article.tags, "artikel website", "panduan digital bisnis"],
  });
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Artikel", url: "/artikel" },
    { name: article.title, url: `/artikel/${article.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.thumbnail,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/artikel/${article.slug}`,
    },
  };

  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const whatsappUrl = getWhatsAppUrl(
    `Halo ELIF WEBDEV, saya baru saja membaca artikel "${article.title}" dan ingin berkonsultasi lebih lanjut.`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageContainer
        breadcrumbs={[
          { label: "Artikel", href: "/artikel" },
          { label: article.title },
        ]}
      >
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-[#5CE7FE] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Indeks Artikel</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto space-y-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#5CE7FE]/15 text-[#5CE7FE] border border-[#5CE7FE]/30">
            {article.category}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2 font-sans">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#5CE7FE]" />
              <span>{article.author}</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#5CE7FE]" />
              <span>{formatDateIndo(article.publishedAt)}</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#5CE7FE]" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl mb-12 bg-slate-900">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#5CE7FE] shrink-0" />
            <span className="text-xs text-slate-400 font-medium mr-1">Topik:</span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Direct Consultation Box within Article */}
          <div className="mt-10">
            <GlassCard className="p-6 sm:p-8 border-[#5CE7FE]/30 bg-gradient-to-r from-[#17283A] to-[#0F1724]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    Ingin Menerapkan Strategi Ini pada Bisnis Anda?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Diskusikan solusi pembuatan website profesional dan kampanye iklan bersama tim ELIF WEBDEV.
                  </p>
                </div>
                <GlowButton
                  href={whatsappUrl}
                  external
                  variant="primary"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4 fill-current" />}
                  iconPosition="left"
                  className="shrink-0"
                >
                  Konsultasi Gratis
                </GlowButton>
              </div>
            </GlassCard>
          </div>
        </article>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-white/[0.08]">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-6">
            Artikel Terkait Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/artikel/${rel.slug}`}
                className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#5CE7FE]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#5CE7FE] block mb-2">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#5CE7FE] transition-colors line-clamp-2 mb-2 leading-snug">
                    {rel.title}
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400 block pt-3 border-t border-white/[0.04]">
                  {rel.readingTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
}
