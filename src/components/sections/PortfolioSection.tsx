"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import GlowButton from "@/components/ui/GlowButton";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

interface PortfolioSectionProps {
  showFilter?: boolean;
  limit?: number;
}

export default function PortfolioSection({
  showFilter = true,
  limit,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const categories: { label: string; value: PortfolioCategory }[] = [
    { label: "Semua Kategori", value: "all" },
    { label: "Restoran", value: "restaurant" },
    { label: "E-Commerce", value: "ecommerce" },
    { label: "Company Profile", value: "company-profile" },
    { label: "Properti", value: "property" },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SHOWCASE KARYA"
          title="Eksplorasi Proyek Demonstrasi"
          subtitle="Lihat demonstrasi arsitektur, estetika UI/UX, dan alur konversi yang dapat kami bangun untuk industri bisnis Anda."
        />

        {/* Category Filters */}
        {showFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all font-sans cursor-pointer",
                  activeCategory === cat.value
                    ? "bg-[#5CE7FE] text-[#0F1724] font-semibold shadow-[0_0_15px_rgba(92,231,254,0.3)]"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA / Link to full portfolio */}
        <div className="text-center">
          <GlowButton
            href="/portofolio"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Lihat Seluruh Showcase Demonstrasi
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
