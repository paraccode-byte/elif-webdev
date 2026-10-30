import React from "react";
import { Metadata } from "next";
import { Target, Compass, Award, Shield, Users, RefreshCw, Layers } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Tentang Kami — One Stop Digital Solution",
  description:
    "Pelajari profil, visi, misi, dan nilai profesionalisme ELIF WEBDEV sebagai penyedia solusi website, AI, dan digital marketing terintegrasi.",
  urlPath: "/tentang",
});

export default function TentangPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  const corporateValues = [
    {
      title: "Professionalism",
      description: "Menjunjung tinggi standar etika kerja, ketepatan waktu, dan kualitas kode industri.",
      icon: Award,
    },
    {
      title: "Innovation",
      description: "Terus mengadopsi teknologi terdepan (Next.js, AI, Cloud) demi keunggulan kompetitif klien.",
      icon: Target,
    },
    {
      title: "Reliability",
      description: "Menjadi mitra teknologi yang konsisten, transparan, dan dapat diandalkan dalam jangka panjang.",
      icon: Shield,
    },
    {
      title: "Customer Focus",
      description: "Setiap baris kode dan strategi berakar dari kebutuhan nyata pertumbuhan bisnis pelanggan.",
      icon: Users,
    },
    {
      title: "Continuous Improvement",
      description: "Selalu mengevaluasi dan menyempurnakan performa, keamanan, dan efisiensi solusi.",
      icon: RefreshCw,
    },
  ];

  const missionList = [
    "Menyediakan layanan pengembangan website yang profesional dan berkualitas tinggi.",
    "Menghadirkan solusi teknologi cerdas yang membantu efisiensi operasional bisnis.",
    "Membantu bisnis mengembangkan pemasaran digital yang terukur dan menghasilkan.",
    "Menghadirkan layanan teknologi yang mudah diakses oleh berbagai skala bisnis dan UMKM.",
    "Membangun hubungan kerja sama yang profesional, transparan, dan berkelanjutan.",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageContainer breadcrumbs={[{ label: "Tentang Kami" }]}>
        {/* Header Hero */}
        <SectionHeading
          badge="PROFIL PERUSAHAAN"
          title="Membangun Solusi Digital Terpadu untuk Masa Depan Bisnis Anda"
          subtitle="ELIF WEBDEV mendedikasikan keahlian teknologi untuk memperkuat kehadiran digital pelaku bisnis di seluruh Indonesia."
        />

        {/* 9.1 Profil Perusahaan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-24">
          <div className="lg:col-span-7 space-y-5 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            <p className="text-white font-medium text-xl leading-relaxed">
              ELIF WEBDEV hadir sebagai penyedia solusi digital terintegrasi yang membantu bisnis membangun, mengembangkan, dan memperkuat kehadiran digital.
            </p>
            <p>
              Kami menyediakan layanan pengembangan website, teknologi AI, software development, infrastruktur digital, dan digital marketing untuk mendukung kebutuhan bisnis di era modern.
            </p>
            <p className="text-sm text-slate-400">
              Dengan mengusung positioning <strong className="text-[#5CE7FE]">One Stop Digital Solution</strong>, kami memadukan aspek teknis pemrograman mutakhir dengan keahlian pemasaran digital. Pelanggan tidak perlu repot berkoordinasi dengan banyak vendor terpisah—semua kebutuhan aset digital dirancang selaras dalam satu ekosistem terpadu.
            </p>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-8 border-[#5CE7FE]/30 bg-gradient-to-br from-white/[0.06] to-transparent">
              <div className="w-12 h-12 rounded-xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Karakter Brand Kami
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE7FE]" />
                  <span><strong>Profesional & Terpercaya:</strong> Berorientasi kualitas dan komitmen hasil.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE7FE]" />
                  <span><strong>Modern & Futuristik:</strong> Desain Dark Glassmorphism elegan dan bernilai tinggi.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CE7FE]" />
                  <span><strong>Berorientasi Solusi:</strong> Menjawab tantangan nyata operasional pelanggan.</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* 9.2 Visi & 9.3 Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          {/* Visi */}
          <GlassCard className="p-8 md:p-10 flex flex-col justify-between border-t-2 border-t-[#5CE7FE]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#5CE7FE]/15 text-[#5CE7FE] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Visi Kami
              </h3>
              <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed italic">
                &ldquo;Menjadi penyedia solusi digital terintegrasi yang membantu bisnis berkembang melalui teknologi yang inovatif, profesional, dan berorientasi pada kebutuhan pelanggan.&rdquo;
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] mt-6">
              <span className="text-xs font-mono text-[#5CE7FE]">ELIF WEBDEV // Vision Statement</span>
            </div>
          </GlassCard>

          {/* Misi */}
          <GlassCard className="p-8 md:p-10 border-t-2 border-t-[#38BDF8]">
            <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              Misi Kami
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-slate-300 font-sans">
              {missionList.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/[0.06] text-[#5CE7FE] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-white/[0.08]">
                    {idx + 1}
                  </span>
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* 9.4 Nilai Perusahaan */}
        <div className="mb-16 md:mb-24">
          <SectionHeading
            badge="CORPORATE VALUES"
            title="Nilai-Nilai Fundamental Kami"
            subtitle="Prinsip dasar yang menjadi pedoman dalam setiap baris kode, komunikasi tim, dan layanan purna jual."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {corporateValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <GlassCard key={idx} className="p-6 text-center group">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-white mb-2 group-hover:text-[#5CE7FE] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {val.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* 9.5 Our Approach */}
        <div className="mb-16">
          <GlassCard className="p-8 sm:p-12 border border-[#5CE7FE]/30 bg-gradient-to-r from-[#17283A]/80 to-[#0F1724]/90">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#5CE7FE]">
                PENDEKATAN KAMI
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Memahami Kebutuhan Bisnis Terlebih Dahulu, Baru Menentukan Solusi Teknologi
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Kami percaya teknologi terbaik bukanlah yang paling rumit, melainkan yang paling efektif menyelesaikan masalah bisnis Anda. Setiap proyek di ELIF WEBDEV selalu diawali dari sesi diskusi mendalam untuk memetakan tujuan komersial, profil calon konsumen, serta hambatan operasional Anda. Dari situlah arsitektur website dan strategi digital marketing dirumuskan secara presisi.
              </p>
            </div>
          </GlassCard>
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
}
