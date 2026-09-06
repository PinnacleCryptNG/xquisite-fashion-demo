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
    src: "/images/v2/hero.png",
    alt: "XQUISITE campaign — a Nigerian woman in an ivory column dress, standing in a contemporary architectural interior",
    usage: "Homepage hero. Full-length contemporary womenswear.",
  },
  editorial: {
    src: "/images/v2/editorial.png",
    alt: "XQUISITE editorial — a Nigerian woman in black tailored co-ords walking through a sunlit studio",
    usage: "Homepage campaign statement.",
  },
  about: {
    src: "/images/v2/about.png",
    alt: "Portrait of the XQUISITE woman in a black blazer — composed, direct",
    usage: "Brand story and About page.",
  },
  brandPortrait: {
    src: "/images/v2/brand-portrait.png",
    alt: "Close editorial portrait of a Nigerian woman with a sculpted afro, wearing a black high-neck top",
    usage: "About page hero.",
  },
  collections: {
    newArrivals: {
      src: "/images/v2/collections/new-arrivals.png",
      alt: "New arrivals — a Nigerian woman in an ivory tailored set",
      usage: "Collection panel: New Arrivals.",
    },
    dresses: {
      src: "/images/v2/collections/dresses.png",
      alt: "Dresses — a Nigerian woman in a charcoal midi dress, studio light",
      usage: "Collection panel: Dresses.",
    },
    sets: {
      src: "/images/v2/collections/sets.png",
      alt: "Sets — a Nigerian woman in an ivory wrap blouse and camel trousers",
      usage: "Collection panel: Sets.",
    },
    tailoring: {
      src: "/images/v2/collections/tailoring.png",
      alt: "Tailoring — a Nigerian woman in an ivory blazer over a black column dress",
      usage: "Collection panel: Tailoring.",
    },
  },
  products: {
    amina: [
      {
        src: "/images/v2/products/amina-1.png",
        alt: "The Amina Dress — a Nigerian woman in a cream wrap midi, sunlit interior",
        usage: "Product: The Amina Dress, primary editorial.",
      },
      {
        src: "/images/v2/products/amina-2.png",
        alt: "The Amina Dress — detail of drape, gold ring and window light",
        usage: "Product: The Amina Dress, detail.",
      },
    ],
    sienna: [
      {
        src: "/images/v2/products/sienna-1.png",
        alt: "The Sienna Set — a Nigerian woman in a taupe cropped top and midi skirt",
        usage: "Product: The Sienna Set, primary.",
      },
      {
        src: "/images/v2/products/sienna-2.png",
        alt: "The Sienna Set — matching two-piece in a warm architectural interior",
        usage: "Product: The Sienna Set, campaign.",
      },
    ],
    nia: [
      {
        src: "/images/v2/products/nia-1.png",
        alt: "The Nia Column Dress — a Nigerian woman in a long black column silhouette",
        usage: "Product: The Nia Column Dress, primary.",
      },
      {
        src: "/images/v2/products/nia-2.png",
        alt: "The Nia Column Dress — charcoal midi in studio light",
        usage: "Product: The Nia Column Dress, campaign.",
      },
    ],
    amara: [
      {
        src: "/images/v2/products/amara-1.png",
        alt: "The Amara Blazer — a Nigerian woman in a sand tailored trouser suit",
        usage: "Product: The Amara Blazer, primary.",
      },
      {
        src: "/images/v2/products/amara-2.png",
        alt: "The Amara Blazer — ivory tailoring in a contemporary courtyard",
        usage: "Product: The Amara Blazer, campaign.",
      },
    ],
    zuri: [
      {
        src: "/images/v2/products/zuri-1.png",
        alt: "The Zuri Co-Ord — a Nigerian woman in a cream shirt and trouser set",
        usage: "Product: The Zuri Co-Ord, primary.",
      },
      {
        src: "/images/v2/products/zuri-2.png",
        alt: "The Zuri Co-Ord — cream silk blouse and black trousers on a sunlit terrace",
        usage: "Product: The Zuri Co-Ord, campaign.",
      },
    ],
    elara: [
      {
        src: "/images/v2/products/elara-1.png",
        alt: "The Elara Gown — a Nigerian woman in an espresso off-shoulder evening gown",
        usage: "Product: The Elara Gown, primary.",
      },
      {
        src: "/images/v2/products/elara-2.png",
        alt: "The Elara Gown — evening silhouette in a warm architectural doorway",
        usage: "Product: The Elara Gown, campaign.",
      },
    ],
    kesi: [
      {
        src: "/images/v2/products/kesi-1.png",
        alt: "The Kesi Wrap Dress — a Nigerian woman in a charcoal wrap midi by a window",
        usage: "Product: The Kesi Wrap Dress, primary.",
      },
      {
        src: "/images/v2/products/kesi-2.png",
        alt: "The Kesi Wrap Dress — ivory satin slip in a contemporary lounge",
        usage: "Product: The Kesi Wrap Dress, campaign.",
      },
    ],
    imani: [
      {
        src: "/images/v2/products/imani-1.png",
        alt: "The Imani Tailored Trousers — cream trousers with a black silk camisole",
        usage: "Product: The Imani Tailored Trousers, primary.",
      },
      {
        src: "/images/v2/products/imani-2.png",
        alt: "The Imani Tailored Trousers — ivory tailoring, new arrivals campaign",
        usage: "Product: The Imani Tailored Trousers, campaign.",
      },
    ],
  },
  lookbook: [
    {
      src: "/images/v2/lookbook/01.png",
      alt: "The XQUISITE woman — close editorial portrait, sculpted afro, black high-neck",
      usage: "Lookbook frame: composure.",
      caption: "Composure",
      span: "tall" as const,
    },
    {
      src: "/images/v2/lookbook/02.png",
      alt: "The XQUISITE woman — looking back over the shoulder in a cream off-shoulder top",
      usage: "Lookbook frame: light.",
      caption: "Light",
      span: "portrait" as const,
    },
    {
      src: "/images/v2/lookbook/03.png",
      alt: "The XQUISITE woman — seated in an ivory satin dress, contemporary lounge",
      usage: "Lookbook frame: ease.",
      caption: "Ease",
      span: "wide" as const,
    },
    {
      src: "/images/v2/lookbook/04.png",
      alt: "The XQUISITE woman — cream blouse and black trousers on a sunlit terrace",
      usage: "Lookbook frame: movement.",
      caption: "Movement",
      span: "portrait" as const,
    },
    {
      src: "/images/v2/lookbook/05.png",
      alt: "The XQUISITE woman — black blazer, gold hoops, direct gaze",
      usage: "Lookbook frame: presence.",
      caption: "Presence",
      span: "tall" as const,
    },
    {
      src: "/images/v2/lookbook/06.png",
      alt: "The XQUISITE woman — espresso evening dress in a warm doorway",
      usage: "Lookbook frame: evening.",
      caption: "Evening",
      span: "portrait" as const,
    },
    {
      src: "/images/v2/lookbook/07.jpg",
      alt: "The XQUISITE woman — cream contemporary top on a city terrace at dusk",
      usage: "Lookbook frame: city.",
      caption: "City",
      span: "square" as const,
    },
    {
      src: "/images/v2/lookbook/08.jpg",
      alt: "The XQUISITE woman — cream jacket against an urban shutter",
      usage: "Lookbook frame: stance.",
      caption: "Stance",
      span: "portrait" as const,
    },
    {
      src: "/images/v2/lookbook/09.jpg",
      alt: "The XQUISITE woman — gold jewellery study, voluminous afro",
      usage: "Lookbook frame: light on skin.",
      caption: "Gold",
      span: "square" as const,
    },
    {
      src: "/images/v2/lookbook/10.jpg",
      alt: "The XQUISITE woman — white contemporary blouse in the studio",
      usage: "Lookbook frame: unhurried.",
      caption: "Unhurried",
      span: "portrait" as const,
    },
  ],
  instagram: [
    {
      src: "/images/v2/instagram/01.png",
      alt: "XQUISITE on Instagram — cream dress, studio still",
      usage: "Instagram grid 1.",
    },
    {
      src: "/images/v2/instagram/02.png",
      alt: "XQUISITE on Instagram — black tailoring, studio still",
      usage: "Instagram grid 2.",
    },
    {
      src: "/images/v2/instagram/03.png",
      alt: "XQUISITE on Instagram — cream off-shoulder portrait",
      usage: "Instagram grid 3.",
    },
    {
      src: "/images/v2/instagram/04.png",
      alt: "XQUISITE on Instagram — wrap dress in daylight",
      usage: "Instagram grid 4.",
    },
    {
      src: "/images/v2/instagram/05.png",
      alt: "XQUISITE on Instagram — evening gown campaign still",
      usage: "Instagram grid 5.",
    },
    {
      src: "/images/v2/instagram/06.jpg",
      alt: "XQUISITE on Instagram — jewellery and afro, editorial close-up",
      usage: "Instagram grid 6.",
    },
  ],
} as const;

export const lookbookFrames = siteImages.lookbook;
export const instagramFrames = siteImages.instagram;
