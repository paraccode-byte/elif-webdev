import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import { PortfolioProject } from "@/types";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <GlassCard className="group flex flex-col h-full overflow-hidden border border-white/[0.08] hover:border-[#5CE7FE]/40">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-transparent to-transparent opacity-80" />

        {/* DEMO PROJECT BADGE */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#0F1724]/85 text-[#5CE7FE] border border-[#5CE7FE]/40 backdrop-blur-md shadow-md">
            DEMO PROJECT
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/10 text-slate-200 backdrop-blur-md border border-white/10">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#5CE7FE] transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/portofolio/${project.slug}`}
          className="inline-flex items-center justify-between w-full pt-3 border-t border-white/[0.06] text-xs sm:text-sm font-medium text-slate-300 hover:text-[#5CE7FE] transition-colors"
        >
          <span>Eksplorasi Demo Proyek</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </GlassCard>
  );
}
