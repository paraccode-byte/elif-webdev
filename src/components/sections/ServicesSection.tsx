import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";

interface ServicesSectionProps {
  showAll?: boolean;
}

export default function ServicesSection({ showAll = false }: ServicesSectionProps) {
  // Show core 5 or all
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 5);

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="LAYANAN UNGGULAN"
          title="Solusi Digital Terpadu untuk Setiap Kebutuhan"
          subtitle="Kombinasi lengkap pengembangan website modern, otomasi cerdas, software kustom, hingga strategi pemasaran digital yang terbukti menghasilkan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
