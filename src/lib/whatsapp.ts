import { siteConfig } from "@/lib/config";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function getWhatsAppUrl(message: string) {
  const phone = digitsOnly(siteConfig.whatsappNumber);
  const text = encodeURIComponent(message);
  if (!phone) {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${phone}?text=${text}`;
}

export function productEnquiryMessage(
  productName: string,
  size?: string,
  quantity = 1,
) {
  const qty = quantity > 1 ? ` (qty ${quantity})` : "";
  if (size) {
    return `Hello XQUISITE, I'd like to enquire about ${productName} in size ${size}${qty}.`;
  }
  return `Hello XQUISITE, I'd like to enquire about ${productName}${qty}.`;
}

export function generalEnquiryMessage() {
  return "Hello XQUISITE, I'd like help choosing a piece and placing an order.";
}
