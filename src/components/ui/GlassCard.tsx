import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  intensity?: "low" | "medium" | "high";
}

export default function GlassCard({
  children,
  className,
  hoverGlow = true,
  intensity = "low",
  ...props
}: GlassCardProps) {
  const intensityClasses = {
    low: "bg-white/[0.035] backdrop-blur-md border border-white/[0.08]",
    medium: "bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]",
    high: "bg-white/[0.09] backdrop-blur-2xl border border-white/[0.16]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 relative overflow-hidden",
        intensityClasses[intensity],
        hoverGlow &&
          "hover:border-[#5CE7FE]/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(92,231,254,0.12)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
