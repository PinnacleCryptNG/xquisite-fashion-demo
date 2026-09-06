import { siteConfig } from "@/lib/config";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function getWhatsAppUrl(message: string) {
  const phone = digitsOnly(siteConfig.whatsappNumber);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string, size?: string) {
  if (size) {
    return `Hello XQUISITE, I'd like to order ${productName} in size ${size}.`;
  }
  return `Hello XQUISITE, I'd like to enquire about ${productName}.`;
}

export function generalEnquiryMessage() {
  return "Hello XQUISITE, I'd like help choosing a piece and placing an order.";
}
