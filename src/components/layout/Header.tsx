"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileMenuButton, MobileMenuPanel } from "@/components/layout/MobileMenu";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const HEADER_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const overHero = isHome && !scrolled;
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,backdrop-filter] duration-700 ease-out",
          overHero
            ? "border-transparent bg-transparent text-ivory"
            : "border-charcoal/10 bg-ivory/95 text-charcoal backdrop-blur-[2px]",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1600px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="/"
          className={cn(
            "shrink-0 font-sans text-[13px] font-medium tracking-[0.42em] uppercase transition-opacity duration-500 hover:opacity-70 sm:text-sm",
            overHero && "[text-shadow:0_1px_16px_rgba(15,14,13,0.28)]",
          )}
        >
          XQUISITE
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center justify-center gap-8 lg:flex xl:gap-10"
        >
          {HEADER_LINKS.map((link) => {
            const current = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "font-sans text-[11px] tracking-[0.24em] uppercase transition-opacity duration-500",
                  current ? "opacity-100" : "opacity-65 hover:opacity-100",
                  overHero && "[text-shadow:0_1px_16px_rgba(15,14,13,0.28)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center">
          <div className="hidden items-center lg:flex">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="XQUISITE on Instagram"
              className="flex size-9 items-center justify-center opacity-55 transition-opacity duration-500 hover:opacity-100"
            >
              <Instagram className="size-3.5" strokeWidth={1.4} />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with XQUISITE on WhatsApp"
              className="flex size-9 items-center justify-center opacity-55 transition-opacity duration-500 hover:opacity-100"
            >
              <WhatsAppIcon className="size-3.5" />
            </a>
          </div>

          <MobileMenuButton
            open={open}
            onOpenChange={setOpen}
            inverted={overHero}
          />
        </div>
        </div>
      </header>
      <MobileMenuPanel
        open={open}
        onOpenChange={setOpen}
        links={HEADER_LINKS}
      />
    </>
  );
}
