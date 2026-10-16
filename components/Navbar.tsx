"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SectionProps, VeloraHeaderData } from "@/data";
import { ArrowRight, CloseIcon, MenuIcon } from "@/components/Icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Client component: the Header data comes in as props (not from `site`) so site.json stays out of the browser bundle.
export default function Navbar({ data }: SectionProps<VeloraHeaderData>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  const { brand } = data;

  return (
    <header
      data-intro="down"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_28px_rgba(66,0,6,0.08)]" : ""}`}
    >
      <span aria-hidden="true" className="scroll-progress pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-linear-to-r from-gold via-gold-light to-gold-bright" />
      <div className="mx-auto flex h-[76px] max-w-[1920px] items-center justify-between gap-4 px-5 md:h-[92px] md:px-8 lg:uh-135 lg:pl-[calc(56*var(--u))] lg:pr-[calc(44*var(--u))]">
        <Link href="/" aria-label={brand.name} className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width}
            height={brand.logo.height}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 15vw, 220px"
            className="h-auto w-[190px] md:w-[210px] lg:uw-250"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center lg:ugap-14">
            {data.navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative block font-cormorant font-semibold leading-none transition-colors lg:upx-14 lg:upy-14 lg:ut-22 ${
                      active ? "text-wine" : "text-ink hover:text-gold"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 h-[2px] bg-gold-bright transition-transform duration-300 lg:bottom-[calc(-2*var(--u))] ${
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
            href={data.bookButton.href}
            className="btn-frame hidden h-[46px] items-center gap-3 bg-maroon-dark px-5 font-marcellus text-[16px] tracking-[0.02em] text-white transition-colors hover:bg-gold hover:text-white sm:inline-flex lg:uh-58 lg:upx-31 lg:ut-20 lg:ugap-13"
          >
            {data.bookButton.label}
            <ArrowRight className="size-[14px] lg:usize-15" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-line text-wine transition-colors hover:border-maroon hover:bg-maroon hover:text-white lg:hidden"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-76px)] origin-top overflow-y-auto overscroll-contain border-t border-line bg-white transition-[opacity,transform,visibility] duration-300 md:h-[calc(100dvh-92px)] lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-5 pb-8 pt-2 md:px-8">
          <ul className="flex flex-col">
            {data.navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line/70">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-[14px] font-cormorant text-[21px] font-semibold transition-colors hover:text-gold ${
                      active ? "text-wine" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {active && <span className="h-[2px] w-8 bg-gold-bright" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={data.bookButton.href}
            onClick={() => setOpen(false)}
            className="btn-frame mt-7 inline-flex h-[50px] items-center gap-3 bg-maroon-dark px-6 font-marcellus text-[18px] text-white transition-colors hover:bg-gold hover:text-white sm:hidden"
          >
            {data.bookButton.label}
            <ArrowRight className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
