"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";
import { Pagination, usePagination } from "@/components/ui/Pagination";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial, TestimonialListingData, TestimonialListingProps } from "@/types/templates.types";

/** `delay` staggers the card's scroll reveal (see data-delay in components/ui/ScrollReveal.tsx). */
const ReviewCard = ({ item, delay, ratingLabel }: { item: Testimonial; delay?: number; ratingLabel: string }) => {
  return (
    <article data-reveal="up" data-delay={delay} className="flex gap-[18px] md:gap-[12px] rounded-[14px] border-[1.5px] border-[var(--color-gold-pale)] bg-[var(--color-white)] px-[20px] py-[22px] shadow-[0_8px_24px_var(--color-shadow-review)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-gold-line)] hover:shadow-[0_20px_44px_var(--color-shadow-review-hover)] lg:min-h-[calc(335*var(--u))] lg:gap-[calc(20*var(--u))] lg:pl-[calc(28*var(--u))] lg:pr-[calc(24*var(--u))] lg:pt-[calc(21*var(--u))]">
      <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-[var(--color-blush)] text-[var(--color-gold)] lg:size-[calc(64*var(--u))]">
        <Icon name="VeloraQuote" className="h-[18px] w-[24px] lg:h-[calc(20*var(--u))] lg:w-[calc(27*var(--u))]" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col lg:pt-[calc(14*var(--u))]">
        <div className="flex gap-[6px] text-[var(--color-gold-bright)] lg:gap-[calc(5*var(--u))]" role="img" aria-label={fill(ratingLabel, { rating: item.rating })}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Icon key={i} name="FaStar" className="size-[22px] lg:size-[calc(26*var(--u))]" />
          ))}
        </div>
        {/* flex-1 keeps the divider and author on one line across a row, whatever the review's length */}
        <p className="mt-[12px] flex-1 font-body text-[17px] leading-[1.42] text-[var(--color-body)] lg:mt-[calc(14*var(--u))] lg:pr-[calc(24*var(--u))] lg:text-[max(calc(19.5*var(--u)),var(--text-min))]">{item.text}</p>
        <span aria-hidden="true" className="mt-[14px] block h-[2px] w-[40px] bg-[var(--color-gold-line)] lg:mt-[calc(12*var(--u))] lg:w-[calc(42*var(--u))]" />
        <div className="mt-[12px] flex items-center gap-[18px] md:gap-[12px] lg:mt-[calc(8*var(--u))] lg:gap-[calc(22*var(--u))]">
          <div className="relative size-[70px] shrink-0 overflow-hidden rounded-full lg:size-[calc(82*var(--u))]">
            <Image src={item.image.src} alt={item.image.alt} fill sizes="82px" className="object-cover" />
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

const ReviewGrid = ({ items, perPage, labels }: { items: Testimonial[]; perPage: number; labels: TestimonialListingData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(items, perPage);

  return (
    <div id="reviews" className="scroll-mt-32">
      <div key={page} className="mt-[36px] grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-[calc(34*var(--u))] lg:gap-[calc(21*var(--u))]">
        {pageItems.map((item, i) => (
          <ReviewCard key={item.name} item={item} delay={(i % 3) * 2 + 1} ratingLabel={labels.ratingLabel} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="reviews" labels={labels} />
    </div>
  );
};

export const TestimonialListing = ({ data }: TestimonialListingProps) => {
  if (!data) return null;
  const { intro, items, perPage } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(59*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(64*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(24*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(78*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[660px] text-[17px] lg:max-w-[calc(660*var(--u))] lg:mt-[calc(20*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]"
      />
      <ReviewGrid items={items} perPage={perPage} labels={data} />
    </section>
  );
};
