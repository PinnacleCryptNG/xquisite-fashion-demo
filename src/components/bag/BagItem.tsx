"use client";

import Link from "next/link";

import { QuantitySelector } from "@/components/product/QuantitySelector";
import { FashionImage } from "@/components/shared/FashionImage";
import { BAG_MAX_QTY, BAG_MIN_QTY, type BagLine } from "@/lib/bag";
import { formatNgn } from "@/lib/utils";

type BagItemProps = {
  line: BagLine;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
};

export function BagItem({ line, onQuantityChange, onRemove }: BagItemProps) {
  const image = line.product.images[0];

  return (
    <article className="grid grid-cols-[5.5rem_1fr] gap-4 py-8 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
      <Link href={`/product/${line.slug}`} className="block">
        <FashionImage
          src={image.src}
          alt={image.alt}
          ratio="portrait"
          sizes="120px"
          imageClassName="motion-safe:group-hover:scale-100"
        />
      </Link>

      <div>
        <p className="font-sans text-[10px] tracking-[0.2em] text-stone uppercase">
          {line.product.categoryLabel}
        </p>
        <h2 className="mt-1.5 font-serif text-xl font-light tracking-tight text-charcoal sm:text-2xl">
          <Link href={`/product/${line.slug}`}>{line.product.name}</Link>
        </h2>
        {line.size ? (
          <p className="mt-2 font-sans text-sm text-stone">Size {line.size}</p>
        ) : null}
        <p className="mt-2 font-sans text-sm text-charcoal">
          {formatNgn(line.product.price)}
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <QuantitySelector
            value={line.quantity}
            min={BAG_MIN_QTY}
            max={BAG_MAX_QTY}
            onChange={onQuantityChange}
            compact
            label={`Quantity for ${line.product.name}${line.size ? `, size ${line.size}` : ""}`}
          />
          <button
            type="button"
            onClick={onRemove}
            className="min-h-11 font-sans text-[11px] tracking-[0.18em] text-stone uppercase transition-colors duration-500 hover:text-charcoal"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
