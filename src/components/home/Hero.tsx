import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/data/images";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-ink text-ivory">
      <FashionImage
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fillParent
        priority
        sizes="100vw"
        className="absolute inset-0"
        imageClassName="object-[center_15%] sm:object-[center_20%]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/30 to-ink/15" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <p className="font-sans text-[11px] tracking-[0.42em] uppercase text-ivory/80">
          XQUISITE
        </p>
        <p className="mt-4 font-sans text-[10px] tracking-[0.32em] uppercase text-ivory/65">
          Nigeria · Contemporary womenswear
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-[2.65rem] leading-[0.95] font-light tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Contemporary fashion
          <br className="hidden sm:block" /> for the modern woman.
        </h1>
        <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/80 sm:text-[15px]">
          Contemporary silhouettes designed for women who move with confidence.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="ivory">
            <Link href="/shop">Shop collection</Link>
          </Button>
          <Button asChild variant="ivory">
            <Link href="/lookbook">Explore lookbook</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
