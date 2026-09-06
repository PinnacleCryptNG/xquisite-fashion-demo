export const siteConfig = {
  name: "XQUISITE",
  tagline: "Contemporary Fashion for the Modern Woman",
  description:
    "Discover XQUISITE, a Nigerian fashion house designing contemporary womenswear for the modern woman. Explore new arrivals, statement pieces and timeless silhouettes.",
  url: "https://xquisite.fashion",
  /**
   * Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local.
   * Use Nigeria's international format with no + or spaces, e.g. 2348012345678.
   * Leave unset until the live business number is ready — links open WhatsApp with a pre-filled message.
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/xquisite",
  instagramHandle: "@xquisite",
  email: "hello@xquisite.fashion",
  locationLine: "Based in Nigeria",
} as const;

export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?collection=new-arrivals", label: "New Arrivals" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?collection=new-arrivals", label: "New Arrivals" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
