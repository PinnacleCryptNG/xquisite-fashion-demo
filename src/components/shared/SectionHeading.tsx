import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  as: Title = "h2",
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 font-sans text-[11px] font-medium tracking-[0.28em] uppercase",
            tone === "light" ? "text-stone" : "text-ivory/70",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          "font-serif text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl",
          tone === "light" ? "text-charcoal" : "text-ivory",
          titleClassName,
        )}
      >
        {title}
      </Title>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-md font-sans text-sm leading-relaxed sm:text-[15px]",
            align === "center" && "mx-auto",
            tone === "light" ? "text-stone" : "text-ivory/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
