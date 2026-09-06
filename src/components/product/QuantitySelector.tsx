"use client";

import { useId } from "react";

type QuantitySelectorProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label?: string;
  compact?: boolean;
};

export function QuantitySelector({
  value,
  min = 1,
  max = 8,
  onChange,
  label = "Quantity",
  compact = false,
}: QuantitySelectorProps) {
  const uid = useId();
  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div>
      {compact ? (
        <p id={uid} className="sr-only">
          {label}
        </p>
      ) : (
        <p
          id={uid}
          className="mb-4 font-sans text-[11px] tracking-[0.22em] text-stone uppercase"
        >
          {label}
        </p>
      )}
      <div
        className="inline-flex items-center gap-5"
        role="group"
        aria-labelledby={uid}
      >
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={atMin}
          aria-label="Decrease quantity"
          className="flex size-11 items-center justify-center font-sans text-lg text-charcoal disabled:text-stone"
        >
          −
        </button>
        <span aria-live="polite" className="min-w-6 text-center font-sans text-sm text-charcoal">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={atMax}
          aria-label="Increase quantity"
          className="flex size-11 items-center justify-center font-sans text-lg text-charcoal disabled:text-stone"
        >
          +
        </button>
      </div>
    </div>
  );
}
