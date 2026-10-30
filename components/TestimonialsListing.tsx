import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ReviewGrid from "@/components/ReviewGrid";

const data = site.testimonialsPage;

export default function TestimonialsListing() {
  const { intro, items, perPage } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-[calc(59*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(64*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(24*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(78*var(--u)),var(--text-min))] leading-[1.06]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[660px] text-[17px] lg:max-w-[calc(660*var(--u))] lg:mt-[calc(20*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] leading-[1.5]"
      />
      <ReviewGrid items={items} perPage={perPage} />
    </section>
  );
}
