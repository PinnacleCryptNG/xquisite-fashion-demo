import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-5 pt-24 text-center">
      <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-stone">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl font-light tracking-tight text-charcoal">
        This page has left the room.
      </h1>
      <p className="mt-4 max-w-sm font-sans text-sm text-stone">
        The piece you are looking for is not here. Return to the collection.
      </p>
      <Button asChild className="mt-10">
        <Link href="/shop">Shop collection</Link>
      </Button>
    </div>
  );
}
