import { contactCopy } from "@/data/contact";
import { siteConfig } from "@/lib/config";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function ContactIntro() {
  const whatsappHref = getWhatsAppChatUrl();

  return (
    <section className="bg-ivory px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:items-start md:gap-12 lg:gap-20">
        <div className="max-w-md md:col-span-6 lg:col-span-5 xl:col-span-4">
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
            {contactCopy.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-[2.15rem] leading-[1.08] font-light tracking-tight text-charcoal sm:text-5xl md:text-[2.75rem] lg:text-6xl">
            {contactCopy.heading}
          </h1>
          <p className="mt-6 max-w-sm font-sans text-[15px] leading-[1.75] font-light text-stone">
            {contactCopy.supporting}
          </p>
        </div>

        <dl className="space-y-10 md:col-span-6 md:pt-10 lg:col-span-5 lg:col-start-8 lg:pt-4">
          <div>
            <dt className="font-sans text-[11px] tracking-[0.22em] text-stone uppercase">
              {contactCopy.whatsappLabel}
            </dt>
            <dd className="mt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${siteConfig.whatsappDisplay}`}
                className="inline-flex min-h-11 items-center font-sans text-base text-charcoal underline decoration-charcoal/25 underline-offset-[0.35em] sm:text-lg"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-sans text-[11px] tracking-[0.22em] text-stone uppercase">
              {contactCopy.instagramLabel}
            </dt>
            <dd className="mt-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${siteConfig.instagramHandle}`}
                className="inline-flex min-h-11 items-center font-sans text-base text-charcoal underline decoration-charcoal/25 underline-offset-[0.35em] sm:text-lg"
              >
                {siteConfig.instagramHandle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
