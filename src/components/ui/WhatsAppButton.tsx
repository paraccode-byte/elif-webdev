import React from "react";
import { MessageCircle } from "lucide-react";
import GlowButton from "./GlowButton";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppButton({
  message = WHATSAPP_MESSAGES.general,
  label = "Konsultasi via WhatsApp",
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  return (
    <GlowButton
      href={url}
      external
      variant={variant}
      size={size}
      className={className}
      icon={showIcon ? <MessageCircle className="w-4 h-4" /> : undefined}
      iconPosition="left"
    >
      {label}
    </GlowButton>
  );
}
