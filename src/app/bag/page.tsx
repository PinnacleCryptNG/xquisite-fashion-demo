import type { Metadata } from "next";

import { BagView } from "@/components/bag/BagView";

export const metadata: Metadata = {
  title: "Your Edit",
  description:
    "Review the XQUISITE pieces you've chosen and send a WhatsApp enquiry.",
};

export default function BagPage() {
  return <BagView />;
}
