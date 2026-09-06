import { EditorialCollectionCard } from "@/components/home/EditorialCollectionCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { editorialCollections } from "@/data/editorial-collections";

export function EditorialCollections() {
  return (
    <section
      aria-label="The XQUISITE edit"
      className="bg-ivory px-5 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-28 lg:px-12 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          eyebrow="The XQUISITE edit"
          title="Designed for every version of her."
          description="From quiet essentials to statement silhouettes, discover the collections that define the XQUISITE woman."
          className="mb-14 sm:mb-20 lg:mb-24"
          titleClassName="max-w-[18ch]"
        />

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 md:gap-y-20 lg:gap-x-12 xl:gap-x-16">
          {editorialCollections.map((collection) => (
            <EditorialCollectionCard key={collection.slug} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
