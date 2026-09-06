"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { shopSortOptions } from "@/data/shop-collections";

export function ShopSort() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get("sort") ?? "recommended";

  return (
    <div className="hidden items-center gap-3 md:flex">
      <label
        htmlFor="shop-sort"
        className="font-sans text-[11px] tracking-[0.2em] text-stone uppercase"
      >
        Sort
      </label>
      <select
        id="shop-sort"
        value={current}
        onChange={(event) => {
          const next = new URLSearchParams(params.toString());
          if (event.target.value === "recommended") {
            next.delete("sort");
          } else {
            next.set("sort", event.target.value);
          }
          const query = next.toString();
          router.push(query ? `${pathname}?${query}` : pathname);
        }}
        className="cursor-pointer appearance-none bg-transparent font-sans text-[11px] tracking-[0.14em] text-charcoal uppercase outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
      >
        {shopSortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
