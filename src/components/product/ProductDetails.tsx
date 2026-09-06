type ProductDetailsProps = {
  details: string[];
};

export function ProductDetails({ details }: ProductDetailsProps) {
  if (details.length === 0) return null;

  return (
    <details className="group border-t border-charcoal/10 pt-6">
      <summary className="cursor-pointer list-none font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          Details
          <span aria-hidden="true" className="text-stone group-open:hidden">
            +
          </span>
          <span aria-hidden="true" className="hidden text-stone group-open:inline">
            −
          </span>
        </span>
      </summary>
      <ul className="mt-5 space-y-2">
        {details.map((detail) => (
          <li
            key={detail}
            className="font-sans text-sm leading-relaxed text-stone"
          >
            {detail}
          </li>
        ))}
      </ul>
    </details>
  );
}
