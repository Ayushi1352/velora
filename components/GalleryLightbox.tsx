"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { ChevronLeft, ChevronRight, CloseIcon } from "@/components/Icons";
import { label } from "@/data";

type LightboxImage = { src: string; alt: string };

type GalleryLightboxProps = {
  images: LightboxImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

const navButton =
  "absolute top-1/2 z-10 grid size-[46px] -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition-colors hover:border-maroon hover:bg-maroon lg:size-[calc(60*var(--u))]";

/** Full screen image viewer with previous / next navigation (arrows, keyboard and swipe). */
export default function GalleryLightbox({ images, index, onChange, onClose }: GalleryLightboxProps) {
  const touchX = useRef<number | null>(null);
  const count = images.length;
  const img = images[index];

  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
      else if (e.key === "ArrowRight") onChange((index + 1) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onChange, onClose]);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, []);

  if (!img) return null;

  return (
    <FadeIn duration={300}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={img.alt}
        onClick={onClose}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      >
        <button
          type="button"
          aria-label={label("close")}
          onClick={onClose}
          className="absolute right-[16px] top-[16px] z-10 grid size-[44px] place-items-center rounded-full text-white transition-colors hover:bg-maroon lg:right-[calc(30*var(--u))] lg:top-[calc(30*var(--u))] lg:size-[calc(52*var(--u))]"
        >
          <CloseIcon className="size-[55%]" />
        </button>

        {count > 1 && (
          <button
            type="button"
            aria-label={label("previousImage")}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className={`${navButton} left-[12px] lg:left-[calc(40*var(--u))]`}
          >
            <ChevronLeft className="size-[45%]" />
          </button>
        )}

        <div
          onClick={(e) => e.stopPropagation()}
          className="relative h-[75vh] w-[calc(100vw-32px)] sm:w-[calc(100vw-140px)] lg:h-[85vh] lg:w-[calc(100vw-calc(240*var(--u)))]"
        >
          <FadeIn key={img.src} duration={350}>
            <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-contain" priority />
          </FadeIn>
        </div>

        {count > 1 && (
          <button
            type="button"
            aria-label={label("nextImage")}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className={`${navButton} right-[12px] lg:right-[calc(40*var(--u))]`}
          >
            <ChevronRight className="size-[45%]" />
          </button>
        )}

        <p className="absolute bottom-[16px] left-1/2 -translate-x-1/2 font-body text-[15px] tracking-[0.1em] text-white/80 lg:bottom-[calc(30*var(--u))] lg:text-[max(calc(18*var(--u)),var(--text-min))]">
          {index + 1} / {count}
        </p>
      </div>
    </FadeIn>
  );
}
