import type { Metadata } from "next";

import { FashionImage } from "@/components/shared/FashionImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { lookbookFrames } from "@/data/editorial";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "The XQUISITE woman — a visual expression of confidence, movement and modern femininity.",
};

export default function LookbookPage() {
  return (
    <div className="bg-ivory px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="Lookbook"
          title="The XQUISITE woman"
          description="A visual expression of confidence, movement and modern femininity."
          className="mb-14 sm:mb-20"
        />

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {lookbookFrames.map((frame) => (
            <figure key={frame.src} className="mb-4 break-inside-avoid sm:mb-5">
              <FashionImage
                src={frame.src}
                alt={frame.alt}
                ratio={frame.span === "wide" ? "wide" : frame.span === "tall" ? "tall" : "portrait"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption
                className={cn(
                  "mt-3 font-sans text-[10px] tracking-[0.22em] uppercase text-stone",
                )}
              >
                {frame.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
