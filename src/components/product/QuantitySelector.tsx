"use client";

type QuantitySelectorProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({
  value,
  min = 1,
  max = 8,
  onChange,
}: QuantitySelectorProps) {
  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div>
      <p
        id="quantity-label"
        className="mb-4 font-sans text-[11px] tracking-[0.22em] text-stone uppercase"
      >
        Quantity
      </p>
      <div
        className="inline-flex items-center gap-5"
        role="group"
        aria-labelledby="quantity-label"
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
