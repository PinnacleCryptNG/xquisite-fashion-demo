import { FashionImage } from "@/components/shared/FashionImage";
import { siteImages } from "@/data/images";

export function EditorialSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[70vh] lg:min-h-[90vh]">
          <FashionImage
            src={siteImages.editorial.src}
            alt={siteImages.editorial.alt}
            fillParent
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-20 lg:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
            The season
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.95] font-light tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Dress like
            <br />
            you mean it.
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-stone sm:text-[15px]">
            Contemporary silhouettes. Intentional details. Pieces designed to
            become part of your signature.
          </p>
        </div>
      </div>
    </section>
  );
}
