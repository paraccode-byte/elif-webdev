import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleGradient?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleGradient = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4",
            "bg-[#5CE7FE]/10 text-[#5CE7FE] border border-[#5CE7FE]/20 shadow-[0_0_15px_rgba(92,231,254,0.15)]"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5CE7FE] animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight",
          titleGradient ? "text-gradient" : "text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
