"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
