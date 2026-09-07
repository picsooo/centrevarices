"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Access() {
  return (
    <section id="acces" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
            Accès & horaires
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 shrink-0">
                <MapPin className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-800 mb-1">Adresse</h3>
                <p className="text-foreground/80">{siteConfig.address}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-600 font-medium">
                  <Navigation className="w-3.5 h-3.5" />
                  {siteConfig.landmark}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 shrink-0">
                <Phone className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-800 mb-1">Téléphone</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="block text-foreground/80 hover:text-brand-600 transition-colors"
                >
                  Fixe : {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.mobileHref}
                  className="block text-foreground/80 hover:text-brand-600 transition-colors"
                >
                  Mobile / WhatsApp : {siteConfig.mobile}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 shrink-0">
                <Clock className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-800 mb-1">Horaires</h3>
                <p className="text-foreground/80">
                  {siteConfig.hours.days} : {siteConfig.hours.time}
                </p>
                <p className="text-sm text-red-500 font-medium mt-1">
                  Fermé le {siteConfig.hours.closed}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-brand-200 aspect-[4/3]"
          >
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Centre des Varices — Dely Ibrahim"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
