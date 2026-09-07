import type { Metadata } from "next";
import { Fraunces, Manrope, Tajawal } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "fr_DZ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${manrope.variable} ${tajawal.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: siteConfig.name,
              alternateName: siteConfig.nameAr,
              description: siteConfig.seo.description,
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Rue Mohamed Bettouche Ali N° 28, Clair Val",
                addressLocality: "Dely Ibrahim",
                addressRegion: "Alger",
                addressCountry: "DZ",
              },
              telephone: siteConfig.phoneHref,
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "08:30",
                  closes: "16:30",
                },
              ],
              medicalSpecialty: "Internal Medicine",
              employee: {
                "@type": "Physician",
                name: siteConfig.doctor,
                medicalSpecialty: "Internal Medicine",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
