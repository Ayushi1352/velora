import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import BlogList from "@/components/BlogList";

const data = site.blogPage;

export default function BlogListing() {
  const { intro, perPage, meta, items } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-[calc(85*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[36px] lg:w-[calc(44*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(14*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(70*var(--u)),var(--text-min))] leading-[1.06]"
        text={intro.text}
        textClassName="mt-[12px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(12*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] leading-[1.38]"
      />
      <BlogList posts={items} perPage={perPage} meta={meta} />
    </section>
  );
}
