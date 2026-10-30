"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import CTASection from "@/components/sections/CTASection";
import { faqsData } from "@/data/faqs";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Umum", "Layanan", "Harga", "Pemesanan", "Pengerjaan", "Teknis"];

  const filteredFaqs = faqsData.filter((f) => {
    if (selectedCategory === "Semua") return true;
    return f.category === selectedCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <PageContainer breadcrumbs={[{ label: "Tanya Jawab (FAQ)" }]}>
        <SectionHeading
          badge="PUSAT INFORMASI"
          title="Tanya Jawab Lengkap Seputar Layanan"
          subtitle="Jawaban transparan untuk 14 pertanyaan umum mengenai proses pengerjaan, paket biaya, integrasi iklan, hingga dukungan teknis ELIF WEBDEV."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all font-sans",
                selectedCategory === cat
                  ? "bg-[#5CE7FE] text-[#0F1724] font-semibold shadow-[0_0_15px_rgba(92,231,254,0.3)]"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          {filteredFaqs.map((faq) => {
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
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#5CE7FE] shrink-0 font-bold">
                      Q:
                    </span>
                    <span className="font-heading font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
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
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.04] mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
          <div className="w-12 h-12 rounded-2xl bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">
            Punya Pertanyaan Lain yang Belum Tercantum?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 font-sans max-w-lg mx-auto">
            Tim konsultan ELIF WEBDEV siap menjawab segala pertanyaan teknis maupun skema pengerjaan langsung via WhatsApp.
          </p>
          <GlowButton
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            external
            variant="primary"
            size="md"
            icon={<MessageCircle className="w-4 h-4 fill-current" />}
            iconPosition="left"
          >
            Tanyakan Langsung via WhatsApp
          </GlowButton>
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
}
