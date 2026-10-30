import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { workflowSteps } from "@/data/workflow";

export default function WorkflowSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ALUR PENGERJAAN"
          title="7 Tahap Terstruktur Menuju Kehadiran Digital Anda"
          subtitle="Proses transparan dan efisien mulai dari konsultasi awal hingga pendampingan teknis pasca-peluncuran."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => (
            <GlassCard
              key={step.step}
              className={`p-6 relative group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-4 text-3xl font-extrabold font-mono text-white/[0.05] group-hover:text-[#5CE7FE]/20 transition-colors">
                0{step.step}
              </div>

              <div className="w-10 h-10 rounded-xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DynamicIcon name={step.iconName} className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-bold text-[#5CE7FE] uppercase tracking-wider block mb-1">
                Langkah 0{step.step}
              </span>

              <h3 className="text-base font-bold font-heading text-white mb-2 group-hover:text-[#5CE7FE] transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
