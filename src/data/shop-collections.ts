import type { Product } from "@/types/product";

export type ShopCollectionSlug =
  | "all"
  | "new-arrivals"
  | "sets"
  | "dresses"
  | "tops"
  | "bottoms"
  | "tailoring";

export type ShopSort = "recommended" | "newest" | "price-asc" | "price-desc";

export const shopNav = [
  { value: "all", label: "All", href: "/shop" },
  {
    value: "new-arrivals",
    label: "New Arrivals",
    href: "/shop?collection=new-arrivals",
  },
  { value: "sets", label: "Sets", href: "/shop?collection=sets" },
  { value: "dresses", label: "Dresses", href: "/shop?collection=dresses" },
  { value: "tops", label: "Tops", href: "/shop?collection=tops" },
  { value: "bottoms", label: "Bottoms", href: "/shop?collection=bottoms" },
] as const;

export const shopCopy: Record<
  string,
  { title: string; description?: string }
> = {
  all: {
    title: "Pieces for the way she moves.",
    description:
      "A considered wardrobe of contemporary silhouettes, everyday sets and statement pieces.",
  },
  "new-arrivals": {
    title: "Just in.",
  },
  sets: {
    title: "Sets made for moving.",
  },
  dresses: {
    title: "Silhouettes with presence.",
  },
  tops: {
    title: "Tops.",
  },
  bottoms: {
    title: "Bottoms.",
  },
  tailoring: {
    title: "Tailoring with a long line.",
  },
};

export const shopSortOptions: { value: ShopSort; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to high" },
  { value: "price-desc", label: "Price: High to low" },
];

export function getShopCopy(collection?: string) {
  if (!collection) return shopCopy.all;
  return shopCopy[collection] ?? shopCopy.all;
}

export function isShopSort(value: string | undefined): value is ShopSort {
  return (
    value === "recommended" ||
    value === "newest" ||
    value === "price-asc" ||
    value === "price-desc"
  );
}

export function sortProducts(items: Product[], sort: ShopSort = "recommended") {
  const ranked = items.map((product, index) => ({ product, index }));

  ranked.sort((a, b) => {
    if (sort === "newest") {
      const flag = Number(b.product.newArrival) - Number(a.product.newArrival);
      return flag !== 0 ? flag : a.index - b.index;
    }
    if (sort === "price-asc") {
      const price = a.product.price - b.product.price;
      return price !== 0 ? price : a.index - b.index;
    }
    if (sort === "price-desc") {
      const price = b.product.price - a.product.price;
      return price !== 0 ? price : a.index - b.index;
    }
    const featured = Number(b.product.featured) - Number(a.product.featured);
    return featured !== 0 ? featured : a.index - b.index;
  });

  return ranked.map(({ product }) => product);
}

export function shopHref(options: {
  collection?: string;
  sort?: string;
  query?: string;
}) {
  const params = new URLSearchParams();
  if (options.collection && options.collection !== "all") {
    params.set("collection", options.collection);
  }
  if (options.sort && options.sort !== "recommended") {
    params.set("sort", options.sort);
  }
  if (options.query?.trim()) {
    params.set("q", options.query.trim());
  }
  const query = params.toString();
  return query ? `/shop?${query}` : "/shop";
}
