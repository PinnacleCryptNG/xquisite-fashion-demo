"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-haspopup="dialog"
          className={cn(
            "relative z-[60] flex size-11 items-center justify-center lg:hidden",
            inverted ? "text-ivory" : "text-charcoal",
          )}
        >
          {open ? (
            <X className="size-5" strokeWidth={1.25} />
          ) : (
            <Menu className="size-5" strokeWidth={1.25} />
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-ivory" />
        <Dialog.Content className="fixed inset-0 z-[80] flex flex-col bg-ivory px-6 pt-8 pb-10 text-charcoal outline-none sm:px-10">
          <Dialog.Title className="font-sans text-[13px] font-medium tracking-[0.42em] uppercase sm:text-sm">
            XQUISITE
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Primary navigation
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-7 right-5 flex size-11 items-center justify-center text-charcoal sm:right-8"
            >
              <X className="size-5" strokeWidth={1.25} />
            </button>
          </Dialog.Close>

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
