import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Piece not found",
  description: "This piece is not in the XQUISITE collection.",
  robots: { index: false },
};

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-5 pt-24 text-center">
      <h1 className="font-serif text-[2.15rem] font-light tracking-tight text-charcoal sm:text-5xl">
        Piece not found.
      </h1>
      <p className="mt-4 max-w-sm font-sans text-sm text-stone">
        Return to the collection.
      </p>
      <Link
        href="/shop"
        className="mt-10 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.22em] text-charcoal uppercase"
      >
        Continue shopping →
      </Link>
    </div>
  );
}
