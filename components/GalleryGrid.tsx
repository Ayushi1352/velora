"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import Pagination, { usePagination } from "@/components/Pagination";
import GalleryLightbox from "@/components/GalleryLightbox";

type GalleryImage = { src: string; alt: string; category: string };

/** Two rows of four: the layout sizes the first row differently (see `i < 4` below). */
const PER_PAGE = 8;

export default function GalleryGrid({ filters, images }: { filters: string[]; images: GalleryImage[] }) {
  const [active, setActive] = useState(filters[0]);
  const visible = active === filters[0] ? images : images.filter((img) => img.category === active);
  const { page, setPage, totalPages, pageItems } = usePagination(visible, PER_PAGE);
  // Index into `visible`, so the lightbox can step through every image of the active filter.
  const [lightbox, setLightbox] = useState<number | null>(null);

  function selectFilter(filter: string) {
    setActive(filter);
    setPage(1);
  }

  return (
    <>
      <div id="gallery-grid" role="tablist" aria-label="Gallery categories" className="mt-[30px] flex scroll-mt-32 flex-wrap items-center justify-center gap-y-2 lg:umt-46">
        {filters.map((filter, i) => {
          const selected = filter === active;
          return (
            <Fragment key={filter}>
              {i > 0 && <span aria-hidden="true" className="mx-[18px] h-[28px] w-[2px] bg-gold-line lg:uh-32 lg:umx-46" />}
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectFilter(filter)}
                className={`relative px-[12px] pb-[8px] pt-[6px] font-body text-[18px] transition-colors lg:upx-12 lg:ut-22.5 ${
                  selected ? "text-wine" : "text-body hover:text-wine"
                }`}
              >
                {filter}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-wine transition-transform ${selected ? "scale-x-100" : "scale-x-0"}`}
                />
              </button>
            </Fragment>
          );
        })}
      </div>

      <ul className="mt-[24px] grid grid-cols-1 gap-[12px] xs:grid-cols-2 md:grid-cols-4 lg:umt-22 lg:grid-cols-[399fr_379fr_379fr_397fr] lg:ugap-12">
        {pageItems.map((img, i) => (
          <li
            key={img.src}
            data-reveal="zoom"
            data-delay={(i % 4) + 1}
            className={`group relative aspect-[399/300] overflow-hidden rounded-[4px] after:pointer-events-none after:absolute after:inset-0 after:bg-maroon/0 after:transition-colors after:duration-500 hover:after:bg-maroon/20 md:aspect-auto md:h-[clamp(200px,22vw,320px)] ${
              i < 4 ? "lg:uh-292" : "lg:uh-313"
            }`}
          >
            <button
              type="button"
              aria-label={`View ${img.alt}`}
              onClick={() => setLightbox(visible.indexOf(img))}
              className="absolute inset-0 cursor-zoom-in"
            >
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 25vw, (min-width: 480px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="gallery-grid" />
      {lightbox !== null && (
        <GalleryLightbox images={visible} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
