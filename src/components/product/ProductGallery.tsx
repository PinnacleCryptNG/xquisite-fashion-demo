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

  return (
    <div className="grid gap-3 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View ${name} image ${index + 1}`}
            aria-pressed={index === active}
            className={cn(
              "relative w-20 overflow-hidden border transition-opacity duration-300 lg:w-full",
              index === active
                ? "border-charcoal"
                : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <FashionImage
              src={image.src}
              alt=""
              ratio="portrait"
              sizes="88px"
              imageClassName="motion-safe:group-hover:scale-100"
            />
          </button>
        ))}
      </div>
      <div className="order-1 lg:order-2">
        <FashionImage
          src={current.src}
          alt={current.alt}
          ratio="portrait"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
