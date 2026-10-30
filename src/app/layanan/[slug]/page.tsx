import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import DynamicIcon from "@/components/ui/DynamicIcon";
import CTASection from "@/components/sections/CTASection";
import { servicesData } from "@/data/services";
import { constructMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return constructMetadata({ title: "Layanan Tidak Ditemukan" });
  }

  return constructMetadata({
    title: `${service.title} — Jasa & Solusi Digital`,
    description: service.description,
    urlPath: `/layanan/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Layanan", url: "/layanan" },
    { name: service.title, url: `/layanan/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
  });

  const whatsappUrl = getWhatsAppUrl(
    WHATSAPP_MESSAGES.service(service.title)
  );

  // Find related services
  const relatedServices = servicesData.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageContainer
        breadcrumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: service.title },
        ]}
      >
        {/* Service Hero */}
        <div className="relative mb-16">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#5CE7FE]/15 text-[#5CE7FE] border border-[#5CE7FE]/30">
              <DynamicIcon name={service.iconName} className="w-3.5 h-3.5" />
              <span>{service.badge || "Solusi Digital"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed">
              {service.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <GlowButton
                href={whatsappUrl}
                external
                variant="primary"
                size="md"
                icon={<MessageCircle className="w-4 h-4 fill-current" />}
                iconPosition="left"
              >
                Konsultasi Layanan {service.title}
              </GlowButton>

              <Link
                href="/harga"
                className="text-sm font-medium text-slate-300 hover:text-[#5CE7FE] transition-colors flex items-center gap-1.5"
              >
                <span>Lihat Estimasi Biaya</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
              Keunggulan & Manfaat untuk Bisnis Anda
            </h2>
            <p className="text-slate-400 text-sm">
              Bagaimana implementasi {service.title} memberikan dampak nyata pada pertumbuhan usaha Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <GlassCard key={idx} className="p-6 sm:p-7">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Features & Scope */}
        <div className="mb-16">
          <GlassCard className="p-8 sm:p-10 border-[#5CE7FE]/20">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-6">
              Fitur & Ruang Lingkup Pengerjaan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#5CE7FE] mt-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Workflow */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
              Alur Proses Pengerjaan
            </h2>
            <p className="text-slate-400 text-sm">
              Tahapan sistematis yang kami lakukan untuk memastikan hasil pengerjaan tepat waktu dan berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((item) => (
              <GlassCard key={item.step} className="p-6 relative">
                <div className="text-2xl font-mono font-bold text-white/[0.08] mb-3">
                  0{item.step}
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#5CE7FE]" />
                Tanya Jawab Seputar {service.title}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <GlassCard key={idx} className="p-6">
                  <h3 className="font-heading font-semibold text-white text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mb-16 pt-8 border-t border-white/[0.08]">
            <h2 className="text-lg font-bold font-heading text-white mb-6">
              Layanan Terkait yang Sering Dikombinasikan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/layanan/${rel.slug}`}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#5CE7FE]/30 transition-all group"
                >
                  <p className="text-sm font-bold text-white group-hover:text-[#5CE7FE] transition-colors">
                    {rel.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {rel.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </PageContainer>

      <CTASection
        title={`Tertarik Menggunakan Layanan ${service.title}?`}
        description="Diskusikan kebutuhan spesifik bisnis Anda bersama kami untuk mendapatkan estimasi dan solusi terbaik."
      />
    </>
  );
}
