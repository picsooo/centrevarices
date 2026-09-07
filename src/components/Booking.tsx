"use client";

import { motion } from "framer-motion";
import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <section id="rdv" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-800">
              Prendre rendez-vous
            </h2>
            <p className="mt-3 text-muted-foreground">
              Remplissez le formulaire, le cabinet vous confirme par WhatsApp ou
              téléphone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl border border-brand-200 p-6 sm:p-10 shadow-sm"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
