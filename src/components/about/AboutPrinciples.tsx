import { aboutPrinciples } from "@/data/about";

export function AboutPrinciples() {
  return (
    <section
      aria-labelledby="about-principles-heading"
      className="bg-ivory px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32"
    >
      <h2 id="about-principles-heading" className="sr-only">
        Brand principles
      </h2>
      <div className="mx-auto max-w-[1600px]">
        <ol className="space-y-14 md:grid md:grid-cols-3 md:gap-10 md:space-y-0 lg:gap-16">
          {aboutPrinciples.map((principle) => (
            <li key={principle.index}>
              <p className="font-sans text-[11px] tracking-[0.22em] text-stone">
                {principle.index}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-light tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
                {principle.name}
              </h3>
              <p className="mt-4 max-w-[16rem] font-sans text-sm leading-relaxed font-light text-stone lg:text-[15px]">
                {principle.line}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
