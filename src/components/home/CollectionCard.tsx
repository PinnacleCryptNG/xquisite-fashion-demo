import Link from "next/link";

import { FashionImage } from "@/components/shared/FashionImage";

type CollectionCardProps = {
  name: string;
  href: string;
  image: string;
  alt: string;
};

export function CollectionCard({ name, href, image, alt }: CollectionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[640px]"
    >
      <FashionImage
        src={image}
        alt={alt}
        fillParent
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-ink/25 transition-colors duration-700 group-hover:bg-ink/35" />
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        <h3 className="font-serif text-3xl font-light tracking-tight text-ivory sm:text-4xl">
          {name}
        </h3>
        <p className="mt-3 font-sans text-[10px] tracking-[0.22em] uppercase text-ivory/80">
          Shop the edit
        </p>
      </div>
    </Link>
  );
}
