"use server";

import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  phone: z
    .string()
    .regex(/^0[567]\d{8}$/, "Numéro de téléphone invalide"),
  reason: z.string().min(1, "Motif requis"),
  date: z.string().min(1, "Date requise"),
  time: z.string().min(1, "Créneau requis"),
  message: z.string().optional(),
  honeypot: z.string().max(0),
});

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(phone: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(phone);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(phone, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function submitBooking(data: {
  name: string;
  phone: string;
  reason: string;
  date: string;
  time: string;
  message: string;
  honeypot: string;
}): Promise<{ success: boolean; error?: string }> {
  // Honeypot check
  if (data.honeypot) {
    return { success: true }; // Silently accept spam
  }

  // Validate
  const parsed = bookingSchema.safeParse({
    ...data,
    phone: data.phone.replace(/\s/g, ""),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message || "Données invalides",
    };
  }

  const { name, phone, reason, date, time, message } = parsed.data;

  // Rate limit
  if (isRateLimited(phone)) {
    return {
      success: false,
      error: "Trop de demandes. Veuillez réessayer plus tard.",
    };
  }

  // Check if date is Friday
  const dayOfWeek = new Date(date + "T00:00:00").getDay();
  if (dayOfWeek === 5) {
    return {
      success: false,
      error: "Le cabinet est fermé le vendredi.",
    };
  }

  // Send email via Resend if API key is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  const cabinetEmail = process.env.CABINET_EMAIL || "contact@centredesvarices.dz";

  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Centre des Varices <noreply@centredesvarices.dz>",
          to: [cabinetEmail],
          subject: `Nouvelle demande de RDV — ${name}`,
          html: `
            <h2>Nouvelle demande de rendez-vous</h2>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nom</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Téléphone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Motif</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${reason}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Date souhaitée</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${date}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Créneau</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${time}</td></tr>
              ${message ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>` : ""}
            </table>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        // Don't fail — WhatsApp fallback will handle it
      }
    } catch (err) {
      console.error("Email sending failed:", err);
    }
  }

  return { success: true };
}
