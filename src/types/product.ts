export type ProductCategory = "dresses" | "sets" | "tailoring";

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  details: string[];
  images: ProductImage[];
  sizes: ProductSize[];
  featured: boolean;
  newArrival: boolean;
};
