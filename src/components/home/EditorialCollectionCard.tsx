import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import type { EditorialCollection } from "@/data/editorial-collections";

export function EditorialCollectionCard({
  index,
  name,
  description,
  cta,
  href,
  image,
  alt,
  imageClassName,
}: EditorialCollection) {
  return (
    <Link
      href={href}
      className="group block"
      aria-label={`${cta}: ${name}. ${description}`}
    >
      <div className="relative overflow-hidden">
        <FashionImage
          src={image}
          alt={alt}
          ratio="portrait"
          sizes="(max-width: 767px) 100vw, 50vw"
          className="w-full"
          imageClassName={imageClassName}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-ink/[0.07]"
        />
      </div>

      <div className="pt-7 sm:pt-8">
        <p className="font-sans text-[11px] tracking-[0.28em] text-stone uppercase">
          {index}
        </p>
        <h3 className="mt-3 font-serif text-[1.85rem] leading-[1.08] font-light tracking-[0.04em] text-charcoal uppercase sm:text-[2.15rem] lg:text-[2.35rem]">
          {name}
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm font-light leading-relaxed text-stone">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase">
          {cta}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
