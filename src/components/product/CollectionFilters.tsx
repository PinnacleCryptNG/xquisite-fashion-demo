import Link from "next/link";

import { cn } from "@/lib/utils";

const filters = [
  { href: "/shop", label: "All", value: "all" },
  {
    href: "/shop?collection=new-arrivals",
    label: "New Arrivals",
    value: "new-arrivals",
  },
  { href: "/shop?collection=dresses", label: "Dresses", value: "dresses" },
  { href: "/shop?collection=sets", label: "Sets", value: "sets" },
  {
    href: "/shop?collection=tailoring",
    label: "Tailoring",
    value: "tailoring",
  },
] as const;

export function CollectionFilters({ active }: { active?: string }) {
  const current = active ?? "all";

  return (
    <nav aria-label="Collections" className="overflow-x-auto">
      <ul className="flex min-w-max gap-6 border-b border-charcoal/10 pb-4">
        {filters.map((filter) => {
          const isActive = current === filter.value;
          return (
            <li key={filter.value}>
              <Link
                href={filter.href}
                className={cn(
                  "font-sans text-[11px] tracking-[0.22em] uppercase transition-colors duration-300",
                  isActive ? "text-charcoal" : "text-stone hover:text-charcoal",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {filter.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
