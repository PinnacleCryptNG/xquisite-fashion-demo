import { getProductBySlug } from "@/data/products";
import { shopHref } from "@/data/shop-collections";
import { formatNgn } from "@/lib/utils";
import type { Product, ProductSize } from "@/types/product";

export const BAG_STORAGE_KEY = "xquisite-edit";
export const LAST_SHOP_KEY = "xquisite-last-shop";
export const BAG_MIN_QTY = 1;
export const BAG_MAX_QTY = 8;

let memorySnapshot = "[]";

export type BagEntry = {
  slug: string;
  size?: ProductSize;
  quantity: number;
};

export type BagLine = {
  key: string;
  slug: string;
  size?: ProductSize;
  quantity: number;
  product: Product;
};

export function bagLineKey(slug: string, size?: ProductSize) {
  return `${slug}::${size ?? "os"}`;
}

export function clampBagQuantity(value: number) {
  return Math.min(BAG_MAX_QTY, Math.max(BAG_MIN_QTY, Math.round(value)));
}

export function parseBagEntries(raw: string | null): BagEntry[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item): item is BagEntry => {
        return (
          !!item &&
          typeof item === "object" &&
          typeof (item as BagEntry).slug === "string" &&
          typeof (item as BagEntry).quantity === "number"
        );
      })
      .map((item) => ({
        slug: item.slug,
        size: item.size,
        quantity: clampBagQuantity(item.quantity),
      }));
  } catch {
    return [];
  }
}

export function keepKnownProducts(entries: BagEntry[]): BagEntry[] {
  return entries.filter((entry) => Boolean(getProductBySlug(entry.slug)));
}

export function readBagSnapshot() {
  if (typeof window === "undefined") return "[]";
  try {
    return window.localStorage.getItem(BAG_STORAGE_KEY) ?? memorySnapshot;
  } catch {
    return memorySnapshot;
  }
}

export function readBagEntries(): BagEntry[] {
  return keepKnownProducts(parseBagEntries(readBagSnapshot()));
}

export function writeBagEntries(entries: BagEntry[]) {
  const next = keepKnownProducts(entries);
  const raw = JSON.stringify(next);
  memorySnapshot = raw;
  try {
    window.localStorage.setItem(BAG_STORAGE_KEY, raw);
  } catch {
    // Session-only fallback when localStorage is blocked or full.
  }
}

export function rememberShopHref(href: string) {
  try {
    window.sessionStorage.setItem(LAST_SHOP_KEY, href);
  } catch {
    // Ignore — continue shopping falls back to /shop.
  }
}

export function rememberShopFromSlug(slug: string) {
  const product = getProductBySlug(slug);
  if (!product) return;
  rememberShopHref(shopHref({ collection: product.category }));
}

export function readLastShopHref() {
  try {
    return window.sessionStorage.getItem(LAST_SHOP_KEY) || "/shop";
  } catch {
    return "/shop";
  }
}

export function resolveBagLines(entries: BagEntry[]): BagLine[] {
  return keepKnownProducts(entries).flatMap((entry) => {
    const product = getProductBySlug(entry.slug);
    if (!product) return [];
    return [
      {
        key: bagLineKey(entry.slug, entry.size),
        slug: entry.slug,
        size: entry.size,
        quantity: clampBagQuantity(entry.quantity),
        product,
      },
    ];
  });
}

export function bagItemCount(lines: BagLine[]) {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

export function bagEstimatedTotal(lines: BagLine[]) {
  return lines.reduce(
    (sum, line) => sum + (line.product.price || 0) * line.quantity,
    0,
  );
}

export function bagEnquiryMessage(lines: BagLine[]) {
  const list = lines
    .map((line) => {
      const size = line.size ? ` — Size ${line.size}` : "";
      return `• ${line.product.name}${size} — Qty ${line.quantity}`;
    })
    .join("\n");

  const total = bagEstimatedTotal(lines);
  const totalLine =
    total > 0 ? `\n\nEstimated total: ${formatNgn(total)}` : "";

  return `Hello XQUISITE,\n\nI'd like to enquire about the following pieces:\n\n${list}${totalLine}\n\nThank you.`;
}
