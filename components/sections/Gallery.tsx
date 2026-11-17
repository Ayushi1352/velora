'use client';

import Image from 'next/image';
import { useEffect, useRef, Fragment, useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Icon } from '@/components/ui/Icon';
import { Pagination, usePagination } from '@/components/ui/Pagination';
import { fill } from '@/components/ui/text';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { GalleryData, GalleryImage, GalleryProps } from '@/types/templates.types';

type GalleryLightboxProps = {
  images: GalleryImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
  labels: Pick<GalleryData, 'closeLabel' | 'closeIcon' | 'previousLabel' | 'previousIcon' | 'nextLabel' | 'nextIcon' | 'counterLabel'>;
};

const navButton =
  'absolute top-1/2 z-10 grid size-[46px] -translate-y-1/2 place-items-center rounded-full border border-[var(--color-white-40)] bg-[var(--color-black-30)] text-[var(--color-white)] transition-colors hover:border-[var(--color-maroon)] hover:bg-[var(--color-maroon)] lg:size-[calc(60*var(--u))]';

/** Full screen image viewer with previous / next navigation (arrows, keyboard and swipe). */
const GalleryLightbox = ({ images, index, onChange, onClose, labels }: GalleryLightboxProps) => {
  const touchX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const img = images[index];

  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
      else if (e.key === 'ArrowRight') onChange((index + 1) % count);
      else if (e.key === 'Tab') {
        // Keep keyboard focus inside the viewer while it is open.
        const buttons = [...(dialogRef.current?.querySelectorAll('button') ?? [])];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!first || !last) return;
        if (!dialogRef.current?.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, count, onChange, onClose]);

  useEffect(() => {
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = 'hidden';
    // Focus moves into the viewer, and back to the photo that opened it once it closes.
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.documentElement.style.overflow = overflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  if (!img) return null;

  return (
    <FadeIn duration={300}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={img.imageAlt}
        onClick={onClose}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-black-90)]"
      >
        <button
          ref={closeRef}
          type="button"
          aria-label={labels.closeLabel}
          onClick={onClose}
          className="absolute right-[16px] top-[16px] z-10 grid size-[44px] place-items-center rounded-full text-[var(--color-white)] transition-colors hover:bg-[var(--color-maroon)] lg:right-[calc(30*var(--u))] lg:top-[calc(30*var(--u))] lg:size-[calc(52*var(--u))]"
        >
          <Icon name={labels.closeIcon} strokeWidth={1.8} className="size-[55%]" />
        </button>

        {count > 1 && (
          <button
            type="button"
            aria-label={labels.previousLabel}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className={`${navButton} left-[12px] lg:left-[calc(40*var(--u))]`}
          >
            <Icon name={labels.previousIcon} strokeWidth={2} className="size-[45%]" />
          </button>
        )}

        <div
          onClick={(e) => e.stopPropagation()}
          className="relative h-[75vh] w-[calc(100vw-32px)] sm:w-[calc(100vw-140px)] lg:h-[85vh] lg:w-[calc(100vw-calc(240*var(--u)))]"
        >
          <FadeIn key={img.id} duration={350}>
            <Image src={img.image} alt={img.imageAlt} fill sizes="100vw" className="object-contain" priority />
          </FadeIn>
        </div>

        {count > 1 && (
          <button
            type="button"
            aria-label={labels.nextLabel}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className={`${navButton} right-[12px] lg:right-[calc(40*var(--u))]`}
          >
            <Icon name={labels.nextIcon} strokeWidth={2} className="size-[45%]" />
          </button>
        )}

        <p className="absolute bottom-[16px] left-1/2 -translate-x-1/2 font-body text-[15px] tracking-[0.1em] text-[var(--color-white-80)] lg:bottom-[calc(30*var(--u))] lg:text-[max(calc(18*var(--u)),var(--text-min))]">
          {fill(labels.counterLabel, { n: index + 1, total: count })}
        </p>
      </div>
    </FadeIn>
  );
};

const GalleryGrid = ({ filters, images, perPage, labels }: { filters: string[]; images: GalleryImage[]; perPage: number; labels: GalleryData }) => {
  const [active, setActive] = useState(filters[0]);
  const visible = active === filters[0] ? images : images.filter((img) => img.category === active);
  const { page, setPage, totalPages, pageItems } = usePagination(visible, perPage);
  // Index into `visible`, so the lightbox can step through every image of the active filter.
  const [lightbox, setLightbox] = useState<number | null>(null);

  function selectFilter(filter: string) {
    setActive(filter);
    setPage(1);
  }

  return (
    <>
      <div id="gallery-grid" role="tablist" aria-label={labels.categoriesLabel} className="mt-[30px] flex scroll-mt-32 items-center [justify-content:safe_center] gap-y-2 overflow-x-auto [scrollbar-width:none] sm:flex-wrap sm:overflow-x-visible lg:mt-[calc(46*var(--u))]">
        {filters.map((filter, i) => {
          const selected = filter === active;
          return (
            <Fragment key={filter}>
              {i > 0 && <span aria-hidden="true" className="mx-[6px] h-[28px] w-[2px] shrink-0 bg-[var(--color-gold-line)] sm:mx-[18px] lg:h-[calc(32*var(--u))] lg:mx-[calc(46*var(--u))]" />}
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectFilter(filter)}
                className={`relative shrink-0 whitespace-nowrap px-[8px] pb-[8px] pt-[6px] font-body text-[16px] transition-colors sm:px-[12px] sm:text-[18px] lg:px-[calc(12*var(--u))] lg:text-[max(calc(22.5*var(--u)),var(--text-min))] ${
                  selected ? 'text-[var(--color-wine)]' : 'text-[var(--color-body)] hover:text-[var(--color-wine)]'
                }`}
              >
                {filter}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-[var(--color-wine)] transition-transform ${selected ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </button>
            </Fragment>
          );
        })}
      </div>

      <ul className="mt-[24px] grid grid-cols-1 gap-[12px] xs:grid-cols-2 md:grid-cols-4 lg:mt-[calc(22*var(--u))] lg:grid-cols-[399fr_379fr_379fr_397fr] lg:gap-[calc(12*var(--u))]">
        {pageItems.map((img, i) => (
          <li
            key={img.id}
            data-reveal="zoom"
            data-delay={(i % 4) + 1}
            className={`group relative aspect-[399/300] overflow-hidden rounded-[4px] after:pointer-events-none after:absolute after:inset-0 after:bg-transparent after:transition-colors after:duration-500 hover:after:bg-[var(--color-maroon-20)] md:aspect-auto md:h-[clamp(200px,22vw,320px)] ${
              i < 4 ? 'lg:h-[calc(292*var(--u))]' : 'lg:h-[calc(313*var(--u))]'
            }`}
          >
            <button
              type="button"
              aria-label={fill(labels.openImageLabel, { name: img.imageAlt })}
              onClick={() => setLightbox(visible.indexOf(img))}
              className="absolute inset-0 cursor-zoom-in"
            >
              <Image src={img.image} alt={img.imageAlt} fill sizes="(min-width: 768px) 25vw, (min-width: 480px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="gallery-grid" labels={labels.pagination} />
      {lightbox !== null && (
        <GalleryLightbox images={visible} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} labels={labels} />
      )}
    </>
  );
};

export const Gallery = ({ data }: GalleryProps) => {
  if (!data) return null;
  const { intro, filters, images, perPage } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(51*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(64*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(22*var(--u))]"
        title={intro.title}
        titleHighlight={intro.titleHighlight}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[54px] lg:text-[max(calc(73*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[14px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] !leading-[1.45]"
      />
      <GalleryGrid filters={filters} images={images} perPage={perPage} labels={data} />
    </section>
  );
};
