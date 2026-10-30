"use client";

import React, { useState } from "react";
import { MessageSquare, X, RotateCcw, Send, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ConversationState {
  step: 1 | 2 | 3 | 4;
  category: string;
  subOption: string;
  notes: string;
}

const CATEGORY_OPTIONS = [
  "Saya ingin membuat website baru",
  "Saya ingin upgrade website",
  "Saya membutuhkan AI Chatbot",
  "Saya membutuhkan CMS atau API",
  "Saya ingin mengiklankan bisnis",
  "Saya membutuhkan domain, hosting, atau VPS",
  "Saya ingin konsultasi layanan lainnya",
];

const SUB_OPTIONS_MAP: Record<string, { question: string; options: string[] }> = {
  "Saya ingin membuat website baru": {
    question: "Website seperti apa yang ingin Anda buat?",
    options: [
      "Company Profile Perusahaan",
      "Landing Page Penjualan",
      "E-Commerce / Toko Online",
      "Website Custom / Web App",
      "Belum tahu, ingin konsultasi dulu",
    ],
  },
  "Saya ingin upgrade website": {
    question: "Bagian apa yang ingin diperbarui pada website saat ini?",
    options: [
      "Pembaruan Desain & UI/UX Modern",
      "Optimasi Kecepatan Loading & SEO",
      "Penambahan Fitur / Halaman Baru",
      "Migrasi Framework / Teknologi",
      "Belum tahu, butuh review tim",
    ],
  },
  "Saya membutuhkan AI Chatbot": {
    question: "Platform integrasi mana yang Anda rencanakan?",
    options: [
      "Chatbot WhatsApp Business Otomatis",
      "Widget AI Chat di Website",
      "AI Customer Service 24/7",
      "Otomasi Penjawab FAQ",
    ],
  },
  "Saya membutuhkan CMS atau API": {
    question: "Kebutuhan sistem software seperti apa yang Anda perlukan?",
    options: [
      "Custom CMS / Dashboard Admin",
      "Pengembangan RESTful API",
      "Integrasi API Pihak Ketiga",
      "Arsitektur Backend Baru",
    ],
  },
  "Saya ingin mengiklankan bisnis": {
    question: "Platform iklan digital apa yang ingin Anda fokuskan?",
    options: [
      "Meta Ads (Instagram & Facebook)",
      "TikTok Ads Campaign",
      "YouTube Video Advertising",
      "Kombinasi Seluruh Platform",
    ],
  },
  "Saya membutuhkan domain, hosting, atau VPS": {
    question: "Kebutuhan infrastruktur apa yang sedang Anda cari?",
    options: [
      "Pendaftaran Domain Baru (.com / .id)",
      "Cloud Web Hosting Cepat",
      "Virtual Private Server (VPS)",
      "Bantuan Setup & Migrasi Server",
    ],
  },
  "Saya ingin konsultasi layanan lainnya": {
    question: "Topik konsultasi apa yang ingin Anda bahas?",
    options: [
      "Paket Maintenance Website Berkala",
      "Audit Keamanan & Performa",
      "Konsultasi Kemitraan Digital",
      "Kebutuhan Kustom Lainnya",
    ],
  },
};

export default function GuidedChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ConversationState>({
    step: 1,
    category: "",
    subOption: "",
    notes: "",
  });

  const resetChat = () => {
    setState({
      step: 1,
      category: "",
      subOption: "",
      notes: "",
    });
  };

  const handleSelectCategory = (cat: string) => {
    setState((prev) => ({
      ...prev,
      category: cat,
      step: 2,
    }));
  };

  const handleSelectSubOption = (sub: string) => {
    setState((prev) => ({
      ...prev,
      subOption: sub,
      step: 3,
    }));
  };

  const handleSubmitNotes = (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      step: 4,
    }));
  };

  const buildFinalMessage = () => {
    return `Halo ELIF WEBDEV, saya ingin berkonsultasi melalui ELIF Assistant:
- Kategori: ${state.category || "Konsultasi Umum"}
- Spesifikasi: ${state.subOption || "Belum ditentukan"}
- Kebutuhan: ${state.notes.trim() || "Ingin berdiskusi langsung dengan tim"}`;
  };

  const currentSubData = SUB_OPTIONS_MAP[state.category] || {
    question: "Pilih detail kebutuhan Anda:",
    options: ["Konsultasi Umum", "Paket Kustom"],
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Buka ELIF Assistant"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0F1724]/90 text-white border border-[#5CE7FE]/40 shadow-[0_0_25px_rgba(92,231,254,0.3)] hover:shadow-[0_0_35px_rgba(92,231,254,0.5)] hover:border-[#5CE7FE] backdrop-blur-xl transition-all duration-300 group active:scale-95"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5 text-[#5CE7FE] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5CE7FE] rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5CE7FE] rounded-full" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-xs font-bold text-white block leading-tight">
                ELIF Assistant
              </span>
              <span className="text-[10px] text-slate-400 block leading-tight">
                Pemandu Kebutuhan Digital
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ELIF Assistant Chat"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] max-h-[600px] flex flex-col rounded-2xl bg-[#0F1724]/95 border border-[#5CE7FE]/30 shadow-[0_0_50px_rgba(15,23,36,0.95)] backdrop-blur-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#17283A] to-[#0F1724] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5CE7FE]/20 border border-[#5CE7FE]/40 flex items-center justify-center text-[#5CE7FE]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-heading leading-tight">
                  ELIF Assistant
                </h3>
                <p className="text-[11px] text-[#5CE7FE] leading-tight">
                  Konsultasi Terpandu Cepat
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={resetChat}
                title="Ulangi percakapan"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Tutup chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 max-h-[440px] text-xs sm:text-sm">
            {/* Step 1: Initial Greeting */}
            <div className="flex gap-2.5 items-start">
              <div className="w-6 h-6 rounded-full bg-[#5CE7FE]/20 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                E
              </div>
              <div className="p-3 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] text-slate-200 space-y-1 max-w-[85%]">
                <p className="font-medium text-white">Halo! Selamat datang di ELIF WEBDEV.</p>
                <p className="text-slate-300 text-xs">Ada yang bisa kami bantu hari ini?</p>
              </div>
            </div>

            {/* Step 1 Options */}
            {state.step === 1 && (
              <div className="pl-8 space-y-2 pt-1">
                {CATEGORY_OPTIONS.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectCategory(cat)}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#5CE7FE]/15 border border-white/[0.08] hover:border-[#5CE7FE]/40 text-slate-200 hover:text-[#5CE7FE] text-xs font-medium transition-all flex items-center justify-between group"
                  >
                    <span>{cat}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#5CE7FE] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            )}

            {/* User choice 1 confirmation */}
            {state.step >= 2 && (
              <div className="flex justify-end">
                <div className="p-3 rounded-2xl rounded-tr-sm bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] max-w-[85%] text-xs font-medium">
                  {state.category}
                </div>
              </div>
            )}

            {/* Step 2: Follow-up question */}
            {state.step >= 2 && (
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-[#5CE7FE]/20 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  E
                </div>
                <div className="p-3 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] text-slate-200 max-w-[85%]">
                  <p className="text-xs font-medium">{currentSubData.question}</p>
                </div>
              </div>
            )}

            {/* Step 2 Options */}
            {state.step === 2 && (
              <div className="pl-8 space-y-2 pt-1">
                {currentSubData.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSubOption(opt)}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#5CE7FE]/15 border border-white/[0.08] hover:border-[#5CE7FE]/40 text-slate-200 hover:text-[#5CE7FE] text-xs font-medium transition-all flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#5CE7FE] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            )}

            {/* User choice 2 confirmation */}
            {state.step >= 3 && (
              <div className="flex justify-end">
                <div className="p-3 rounded-2xl rounded-tr-sm bg-[#5CE7FE]/15 border border-[#5CE7FE]/30 text-[#5CE7FE] max-w-[85%] text-xs font-medium">
                  {state.subOption}
                </div>
              </div>
            )}

            {/* Step 3: Text input inquiry */}
            {state.step === 3 && (
              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#5CE7FE]/20 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    E
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] text-slate-200 max-w-[85%] text-xs">
                    Silakan jelaskan sedikit mengenai kebutuhan bisnis Anda atau catatan khusus (opsional):
                  </div>
                </div>

                <form onSubmit={handleSubmitNotes} className="pl-8 space-y-2">
                  <textarea
                    rows={3}
                    placeholder="Contoh: Bisnis kuliner di Surabaya, butuh menu digital dan tombol WhatsApp..."
                    value={state.notes}
                    onChange={(e) => setState({ ...state, notes: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5CE7FE]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-3 rounded-xl bg-[#5CE7FE] text-[#0F1724] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#86efff] transition-all"
                  >
                    <span>Lanjutkan ke Ringkasan</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>
            )}

            {/* Step 4: Summary & WhatsApp CTA */}
            {state.step === 4 && (
              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#5CE7FE]/20 text-[#5CE7FE] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    E
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] text-slate-200 max-w-[90%] space-y-2 text-xs">
                    <p className="font-semibold text-white flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#5CE7FE]" />
                      Ringkasan Kebutuhan Anda:
                    </p>
                    <div className="bg-black/30 p-2.5 rounded-lg space-y-1 text-slate-300 text-[11px]">
                      <p>
                        <strong className="text-slate-400">Layanan:</strong> {state.category}
                      </p>
                      <p>
                        <strong className="text-slate-400">Pilihan:</strong> {state.subOption}
                      </p>
                      {state.notes && (
                        <p>
                          <strong className="text-slate-400">Catatan:</strong> {state.notes}
                        </p>
                      )}
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Klik tombol di bawah untuk langsung terhubung dengan tim ELIF WEBDEV via WhatsApp dengan pesan otomatis ini.
                    </p>
                  </div>
                </div>

                <div className="pl-8 pt-1">
                  <a
                    href={getWhatsAppUrl(buildFinalMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Hubungi Kami via WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-black/40 border-t border-white/[0.06] text-center">
            <p className="text-[10px] text-slate-400">
              Respon cepat langsung melalui WhatsApp resmi ELIF WEBDEV
            </p>
          </div>
        </div>
      )}
    </>
  );
}
