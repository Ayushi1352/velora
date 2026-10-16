import type { SectionComponentProps, VeloraBlogPageData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import BlogList from "@/components/BlogList";

export default function BlogListing({ data }: SectionComponentProps<VeloraBlogPageData>) {
  const { intro, perPage, meta, items } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(85*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[36px] lg:uw-44"
        labelClassName="mb-[10px] lg:umb-14"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[42px] sm:text-[56px] lg:ut-70 leading-[1.06]"
        text={intro.text}
        textClassName="mt-[12px] max-w-[620px] text-[17px] lg:umaxw-620 lg:umt-12 lg:ut-23 leading-[1.38]"
      />
      <BlogList posts={items} perPage={perPage} meta={meta} />
    </section>
  );
}
