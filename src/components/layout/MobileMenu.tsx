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

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
  links: readonly MobileMenuLink[];
};

export function MobileMenu({
  open,
  onOpenChange,
  inverted = false,
  links,
}: MobileMenuProps) {
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onOpenChange]);

  const panel =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            id="mobile-navigation"
            className="fixed inset-0 z-[120] flex h-dvh w-screen flex-col bg-ivory px-6 pt-8 pb-10 text-charcoal"
          >
            <h2
              id={titleId}
              className="font-sans text-[13px] font-medium tracking-[0.42em] uppercase sm:text-sm"
            >
              XQUISITE
            </h2>
            <p id={descriptionId} className="sr-only">
              Primary navigation
            </p>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              className="absolute top-7 right-5 flex size-11 appearance-none items-center justify-center bg-transparent p-0 text-charcoal sm:right-8"
              onClick={() => onOpenChange(false)}
            >
              <X className="size-5" strokeWidth={1.25} />
            </button>

            <nav className="mt-24 flex flex-1 flex-col justify-center gap-8 sm:mt-28 sm:gap-10">
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

            <div className="flex items-center gap-8 border-t border-charcoal/10 pt-8">
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
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
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
          <X className="size-5" strokeWidth={1.25} />
        ) : (
          <Menu className="size-5" strokeWidth={1.25} />
        )}
      </button>
      {panel}
    </>
  );
}
