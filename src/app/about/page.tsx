import type { Metadata } from "next";

import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutOpening } from "@/components/about/AboutOpening";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutSecondary } from "@/components/about/AboutSecondary";
import { AboutStatement } from "@/components/about/AboutStatement";

export const metadata: Metadata = {
  title: "About",
  description:
    "XQUISITE is a contemporary Nigerian fashion house created for the modern woman — clothes that move with her, not define her.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <AboutOpening />
      <AboutStatement />
      <AboutApproach />
      <AboutPrinciples />
      <AboutSecondary />
    </div>
  );
}
