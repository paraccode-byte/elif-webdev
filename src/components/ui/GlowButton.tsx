import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function GlowButton({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  icon,
  iconPosition = "right",
  ...props
}: GlowButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 font-sans cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5CE7FE]/40 select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#5CE7FE] text-[#0F1724] hover:bg-[#86efff] shadow-[0_0_20px_rgba(92,231,254,0.35)] hover:shadow-[0_0_28px_rgba(92,231,254,0.5)] font-semibold",
    secondary:
      "bg-white/[0.06] text-[#F8FAFC] border border-white/[0.12] hover:bg-white/[0.1] hover:border-[#5CE7FE]/40 hover:text-[#5CE7FE] backdrop-blur-md",
    outline:
      "bg-transparent text-[#5CE7FE] border border-[#5CE7FE]/40 hover:bg-[#5CE7FE]/10 hover:border-[#5CE7FE]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_28px_rgba(37,211,102,0.5)] font-semibold",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
