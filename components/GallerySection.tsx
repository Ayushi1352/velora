import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

const data = site.galleryPage;

export default function GallerySection() {
  const { intro, filters, images } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-[calc(51*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(64*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(22*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[54px] lg:text-[max(calc(73*var(--u)),var(--text-min))] leading-[1.06]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] leading-[1.45]"
      />
      <GalleryGrid filters={filters} images={images} />
    </section>
  );
}
