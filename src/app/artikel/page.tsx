"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";
import { articlesData } from "@/data/articles";
import { formatDateIndo } from "@/lib/utils";

export default function ArtikelIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Bisnis & UMKM",
    "Web Development",
    "Digital Marketing",
    "AI & Otomasi",
    "SEO & Organik",
    "Infrastruktur",
  ];

  const filteredArticles = articlesData.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "Semua" || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <PageContainer breadcrumbs={[{ label: "Artikel & Wawasan" }]}>
        <SectionHeading
          badge="KNOWLEDGE HUB"
          title="Wawasan, Edukasi & Strategi Bisnis Digital"
          subtitle="Kumpulan panduan praktis seputar pembuatan website, strategi iklan Meta Ads, optimasi SEO, dan pemanfaatan teknologi AI untuk pertumbuhan bisnis."
        />

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari topik artikel (contoh: UMKM, Meta Ads, SEO, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#5CE7FE] focus:ring-1 focus:ring-[#5CE7FE]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#5CE7FE] text-[#0F1724] font-semibold shadow-[0_0_15px_rgba(92,231,254,0.3)]"
                    : "bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <GlassCard
                key={article.id}
                className="group flex flex-col h-full overflow-hidden border border-white/[0.08] hover:border-[#5CE7FE]/40"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#0F1724]/85 text-[#5CE7FE] border border-[#5CE7FE]/30 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3 font-sans">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDateIndo(article.publishedAt)}</span>
                      </div>
                      <span>&bull;</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readingTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#5CE7FE] transition-colors mb-2.5 line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-5 font-sans leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/[0.06] text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#5CE7FE] transition-colors"
                  >
                    <span>Baca Artikel Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400 font-sans">
            <p className="text-base">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
              className="mt-3 text-xs text-[#5CE7FE] hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </PageContainer>

      <CTASection />
    </>
  );
}
