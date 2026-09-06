import Link from "next/link";

export function ShopEmpty() {
  return (
    <div className="py-20 text-center sm:py-28">
      <p className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
        No pieces here yet.
      </p>
      <p className="mt-3 font-sans text-sm text-stone">Try another edit.</p>
      <Link
        href="/shop"
        className="mt-8 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase"
      >
        Browse all pieces →
      </Link>
    </div>
  );
}
