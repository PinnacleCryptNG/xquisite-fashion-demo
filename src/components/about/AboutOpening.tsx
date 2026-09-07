import { FashionImage } from "@/components/shared/FashionImage";
import { aboutCopy } from "@/data/about";
import { siteImages } from "@/data/images";

export function AboutOpening() {
  return (
    <section className="bg-ivory px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-end gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="max-w-md md:max-w-lg lg:col-span-5 lg:max-w-none lg:pb-4 xl:col-span-4">
            <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
              {aboutCopy.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-[2.15rem] leading-[1.08] font-light tracking-tight text-charcoal sm:text-5xl md:text-[3.15rem] lg:text-5xl xl:text-6xl">
              {aboutCopy.heading}
            </h1>
            <p className="mt-6 max-w-sm font-sans text-[15px] leading-[1.75] font-light text-stone md:mt-8 md:max-w-md">
              {aboutCopy.opening}
            </p>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <FashionImage
              src={siteImages.brandPortrait.src}
              alt={siteImages.brandPortrait.alt}
              fillParent
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 92vw, 58vw"
              className="h-[min(58svh,26rem)] md:h-[min(70svh,38rem)] lg:h-[42rem] xl:h-[46rem]"
              imageClassName="object-[center_18%] md:object-[center_16%] motion-safe:group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
