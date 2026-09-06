"use client";

import Link from "next/link";
import { useState } from "react";

import { useBag } from "@/components/bag/BagProvider";
import { ProductDetails } from "@/components/product/ProductDetails";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { SizeSelector } from "@/components/product/SizeSelector";
import { Button } from "@/components/ui/button";
import { formatNgn } from "@/lib/utils";
import type { Product, ProductSize } from "@/types/product";

type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const { add } = useBag();
  const [size, setSize] = useState<ProductSize>();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const needsSize = product.sizes.length > 0;

  function handleAdd() {
    if (needsSize && !size) {
      setAdded(false);
      setError("Select a size.");
      return;
    }
    add({ slug: product.slug, size, quantity });
    setError(null);
    setAdded(true);
  }

  return (
    <div className="lg:sticky lg:top-32">
      <p className="font-sans text-[11px] tracking-[0.24em] text-stone uppercase">
        {product.categoryLabel}
      </p>
      <h1 className="mt-4 font-serif text-[2.15rem] leading-[1.08] font-light tracking-tight text-charcoal sm:text-5xl">
        {product.name}
      </h1>
      <p className="mt-5 font-sans text-base text-charcoal">
        {formatNgn(product.price)}
      </p>
      <p className="mt-8 max-w-md font-sans text-[15px] leading-[1.75] font-light text-stone">
        {product.description}
      </p>

      {needsSize ? (
        <div className="mt-12">
          <SizeSelector
            sizes={product.sizes}
            value={size}
            onChange={(next) => {
              setSize(next);
              setError(null);
              setAdded(false);
            }}
          />
        </div>
      ) : null}

      <div className="mt-10">
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>

      <div className="mt-10">
        <Button type="button" size="lg" className="w-full sm:w-auto" onClick={handleAdd}>
          Add to bag
        </Button>
        {error ? (
          <p role="alert" className="mt-4 font-sans text-sm text-charcoal">
            {error}
          </p>
        ) : null}
        {added ? (
          <p className="mt-5 font-sans text-sm leading-relaxed text-stone" role="status">
            Added to your edit.{" "}
            <Link
              href="/bag"
              className="text-charcoal underline decoration-charcoal/30 underline-offset-4"
            >
              View your edit
            </Link>
          </p>
        ) : null}
      </div>

      <div className="mt-14">
        <ProductDetails details={product.details} />
      </div>
    </div>
  );
}
