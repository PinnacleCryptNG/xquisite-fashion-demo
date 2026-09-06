import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "amina-dress",
    slug: "the-amina-dress",
    name: "The Amina Dress",
    price: 85000,
    category: "dresses",
    categoryLabel: "Dresses",
    description:
      "A fluid midi with a considered neckline and a hem that moves. Cut to follow the body without insisting on it — the piece you reach for when the day asks more of you.",
    details: [
      "Fluid midi silhouette",
      "Concealed back zip",
      "Fully lined bodice",
      "Dry clean only",
    ],
    images: [
      {
        src: "/images/products/amina-1.jpg",
        alt: "The Amina Dress — front view on a model in natural light",
      },
      {
        src: "/images/products/amina-2.jpg",
        alt: "The Amina Dress — detail of drape and hem",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    newArrival: true,
  },
  {
    id: "sienna-set",
    slug: "the-sienna-set",
    name: "The Sienna Set",
    price: 128000,
    category: "sets",
    categoryLabel: "Sets",
    description:
      "A two-piece in a warm, grounded tone. Tailored enough for the room, easy enough for the evening after. Worn together, or parted — as you please.",
    details: [
      "Matching top and trouser",
      "Soft structured shoulder",
      "Wide, refined leg",
      "Dry clean recommended",
    ],
    images: [
      {
        src: "/images/products/sienna-1.jpg",
        alt: "The Sienna Set — tailored two-piece worn as a complete look",
      },
      {
        src: "/images/products/sienna-2.jpg",
        alt: "The Sienna Set — movement and proportion",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    newArrival: true,
  },
  {
    id: "nia-column",
    slug: "the-nia-column-dress",
    name: "The Nia Column Dress",
    price: 95000,
    category: "dresses",
    categoryLabel: "Dresses",
    description:
      "A clean vertical line from shoulder to hem. The Nia is architecture for the body — spare, assured, and quietly unforgettable.",
    details: [
      "Column silhouette",
      "Subtle back vent",
      "Side zip closure",
      "Ankle length",
    ],
    images: [
      {
        src: "/images/products/nia-1.jpg",
        alt: "The Nia Column Dress — full-length silhouette",
      },
      {
        src: "/images/products/nia-2.jpg",
        alt: "The Nia Column Dress — side profile",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    newArrival: true,
  },
  {
    id: "amara-blazer",
    slug: "the-amara-blazer",
    name: "The Amara Blazer",
    price: 110000,
    category: "tailoring",
    categoryLabel: "Tailoring",
    description:
      "A jacket with presence. Softened at the shoulder, precise at the waist. The Amara is the layer that turns a simple look into a statement of intent.",
    details: [
      "Single-breasted close",
      "Soft shoulder construction",
      "Functional welt pockets",
      "Fully lined",
    ],
    images: [
      {
        src: "/images/products/amara-1.jpg",
        alt: "The Amara Blazer — tailored jacket worn open",
      },
      {
        src: "/images/products/amara-2.jpg",
        alt: "The Amara Blazer — styling with contemporary separates",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    newArrival: true,
  },
  {
    id: "zuri-coord",
    slug: "the-zuri-co-ord",
    name: "The Zuri Co-Ord",
    price: 98000,
    category: "sets",
    categoryLabel: "Sets",
    description:
      "Ease, composed. A matching co-ord designed to travel from late morning to late table — without a costume change.",
    details: [
      "Coordinated two-piece",
      "Elasticated ease at the waist",
      "Breathable drape",
      "Hand wash cold",
    ],
    images: [
      {
        src: "/images/products/zuri-1.jpg",
        alt: "The Zuri Co-Ord — matching set in a contemporary silhouette",
      },
      {
        src: "/images/products/zuri-2.jpg",
        alt: "The Zuri Co-Ord — fabric and finish close-up",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    newArrival: true,
  },
  {
    id: "elara-gown",
    slug: "the-elara-gown",
    name: "The Elara Gown",
    price: 185000,
    category: "dresses",
    categoryLabel: "Dresses",
    description:
      "Evening, without excess. The Elara falls in a long, unbroken line — made for the woman who enters a room already decided.",
    details: [
      "Floor-length gown",
      "Subtle train",
      "Concealed zip",
      "Dry clean only",
    ],
    images: [
      {
        src: "/images/products/elara-1.jpg",
        alt: "The Elara Gown — evening silhouette",
      },
      {
        src: "/images/products/elara-2.jpg",
        alt: "The Elara Gown — fabric movement",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    newArrival: false,
  },
  {
    id: "kesi-wrap",
    slug: "the-kesi-wrap-dress",
    name: "The Kesi Wrap Dress",
    price: 78000,
    category: "dresses",
    categoryLabel: "Dresses",
    description:
      "A wrap that knows where to sit. The Kesi is generous at the sleeve, exact at the waist — a dress that feels like it was waiting for you.",
    details: [
      "True wrap close",
      "Self-tie belt",
      "Midi length",
      "Gentle machine wash",
    ],
    images: [
      {
        src: "/images/products/kesi-1.jpg",
        alt: "The Kesi Wrap Dress — wrap silhouette in motion",
      },
      {
        src: "/images/products/kesi-2.jpg",
        alt: "The Kesi Wrap Dress — street styling",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    newArrival: true,
  },
  {
    id: "imani-trousers",
    slug: "the-imani-tailored-trousers",
    name: "The Imani Tailored Trousers",
    price: 72000,
    category: "tailoring",
    categoryLabel: "Tailoring",
    description:
      "A trouser with a long, clean line and a waist that sits where it should. Pair with the Amara, or let them hold a look on their own.",
    details: [
      "High rise",
      "Pressed crease",
      "Side pockets",
      "Dry clean recommended",
    ],
    images: [
      {
        src: "/images/products/imani-1.jpg",
        alt: "The Imani Tailored Trousers — full look",
      },
      {
        src: "/images/products/imani-2.jpg",
        alt: "The Imani Tailored Trousers — proportion and stance",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    newArrival: false,
  },
];

export const collections = [
  {
    slug: "new-arrivals",
    name: "New Arrivals",
    href: "/shop?collection=new-arrivals",
    image: "/images/collections/new-arrivals.jpg",
    alt: "New arrivals from the XQUISITE collection",
  },
  {
    slug: "dresses",
    name: "Dresses",
    href: "/shop?collection=dresses",
    image: "/images/collections/dresses.jpg",
    alt: "XQUISITE dresses — contemporary silhouettes",
  },
  {
    slug: "sets",
    name: "Sets",
    href: "/shop?collection=sets",
    image: "/images/collections/sets.jpg",
    alt: "XQUISITE sets and co-ords",
  },
] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getNewArrivals() {
  return products.filter((product) => product.newArrival);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);

  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );
  const others = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function filterProducts(options: {
  collection?: string;
  query?: string;
}) {
  const { collection, query } = options;
  let result = [...products];

  if (collection === "new-arrivals") {
    result = result.filter((product) => product.newArrival);
  } else if (collection === "dresses" || collection === "sets") {
    result = result.filter((product) => product.category === collection);
  } else if (collection === "tailoring") {
    result = result.filter((product) => product.category === "tailoring");
  }

  if (query?.trim()) {
    const q = query.trim().toLowerCase();
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q),
    );
  }

  return result;
}
