"use client";

import { Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/config";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = isHome && !scrolled;
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        overHero
          ? "bg-transparent text-ivory"
          : "border-b border-charcoal/10 bg-ivory/95 text-charcoal backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-sans text-[13px] font-medium tracking-[0.38em] uppercase"
        >
          XQUISITE
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] tracking-[0.22em] uppercase opacity-80 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="XQUISITE on Instagram"
            className="flex size-10 items-center justify-center opacity-85 transition-opacity hover:opacity-100"
          >
            <Instagram className="size-4" strokeWidth={1.5} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with XQUISITE on WhatsApp"
            className="flex size-10 items-center justify-center opacity-85 transition-opacity hover:opacity-100"
          >
            <WhatsAppIcon className="size-4" />
          </a>

          <MobileMenu
            open={open}
            onOpenChange={setOpen}
            trigger={
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden",
                  overHero && "text-ivory hover:text-ivory/80",
                )}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <X className="size-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="size-5" strokeWidth={1.5} />
                )}
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}
