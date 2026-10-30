import React from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans, pricingTerms } from "@/config/pricing";

interface PricingSectionProps {
  showSimulatedServicesLink?: boolean;
}

export default function PricingSection({
  showSimulatedServicesLink = true,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INVESTASI TRANSPARAN"
          title="Paket Website Profesional Tanpa Biaya Tersembunyi"
          subtitle="Pilih paket pengembangan website yang paling sesuai dengan fase pertumbuhan bisnis Anda saat ini."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Pricing Terms Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-4xl mx-auto flex items-start gap-3.5 text-xs text-slate-400 mb-8">
          <Info className="w-4 h-4 text-[#5CE7FE] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">{pricingTerms}</p>
        </div>

        {showSimulatedServicesLink && (
          <div className="text-center">
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#5CE7FE] transition-colors"
            >
              <span>Lihat rincian biaya estimasi AI, CMS, API & Digital Marketing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
