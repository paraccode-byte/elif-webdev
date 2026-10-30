"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { faqsData } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  limit?: number;
  showAllButton?: boolean;
}

export default function FAQSection({
  limit,
  showAllButton = true,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const displayedFaqs = limit ? faqsData.slice(0, limit) : faqsData;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TANYA JAWAB UMUM"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Temukan jawaban cepat seputar cakupan layanan, alur pengerjaan, skema harga, dan ketentuan pengerjaan di ELIF WEBDEV."
        />

        <div className="space-y-3.5 mb-10">
          {displayedFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <GlassCard
                key={faq.id}
                className={cn(
                  "transition-all duration-200 overflow-hidden",
                  isOpen ? "border-[#5CE7FE]/40 bg-white/[0.06]" : "bg-white/[0.03]"
                )}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#5CE7FE] shrink-0 transition-transform duration-200",
                      isOpen ? "rotate-180 bg-[#5CE7FE]/15" : ""
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.04] mt-2">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {showAllButton && limit && (
          <div className="text-center">
            <GlowButton
              href="/faq"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Lihat Seluruh 14 Tanya Jawab
            </GlowButton>
          </div>
        )}
      </div>
    </section>
  );
}
