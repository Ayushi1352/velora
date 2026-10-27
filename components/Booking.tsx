import { Fragment } from "react";
import Image from "next/image";
import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ReservationForm from "@/components/ReservationForm";
import BookingFeatures from "@/components/BookingFeatures";

const data = site.bookingPage;

export default function Booking() {
  const { intro, image, form, features } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-[calc(41*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[50px] lg:w-[calc(70*var(--u))]"
        labelClassName="mb-[12px] lg:mb-[calc(18*var(--u))] font-jost! tracking-[0.32em]! lg:text-[max(calc(21*var(--u)),var(--text-min))]!"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[40px] sm:text-[56px] lg:text-[max(calc(80*var(--u)),var(--text-min))] leading-[1.06]"
        text={intro.text.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="md:block">{line}</span>
          </Fragment>
        ))}
        textClassName="mt-[16px] max-w-[1120px] text-[17px] lg:max-w-[calc(1120*var(--u))] lg:mt-[calc(24*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] leading-[1.55]"
      />

      <div className="mt-[40px] grid gap-8 lg:grid-cols-2 lg:mt-[calc(62*var(--u))] lg:gap-[calc(32*var(--u))]">
        <div data-reveal="mask-left" className="relative aspect-[789/837] overflow-hidden rounded-[6px] lg:aspect-auto">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 47vw, 100vw" className="object-cover" />
        </div>
        <ReservationForm form={form} />
      </div>

      <BookingFeatures features={features} />
    </section>
  );
}
