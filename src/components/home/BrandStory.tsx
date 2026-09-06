import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1600px] items-center lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
            The house
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] font-light tracking-tight text-charcoal sm:text-6xl">
            Made for her.
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-stone sm:text-[15px]">
            XQUISITE exists for the modern woman — confident, expressive and
            constantly evolving.
          </p>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-stone sm:text-[15px]">
            Fashion should not simply dress her. It should reflect her.
          </p>
          <Button asChild variant="outline" className="mt-10">
            <Link href="/about">Our story</Link>
          </Button>
        </div>
        <div className="relative min-h-[56vh] lg:min-h-[80vh]">
          <FashionImage
            src="/images/about.jpg"
            alt="Portrait of the XQUISITE woman"
            fillParent
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
