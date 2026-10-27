import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";

const testimonials = site.testimonialSection;

export default function Testimonials() {
  return (
    <section aria-label={testimonials.label} className="py-(--section-space) overflow-hidden">
      <span aria-hidden="true" data-reveal="line" className="mx-auto block h-[2px] w-[70px] bg-gold-line lg:w-[calc(82*var(--u))]" />
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
        titleClassName="text-[40px] sm:text-[54px] lg:text-[max(calc(74*var(--u)),var(--text-min))]"
      />
      <div data-reveal="up" data-delay="3" className="mt-[36px] px-5 lg:mt-[calc(38*var(--u))] lg:px-0">
        <TestimonialSlider items={testimonials.items} />
      </div>
    </section>
  );
}
