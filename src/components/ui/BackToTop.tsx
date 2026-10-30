"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#0F1724]/80 text-[#5CE7FE] border border-[#5CE7FE]/30 backdrop-blur-lg shadow-[0_0_20px_rgba(92,231,254,0.2)] hover:bg-[#5CE7FE] hover:text-[#0F1724] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5CE7FE]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
