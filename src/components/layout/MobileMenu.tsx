"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

type MobileMenuLink = {
  href: string;
  label: string;
};

type MobileMenuButtonProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
};

export function MobileMenuButton({
  open,
  onOpenChange,
  inverted = false,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-controls="mobile-navigation"
      className={cn(
        "relative z-[60] flex size-11 appearance-none items-center justify-center bg-transparent p-0 lg:hidden",
        inverted ? "text-ivory" : "text-charcoal",
      )}
      onClick={() => onOpenChange(!open)}
    >
      {open ? (
        <X className="pointer-events-none size-5" strokeWidth={1.25} />
      ) : (
        <Menu className="pointer-events-none size-5" strokeWidth={1.25} />
      )}
    </button>
  );
}

type MobileMenuPanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: readonly MobileMenuLink[];
};

export function MobileMenuPanel({
  open,
  onOpenChange,
  links,
}: MobileMenuPanelProps) {
  const titleId = useId();
  const descriptionId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  const root = typeof document !== "undefined" ? document.documentElement : null;

  if (!root || !open) {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      id="mobile-navigation"
      className="relative flex flex-col bg-ivory px-6 pt-8 pb-10 text-charcoal sm:px-10"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 9999,
        backgroundColor: "#f6f1ea",
      }}
    >
      <div className="shrink-0 pr-12">
        <h2
          id={titleId}
          className="font-sans text-sm font-medium tracking-[0.44em] uppercase sm:text-[15px]"
        >
          XQUISITE
        </h2>
        <p
          id={descriptionId}
          className="mt-3 font-sans text-[10px] tracking-[0.28em] uppercase text-stone"
        >
          Nigeria · Contemporary womenswear
        </p>
      </div>
      <button
        ref={closeRef}
        type="button"
        aria-label="Close menu"
        className="absolute top-7 right-5 flex size-11 appearance-none items-center justify-center bg-transparent p-0 text-charcoal sm:right-8"
        onClick={() => onOpenChange(false)}
      >
        <X className="pointer-events-none size-5" strokeWidth={1.25} />
      </button>

      <nav
        aria-label="Primary"
        className="flex flex-1 flex-col justify-center gap-9 sm:gap-11"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-serif text-[2.35rem] leading-none font-light tracking-[0.04em] uppercase transition-opacity duration-500 hover:opacity-50 sm:text-5xl"
            onClick={() => onOpenChange(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-8 border-t border-charcoal/10 pt-8">
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[11px] tracking-[0.22em] uppercase text-stone transition-opacity duration-500 hover:opacity-70"
        >
          Instagram
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[11px] tracking-[0.22em] uppercase text-stone transition-opacity duration-500 hover:opacity-70"
        >
          WhatsApp
        </a>
      </div>
    </div>,
    root,
  );
}
