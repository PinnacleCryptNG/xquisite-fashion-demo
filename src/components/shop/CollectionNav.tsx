import Link from "next/link";

import { shopHref, shopNav } from "@/data/shop-collections";
import { cn } from "@/lib/utils";

type CollectionNavProps = {
  active?: string;
  sort?: string;
  query?: string;
};

export function CollectionNav({
  active,
  sort,
  query,
}: CollectionNavProps) {
  const current = active ?? "all";

  return (
    <nav aria-label="Shop collections" className="border-b border-charcoal/10">
      <ul className="-mx-5 flex gap-7 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        {shopNav.map((item) => {
          const isActive = current === item.value;
          return (
            <li key={item.value} className="shrink-0">
              <Link
                href={shopHref({
                  collection: item.value,
                  sort,
                  query,
                })}
                className={cn(
                  "relative inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.22em] uppercase transition-colors duration-500",
                  isActive
                    ? "text-charcoal after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-charcoal"
                    : "text-stone hover:text-charcoal",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
