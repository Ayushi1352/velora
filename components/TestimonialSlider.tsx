"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, QuoteMark, Star } from "@/components/Icons";

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
    card: "w-full p-7 sm:px-9 sm:py-8 lg:uw-746 lg:uh-339 lg:upx-36 lg:upy-0 shadow-[0_14px_34px_rgba(77,30,10,0.08)]",
    gap: "gap-6 lg:ugap-47",
    avatar: "size-[150px] sm:size-[170px] lg:usize-218",
    quote: "h-[34px] w-[44px] lg:uh-35 lg:uw-46",
    text: "mt-3 text-[18px] sm:text-[19px] lg:umt-8 lg:ut-22.25 lg:umaxw-405",
    line: "mt-4 w-[48px] lg:umt-17 lg:uw-48",
    meta: "mt-3 lg:umt-12",
    name: "text-[20px] lg:ut-22",
    role: "text-[13px] lg:ut-14",
    star: "size-[22px] lg:usize-27",
  },
  side: {
    card: "lg:uw-455 lg:uh-283 lg:upl-29 lg:upr-14",
    gap: "lg:ugap-30",
    avatar: "size-[120px] lg:usize-160",
    quote: "lg:uh-27 lg:uw-36",
    text: "lg:umt-6 lg:ut-17",
    line: "lg:umt-12 lg:uw-36",
    meta: "lg:umt-8",
    name: "lg:ut-17",
    role: "lg:ut-11.5",
    star: "lg:usize-19",
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
          <div className="flex shrink-0 gap-[0.28em] text-gold-bright" aria-label={`${item.rating} out of 5 stars`} role="img">
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
      <div className="flex items-center justify-center lg:ugap-19">
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

      <div className="mx-auto mt-[40px] flex max-w-[900px] items-center gap-[16px] lg:umaxw-893 lg:umt-55 lg:ugap-26">
        <span aria-hidden="true" className="h-px flex-1 bg-gold-line" />
        <button
          type="button"
          onClick={() => setActive(prev)}
          aria-label="Previous testimonial"
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-gold-line text-ink transition-colors hover:bg-maroon hover:text-white lg:usize-47"
        >
          <ChevronLeft className="size-[16px] lg:usize-17" />
        </button>
        <div className="flex items-center gap-[12px] lg:ugap-12 lg:upx-8">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === active}
              className={`size-[12px] rounded-full transition-colors lg:usize-12 ${i === active ? "bg-maroon" : "bg-line hover:bg-gold-soft"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActive(next)}
          aria-label="Next testimonial"
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-gold-line text-ink transition-colors hover:bg-maroon hover:text-white lg:usize-47"
        >
          <ChevronRight className="size-[16px] lg:usize-17" />
        </button>
        <span aria-hidden="true" className="h-px flex-1 bg-gold-line" />
      </div>
    </div>
  );
}
