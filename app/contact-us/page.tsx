import type { Metadata } from "next";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ContactInfo from "@/components/ContactInfo";
import MessageSection from "@/components/MessageSection";
import OfficeLocations from "@/components/OfficeLocations";

export const metadata: Metadata = {
  title: site.contactPage.banner.title,
};

export default function ContactUsPage() {
  const { banner, intro } = site.contactPage;

  return (
    <>
      <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />
      <div className="mx-auto max-w-[1920px]">
        <section aria-label={intro.label} className="section-space">
          <SectionHeading
            className="px-5"
            label={intro.label}
            labelVariant="sans-wide"
            labelLineClassName="w-[50px] lg:uw-72"
            labelClassName="mb-[12px] lg:umb-16 font-jost! tracking-[0.32em]! lg:ut-21!"
            line1={intro.titleLine1}
            line2={intro.titleLine2}
            titleClassName="text-[40px] sm:text-[56px] lg:ut-78 leading-[1.04]"
            text={
              <>
                <span className="md:block">{intro.text[0]}</span> <span className="md:block">{intro.text[1]}</span>
              </>
            }
            textClassName="mt-[16px] max-w-[900px] text-[17px] lg:umaxw-900 lg:umt-14 lg:ut-21 leading-[1.55]"
          />
          <ContactInfo />
        </section>
        <MessageSection />
        <OfficeLocations />
      </div>
    </>
  );
}
