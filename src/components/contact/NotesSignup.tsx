"use client";

import { FormEvent, useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { notesCopy } from "@/data/contact";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function NotesSignup() {
  const id = useId();
  const errorId = `${id}-error`;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [joined, setJoined] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError(notesCopy.invalid);
      setJoined(false);
      return;
    }
    setError(null);
    setJoined(true);
  }

  return (
    <section className="bg-ivory px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:items-end md:gap-12 lg:gap-20">
        <div className="max-w-md md:col-span-6 lg:col-span-5 xl:col-span-4">
          <h2 className="font-serif text-[2.15rem] leading-[1.08] font-light tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            {notesCopy.heading}
          </h2>
          <p className="mt-5 font-sans text-[15px] leading-relaxed font-light text-stone">
            {notesCopy.line}
          </p>
          <p className="mt-5 max-w-sm font-sans text-[15px] leading-[1.75] font-light text-stone">
            {notesCopy.body}
          </p>
        </div>

        <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
          {joined ? (
            <div role="status">
              <p className="font-serif text-2xl font-light tracking-tight text-charcoal sm:text-3xl">
                {notesCopy.success}
              </p>
              <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-stone">
                {notesCopy.demoNote}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="max-w-md">
              <label htmlFor={id} className="sr-only">
                {notesCopy.placeholder}
              </label>
              <Input
                id={id}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder={notesCopy.placeholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
              />
              {error ? (
                <p
                  id={errorId}
                  role="alert"
                  className="mt-4 font-sans text-sm text-charcoal"
                >
                  {error}
                </p>
              ) : null}
              <Button type="submit" className="mt-8 w-full sm:w-auto">
                {notesCopy.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
