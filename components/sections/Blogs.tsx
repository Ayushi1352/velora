import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogList } from "@/components/sections/BlogList";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

export const Blogs = ({ data, ui }: { data?: BlogsData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { intro, perPage, meta, items } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(85*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[36px] lg:w-[calc(44*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(14*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(70*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[12px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(12*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] !leading-[1.38]"
      />
      <BlogList posts={items} perPage={perPage} meta={meta} ui={ui} />
    </section>
  );
};
