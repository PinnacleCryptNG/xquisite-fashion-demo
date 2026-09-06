import { CollectionCard } from "@/components/home/CollectionCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { collections } from "@/data/products";

export function Collections() {
  return (
    <section className="bg-ivory py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The archive"
          title="Explore the collection"
          className="mb-12 sm:mb-16"
        />
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.slug} {...collection} />
        ))}
      </div>
    </section>
  );
}
