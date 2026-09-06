"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useBag } from "@/components/bag/BagProvider";
import { cn } from "@/lib/utils";

export function BagIndicator({ inverted = false }: { inverted?: boolean }) {
  const { count, ready } = useBag();
  const pathname = usePathname();
  const current = pathname === "/bag";
  const shown = ready ? count : 0;

  return (
    <Link
      href="/bag"
      aria-current={current ? "page" : undefined}
      aria-label={
        shown > 0
          ? `Your edit, ${shown} ${shown === 1 ? "piece" : "pieces"}`
          : "Your edit"
      }
      className={cn(
        "flex min-h-11 items-center px-1.5 font-sans text-[11px] tracking-[0.22em] uppercase transition-opacity duration-500",
        current ? "opacity-100" : "opacity-65 hover:opacity-100",
        inverted && "[text-shadow:0_1px_16px_rgba(15,14,13,0.28)]",
      )}
    >
      <span className="sm:hidden">Edit{shown > 0 ? ` (${shown})` : ""}</span>
      <span className="hidden sm:inline">
        Your edit{shown > 0 ? ` (${shown})` : ""}
      </span>
    </Link>
  );
}
