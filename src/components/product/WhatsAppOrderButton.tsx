"use client";

import { Button } from "@/components/ui/button";
import {
  getWhatsAppUrl,
  productEnquiryMessage,
} from "@/lib/whatsapp";
import type { ProductSize } from "@/types/product";

type WhatsAppOrderButtonProps = {
  productName: string;
  size?: ProductSize;
  className?: string;
};

export function WhatsAppOrderButton({
  productName,
  size,
  className,
}: WhatsAppOrderButtonProps) {
  const href = getWhatsAppUrl(productEnquiryMessage(productName, size));

  return (
    <Button asChild size="lg" className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {size ? `Order in ${size} via WhatsApp` : "Enquire on WhatsApp"}
      </a>
    </Button>
  );
}
