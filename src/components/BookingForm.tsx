"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { submitBooking } from "@/app/actions/booking";

const timeSlots = [
  "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    reason: "",
    date: "",
    time: "",
    message: "",
    honeypot: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const isFriday = (dateStr: string) => {
    if (!dateStr) return false;
    const d = new Date(dateStr + "T00:00:00");
    return d.getDay() === 5;
  };

  const isPhoneValid = (phone: string) =>
    /^0[567]\d{8}$/.test(phone.replace(/\s/g, ""));

  const canProceedStep1 =
    form.name.trim() && isPhoneValid(form.phone) && form.reason;

  const canSubmit = canProceedStep1 && form.date && form.time && !isFriday(form.date);

  const handleSubmit = () => {
    if (form.honeypot) return;
    setError(null);

    startTransition(async () => {
      const result = await submitBooking(form);
      if (result.success) {
        setSubmitted(true);
        // Open WhatsApp
        if (
          siteConfig.bookingMode === "whatsapp" ||
          siteConfig.bookingMode === "both"
        ) {
          const reason =
            siteConfig.consultationReasons.find((r) => r.value === form.reason)
              ?.label || form.reason;
          const msg = encodeURIComponent(
            `Bonjour, je souhaite prendre rendez-vous.\n\nNom : ${form.name}\nTéléphone : ${form.phone}\nMotif : ${reason}\nDate souhaitée : ${form.date}\nCréneau : ${form.time}\n${form.message ? `Message : ${form.message}` : ""}`
          );
          window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
        }
      } else {
        setError(result.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle2 className="w-16 h-16 text-brand-600 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-brand-800 mb-2">
          Demande envoyée
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Le cabinet vous confirme par WhatsApp ou téléphone dans les meilleurs
          délais.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 1
              ? "bg-brand-800 text-white"
              : "bg-brand-100 text-brand-600"
          }`}
        >
          1
        </div>
        <div className="w-12 h-0.5 bg-brand-200" />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
            step >= 2
              ? "bg-brand-800 text-white"
              : "bg-brand-100 text-brand-600"
          }`}
        >
          2
        </div>
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={form.honeypot}
            onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-brand-800 mb-1.5"
            >
              Nom et prénom *
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-brand-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-base"
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-brand-800 mb-1.5"
            >
              Téléphone *
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-brand-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-base"
              placeholder="05XX XX XX XX"
            />
            {form.phone && !isPhoneValid(form.phone) && (
              <p className="mt-1 text-sm text-red-500">
                Numéro invalide (format : 05/06/07 + 8 chiffres)
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-brand-800 mb-1.5"
            >
              Motif de consultation *
            </label>
            <select
              id="reason"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-brand-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-base"
            >
              <option value="">Sélectionner un motif</option>
              {siteConfig.consultationReasons.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => canProceedStep1 && setStep(2)}
            disabled={!canProceedStep1}
            className="w-full py-3.5 bg-brand-800 text-white font-medium rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base"
          >
            Continuer
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="date"
              className="flex items-center gap-2 text-sm font-medium text-brand-800 mb-1.5"
            >
              <CalendarDays className="w-4 h-4" />
              Date souhaitée *
            </label>
            <input
              id="date"
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-brand-200 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-base"
            />
            {isFriday(form.date) && (
              <p className="mt-1 text-sm text-red-500">
                Le cabinet est fermé le vendredi
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-brand-800 mb-3">
              <Clock className="w-4 h-4" />
              Créneau horaire *
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setForm({ ...form, time: slot })}
                  className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    form.time === slot
                      ? "bg-brand-800 text-white"
                      : "bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-brand-800 mb-1.5"
            >
              Message (facultatif)
            </label>
            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-base resize-none"
              placeholder="Informations complémentaires..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 rounded-lg p-3">
              {error}
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3.5 border border-brand-200 text-brand-800 font-medium rounded-full hover:bg-brand-50 transition-colors text-base"
            >
              Retour
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isPending}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-brand-800 text-white font-medium rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base"
            >
              {isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              Envoyer la demande
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
