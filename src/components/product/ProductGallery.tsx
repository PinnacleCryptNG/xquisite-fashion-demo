"use client";

import { useState } from "react";

import { FashionImage } from "@/components/shared/FashionImage";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/types/product";

type ProductGalleryProps = {
  name: string;
  images: ProductImage[];
};

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  const hasMany = images.length > 1;

  function go(delta: number) {
    setActive((index) => (index + delta + images.length) % images.length);
  }

  return (
    <div>
      <div className={cn(hasMany && "lg:grid lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-4")}>
        {hasMany ? (
          <ul className="hidden lg:flex lg:flex-col lg:gap-3">
            {images.map((image, index) => {
              const selected = index === active;
              return (
                <li key={image.src}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`View ${name}, image ${index + 1}`}
                    aria-pressed={selected}
                    className={cn(
                      "block w-full overflow-hidden border transition-opacity duration-500",
                      selected
                        ? "border-charcoal"
                        : "border-transparent opacity-55 hover:opacity-100",
                    )}
                  >
                    <FashionImage
                      src={image.src}
                      alt=""
                      ratio="portrait"
                      sizes="72px"
                      imageClassName="motion-safe:group-hover:scale-100"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}

        <FashionImage
          key={current.src}
          src={current.src}
          alt={current.alt}
          ratio="portrait"
          priority
          sizes="(max-width: 1023px) 100vw, 55vw"
          imageClassName="motion-safe:animate-[xq-pdp-fade_500ms_ease-out]"
        />
      </div>

      {hasMany ? (
        <div className="mt-3 flex items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="flex size-11 items-center justify-center font-sans text-sm text-charcoal"
          >
            ←
          </button>
          <p className="font-sans text-[10px] tracking-[0.18em] text-stone uppercase">
            {active + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="flex size-11 items-center justify-center font-sans text-sm text-charcoal"
          >
            →
          </button>
        </div>
      ) : null}

      <style>{`
        @keyframes xq-pdp-fade {
          from { opacity: 0.35; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
