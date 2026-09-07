import type { Metadata } from "next";

import { ContactIntro } from "@/components/contact/ContactIntro";
import { NotesSignup } from "@/components/contact/NotesSignup";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach XQUISITE on WhatsApp or Instagram for questions about a piece, sizing, availability or your next edit.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <ContactIntro />
      <NotesSignup />
    </div>
  );
}
