import { AboutReveal } from "@/components/about/AboutReveal";
import { aboutCopy } from "@/data/about";

export function AboutStatement() {
  return (
    <section
      aria-labelledby="about-statement"
      className="bg-ivory px-5 py-24 sm:px-8 sm:py-28 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <AboutReveal>
          <blockquote>
            <p
              id="about-statement"
              className="max-w-[17rem] font-serif text-[2.15rem] leading-[1.1] font-light tracking-tight text-charcoal sm:max-w-[22rem] sm:text-[2.6rem] md:max-w-[30rem] md:text-[3.15rem] lg:max-w-[38rem] lg:text-6xl xl:text-7xl"
            >
              &ldquo;{aboutCopy.statement}&rdquo;
            </p>
          </blockquote>
        </AboutReveal>
      </div>
    </section>
  );
}
