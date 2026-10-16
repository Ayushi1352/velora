import type { Metadata } from "next";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import MenuSections from "@/components/MenuSections";

export const metadata: Metadata = {
  title: site.menuPage.banner.title,
};

export default function OurMenuPage() {
  const { banner, intro, sections } = site.menuPage;

  return (
    <>
      <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />
      <section aria-label={intro.label} className="section-space">
        <SectionHeading
          className="px-5"
          label={intro.label}
          labelLineClassName="w-[44px] lg:uw-60"
          labelClassName="mb-[12px] lg:umb-20"
          line1={intro.titleLine1}
          line2={intro.titleLine2}
          titleClassName="text-[40px] sm:text-[54px] lg:ut-70 leading-[1.12]"
          text={intro.text}
          textClassName="mt-[14px] max-w-[760px] text-[17px] lg:umaxw-760 lg:umt-20 lg:ut-21"
        />
        <MenuSections sections={sections} />
      </section>
    </>
  );
}
