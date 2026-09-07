import { aboutCopy } from "@/data/about";

export function AboutApproach() {
  return (
    <section
      aria-labelledby="about-approach-heading"
      className="bg-ivory px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32"
    >
      <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-12 md:items-start md:gap-12 lg:gap-20">
        <div className="md:col-span-5 lg:col-span-4">
          <p className="font-sans text-[11px] font-medium tracking-[0.28em] text-stone uppercase">
            {aboutCopy.approachEyebrow}
          </p>
          <h2
            id="about-approach-heading"
            className="mt-4 font-serif text-3xl leading-[1.1] font-light tracking-tight text-charcoal sm:text-4xl md:text-[2.35rem] lg:text-5xl"
          >
            {aboutCopy.approachHeading}
          </h2>
        </div>
        <p className="max-w-md font-sans text-[15px] leading-[1.75] font-light text-stone md:col-span-7 md:max-w-lg md:pt-8 lg:col-span-6 lg:col-start-7 lg:max-w-md lg:pt-2">
          {aboutCopy.approach}
        </p>
      </div>
    </section>
  );
}
