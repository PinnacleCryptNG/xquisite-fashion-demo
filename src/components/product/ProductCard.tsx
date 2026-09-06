import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { formatNgn } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <Link
        href={`/product/${product.slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
      >
        <FashionImage
          src={product.images[0].src}
          alt={product.images[0].alt}
          ratio="portrait"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
              {product.categoryLabel}
              {product.newArrival ? " · New" : ""}
            </p>
            <h3 className="mt-1.5 font-serif text-xl font-light tracking-tight text-charcoal sm:text-[22px]">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 pt-5 font-sans text-[13px] text-charcoal">
            {formatNgn(product.price)}
          </p>
        </div>
        <p className="mt-3 font-sans text-[10px] tracking-[0.2em] uppercase text-stone opacity-0 transition-opacity duration-500 motion-safe:group-hover:opacity-100 motion-reduce:opacity-100">
          View piece
        </p>
      </Link>
    </article>
  );
}
