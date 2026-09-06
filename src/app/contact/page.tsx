import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/config";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with XQUISITE — for sizing, private orders and styling on WhatsApp.",
};

export default function ContactPage() {
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pb-28">
      <div className="mx-auto grid max-w-[1100px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] font-light tracking-tight text-charcoal sm:text-6xl">
            We are here.
          </h1>
          <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-stone">
            For orders, sizing and private appointments, WhatsApp is the most
            direct line to the house.
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="font-sans text-[10px] tracking-[0.22em] uppercase text-stone">
                WhatsApp
              </dt>
              <dd className="mt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-charcoal underline-offset-4 hover:underline"
                >
                  Chat with the studio
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] tracking-[0.22em] uppercase text-stone">
                Email
              </dt>
              <dd className="mt-2 font-sans text-sm text-charcoal">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] tracking-[0.22em] uppercase text-stone">
                Instagram
              </dt>
              <dd className="mt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-charcoal underline-offset-4 hover:underline"
                >
                  {siteConfig.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[10px] tracking-[0.22em] uppercase text-stone">
                Atelier
              </dt>
              <dd className="mt-2 font-sans text-sm text-charcoal">
                {siteConfig.location}
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-charcoal/10 pt-12 lg:border-t-0 lg:pt-0">
          <p className="mb-10 font-sans text-[11px] tracking-[0.22em] uppercase text-stone">
            Write to us
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
