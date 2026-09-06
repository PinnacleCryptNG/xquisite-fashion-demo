"use client";

import type { ProductSize } from "@/types/product";
import { cn } from "@/lib/utils";

type SizeSelectorProps = {
  sizes: ProductSize[];
  value?: ProductSize;
  onChange: (size: ProductSize) => void;
};

export function SizeSelector({ sizes, value, onChange }: SizeSelectorProps) {
  if (sizes.length === 0) return null;

  return (
    <fieldset>
      <legend className="mb-4 font-sans text-[11px] tracking-[0.22em] text-stone uppercase">
        Size
      </legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {sizes.map((size) => {
          const selected = value === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onChange(size)}
              aria-pressed={selected}
              className={cn(
                "min-h-11 min-w-8 font-sans text-[13px] tracking-[0.14em] uppercase transition-colors duration-500",
                selected
                  ? "border-b border-charcoal text-charcoal"
                  : "border-b border-transparent text-stone hover:text-charcoal",
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
