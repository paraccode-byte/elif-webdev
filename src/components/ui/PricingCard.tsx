import React from "react";
import { Check, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";
import GlowButton from "./GlowButton";
import { PricingPlan } from "@/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const whatsappUrl = getWhatsAppUrl(plan.whatsappMessage);

  return (
    <GlassCard
      intensity={plan.popular ? "medium" : "low"}
      className={cn(
        "p-6 md:p-8 flex flex-col justify-between relative h-full",
        plan.popular &&
          "border-[#5CE7FE]/50 shadow-[0_0_35px_rgba(92,231,254,0.18)] bg-white/[0.06] md:-translate-y-2"
      )}
    >
      {plan.badge && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-l from-[#5CE7FE] to-[#0284C7] text-[#0F1724] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl font-heading shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {plan.badge}
          </div>
        </div>
      )}

      <div>
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
            {plan.name}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mt-2 font-sans line-clamp-2">
            {plan.description}
          </p>
        </div>

        <div className="mb-6 pb-6 border-b border-white/[0.08]">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              {plan.formattedPrice}
            </span>
            <span className="text-slate-400 text-xs">/ proyek</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
              Maks. {plan.pageLimit} Halaman
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
              {plan.revisions}x Revisi
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
              Garansi {plan.supportDays} Hari
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-xs uppercase font-semibold tracking-wider text-slate-300">
            Fasilitas Termasuk:
          </p>
          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                <div className="w-4 h-4 rounded-full bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <GlowButton
          href={whatsappUrl}
          external
          variant={plan.popular ? "primary" : "secondary"}
          size="lg"
          className="w-full justify-center"
        >
          Pesan Paket {plan.name}
        </GlowButton>
      </div>
    </GlassCard>
  );
}
