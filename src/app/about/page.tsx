import type { Metadata } from "next";
import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "XQUISITE is a contemporary Nigerian fashion house created for the modern woman — confident, expressive and constantly evolving.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="relative min-h-[70vh]">
        <FashionImage
          src={siteImages.brandPortrait.src}
          alt={siteImages.brandPortrait.alt}
          fillParent
          priority
          sizes="100vw"
          className="absolute inset-0 min-h-[70vh]"
          imageClassName="object-[center_20%]"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] items-end px-5 pb-12 pt-28 sm:px-8 lg:px-12">
          <div>
            <p className="mb-4 font-sans text-[11px] tracking-[0.32em] uppercase text-ivory/70">
              Born in Nigeria. Designed for the modern woman.
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] font-light tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              Made for the woman who knows who she is.
            </h1>
          </div>
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
            XQUISITE is a contemporary fashion house created for the modern
            woman.
          </p>
          <p>
            Rooted in Nigeria and inspired by the confidence, movement and
            individuality of today&apos;s woman, XQUISITE creates considered
            pieces that balance contemporary design with effortless femininity.
          </p>
          <p>
            Our collections are designed to move with her — from everyday
            moments to the occasions that deserve to be remembered.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh]">
          <FashionImage
            src={siteImages.about.src}
            alt={siteImages.about.alt}
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
