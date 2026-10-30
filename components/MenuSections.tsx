"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { SectionLabel } from "@/components/SectionHeading";
import { label } from "@/data";

type MenuItem = { name: string; description: string; price: string };

type MenuSection = {
  id: string;
  tab: string;
  label: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  showByDefault: boolean;
  image: { src: string; alt: string; width: number; height: number };
  items: MenuItem[];
};

function MenuRow({ section, reverse }: { section: MenuSection; reverse: boolean }) {
  return (
    <article
      id={section.id}
      className={`grid scroll-mt-28 items-start gap-8 lg:gap-0 ${
        reverse ? "lg:grid-cols-[calc(848*var(--u))_1fr]" : "lg:grid-cols-[1fr_calc(848*var(--u))]"
      }`}
    >
      <div
        // The photo is uncovered from the outer edge of the page.
        data-reveal={reverse ? "mask-left" : "mask-right"}
        className={`relative overflow-hidden ${reverse ? "lg:order-1" : "lg:order-2"}`}
        style={{ aspectRatio: `${section.image.width} / ${section.image.height}` }}
      >
        <Image src={section.image.src} alt={section.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className={`${reverse ? "lg:order-2 lg:pl-[calc(71*var(--u))] lg:pr-[calc(76*var(--u))]" : "lg:order-1 lg:pl-[calc(85*var(--u))] lg:pr-[calc(65*var(--u))]"}`}>
        <SectionLabel align="left" lineClassName="w-[44px] lg:w-[calc(61*var(--u))]">
          {section.label}
        </SectionLabel>
        <h2 data-reveal="up" data-delay="1" className="mt-[14px] font-serif text-[clamp(26px,8.5vw,38px)] font-medium leading-[1.12] tracking-[-0.015em] text-wine sm:text-[46px] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(65*var(--u)),var(--text-min))]">
          {section.titleLine1}
          <br />
          <span className="font-normal italic text-gold">{section.titleLine2}</span>
        </h2>
        <p data-reveal="up" data-delay="2" className="mt-[12px] max-w-[580px] font-body text-[18px] leading-[1.5] text-body lg:max-w-[calc(560*var(--u))] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]">{section.text}</p>

        <ul className="mt-[26px] lg:mt-[calc(44*var(--u))]">
          {section.items.map((item, i) => (
            <Fragment key={item.name}>
              {i > 0 && <li aria-hidden="true" data-reveal="line" data-delay={Math.min(i + 2, 12)} className="bg-[linear-gradient(to_right,var(--color-line)_50%,transparent_50%)] bg-[length:7px_1px] bg-repeat-x origin-left my-[14px] h-px lg:mb-[calc(12*var(--u))] lg:mt-[calc(10*var(--u))]" />}
              <li data-reveal="up" data-delay={Math.min(i + 3, 12)}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[21px] font-medium leading-tight text-wine lg:text-[max(calc(25.5*var(--u)),var(--text-min))]">{item.name}</h3>
                  <span className="shrink-0 font-serif text-[21px] font-medium text-gold lg:text-[max(calc(25.5*var(--u)),var(--text-min))]">{item.price}</span>
                </div>
                <p className="mt-[4px] font-body text-[15px] leading-snug text-body lg:mt-[calc(2*var(--u))] lg:text-[max(calc(18.5*var(--u)),var(--text-min))]">{item.description}</p>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function MenuSections({ sections }: { sections: MenuSection[] }) {
  // null = the default overview (all featured sections), otherwise a single category.
  const [selected, setSelected] = useState<string | null>(null);
  const activeTab = selected ?? sections[0]?.id;
  const visible = selected ? sections.filter((s) => s.id === selected) : sections.filter((s) => s.showByDefault);

  return (
    <>
      <div
        role="tablist"
        aria-label={label("menuCategories")}
        className="mx-auto mt-[30px] flex max-w-full items-center justify-center-safe gap-y-3 overflow-x-auto px-5 [scrollbar-width:none] sm:flex-wrap sm:overflow-x-visible lg:mt-[calc(34*var(--u))]"
      >
        {sections.map((s, i) => {
          const active = s.id === activeTab;
          return (
            <Fragment key={s.id}>
              {i > 0 && <span aria-hidden="true" className="mx-[14px] hidden h-[36px] w-[2px] bg-gold-line sm:block lg:h-[calc(45*var(--u))] lg:mx-[calc(38*var(--u))]" />}
              <button
                type="button"
                role="tab"
                aria-selected={active}
                // The first tab is the default overview, so it brings all featured sections back.
                onClick={(e) => {
                  setSelected(i === 0 ? null : s.id);
                  // On mobile the row scrolls sideways, so bring a partly hidden tab fully into view.
                  e.currentTarget.scrollIntoView({ inline: "center", block: "nearest" });
                }}
                className={`shrink-0 whitespace-nowrap rounded-full font-body text-[17px] transition-[background-color,color,padding] duration-300 lg:text-[max(calc(22*var(--u)),var(--text-min))] ${
                  active
                    ? "h-[48px] bg-maroon-dark px-[16px] text-white sm:px-[30px] lg:h-[calc(60*var(--u))] lg:px-[calc(54*var(--u))]"
                    : "h-[48px] px-[16px] text-ink-soft transition-colors hover:text-gold lg:h-[calc(60*var(--u))] lg:px-[calc(31*var(--u))]"
                }`}
              >
                {s.tab}
              </button>
            </Fragment>
          );
        })}
      </div>

      <div className="mx-auto mt-[44px] flex max-w-[1920px] flex-col gap-14 px-5 md:px-8 lg:mt-[calc(53*var(--u))] lg:gap-[calc(50*var(--u))] lg:px-0">
        {visible.map((section, i) => (
          <MenuRow key={section.id} section={section} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
