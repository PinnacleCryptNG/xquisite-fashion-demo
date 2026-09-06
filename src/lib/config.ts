export const siteConfig = {
  name: "XQUISITE",
  tagline: "Contemporary Fashion for the Modern Woman",
  description:
    "Discover XQUISITE, contemporary fashion designed for the modern woman. Explore new arrivals, statement pieces and timeless silhouettes.",
  url: "https://xquisite.fashion",
  /**
   * International format without + or spaces.
   * Replace with the live XQUISITE WhatsApp business number.
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2340000000000",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/xquisite",
  instagramHandle: "@xquisite",
  email: "hello@xquisite.fashion",
  location: "Lagos, Nigeria",
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
