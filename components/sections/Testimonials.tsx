import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import type { GlobalUIData, TestimonialListingData, TestimonialsData } from "@/types/templates.types";

type Props = {
  data?: TestimonialsData;
  /** The Testimonials page reviews; the home slider only names its guests, so both always match. */
  reviews?: TestimonialListingData;
  ui?: GlobalUIData;
};

export const Testimonials = ({ data: testimonials, reviews, ui }: Props) => {
  if (!testimonials || !reviews) return null;
  const items = testimonials.featured.flatMap((name) => reviews.items.filter((item) => item.name === name));

  return (
    <section aria-label={testimonials.label} className="py-[var(--section-space)] overflow-hidden">
      <span aria-hidden="true" data-reveal="line" className="mx-auto block h-[2px] w-[70px] bg-[var(--color-gold-line)] lg:w-[calc(82*var(--u))]" />
      <SectionHeading
        className="mt-[16px] px-5 lg:mt-[calc(17*var(--u))]"
        label={testimonials.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[30px] lg:w-[calc(31*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(12*var(--u))]"
        line1={testimonials.titleLine1}
        line2={testimonials.titleLine2}
        accent="upright"
        inline
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[54px] lg:text-[max(calc(74*var(--u)),var(--text-min))]"
      />
      <div data-reveal="up" data-delay="3" className="mt-[36px] px-5 lg:mt-[calc(38*var(--u))] lg:px-0">
        <TestimonialSlider items={items} ui={ui} />
      </div>
    </section>
  );
};
