import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-5 pt-24 text-center">
      <h1 className="font-serif text-5xl font-light tracking-tight text-charcoal">
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
