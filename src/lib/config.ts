export const siteConfig = {
  name: "XQUISITE",
  tagline: "Contemporary Fashion for the Modern Woman",
  description:
    "Discover XQUISITE, a Nigerian fashion house designing contemporary womenswear for the modern woman. Explore new arrivals, statement pieces and timeless silhouettes.",
  url: "https://xquisite.fashion",
  /** Nigeria international format, no + or spaces. */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2349110383545",
  whatsappDisplay: "+234 911 038 3545",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/pinnaclecrypt",
  instagramHandle: "Pinnaclecrypt",
} as const;
