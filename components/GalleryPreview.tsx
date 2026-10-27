import Image from "next/image";
import Link from "next/link";
import { label, site } from "@/data";
import SectionHeading from "@/components/SectionHeading";

const zoom = "object-cover transition-transform duration-700 group-hover:scale-105";

const gallery = site.galleryPreviewSection;

export default function GalleryPreview() {
  const [steak, room, cake, table] = gallery.images;

  return (
    <section aria-label={gallery.label} className="mx-auto max-w-[1920px] py-(--section-space)">
      <SectionHeading
        className="px-5"
        label={gallery.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[44px] lg:w-[calc(58*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(12*var(--u))]"
        line1={gallery.titleLine1}
        line2={gallery.titleLine2}
        accent="upright"
        inline
        titleClassName="text-[40px] sm:text-[54px] lg:text-[max(calc(77*var(--u)),var(--text-min))]"
      />

      <Link
        href={gallery.href}
        aria-label={label("viewGallery")}
        className="mt-[28px] grid gap-[12px] px-5 sm:grid-cols-2 md:px-8 lg:mt-[calc(14*var(--u))] lg:grid-cols-[calc(497*var(--u))_calc(474*var(--u))_calc(585*var(--u))] lg:gap-[calc(11*var(--u))] lg:px-0 lg:pl-[calc(58*var(--u))]"
      >
        <div data-reveal="mask-up" className="group relative aspect-[562/520] overflow-hidden lg:aspect-auto lg:h-[calc(460*var(--u))]">
          <Image src={steak.src} alt={steak.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
        </div>
        <div className="relative grid grid-rows-[207fr_221fr] gap-[12px] lg:gap-[calc(11*var(--u))] lg:pt-[calc(30*var(--u))]">
          {/* small gold rule sitting above the middle column */}
          <span aria-hidden="true" data-reveal="line" data-delay="4" className="absolute left-1/2 top-0 hidden h-[2px] -translate-x-1/2 bg-gold-soft lg:block lg:w-[calc(44*var(--u))]" />
          <div data-reveal="mask-down" data-delay="2" className="group relative aspect-[535/234] overflow-hidden lg:aspect-auto lg:h-[calc(207*var(--u))]">
            <Image src={room.src} alt={room.alt} fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
          </div>
          <div data-reveal="mask-up" data-delay="3" className="group relative aspect-[535/249] overflow-hidden lg:aspect-auto lg:h-[calc(221*var(--u))]">
            <Image src={cake.src} alt={cake.alt} fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
          </div>
        </div>
        <div data-reveal="mask-left" data-delay="4" className="group relative aspect-[661/522] overflow-hidden sm:col-span-2 lg:col-span-1 lg:aspect-auto lg:h-[calc(462*var(--u))] lg:mt-[calc(9*var(--u))]">
          <Image src={table.src} alt={table.alt} fill sizes="(min-width: 1024px) 35vw, 100vw" className={zoom} />
        </div>
      </Link>
    </section>
  );
}
