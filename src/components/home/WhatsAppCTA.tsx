import { Button } from "@/components/ui/button";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  const href = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <section className="bg-charcoal px-5 py-20 text-ivory sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-ivory/55">
          Private styling
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl lg:text-6xl">
          Find your XQUISITE.
        </h2>
        <p className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/70 sm:text-[15px]">
          Need help choosing your piece, finding your size or placing an order?
          Our team is here to help.
        </p>
        <Button asChild variant="ivory" className="mt-10">
          <a href={href} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
