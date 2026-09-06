import Link from "next/link";

import { footerLinks, siteConfig } from "@/lib/config";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12 lg:py-20">
        <div>
          <p className="font-sans text-[13px] font-medium tracking-[0.38em] uppercase text-charcoal">
            XQUISITE
          </p>
          <p className="mt-4 max-w-xs font-serif text-2xl font-light leading-snug text-charcoal">
            {siteConfig.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-stone">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-charcoal transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-stone">
            Connect
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-charcoal transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-charcoal transition-opacity hover:opacity-60"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-sm text-charcoal transition-opacity hover:opacity-60"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal/10">
        <p className="mx-auto max-w-[1600px] px-5 py-6 font-sans text-[11px] tracking-wide text-stone sm:px-8 lg:px-12">
          © {year} XQUISITE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
