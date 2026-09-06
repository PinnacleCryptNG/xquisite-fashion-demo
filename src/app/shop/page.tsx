import type { Metadata } from "next";

import { ProductGrid } from "@/components/product/ProductGrid";
import { CollectionNav } from "@/components/shop/CollectionNav";
import { ShopEmpty } from "@/components/shop/ShopEmpty";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { ShopToolbar } from "@/components/shop/ShopToolbar";
import { filterProducts } from "@/data/products";
import { isShopSort, sortProducts } from "@/data/shop-collections";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop XQUISITE — contemporary silhouettes, everyday sets and statement pieces for the modern woman.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string; q?: string; sort?: string }>;
}) {
  const { collection, q, sort: sortParam } = await searchParams;
  const sort = isShopSort(sortParam) ? sortParam : "recommended";
  const items = sortProducts(filterProducts({ collection, query: q }), sort);

  return (
    <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <ShopHeader collection={collection} />

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <CollectionNav active={collection ?? "all"} sort={sort} query={q} />
        </div>

        <div className="mt-8 mb-10 sm:mt-10 sm:mb-12 lg:mt-12 lg:mb-14">
          <ShopToolbar count={items.length} />
        </div>

        {items.length === 0 ? (
          <ShopEmpty />
        ) : (
          <ProductGrid
            products={items}
            className="gap-x-3.5 gap-y-12 sm:gap-x-7 sm:gap-y-16 lg:gap-x-10 lg:gap-y-20 xl:grid-cols-3"
          />
        )}
      </div>
    </div>
  );
}
