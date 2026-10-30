import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WorkflowSection from "@/components/sections/WorkflowSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 8.1 Hero Section */}
      <HeroSection />

      {/* 8.2 Brand Advantages */}
      <AdvantagesSection />

      {/* 8.3 Layanan Unggulan */}
      <ServicesSection />

      {/* 8.4 Why Choose Us */}
      <WhyChooseUs />

      {/* 8.5 Process Workflow */}
      <WorkflowSection />

      {/* 8.6 Portfolio Preview */}
      <PortfolioSection showFilter={false} limit={4} />

      {/* 8.7 Pricing Preview */}
      <PricingSection />

      {/* 8.8 Testimonials (Demo) */}
      <TestimonialsSection />

      {/* 8.9 FAQ Preview */}
      <FAQSection limit={6} showAllButton={true} />

      {/* 8.10 Final CTA */}
      <CTASection />
    </>
  );
}
