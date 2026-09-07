import Link from "next/link";

import { AboutReveal } from "@/components/about/AboutReveal";
import { FashionImage } from "@/components/shared/FashionImage";
import { aboutCopy } from "@/data/about";
import { siteImages } from "@/data/images";

export function AboutSecondary() {
  return (
    <section
      aria-labelledby="about-secondary-heading"
      className="bg-ivory px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-20">
        <AboutReveal className="md:col-span-7 lg:col-span-7">
          <FashionImage
            src={siteImages.about.src}
            alt={siteImages.about.alt}
            fillParent
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 58vw, 55vw"
            className="h-[min(56svh,26rem)] md:h-[min(64svh,36rem)] lg:h-[40rem]"
            imageClassName="object-[center_22%] motion-safe:group-hover:scale-100"
          />
        </AboutReveal>
        <AboutReveal
          className="max-w-md md:col-span-5 md:max-w-none lg:col-span-4 lg:col-start-9"
          delay={90}
        >
          <h2
            id="about-secondary-heading"
            className="font-serif text-3xl leading-[1.1] font-light tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            {aboutCopy.secondaryHeading}
          </h2>
          <p className="mt-6 max-w-sm font-sans text-[15px] leading-[1.75] font-light text-stone">
            {aboutCopy.secondary}
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase"
          >
            {aboutCopy.cta}
          </Link>
        </AboutReveal>
      </div>
    </section>
  );
}
