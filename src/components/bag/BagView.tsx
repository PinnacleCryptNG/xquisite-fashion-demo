"use client";

import Link from "next/link";

import { BagItem } from "@/components/bag/BagItem";
import { useBag } from "@/components/bag/BagProvider";
import { Button } from "@/components/ui/button";
import { formatNgn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function BagView() {
  const { lines, count, estimatedTotal, ready, setQuantity, remove, clear, enquiryMessage } =
    useBag();

  if (!ready) {
    return (
      <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 lg:px-12">
        <p className="font-sans text-[11px] tracking-[0.28em] text-stone uppercase">
          Your edit
        </p>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="flex min-h-[80vh] flex-col justify-center bg-ivory px-5 pt-24 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
            Your edit is empty
          </h1>
          <p className="mt-5 max-w-xl font-serif text-4xl font-light tracking-tight text-charcoal sm:text-5xl">
            Begin with a piece that speaks to you.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase"
          >
            Explore the collection →
          </Link>
        </div>
      </div>
    );
  }

  const countLabel = count === 1 ? "1 piece" : `${count} pieces`;
  const enquireHref = getWhatsAppUrl(enquiryMessage);

  return (
    <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <Link
          href="/shop"
          className="inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.2em] text-stone uppercase transition-colors duration-500 hover:text-charcoal"
        >
          ← Continue shopping
        </Link>

        <header className="mt-8 max-w-xl">
          <h1 className="font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
            Your edit
          </h1>
          <p className="mt-4 font-serif text-4xl leading-[1.05] font-light tracking-tight text-charcoal sm:text-5xl">
            Pieces you&apos;ve chosen to enquire about.
          </p>
        </header>

        <div className="mt-12 grid gap-16 lg:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)] lg:gap-20 xl:gap-28">
          <div>
            <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {lines.map((line) => (
                <li key={line.key}>
                  <BagItem
                    line={line}
                    onQuantityChange={(quantity) =>
                      setQuantity(line.key, quantity)
                    }
                    onRemove={() => remove(line.key)}
                  />
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={clear}
              className="mt-6 min-h-11 font-sans text-[11px] tracking-[0.18em] text-stone uppercase transition-colors duration-500 hover:text-charcoal"
            >
              Clear edit
            </button>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-sans text-[11px] tracking-[0.24em] text-stone uppercase">
              Your enquiry
            </p>
            <p className="mt-5 font-sans text-sm text-stone">{countLabel}</p>
            <p className="mt-8 font-sans text-[11px] tracking-[0.18em] text-stone uppercase">
              Estimated total
            </p>
            <p className="mt-2 font-serif text-3xl font-light text-charcoal">
              {formatNgn(estimatedTotal)}
            </p>

            <Button asChild size="lg" className="mt-10 w-full">
              <a
                href={enquireHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire via WhatsApp"
              >
                Enquire via WhatsApp
              </a>
            </Button>
            <p className="mt-5 font-sans text-sm leading-relaxed text-stone">
              This sends an enquiry. It does not place an order.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.2em] text-stone uppercase transition-colors duration-500 hover:text-charcoal"
            >
              Continue shopping →
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
