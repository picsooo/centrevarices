"use client";

import { motion } from "framer-motion";
import { Activity, ScanLine, HeartPulse, Gauge } from "lucide-react";
import { siteConfig } from "@/content/site";

const iconMap = {
  activity: Activity,
  scan: ScanLine,
  "heart-pulse": HeartPulse,
  gauge: Gauge,
} as const;

export default function Consultations() {
  return (
    <section id="consultations" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Examens bandeau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
            Nos examens
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Tous les examens sont réalisés sur place, au sein du cabinet.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {siteConfig.exams.map((exam, i) => {
            const Icon = iconMap[exam.icon];
            return (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-200 hover:border-brand-400 hover:shadow-lg transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-100 mb-4">
                  <Icon className="w-7 h-7 text-brand-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-800">
                  {exam.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exam.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pathologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
            Pathologies prises en charge
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {siteConfig.pathologies.map((p, i) => (
            <motion.div
              key={p.fr}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between bg-white rounded-xl px-6 py-4 border border-brand-200"
            >
              <span className="text-brand-800 font-medium">{p.fr}</span>
              <span
                className="text-brand-600 font-arabic text-right"
                dir="rtl"
              >
                {p.ar}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
