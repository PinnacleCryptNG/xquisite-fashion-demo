"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { generalEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
};

export function MobileMenu({ open, onOpenChange, inverted = false }: MobileMenuProps) {
  const whatsappHref = getWhatsAppUrl(generalEnquiryMessage());

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "relative z-[60] flex size-11 items-center justify-center lg:hidden",
            inverted ? "text-ivory" : "text-charcoal",
          )}
        >
          {open ? (
            <X className="size-5" strokeWidth={1.5} />
          ) : (
            <Menu className="size-5" strokeWidth={1.5} />
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-charcoal/40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-[80] flex w-[min(100%,28rem)] flex-col bg-ivory px-8 py-8 text-charcoal outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-sans text-[13px] tracking-[0.38em] uppercase">
              XQUISITE
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="size-5" strokeWidth={1.5} />
              </Button>
            </Dialog.Close>
          </div>
          <nav className="mt-16 flex flex-1 flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-4xl font-light tracking-tight"
                onClick={() => onOpenChange(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-serif text-4xl font-light tracking-tight"
              onClick={() => onOpenChange(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-6 border-t border-charcoal/10 pt-6">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone"
            >
              Instagram
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone"
            >
              WhatsApp
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
