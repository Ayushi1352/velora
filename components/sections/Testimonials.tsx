'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { fill } from '@/components/ui/text';
import { Pagination, usePagination } from '@/components/ui/Pagination';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Testimonial, TestimonialsData, TestimonialsProps } from '@/types/templates.types';

const sizes = {
  main: {
    card: 'w-full p-7 sm:px-9 sm:py-8 lg:w-[calc(746*var(--u))] lg:h-[calc(339*var(--u))] lg:px-[calc(36*var(--u))] lg:py-0 shadow-[0_14px_34px_var(--color-shadow-slider)]',
    gap: 'gap-6 lg:gap-[calc(47*var(--u))]',
    avatar: 'size-[150px] sm:size-[170px] lg:size-[calc(218*var(--u))]',
    quote: 'h-[34px] w-[44px] lg:h-[calc(35*var(--u))] lg:w-[calc(46*var(--u))]',
    text: 'mt-3 text-[18px] sm:text-[19px] lg:mt-[calc(8*var(--u))] lg:text-[max(calc(22.25*var(--u)),var(--text-min))] lg:max-w-[calc(405*var(--u))]',
    line: 'mt-4 w-[48px] lg:mt-[calc(17*var(--u))] lg:w-[calc(48*var(--u))]',
    meta: 'mt-3 lg:mt-[calc(12*var(--u))]',
    name: 'text-[20px] lg:text-[max(calc(22*var(--u)),var(--text-min))]',
    role: 'text-[13px] lg:text-[max(calc(14*var(--u)),var(--text-min))]',
    star: 'size-[22px] lg:size-[calc(27*var(--u))]',
  },
  side: {
    card: 'lg:w-[calc(455*var(--u))] lg:h-[calc(283*var(--u))] lg:pl-[calc(29*var(--u))] lg:pr-[calc(14*var(--u))]',
    gap: 'lg:gap-[calc(30*var(--u))]',
    avatar: 'size-[120px] lg:size-[calc(160*var(--u))]',
    quote: 'lg:h-[calc(27*var(--u))] lg:w-[calc(36*var(--u))]',
    text: 'lg:mt-[calc(6*var(--u))] lg:text-[max(calc(17*var(--u)),var(--text-min))]',
    line: 'lg:mt-[calc(12*var(--u))] lg:w-[calc(36*var(--u))]',
    meta: 'lg:mt-[calc(8*var(--u))]',
    name: 'lg:text-[max(calc(17*var(--u)),var(--text-min))]',
    role: 'lg:text-[max(calc(11.5*var(--u)),var(--text-min))]',
    star: 'lg:size-[calc(19*var(--u))]',
  },
};

/** Labels and icons the cards need from the section data. */
type CardLabels = Pick<TestimonialsData, 'ratingLabel' | 'quoteIcon' | 'starIcon'>;

function Card({ item, variant, labels }: { item: Testimonial; variant: keyof typeof sizes; labels: CardLabels }) {
  const s = sizes[variant];
  return (
    <article
      className={`flex flex-col items-start border border-[var(--color-gold-pale)] bg-[var(--color-cream)] text-left sm:flex-row sm:items-center ${s.card} ${s.gap}`}
    >
      <div className={`relative shrink-0 overflow-hidden rounded-full ${s.avatar}`}>
        <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 14vw, 170px" className="object-cover" />
      </div>
      <div className="w-full min-w-0 flex-1">
        <Icon name={labels.quoteIcon} className={`text-[var(--color-gold-bright)] ${s.quote}`} />
        <p className={`font-body leading-[1.4] text-[var(--color-ink-soft)] ${s.text}`}>{item.text}</p>
        <span aria-hidden="true" className={`block h-[2px] bg-[var(--color-gold-soft)] ${s.line}`} />
        <div className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between ${s.meta}`}>
          <div>
            <p className={`font-heading font-medium leading-tight text-[var(--color-wine)] ${s.name}`}>{item.name}</p>
            <p className={`mt-[2px] font-label text-[var(--color-body)] ${s.role}`}>{item.role ?? item.location}</p>
          </div>
          <div className="flex shrink-0 gap-[0.28em] text-[var(--color-gold-bright)]" aria-label={fill(labels.ratingLabel, { rating: item.rating })} role="img">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Icon key={i} name={labels.starIcon} className={s.star} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/** The three visible cards (previous, current, next) around `center`. */
function Row({ items, center, live, labels }: { items: Testimonial[]; center: number; live?: boolean; labels: CardLabels }) {
  const total = items.length;
  const prev = (center - 1 + total) % total;
  const next = (center + 1) % total;
  return (
    <div className="flex items-center justify-center lg:gap-[calc(19*var(--u))]">
      <div className="hidden shrink-0 opacity-80 lg:block" aria-hidden="true">
        <Card item={items[prev]} variant="side" labels={labels} />
      </div>
      <div className="w-full max-w-[680px] lg:w-auto lg:max-w-none" aria-live={live ? 'polite' : 'off'}>
        <Card item={items[center]} variant="main" labels={labels} />
      </div>
      <div className="hidden shrink-0 opacity-80 lg:block" aria-hidden="true">
        <Card item={items[next]} variant="side" labels={labels} />
      </div>
    </div>
  );
}

const SLIDE = { duration: 700, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' };
// How far a row travels while it slides in or out, as a share of its own width.
const shift = (dir: number) => `translateX(${dir * 30}%)`;

const TestimonialSlider = ({ items, labels }: { items: Testimonial[]; labels: TestimonialsData }) => {
  const [active, setActive] = useState(0);
  const total = items.length;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;
  // Pauses while the pointer or keyboard focus is on the slider.
  const [paused, setPaused] = useState(false);
  // The row that is sliding out, and the direction everything moves: 1 = to the left (next), -1 = to the right (previous).
  const [leaving, setLeaving] = useState<{ center: number; dir: 1 | -1 } | null>(null);
  const incoming = useRef<HTMLDivElement>(null);
  const outgoing = useRef<HTMLDivElement>(null);

  const go = (to: number, dir: 1 | -1) => {
    if (to === active) return;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setLeaving({ center: active, dir });
    setActive(to);
  };

  useEffect(() => {
    if (paused || total < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Restarts on every change, so a manual click gets a full interval too.
    const id = setTimeout(() => {
      setLeaving({ center: active, dir: 1 });
      setActive(next);
    }, labels.sliderIntervalMs);
    return () => clearTimeout(id);
  }, [active, next, paused, total, labels.sliderIntervalMs]);

  // The new row slides in from one side while the old one slides out the other side.
  useEffect(() => {
    if (!leaving) return;
    incoming.current?.animate([{ opacity: 0, transform: shift(leaving.dir) }, { opacity: 1, transform: 'none' }], SLIDE);
    const out = outgoing.current?.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: shift(-leaving.dir) }], { ...SLIDE, fill: 'forwards' });
    out?.finished.then(() => setLeaving(null), () => {});
    return () => out?.cancel();
  }, [leaving]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative">
        {leaving && (
          <div ref={outgoing} key={`out-${leaving.center}`} className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true" inert>
            <Row items={items} center={leaving.center} labels={labels} />
          </div>
        )}
        <div ref={incoming} key={active}>
          <Row items={items} center={active} live={paused} labels={labels} />
        </div>
      </div>

      <div className="mx-auto mt-[40px] flex max-w-[900px] items-center gap-[16px] lg:max-w-[calc(893*var(--u))] lg:mt-[calc(55*var(--u))] lg:gap-[calc(26*var(--u))]">
        <span aria-hidden="true" className="h-px flex-1 bg-[var(--color-gold-line)]" />
        <button
          type="button"
          onClick={() => go(prev, -1)}
          aria-label={labels.previousLabel}
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-[var(--color-gold-line)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] lg:size-[calc(47*var(--u))]"
        >
          <Icon name={labels.previousIcon} strokeWidth={2} className="size-[16px] lg:size-[calc(17*var(--u))]" />
        </button>
        <div className="flex items-center gap-[12px] lg:gap-[calc(12*var(--u))] lg:px-[calc(8*var(--u))]">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => go(i, i > active ? 1 : -1)}
              aria-label={fill(labels.showSlideLabel, { n: i + 1 })}
              aria-current={i === active}
              className={`size-[12px] rounded-full transition-colors lg:size-[calc(12*var(--u))] ${i === active ? 'bg-[var(--color-maroon)]' : 'bg-[var(--color-line)] hover:bg-[var(--color-gold-soft)]'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(next, 1)}
          aria-label={labels.nextLabel}
          className="grid size-[46px] shrink-0 place-items-center rounded-full border border-[var(--color-gold-line)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] lg:size-[calc(47*var(--u))]"
        >
          <Icon name={labels.nextIcon} strokeWidth={2} className="size-[16px] lg:size-[calc(17*var(--u))]" />
        </button>
        <span aria-hidden="true" className="h-px flex-1 bg-[var(--color-gold-line)]" />
      </div>
    </div>
  );
};

/** `delay` staggers the card's scroll reveal (see data-delay in components/ui/ScrollReveal.tsx). */
const ReviewCard = ({ item, delay, labels }: { item: Testimonial; delay?: number; labels: CardLabels }) => {
  return (
    <article data-reveal="up" data-delay={delay} className="flex gap-[18px] md:gap-[12px] rounded-[14px] border-[1.5px] border-[var(--color-gold-pale)] bg-[var(--color-white)] px-[20px] py-[22px] shadow-[0_8px_24px_var(--color-shadow-review)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-gold-line)] hover:shadow-[0_20px_44px_var(--color-shadow-review-hover)] lg:min-h-[calc(335*var(--u))] lg:gap-[calc(20*var(--u))] lg:pl-[calc(28*var(--u))] lg:pr-[calc(24*var(--u))] lg:pt-[calc(21*var(--u))]">
      <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-[var(--color-blush)] text-[var(--color-gold)] lg:size-[calc(64*var(--u))]">
        <Icon name={labels.quoteIcon} className="h-[18px] w-[24px] lg:h-[calc(20*var(--u))] lg:w-[calc(27*var(--u))]" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col lg:pt-[calc(14*var(--u))]">
        <div className="flex gap-[6px] text-[var(--color-gold-bright)] lg:gap-[calc(5*var(--u))]" role="img" aria-label={fill(labels.ratingLabel, { rating: item.rating })}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Icon key={i} name={labels.starIcon} className="size-[22px] lg:size-[calc(26*var(--u))]" />
          ))}
        </div>
        {/* flex-1 keeps the divider and author on one line across a row, whatever the review's length */}
        <p className="mt-[12px] flex-1 font-body text-[17px] leading-[1.42] text-[var(--color-body)] lg:mt-[calc(14*var(--u))] lg:pr-[calc(24*var(--u))] lg:text-[max(calc(19.5*var(--u)),var(--text-min))]">{item.text}</p>
        <span aria-hidden="true" className="mt-[14px] block h-[2px] w-[40px] bg-[var(--color-gold-line)] lg:mt-[calc(12*var(--u))] lg:w-[calc(42*var(--u))]" />
        <div className="mt-[12px] flex items-center gap-[18px] md:gap-[12px] lg:mt-[calc(8*var(--u))] lg:gap-[calc(22*var(--u))]">
          <div className="relative size-[70px] shrink-0 overflow-hidden rounded-full lg:size-[calc(82*var(--u))]">
            <Image src={item.image} alt={item.imageAlt} fill sizes="82px" className="object-cover" />
          </div>
          <div>
            <p className="font-heading text-[21px] font-medium leading-tight text-[var(--color-wine)] md:whitespace-nowrap lg:text-[max(calc(24.5*var(--u)),var(--text-min))]">{item.name}</p>
            <p className="mt-[4px] font-body text-[16px] text-[var(--color-muted)] md:whitespace-nowrap lg:text-[max(calc(19*var(--u)),var(--text-min))]">{item.role ?? item.location}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const ReviewGrid = ({ items, perPage, labels }: { items: Testimonial[]; perPage: number; labels: TestimonialsData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(items, perPage);

  return (
    <div id="reviews" className="scroll-mt-32">
      <div key={page} className="mt-[36px] grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-[calc(34*var(--u))] lg:gap-[calc(21*var(--u))]">
        {pageItems.map((item, i) => (
          <ReviewCard key={item.id} item={item} delay={(i % 3) * 2 + 1} labels={labels} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="reviews" labels={labels.pagination} />
    </div>
  );
};

/** Testimonials page: every review in a paged grid. */
const TestimonialGrid = ({ data }: { data: TestimonialsData }) => {
  const { intro, items, perPage } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(59*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(64*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(24*var(--u))]"
        title={intro.title}
        titleHighlight={intro.titleHighlight}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(78*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[660px] text-[17px] lg:max-w-[calc(660*var(--u))] lg:mt-[calc(20*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]"
      />
      <ReviewGrid items={items} perPage={perPage} labels={data} />
    </section>
  );
};

/** Home page: the auto-playing slider with the reviews listed in homeItemIds. */
const TestimonialHome = ({ data }: { data: TestimonialsData }) => {
  const { home } = data;
  const items = data.homeItemIds.flatMap((id) => data.items.filter((item) => item.id === id));
  if (!items.length) return null;

  return (
    <section aria-label={home.label} className="py-[var(--section-space)] overflow-hidden">
      <span aria-hidden="true" data-reveal="line" className="mx-auto block h-[2px] w-[70px] bg-[var(--color-gold-line)] lg:w-[calc(82*var(--u))]" />
      <SectionHeading
        className="mt-[16px] px-5 lg:mt-[calc(17*var(--u))]"
        label={home.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[30px] lg:w-[calc(31*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(12*var(--u))]"
        title={home.title}
        titleHighlight={home.titleHighlight}
        accent="upright"
        inline
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[54px] lg:text-[max(calc(74*var(--u)),var(--text-min))]"
      />
      <div data-reveal="up" data-delay="3" className="mt-[36px] px-5 lg:mt-[calc(38*var(--u))] lg:px-0">
        <TestimonialSlider items={items} labels={data} />
      </div>
    </section>
  );
};

export const Testimonials = ({ data, showAll = false }: TestimonialsProps) => {
  if (!data) return null;
  return showAll ? <TestimonialGrid data={data} /> : <TestimonialHome data={data} />;
};
