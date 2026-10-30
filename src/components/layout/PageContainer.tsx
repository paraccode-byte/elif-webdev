import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageContainer({
  children,
  className,
  breadcrumbs,
}: PageContainerProps) {
  return (
    <div className={cn("min-h-[70vh] py-10 md:py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#5CE7FE] transition-colors">
                  Beranda
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#5CE7FE] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {children}
      </div>
    </div>
  );
}
