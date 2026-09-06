"use client";

import { useState } from "react";

import { SizeSelector } from "@/components/product/SizeSelector";
import { WhatsAppOrderButton } from "@/components/product/WhatsAppOrderButton";
import { formatNgn } from "@/lib/utils";
import type { Product, ProductSize } from "@/types/product";

type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [size, setSize] = useState<ProductSize>();

  return (
    <div className="lg:sticky lg:top-28">
      <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-stone">
        {product.categoryLabel}
        {product.newArrival ? " · New Arrival" : ""}
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight font-light tracking-tight text-charcoal sm:text-5xl">
        {product.name}
      </h1>
      <p className="mt-5 font-sans text-lg text-charcoal">
        {formatNgn(product.price)}
      </p>
      <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-stone">
        {product.description}
      </p>

      <div className="mt-10">
        <SizeSelector sizes={product.sizes} value={size} onChange={setSize} />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <WhatsAppOrderButton productName={product.name} size={size} />
      </div>
      <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-stone">
        Orders and fittings are arranged on WhatsApp. Select a size to include it
        in your message.
      </p>

      <ul className="mt-12 space-y-2 border-t border-charcoal/10 pt-8">
        {product.details.map((detail) => (
          <li
            key={detail}
            className="font-sans text-[13px] tracking-wide text-charcoal/80"
          >
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
