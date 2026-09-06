import type { Metadata } from "next";

import { CollectionFilters } from "@/components/product/CollectionFilters";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { filterProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop the XQUISITE collection — new arrivals, dresses, sets and contemporary tailoring for the modern woman.",
};

const titles: Record<string, { title: string; description: string }> = {
  "new-arrivals": {
    title: "New arrivals",
    description:
      "The latest pieces from the house — considered, current, and made to last beyond the season.",
  },
  dresses: {
    title: "Dresses",
    description:
      "Silhouettes with presence. From the column to the wrap, each dress is cut to become a signature.",
  },
  sets: {
    title: "Sets",
    description:
      "Two-pieces composed as one thought. Worn together, or parted — as you please.",
  },
  tailoring: {
    title: "Tailoring",
    description:
      "Jackets and trousers with a long, clean line — structure without severity.",
  },
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string; q?: string }>;
}) {
  const { collection, q } = await searchParams;
  const copy = (collection && titles[collection]) || {
    title: "The collection",
    description:
      "A considered edit of contemporary pieces designed for the woman who moves with intention.",
  };
  const items = filterProducts({ collection, query: q });

  return (
    <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Shop"
          title={copy.title}
          description={copy.description}
          className="mb-12 sm:mb-16"
        />
        <div className="mb-12">
          <CollectionFilters active={collection ?? "all"} />
        </div>
        <ProductGrid products={items} />
      </div>
    </div>
  );
}
