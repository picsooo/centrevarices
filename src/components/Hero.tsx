"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Stethoscope } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={siteConfig.photos.hero.src}
          alt={siteConfig.photos.hero.alt}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight"
          >
            Des jambes légères,
            <br />
            <span className="text-brand-300">un diagnostic précis.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-brand-200 max-w-lg"
          >
            Médecine interne & vasculaire — {siteConfig.doctor},{" "}
            {siteConfig.doctorTitle.toLowerCase()}.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#rdv"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-800 text-base font-semibold rounded-full hover:bg-brand-50 transition-colors"
            >
              Prendre rendez-vous
            </a>
            <a
              href={siteConfig.mobileHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white text-base font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler
            </a>
          </motion.div>

          {/* Preuves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            {[
              {
                icon: Stethoscope,
                text: "Examens sur place",
              },
              {
                icon: MapPin,
                text: "À côté du CNMS",
              },
              {
                icon: Clock,
                text: "Réponse dans la journée",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 text-brand-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <item.icon className="w-5 h-5 text-brand-300" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
