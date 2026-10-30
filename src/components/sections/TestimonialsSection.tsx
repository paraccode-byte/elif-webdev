import React from "react";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SIMULASI KEPUASAN"
          title="Kesan Kolaborasi & Pengalaman Solusi"
          subtitle="Simulasi feedback dan kepuasan pelanggan terhadap kualitas arsitektur website dan performa layanan ELIF WEBDEV."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <GlassCard
              key={item.id}
              className="p-6 flex flex-col justify-between h-full relative group"
            >
              <div>
                {/* DEMO BADGE */}
                <div className="mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/[0.06] text-[#5CE7FE] border border-[#5CE7FE]/30">
                    CONTOH TESTIMONI / DEMO
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6 font-sans">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-sm font-bold text-white font-heading">
                  {item.name}
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  {item.role}, <span className="text-[#5CE7FE]">{item.business}</span>
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
