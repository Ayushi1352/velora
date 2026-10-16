import type { SectionComponentProps, VeloraGalleryData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

export default function GallerySection({ data }: SectionComponentProps<VeloraGalleryData>) {
  const { intro, filters, images } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(51*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:uw-64"
        labelClassName="mb-[14px] lg:umb-22"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[40px] sm:text-[54px] lg:ut-73 leading-[1.06]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[620px] text-[17px] lg:umaxw-620 lg:umt-14 lg:ut-23 leading-[1.45]"
      />
      <GalleryGrid filters={filters} images={images} />
    </section>
  );
}
