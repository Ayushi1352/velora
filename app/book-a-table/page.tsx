import type { Metadata } from "next";
import Image from "next/image";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ReservationForm from "@/components/ReservationForm";
import BookingFeatures from "@/components/BookingFeatures";

export const metadata: Metadata = {
  title: site.bookTablePage.banner.title,
};

export default function BookATablePage() {
  const { banner, intro, image, form, features } = site.bookTablePage;

  return (
    <>
      <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />
      <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(41*var(--u))]">
        <SectionHeading
          label={intro.label}
          labelVariant="sans-wide"
          labelLineClassName="w-[50px] lg:uw-70"
          labelClassName="mb-[12px] lg:umb-18 font-jost! tracking-[0.32em]! lg:ut-21!"
          line1={intro.titleLine1}
          line2={intro.titleLine2}
          titleClassName="text-[40px] sm:text-[56px] lg:ut-80 leading-[1.06]"
          text={
            <>
              <span className="md:block">{intro.text[0]}</span> <span className="md:block">{intro.text[1]}</span>
            </>
          }
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
    </>
  );
}
