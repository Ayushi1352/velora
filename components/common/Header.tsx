"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { btnFrame } from "@/components/ui/BookButton";
import { isActive } from "@/components/ui/text";
import type { CompanyData, GlobalUIData, HeaderData } from "@/types/templates.types";

export const Header = ({ data, company, ui }: { data?: HeaderData; company?: CompanyData; ui?: GlobalUIData }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  // Gold reading-progress bar, driven by the page scroll (browsers with scroll-driven animations only).
  useEffect(() => {
    const bar = progressRef.current;
    const { ScrollTimeline } = window as typeof window & { ScrollTimeline?: new (options: { source: Element }) => AnimationTimeline };
    if (!bar || !ScrollTimeline) return;
    const animation = bar.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
      fill: "both",
      timeline: new ScrollTimeline({ source: document.documentElement }),
    });
    return () => animation.cancel();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  return (
    <header
      data-intro="down"
      className={`sticky top-0 z-50 bg-[var(--color-white)] transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_28px_var(--color-shadow-header)]" : ""}`}
    >
      <span ref={progressRef} aria-hidden="true" className="pointer-events-none hidden origin-left [transform:scaleX(0)] motion-safe:supports-[animation-timeline:scroll()]:block absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-[var(--color-gold-bright)]" />
      <div className="mx-auto flex h-[76px] max-w-[1920px] items-center justify-between gap-4 px-5 md:h-[92px] md:px-8 lg:h-[calc(135*var(--u))] lg:pl-[calc(56*var(--u))] lg:pr-[calc(44*var(--u))]">
        <Link href={data.logoUrl} aria-label={company?.name} className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width}
            height={data.logo.height}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 15vw, 220px"
            className="h-auto w-[190px] md:w-[210px] lg:w-[calc(250*var(--u))]"
          />
        </Link>

        <nav aria-label={ui?.mainNav} className="hidden lg:block">
          <ul className="flex items-center lg:gap-[calc(14*var(--u))]">
            {data.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative block font-display font-semibold leading-none transition-colors lg:px-[calc(14*var(--u))] lg:py-[calc(14*var(--u))] lg:text-[max(calc(22*var(--u)),var(--text-min))] ${
                      active ? "text-[var(--color-wine)]" : "text-[var(--color-ink)] hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 h-[2px] bg-[var(--color-gold-bright)] transition-transform duration-300 lg:bottom-[calc(-2*var(--u))] ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={data.button.href}
            className={`${btnFrame} hidden h-[46px] items-center gap-3 bg-[var(--color-maroon-dark)] px-5 font-accent text-[16px] tracking-[0.02em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-white)] sm:inline-flex lg:h-[calc(58*var(--u))] lg:px-[calc(31*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))] lg:gap-[calc(13*var(--u))]`}
          >
            {data.button.label}
            <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-[14px] lg:size-[calc(15*var(--u))]" />
          </Link>
          <button
            type="button"
            aria-label={open ? ui?.closeMenu : ui?.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-wine)] transition-colors hover:border-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] lg:hidden"
          >
            <Icon name={open ? "HiOutlineXMark" : "HiOutlineBars3"} strokeWidth={1.8} className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-76px)] origin-top overflow-y-auto overscroll-contain border-t border-[var(--color-line)] bg-[var(--color-white)] transition-[opacity,transform,visibility] duration-300 md:h-[calc(100dvh-92px)] lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav aria-label={ui?.mobileNav} className="px-5 pb-8 pt-2 md:px-8">
          <ul className="flex flex-col">
            {data.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.id} className="border-b border-[var(--color-line-70)]">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-[14px] font-display text-[21px] font-semibold transition-colors hover:text-[var(--color-gold)] ${
                      active ? "text-[var(--color-wine)]" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {item.label}
                    {active && <span className="h-[2px] w-8 bg-[var(--color-gold-bright)]" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={data.button.href}
            onClick={() => setOpen(false)}
            className={`${btnFrame} mt-7 inline-flex h-[50px] items-center gap-3 bg-[var(--color-maroon-dark)] px-6 font-accent text-[18px] text-[var(--color-white)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-white)] sm:hidden`}
          >
            {data.button.label}
            <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
