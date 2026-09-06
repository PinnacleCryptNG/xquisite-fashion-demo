"use client";

import { useEffect } from "react";

export function ScrollActiveIntoView({ scope }: { scope: string }) {
  useEffect(() => {
    const active = document
      .querySelector(scope)
      ?.querySelector('[aria-current="page"]');
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    active?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: reduce ? "auto" : "smooth",
    });
  }, [scope]);

  return null;
}
