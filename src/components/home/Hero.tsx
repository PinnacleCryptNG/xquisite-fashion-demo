import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/data/images";

export function Hero() {
  return (
    <section className="relative h-[90svh] overflow-hidden bg-ink text-ivory sm:h-[94svh] lg:h-svh">
      <style>{`
        @keyframes xquisite-hero-still {
          from { transform: scale(1.045); }
          to { transform: scale(1); }
        }
        @keyframes xquisite-hero-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>

      <FashionImage
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fillParent
        priority
        sizes="100vw"
        className="absolute inset-0"
        imageClassName="object-[50%_6%] motion-safe:animate-[xquisite-hero-still_11s_cubic-bezier(0.22,1,0.36,1)_forwards] sm:object-[46%_12%] md:object-[38%_26%] lg:object-[32%_32%] xl:object-[28%_22%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(15,14,13,0.36)_0%,rgba(15,14,13,0.1)_28%,transparent_52%)]"
      />

      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pt-24 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16">
        <div className="max-w-[21.5rem] motion-safe:animate-[xquisite-hero-rise_1.15s_cubic-bezier(0.22,1,0.36,1)_0.12s_both] motion-reduce:opacity-100 sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[30rem]">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-ivory/72 sm:text-[11px]">
            Nigeria · Contemporary womenswear
          </p>
          <h1 className="mt-3 font-serif text-[2.15rem] leading-[1.06] font-light tracking-tight sm:mt-4 sm:text-[2.4rem] lg:text-[2.75rem] xl:text-[3.1rem] xl:leading-[1.05]">
            Contemporary fashion
            <br />
            for the modern woman.
          </h1>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-ivory/80 sm:mt-5 sm:text-[15px]">
            Considered silhouettes designed for women who move with confidence.
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center">
            <Button
              asChild
              variant="ivory"
              className="border-ivory bg-ivory text-charcoal hover:bg-ivory/90 hover:text-charcoal"
            >
              <Link href="/shop">Shop collection</Link>
            </Button>
            <Button asChild variant="ivory">
              <Link href="/lookbook">Explore lookbook</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
