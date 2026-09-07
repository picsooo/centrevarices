"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";

const navLinks = [
  { href: "#consultations", label: "Consultations" },
  { href: "#cabinet", label: "Le cabinet" },
  { href: "#acces", label: "Accès" },
  { href: "#rdv", label: "Rendez-vous" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Nom */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo Centre des Varices"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-heading font-semibold text-brand-800 leading-tight">
                {siteConfig.name}
              </p>
              <p className="text-xs text-brand-600 font-arabic" dir="rtl">
                {siteConfig.nameAr}
              </p>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-800 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{siteConfig.mobile}</span>
            </a>
            <a
              href="#rdv"
              className="inline-flex items-center px-5 py-2.5 bg-brand-800 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile: call + menu */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={siteConfig.mobileHref}
              className="p-2 rounded-full bg-brand-800 text-white"
              aria-label="Appeler le cabinet"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-brand-800"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-200 bg-white"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-brand-800 hover:text-brand-600 border-b border-brand-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#rdv"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-brand-800 text-white text-sm font-medium rounded-full"
              >
                Prendre rendez-vous
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
