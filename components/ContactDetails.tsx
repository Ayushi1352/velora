import { Fragment } from "react";
import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ContactInfo from "@/components/ContactInfo";

const data = site.contactPage;

export default function ContactDetails() {
  const { intro, info, image } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space)">
      <SectionHeading
        className="px-5"
        label={intro.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[50px] lg:w-[calc(72*var(--u))]"
        labelClassName="mb-[12px] lg:mb-[calc(16*var(--u))] font-jost! tracking-[0.32em]! lg:text-[max(calc(21*var(--u)),var(--text-min))]!"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[40px] sm:text-[56px] lg:text-[max(calc(78*var(--u)),var(--text-min))] leading-[1.04]"
        text={intro.text.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="md:block">{line}</span>
          </Fragment>
        ))}
        textClassName="mt-[16px] max-w-[900px] text-[17px] lg:max-w-[calc(900*var(--u))] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))] leading-[1.55]"
      />
      <ContactInfo info={info} image={image} contact={site.footer.contact} />
    </section>
  );
}
