import { Fragment } from "react";
import Image from "next/image";
import type { SectionComponentProps, VeloraBookingData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ReservationForm from "@/components/ReservationForm";
import BookingFeatures from "@/components/BookingFeatures";

export default function Booking({ data }: SectionComponentProps<VeloraBookingData>) {
  const { intro, image, form, features } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(41*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[50px] lg:uw-70"
        labelClassName="mb-[12px] lg:umb-18 font-jost! tracking-[0.32em]! lg:ut-21!"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[40px] sm:text-[56px] lg:ut-80 leading-[1.06]"
        text={intro.text.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="md:block">{line}</span>
          </Fragment>
        ))}
        textClassName="mt-[16px] max-w-[1120px] text-[17px] lg:umaxw-1120 lg:umt-24 lg:ut-23 leading-[1.55]"
      />

      <div className="mt-[40px] grid gap-8 lg:grid-cols-2 lg:umt-62 lg:ugap-32">
        <div className="relative aspect-[789/837] overflow-hidden rounded-[6px] lg:aspect-auto">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 47vw, 100vw" className="object-cover" />
        </div>
        <ReservationForm form={form} />
      </div>

      <BookingFeatures features={features} />
    </section>
  );
}
