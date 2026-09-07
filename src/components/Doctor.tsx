"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";

export default function Doctor() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image
              src={siteConfig.photos.doctor.src}
              alt={siteConfig.photos.doctor.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent" />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-3">
              Votre médecin
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
              {siteConfig.doctor}
            </h2>
            <p className="mt-2 text-lg text-brand-600">
              {siteConfig.doctorTitle}
            </p>

            <div className="mt-8 prose prose-lg text-foreground/80 max-w-none">
              <p className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-sm text-brand-700 italic">
                {siteConfig.doctorBio}
              </p>
            </div>

            <a
              href="#rdv"
              className="mt-8 inline-flex items-center px-6 py-3 bg-brand-800 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
