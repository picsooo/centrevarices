"use client";

import { motion } from "framer-motion";
import { Ear, Stethoscope, ClipboardCheck, BriefcaseMedical } from "lucide-react";
import { siteConfig } from "@/content/site";

const stepIcons = [Ear, Stethoscope, ClipboardCheck];

export default function Steps() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
            Comment se passe une consultation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {siteConfig.consultationSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-800 text-white mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* À apporter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto bg-white rounded-2xl border border-brand-200 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 shrink-0">
              <BriefcaseMedical className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-brand-800 mb-1">
                À apporter le jour de la consultation
              </h4>
              <p className="text-muted-foreground">{siteConfig.tooBring}</p>
              <p className="text-muted-foreground font-arabic mt-1" dir="rtl">
                {siteConfig.tooBringAr}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
