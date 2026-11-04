import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuSections } from "@/components/sections/MenuSections";
import type { GlobalUIData, MenuData } from "@/types/templates.types";

export const Menu = ({ data, ui }: { data?: MenuData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { intro, sections } = data;

  return (
    <section aria-label={intro.label} className="py-[var(--section-space)]">
      <SectionHeading
        className="px-5"
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(60*var(--u))]"
        labelClassName="mb-[12px] lg:mb-[calc(20*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[54px] lg:text-[max(calc(70*var(--u)),var(--text-min))] !leading-[1.12]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[760px] text-[17px] lg:max-w-[calc(760*var(--u))] lg:mt-[calc(20*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]"
      />
      <MenuSections sections={sections} label={ui?.menuCategories} />
    </section>
  );
};
