import type { SectionComponentProps, VeloraTestimonialData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Testimonials({ data: testimonials }: SectionComponentProps<VeloraTestimonialData>) {
  return (
    <section aria-label={testimonials.label} className="section-space overflow-hidden">
      <span aria-hidden="true" className="mx-auto block h-[2px] w-[70px] bg-gold-line lg:uw-82" />
      <SectionHeading
        className="mt-[16px] px-5 lg:umt-17"
        label={testimonials.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[30px] lg:uw-31"
        labelClassName="mb-[10px] lg:umb-12"
        line1={testimonials.titleLine1}
        line2={testimonials.titleLine2}
        accent="upright"
        inline
        titleClassName="text-[40px] sm:text-[54px] lg:ut-74"
      />
      <div className="mt-[36px] px-5 lg:umt-38 lg:px-0">
        <TestimonialSlider items={testimonials.items} />
      </div>
    </section>
  );
}
