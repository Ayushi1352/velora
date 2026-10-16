import type { Metadata } from "next";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ReviewGrid from "@/components/ReviewGrid";

export const metadata: Metadata = {
  title: site.testimonialsPage.banner.title,
};

export default function TestimonialsPage() {
  const { banner, intro, items, perPage } = site.testimonialsPage;

  return (
    <>
      <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />
      <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(59*var(--u))]">
        <SectionHeading
          label={intro.label}
          labelLineClassName="w-[44px] lg:uw-64"
          labelClassName="mb-[14px] lg:umb-24"
          line1={intro.titleLine1}
          line2={intro.titleLine2}
          titleClassName="text-[42px] sm:text-[56px] lg:ut-78 leading-[1.06]"
          text={intro.text}
          textClassName="mt-[14px] max-w-[660px] text-[17px] lg:umaxw-660 lg:umt-20 lg:ut-23 leading-[1.5]"
        />
        <ReviewGrid items={items} perPage={perPage} />
      </section>
    </>
  );
}
