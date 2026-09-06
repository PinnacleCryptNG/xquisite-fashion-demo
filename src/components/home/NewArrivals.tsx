import Link from "next/link";

import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { getNewArrivals } from "@/data/products";

export function NewArrivals() {
  const arrivals = getNewArrivals().slice(0, 8);

  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="This season"
            title="New arrivals"
            description="A considered edit of contemporary pieces designed for the woman who moves with intention."
          />
          <Button asChild variant="outline" className="self-start sm:self-auto">
            <Link href="/shop?collection=new-arrivals">View all</Link>
          </Button>
        </div>
        <ProductGrid products={arrivals} />
      </div>
    </section>
  );
}
