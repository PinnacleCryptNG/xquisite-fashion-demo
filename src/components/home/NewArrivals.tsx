import Link from "next/link";

import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getNewArrivals } from "@/data/products";

export function NewArrivals() {
  const arrivals = getNewArrivals().slice(0, 8);

  return (
    <section className="bg-ivory px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-8 sm:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading
            eyebrow="New arrivals"
            title="Pieces for the woman in motion."
            description="A considered edit of contemporary pieces designed to move with her."
          />
          <Link
            href="/shop?collection=new-arrivals"
            aria-label="View all new arrivals"
            className="shrink-0 font-sans text-[11px] tracking-[0.22em] uppercase text-stone transition-opacity duration-500 hover:opacity-70"
          >
            View all →
          </Link>
        </div>

        <ProductGrid
          products={arrivals}
          className="gap-x-3.5 gap-y-12 sm:gap-x-7 sm:gap-y-16 lg:gap-x-10 lg:gap-y-20 xl:gap-x-12"
        />
      </div>
    </section>
  );
}
