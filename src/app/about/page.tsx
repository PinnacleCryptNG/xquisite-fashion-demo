import type { Metadata } from "next";
import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "XQUISITE exists for the modern woman — confident, expressive and constantly evolving.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="relative min-h-[70vh]">
        <FashionImage
          src="/images/brand-portrait.jpg"
          alt="Portrait from the XQUISITE house"
          fillParent
          priority
          sizes="100vw"
          className="absolute inset-0 min-h-[70vh]"
          imageClassName="object-[center_20%]"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] items-end px-5 pb-12 pt-28 sm:px-8 lg:px-12">
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] font-light tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Made for the woman who knows who she is.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
            The house
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-charcoal sm:text-5xl">
            XQUISITE
          </h2>
        </div>
        <div className="max-w-xl space-y-6 font-sans text-sm leading-relaxed text-stone sm:text-[15px]">
          <p>
            XQUISITE exists for the modern woman — confident, expressive and
            constantly evolving. Fashion should not simply dress her. It should
            reflect her.
          </p>
          <p>
            We design contemporary silhouettes with intentional details: a
            shoulder that sits, a hem that moves, a line that holds. Each piece
            is made to become part of a personal signature — worn again, and
            remembered.
          </p>
          <p>
            Rooted in a modern African sensibility and cut for a global life,
            the house is less interested in trend than in presence. The woman we
            dress already knows who she is. We simply give her the clothes to
            match.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh]">
          <FashionImage
            src="/images/about.jpg"
            alt="The XQUISITE woman in portrait"
            fillParent
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-cream px-5 py-16 sm:px-12 lg:px-20">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
            The standard
          </p>
          <blockquote className="mt-6 font-serif text-3xl leading-snug font-light tracking-tight text-charcoal sm:text-4xl">
            Dress like you mean it.
          </blockquote>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-stone">
            Contemporary silhouettes. Intentional details. Pieces designed to
            become part of your signature.
          </p>
          <Button asChild variant="outline" className="mt-10 self-start">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
