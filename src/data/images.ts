/**
 * Central image catalog for XQUISITE campaign photography.
 *
 * Replace files in /public/images with house photography later.
 * Keep the same `src` paths, or update them here in one place.
 *
 * Art direction: contemporary Nigerian womenswear.
 * Do not add menswear, masculine-coded stock, flags, maps, or Ankara-as-cliché.
 */

export type SiteImage = {
  src: string;
  alt: string;
  usage: string;
};

export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "XQUISITE campaign — a Nigerian woman in an ivory column dress, standing in a contemporary architectural interior",
    usage: "Homepage hero. Full-length contemporary womenswear.",
  },
  editorial: {
    src: "/images/editorial.jpg",
    alt: "XQUISITE editorial — a Nigerian woman in black tailored co-ords walking through a sunlit studio",
    usage: "Homepage campaign statement.",
  },
  about: {
    src: "/images/about.jpg",
    alt: "Portrait of the XQUISITE woman in a black blazer — composed, direct",
    usage: "Brand story and About page.",
  },
  brandPortrait: {
    src: "/images/brand-portrait.jpg",
    alt: "Close editorial portrait of a Nigerian woman with a sculpted afro, wearing a black high-neck top",
    usage: "About page hero.",
  },
  collections: {
    newArrivals: {
      src: "/images/collections/new-arrivals.jpg",
      alt: "New arrivals — a Nigerian woman in an ivory tailored set",
      usage: "Collection panel: New Arrivals.",
    },
    dresses: {
      src: "/images/collections/dresses.jpg",
      alt: "Dresses — a Nigerian woman in a charcoal midi dress, studio light",
      usage: "Collection panel: Dresses.",
    },
    sets: {
      src: "/images/collections/sets.jpg",
      alt: "Sets — a Nigerian woman in an ivory wrap blouse and camel trousers",
      usage: "Collection panel: Sets.",
    },
    tailoring: {
      src: "/images/collections/tailoring.jpg",
      alt: "Tailoring — a Nigerian woman in an ivory blazer over a black column dress",
      usage: "Collection panel: Tailoring.",
    },
  },
  products: {
    amina: [
      {
        src: "/images/products/amina-1.jpg",
        alt: "The Amina Dress — a Nigerian woman in a cream wrap midi, sunlit interior",
        usage: "Product: The Amina Dress, primary editorial.",
      },
      {
        src: "/images/products/amina-2.jpg",
        alt: "The Amina Dress — detail of drape, gold ring and window light",
        usage: "Product: The Amina Dress, detail.",
      },
    ],
    sienna: [
      {
        src: "/images/products/sienna-1.jpg",
        alt: "The Sienna Set — a Nigerian woman in a taupe cropped top and midi skirt",
        usage: "Product: The Sienna Set, primary.",
      },
      {
        src: "/images/products/sienna-2.jpg",
        alt: "The Sienna Set — matching two-piece in a warm architectural interior",
        usage: "Product: The Sienna Set, campaign.",
      },
    ],
    nia: [
      {
        src: "/images/products/nia-1.jpg",
        alt: "The Nia Column Dress — a Nigerian woman in a long black column silhouette",
        usage: "Product: The Nia Column Dress, primary.",
      },
      {
        src: "/images/products/nia-2.jpg",
        alt: "The Nia Column Dress — charcoal midi in studio light",
        usage: "Product: The Nia Column Dress, campaign.",
      },
    ],
    amara: [
      {
        src: "/images/products/amara-1.jpg",
        alt: "The Amara Blazer — a Nigerian woman in a sand tailored trouser suit",
        usage: "Product: The Amara Blazer, primary.",
      },
      {
        src: "/images/products/amara-2.jpg",
        alt: "The Amara Blazer — ivory tailoring in a contemporary courtyard",
        usage: "Product: The Amara Blazer, campaign.",
      },
    ],
    zuri: [
      {
        src: "/images/products/zuri-1.jpg",
        alt: "The Zuri Co-Ord — a Nigerian woman in a cream shirt and trouser set",
        usage: "Product: The Zuri Co-Ord, primary.",
      },
      {
        src: "/images/products/zuri-2.jpg",
        alt: "The Zuri Co-Ord — cream silk blouse and black trousers on a sunlit terrace",
        usage: "Product: The Zuri Co-Ord, campaign.",
      },
    ],
    elara: [
      {
        src: "/images/products/elara-1.jpg",
        alt: "The Elara Gown — a Nigerian woman in an espresso off-shoulder evening gown",
        usage: "Product: The Elara Gown, primary.",
      },
      {
        src: "/images/products/elara-2.jpg",
        alt: "The Elara Gown — evening silhouette in a warm architectural doorway",
        usage: "Product: The Elara Gown, campaign.",
      },
    ],
    kesi: [
      {
        src: "/images/products/kesi-1.jpg",
        alt: "The Kesi Wrap Dress — a Nigerian woman in a charcoal wrap midi by a window",
        usage: "Product: The Kesi Wrap Dress, primary.",
      },
      {
        src: "/images/products/kesi-2.jpg",
        alt: "The Kesi Wrap Dress — ivory satin slip in a contemporary lounge",
        usage: "Product: The Kesi Wrap Dress, campaign.",
      },
    ],
    imani: [
      {
        src: "/images/products/imani-1.jpg",
        alt: "The Imani Tailored Trousers — cream trousers with a black silk camisole",
        usage: "Product: The Imani Tailored Trousers, primary.",
      },
      {
        src: "/images/products/imani-2.jpg",
        alt: "The Imani Tailored Trousers — ivory tailoring, new arrivals campaign",
        usage: "Product: The Imani Tailored Trousers, campaign.",
      },
    ],
  },
  lookbook: [
    {
      src: "/images/lookbook/01.jpg",
      alt: "The XQUISITE woman — close editorial portrait, sculpted afro, black high-neck",
      usage: "Lookbook frame: composure.",
      caption: "Composure",
      span: "tall" as const,
    },
    {
      src: "/images/lookbook/02.jpg",
      alt: "The XQUISITE woman — looking back over the shoulder in a cream off-shoulder top",
      usage: "Lookbook frame: light.",
      caption: "Light",
      span: "portrait" as const,
    },
    {
      src: "/images/lookbook/03.jpg",
      alt: "The XQUISITE woman — seated in an ivory satin dress, contemporary lounge",
      usage: "Lookbook frame: ease.",
      caption: "Ease",
      span: "wide" as const,
    },
    {
      src: "/images/lookbook/04.jpg",
      alt: "The XQUISITE woman — cream blouse and black trousers on a sunlit terrace",
      usage: "Lookbook frame: movement.",
      caption: "Movement",
      span: "portrait" as const,
    },
    {
      src: "/images/lookbook/05.jpg",
      alt: "The XQUISITE woman — black blazer, gold hoops, direct gaze",
      usage: "Lookbook frame: presence.",
      caption: "Presence",
      span: "tall" as const,
    },
    {
      src: "/images/lookbook/06.jpg",
      alt: "The XQUISITE woman — espresso evening dress in a warm doorway",
      usage: "Lookbook frame: evening.",
      caption: "Evening",
      span: "portrait" as const,
    },
    {
      src: "/images/lookbook/07.jpg",
      alt: "The XQUISITE woman — cream contemporary top on a city terrace at dusk",
      usage: "Lookbook frame: city.",
      caption: "City",
      span: "square" as const,
    },
    {
      src: "/images/lookbook/08.jpg",
      alt: "The XQUISITE woman — cream jacket against an urban shutter",
      usage: "Lookbook frame: stance.",
      caption: "Stance",
      span: "portrait" as const,
    },
    {
      src: "/images/lookbook/09.jpg",
      alt: "The XQUISITE woman — gold jewellery study, voluminous afro",
      usage: "Lookbook frame: light on skin.",
      caption: "Gold",
      span: "square" as const,
    },
    {
      src: "/images/lookbook/10.jpg",
      alt: "The XQUISITE woman — white contemporary blouse in the studio",
      usage: "Lookbook frame: unhurried.",
      caption: "Unhurried",
      span: "portrait" as const,
    },
  ],
  instagram: [
    {
      src: "/images/instagram/01.jpg",
      alt: "XQUISITE on Instagram — cream dress, studio still",
      usage: "Instagram grid 1.",
    },
    {
      src: "/images/instagram/02.jpg",
      alt: "XQUISITE on Instagram — black tailoring, studio still",
      usage: "Instagram grid 2.",
    },
    {
      src: "/images/instagram/03.jpg",
      alt: "XQUISITE on Instagram — cream off-shoulder portrait",
      usage: "Instagram grid 3.",
    },
    {
      src: "/images/instagram/04.jpg",
      alt: "XQUISITE on Instagram — wrap dress in daylight",
      usage: "Instagram grid 4.",
    },
    {
      src: "/images/instagram/05.jpg",
      alt: "XQUISITE on Instagram — evening gown campaign still",
      usage: "Instagram grid 5.",
    },
    {
      src: "/images/instagram/06.jpg",
      alt: "XQUISITE on Instagram — jewellery and afro, editorial close-up",
      usage: "Instagram grid 6.",
    },
  ],
} as const;

export const lookbookFrames = siteImages.lookbook;
export const instagramFrames = siteImages.instagram;
