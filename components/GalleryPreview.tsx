import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import SectionHeading from "@/components/SectionHeading";

const zoom = "object-cover transition-transform duration-700 group-hover:scale-105";

export default function GalleryPreview() {
  const { gallery } = site.home;
  const [steak, room, cake, table] = gallery.images;

  return (
    <section aria-label={gallery.label} className="mx-auto max-w-[1920px] section-space">
      <SectionHeading
        className="px-5"
        label={gallery.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[44px] lg:uw-58"
        labelClassName="mb-[10px] lg:umb-12"
        line1={gallery.titleLine1}
        line2={gallery.titleLine2}
        accent="upright"
        inline
        titleClassName="text-[40px] sm:text-[54px] lg:ut-77"
      />

      <Link
        href="/gallery"
        aria-label="View the full gallery"
        className="mt-[28px] grid gap-[12px] px-5 sm:grid-cols-2 md:px-8 lg:umt-14 lg:grid-cols-[calc(497*var(--u))_calc(474*var(--u))_calc(585*var(--u))] lg:ugap-11 lg:px-0 lg:upl-58"
      >
        <div className="group relative aspect-[562/520] overflow-hidden lg:aspect-auto lg:uh-460">
          <Image src={steak.src} alt={steak.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
        </div>
        <div className="relative grid grid-rows-[207fr_221fr] gap-[12px] lg:ugap-11 lg:upt-30">
          {/* small gold rule sitting above the middle column */}
          <span aria-hidden="true" className="absolute left-1/2 top-0 hidden h-[2px] -translate-x-1/2 bg-gold-soft lg:block lg:uw-44" />
          <div className="group relative aspect-[535/234] overflow-hidden lg:aspect-auto lg:uh-207">
            <Image src={room.src} alt={room.alt} fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
          </div>
          <div className="group relative aspect-[535/249] overflow-hidden lg:aspect-auto lg:uh-221">
            <Image src={cake.src} alt={cake.alt} fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
          </div>
        </div>
        <div className="group relative aspect-[661/522] overflow-hidden sm:col-span-2 lg:col-span-1 lg:aspect-auto lg:uh-462 lg:umt-9">
          <Image src={table.src} alt={table.alt} fill sizes="(min-width: 1024px) 35vw, 100vw" className={zoom} />
        </div>
      </Link>
    </section>
  );
}
