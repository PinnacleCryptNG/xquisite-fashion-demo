import { AboutReveal } from "@/components/about/AboutReveal";
import { aboutPrinciples } from "@/data/about";

export function AboutPrinciples() {
  return (
    <section
      aria-labelledby="about-principles-heading"
      className="bg-ivory px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36"
    >
      <h2 id="about-principles-heading" className="sr-only">
        Brand principles
      </h2>
      <div className="mx-auto max-w-[1600px]">
        <ol className="space-y-16 md:grid md:grid-cols-3 md:gap-12 md:space-y-0 lg:gap-20">
          {aboutPrinciples.map((principle, index) => (
            <li key={principle.index}>
              <AboutReveal delay={index * 70}>
                <p className="font-sans text-[11px] tracking-[0.22em] text-stone">
                  {principle.index}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-light tracking-tight text-charcoal uppercase sm:text-3xl lg:text-4xl">
                  {principle.name}
                </h3>
                <p className="mt-4 max-w-[16rem] font-sans text-sm leading-relaxed font-light text-stone lg:text-[15px]">
                  {principle.line}
                </p>
              </AboutReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
