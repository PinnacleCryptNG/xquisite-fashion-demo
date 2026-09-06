import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { lookbookFrames } from "@/data/editorial";

export function LookbookPreview() {
  const frames = lookbookFrames.slice(0, 4);

  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Lookbook"
            title="The XQUISITE woman"
            description="A visual expression of confidence, movement and modern femininity."
          />
          <Button asChild variant="outline" className="self-start">
            <Link href="/lookbook">View lookbook</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {frames.map((frame, index) => (
            <div
              key={frame.src}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <FashionImage
                src={frame.src}
                alt={frame.alt}
                ratio={index === 0 ? "wide" : "portrait"}
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 1024px) 50vw, 25vw"
                }
                className={index === 0 ? "h-full min-h-[320px] sm:min-h-[480px]" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
