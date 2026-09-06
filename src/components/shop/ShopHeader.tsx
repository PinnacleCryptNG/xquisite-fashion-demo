import { getShopCopy } from "@/data/shop-collections";

export function ShopHeader({ collection }: { collection?: string }) {
  const copy = getShopCopy(collection);

  return (
    <header className="max-w-2xl">
      <p className="mb-4 font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
        Shop XQUISITE
      </p>
      <h1 className="font-serif text-4xl leading-[1.05] font-light tracking-tight text-balance text-charcoal sm:text-5xl lg:text-[3.35rem]">
        {copy.title}
      </h1>
      {copy.description ? (
        <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-stone sm:text-[15px]">
          {copy.description}
        </p>
      ) : null}
    </header>
  );
}
