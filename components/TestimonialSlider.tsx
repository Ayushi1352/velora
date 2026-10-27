"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, QuoteMark, Star } from "@/components/Icons";
import { label } from "@/data";

/** Time each testimonial stays up while auto-playing. */
const AUTOPLAY_MS = 6000;

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: { src: string; alt: string };
};

const sizes = {
  main: {
    card: "w-full p-7 sm:px-9 sm:py-8 lg:w-[calc(746*var(--u))] lg:h-[calc(339*var(--u))] lg:px-[calc(36*var(--u))] lg:py-0 shadow-[0_14px_34px_rgba(77,30,10,0.08)]",
    gap: "gap-6 lg:gap-[calc(47*var(--u))]",
    avatar: "size-[150px] sm:size-[170px] lg:size-[calc(218*var(--u))]",
    quote: "h-[34px] w-[44px] lg:h-[calc(35*var(--u))] lg:w-[calc(46*var(--u))]",
    text: "mt-3 text-[18px] sm:text-[19px] lg:mt-[calc(8*var(--u))] lg:text-[max(calc(22.25*var(--u)),var(--text-min))] lg:max-w-[calc(405*var(--u))]",
    line: "mt-4 w-[48px] lg:mt-[calc(17*var(--u))] lg:w-[calc(48*var(--u))]",
    meta: "mt-3 lg:mt-[calc(12*var(--u))]",
    name: "text-[20px] lg:text-[max(calc(22*var(--u)),var(--text-min))]",
    role: "text-[13px] lg:text-[max(calc(14*var(--u)),var(--text-min))]",
    star: "size-[22px] lg:size-[calc(27*var(--u))]",
  },
  side: {
    card: "lg:w-[calc(455*var(--u))] lg:h-[calc(283*var(--u))] lg:pl-[calc(29*var(--u))] lg:pr-[calc(14*var(--u))]",
    gap: "lg:gap-[calc(30*var(--u))]",
    avatar: "size-[120px] lg:size-[calc(160*var(--u))]",
    quote: "lg:h-[calc(27*var(--u))] lg:w-[calc(36*var(--u))]",
    text: "lg:mt-[calc(6*var(--u))] lg:text-[max(calc(17*var(--u)),var(--text-min))]",
    line: "lg:mt-[calc(12*var(--u))] lg:w-[calc(36*var(--u))]",
    meta: "lg:mt-[calc(8*var(--u))]",
    name: "lg:text-[max(calc(17*var(--u)),var(--text-min))]",
    role: "lg:text-[max(calc(11.5*var(--u)),var(--text-min))]",
    star: "lg:size-[calc(19*var(--u))]",
  },
};

function Card({ item, variant }: { item: Testimonial; variant: keyof typeof sizes }) {
  const s = sizes[variant];
  return (
    <article
      className={`flex flex-col items-center border border-gold-pale bg-cream text-center sm:flex-row sm:text-left ${s.card} ${s.gap}`}
    >
      <div className={`relative shrink-0 overflow-hidden rounded-full ${s.avatar}`}>
        <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 14vw, 170px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <QuoteMark className={`mx-auto text-gold-bright sm:mx-0 ${s.quote}`} />
        <p className={`font-body leading-[1.4] text-ink-soft ${s.text}`}>{item.text}</p>
        <span aria-hidden="true" className={`mx-auto block h-[2px] bg-gold-soft sm:mx-0 ${s.line}`} />
        <div className={`flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between ${s.meta}`}>
          <div>
            <p className={`font-serif font-medium leading-tight text-wine ${s.name}`}>{item.name}</p>
            <p className={`mt-[2px] font-montserrat text-body ${s.role}`}>{item.role}</p>
          </div>
          <div className="flex shrink-0 gap-[0.28em] text-gold-bright" aria-label={label("rating", { rating: item.rating })} role="img">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className={s.star} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const total = items.length;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;
  // Pauses while the pointer or keyboard focus is on the slider.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || total < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Restarts on every change, so a manual click gets a full interval too.
    const id = setTimeout(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, total]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-center lg:gap-[calc(19*var(--u))]">
        <div key={prev} className="hidden shrink-0 animate-[fade_0.6s_ease] opacity-80 lg:block" aria-hidden="true">
          <Card item={items[prev]} variant="side" />
        </div>
        <div key={active} className="w-full max-w-[680px] animate-[fade_0.6s_ease] lg:w-auto lg:max-w-none" aria-live={paused ? "polite" : "off"}>
          <Card item={items[active]} variant="main" />
        </div>
        <div key={next} className="hidden shrink-0 animate-[fade_0.6s_ease] opacity-80 lg:block" aria-hidden="true">
          <Card item={items[next]} variant="side" />
        </div>
      </div>

      <div className="mx-auto mt-[40px] flex max-w-[900px] items-center gap-[16px] lg:max-w-[calc(893*var(--u))] lg:mt-[calc(55*var(--u))] lg:gap-[calc(26*var(--u))]">
        <span aria-hidden="true" className="h-px flex-1 bg-gold-line" />
        <button
          type="button"
          onClick={() => setActive(prev)}
          aria-label={label("previousTestimonial")}
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-gold-line text-ink transition-colors hover:bg-maroon hover:text-white lg:size-[calc(47*var(--u))]"
        >
          <ChevronLeft className="size-[16px] lg:size-[calc(17*var(--u))]" />
        </button>
        <div className="flex items-center gap-[12px] lg:gap-[calc(12*var(--u))] lg:px-[calc(8*var(--u))]">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={label("showTestimonial", { n: i + 1 })}
              aria-current={i === active}
              className={`size-[12px] rounded-full transition-colors lg:size-[calc(12*var(--u))] ${i === active ? "bg-maroon" : "bg-line hover:bg-gold-soft"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActive(next)}
          aria-label={label("nextTestimonial")}
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-gold-line text-ink transition-colors hover:bg-maroon hover:text-white lg:size-[calc(47*var(--u))]"
        >
          <ChevronRight className="size-[16px] lg:size-[calc(17*var(--u))]" />
        </button>
        <span aria-hidden="true" className="h-px flex-1 bg-gold-line" />
      </div>
    </div>
  );
}
