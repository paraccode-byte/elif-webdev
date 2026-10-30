import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { whyChooseUsData } from "@/data/advantages";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="NILAI & KEUNGGULAN"
          title="Mengapa Memilih ELIF WEBDEV?"
          subtitle="Kami mendedikasikan keahlian teknologi untuk menghasilkan solusi nyata yang mendukung operasional dan target pertumbuhan bisnis Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item) => (
            <GlassCard key={item.id} className="p-6 md:p-7 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center shrink-0 group-hover:bg-[#5CE7FE]/25 transition-all">
                  <DynamicIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2 group-hover:text-[#5CE7FE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
