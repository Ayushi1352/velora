import { Fragment } from "react";
import type { SectionComponentProps, VeloraContactData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ContactInfo from "@/components/ContactInfo";

export default function ContactDetails({ data, settings }: SectionComponentProps<VeloraContactData>) {
  const { intro, info, image } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space">
      <SectionHeading
        className="px-5"
        label={intro.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[50px] lg:uw-72"
        labelClassName="mb-[12px] lg:umb-16 font-jost! tracking-[0.32em]! lg:ut-21!"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[40px] sm:text-[56px] lg:ut-78 leading-[1.04]"
        text={intro.text.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="md:block">{line}</span>
          </Fragment>
        ))}
        textClassName="mt-[16px] max-w-[900px] text-[17px] lg:umaxw-900 lg:umt-14 lg:ut-21 leading-[1.55]"
      />
      <ContactInfo info={info} image={image} contact={settings.contact} />
    </section>
  );
}
