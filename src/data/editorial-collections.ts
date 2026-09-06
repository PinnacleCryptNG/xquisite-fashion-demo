import { siteImages } from "@/data/images";

export type EditorialCollection = {
  slug: string;
  index: string;
  name: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
  imageClassName?: string;
};

/**
 * Homepage editorial collections.
 * Add entries here to grow the edit without changing product data.
 * Hrefs point at existing shop collection filters.
 */
export const editorialCollections: EditorialCollection[] = [
  {
    slug: "essentials",
    index: "01",
    name: "The Essentials",
    description: "Refined pieces for the everyday.",
    cta: "Explore essentials",
    href: "/shop?collection=sets",
    image: siteImages.collections.sets.src,
    alt: siteImages.collections.sets.alt,
    imageClassName: "object-[50%_18%]",
  },
  {
    slug: "statement",
    index: "02",
    name: "Statement",
    description: "Silhouettes made to be noticed.",
    cta: "Explore statement",
    href: "/shop?collection=dresses",
    image: siteImages.collections.dresses.src,
    alt: siteImages.collections.dresses.alt,
    imageClassName: "object-[48%_16%]",
  },
];
