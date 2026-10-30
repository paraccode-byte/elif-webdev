import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { brandAdvantages } from "@/data/advantages";

export default function AdvantagesSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandAdvantages.map((adv) => (
            <GlassCard
              key={adv.id}
              className="p-6 md:p-8 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#5CE7FE]/25 transition-all">
                <DynamicIcon name={adv.iconName} className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-2 group-hover:text-[#5CE7FE] transition-colors">
                {adv.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {adv.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
