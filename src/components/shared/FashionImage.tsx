import Image from "next/image";

import { cn } from "@/lib/utils";

type Ratio = "portrait" | "square" | "wide" | "hero" | "tall";

const ratioClass: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  hero: "aspect-[4/5] md:aspect-[16/10] lg:aspect-auto lg:h-full",
  tall: "aspect-[2/3]",
};

type FashionImageProps = {
  src: string;
  alt: string;
  ratio?: Ratio;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  fillParent?: boolean;
};

export function FashionImage({
  src,
  alt,
  ratio = "portrait",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  imageClassName,
  fillParent = false,
}: FashionImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream",
        fillParent ? "h-full w-full" : ratioClass[ratio],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={90}
        unoptimized
        className={cn(
          "object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]",
          imageClassName,
        )}
      />
    </div>
  );
}
