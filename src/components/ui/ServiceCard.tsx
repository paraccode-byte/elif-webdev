import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import DynamicIcon from "./DynamicIcon";
import { ServiceCategory } from "@/types";

interface ServiceCardProps {
  service: ServiceCategory;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <GlassCard className="p-6 md:p-8 flex flex-col justify-between group h-full">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#5CE7FE]/20 to-[#17283A] border border-[#5CE7FE]/30 flex items-center justify-center text-[#5CE7FE] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(92,231,254,0.3)] transition-all duration-300">
            <DynamicIcon name={service.iconName} className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.06] text-[#5CE7FE] border border-[#5CE7FE]/20">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3 group-hover:text-[#5CE7FE] transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
          {service.shortDescription}
        </p>

        <div className="space-y-2.5 mb-8 border-t border-white/[0.06] pt-5">
          <p className="text-xs uppercase font-semibold tracking-wider text-slate-300">
            Cakupan Layanan:
          </p>
          {service.subServices.slice(0, 4).map((sub, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5CE7FE] shrink-0" />
              <span>{sub}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={`/layanan/${service.slug}`}
        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#5CE7FE]/15 border border-white/[0.08] hover:border-[#5CE7FE]/40 text-sm font-medium text-slate-200 hover:text-[#5CE7FE] transition-all group/btn"
      >
        <span>Lihat Detail Layanan</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </GlassCard>
  );
}
