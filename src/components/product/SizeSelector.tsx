"use client";

import type { ProductSize } from "@/types/product";
import { cn } from "@/lib/utils";

type SizeSelectorProps = {
  sizes: ProductSize[];
  value?: ProductSize;
  onChange: (size: ProductSize) => void;
};

export function SizeSelector({ sizes, value, onChange }: SizeSelectorProps) {
  return (
    <fieldset>
      <legend className="mb-3 font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-stone">
        Size
      </legend>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const selected = value === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onChange(size)}
              aria-pressed={selected}
              className={cn(
                "flex h-11 min-w-11 items-center justify-center border px-3 font-sans text-xs tracking-[0.12em] transition-colors duration-300",
                selected
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/20 text-charcoal hover:border-charcoal",
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
