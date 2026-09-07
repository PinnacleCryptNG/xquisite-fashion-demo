import { aboutCopy } from "@/data/about";

export function AboutStatement() {
  return (
    <section
      aria-labelledby="about-statement"
      className="bg-ivory px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <p
          id="about-statement"
          className="max-w-[16.5rem] font-serif text-[2.35rem] leading-[1.08] font-light tracking-tight text-charcoal sm:max-w-[22rem] sm:text-5xl md:max-w-[28rem] md:text-6xl lg:max-w-[36rem] lg:text-7xl"
        >
          {aboutCopy.statement}
        </p>
      </div>
    </section>
  );
}
