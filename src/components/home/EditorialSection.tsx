import { FashionImage } from "@/components/shared/FashionImage";
import { siteImages } from "@/data/images";

export function EditorialSection() {
  return (
    <section
      aria-labelledby="editorial-heading"
      className="bg-cream pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32"
    >
      <h2 id="editorial-heading" className="sr-only">
        Dress like you mean it.
      </h2>

      {/*
        Mobile / tablet: photography first, then the statement — a
        designed sequence, not a shrunken desktop spread.
        Desktop: one campaign composition. Type sits in the sunlit
        window space on the left; the woman and garment stay clear.
      */}
      <div className="lg:hidden">
        <div className="relative h-[74svh] min-h-[520px] w-full overflow-hidden sm:h-[78svh]">
          <FashionImage
            src={siteImages.editorial.src}
            alt={siteImages.editorial.alt}
            fillParent
            sizes="100vw"
            className="absolute inset-0"
            imageClassName="object-[54%_22%] motion-safe:animate-[xq-editorial-still_2.6s_cubic-bezier(0.22,1,0.36,1)_both] sm:object-[52%_20%]"
          />
        </div>

        <div className="mx-auto max-w-[22rem] px-6 pt-12 text-center motion-safe:animate-[xq-editorial-rise_1s_cubic-bezier(0.22,1,0.36,1)_0.2s_both] sm:max-w-[28rem] sm:pt-16 md:max-w-[34rem]">
          <p
            aria-hidden="true"
            className="font-serif text-[2.35rem] font-light leading-[1.05] tracking-[0.01em] text-charcoal sm:text-[2.85rem] md:text-[3.35rem]"
          >
            <span className="md:hidden">
              DRESS
              <br />
              LIKE YOU
              <br />
              MEAN IT.
            </span>
            <span className="hidden md:inline">
              DRESS LIKE YOU
              <br />
              MEAN IT.
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-[18rem] font-sans text-[13px] font-light leading-relaxed text-stone sm:mt-7 sm:max-w-[22rem] sm:text-sm">
            For the woman who enters a room with intention.
          </p>
        </div>
      </div>

      <div className="relative hidden h-[min(92svh,58rem)] min-h-[640px] overflow-hidden lg:block">
        <FashionImage
          src={siteImages.editorial.src}
          alt={siteImages.editorial.alt}
          fillParent
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="object-[46%_40%] motion-safe:animate-[xq-editorial-still_2.8s_cubic-bezier(0.22,1,0.36,1)_both] xl:object-[44%_42%]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="w-[min(40vw,34rem)] pl-16 motion-safe:animate-[xq-editorial-rise_1.05s_cubic-bezier(0.22,1,0.36,1)_0.22s_both] xl:pl-24 2xl:pl-32">
            <p
              aria-hidden="true"
              className="max-w-[12ch] font-serif text-[3.15rem] font-light leading-[1.04] tracking-[0.012em] text-charcoal xl:text-[3.85rem] 2xl:text-[4.4rem]"
            >
              DRESS LIKE YOU
              <br />
              MEAN IT.
            </p>
            <p className="mt-7 max-w-[20rem] font-sans text-sm font-light leading-relaxed text-stone xl:mt-8 xl:text-[15px]">
              For the woman who enters a room with intention.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes xq-editorial-still {
          from { transform: scale(1.035); }
          to { transform: scale(1); }
        }
        @keyframes xq-editorial-rise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
