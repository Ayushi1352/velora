import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewGrid } from "@/components/sections/ReviewGrid";
import type { GlobalUIData, TestimonialListingData } from "@/types/templates.types";

export const TestimonialListing = ({ data, ui }: { data?: TestimonialListingData; ui?: GlobalUIData }) => {
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
      <ReviewGrid items={items} perPage={perPage} ui={ui} />
    </section>
  );
};
