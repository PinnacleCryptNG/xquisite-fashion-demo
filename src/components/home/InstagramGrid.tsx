import { FashionImage } from "@/components/shared/FashionImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { instagramFrames } from "@/data/editorial";
import { siteConfig } from "@/lib/config";

export function InstagramGrid() {
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={siteConfig.instagramHandle}
            title="Follow the XQUISITE woman"
            description="Follow our latest looks, campaigns and new arrivals."
          />
          <Button asChild variant="outline" className="self-start">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </Button>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {instagramFrames.map((frame) => (
            <li key={frame.src}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={frame.alt}
              >
                <FashionImage
                  src={frame.src}
                  alt={frame.alt}
                  ratio="square"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
