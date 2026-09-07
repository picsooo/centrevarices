import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={36}
                height={36}
                className="brightness-200"
              />
              <div>
                <p className="font-heading font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-sm font-arabic text-brand-300" dir="rtl">
                  {siteConfig.nameAr}
                </p>
              </div>
            </div>
            <p className="text-sm text-brand-300">
              {siteConfig.doctor} — {siteConfig.doctorTitle}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.mobileHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {siteConfig.mobile} (WhatsApp)
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="font-semibold text-white mb-4">Adresse</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <p>
                {siteConfig.address}
                <br />
                <span className="text-brand-400">{siteConfig.landmark}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <p>
            Site réalisé par{" "}
            <a
              href={siteConfig.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 hover:text-white transition-colors"
            >
              {siteConfig.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
