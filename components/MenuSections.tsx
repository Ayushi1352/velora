"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { SectionLabel } from "@/components/SectionHeading";

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
        className={`relative overflow-hidden ${reverse ? "lg:order-1" : "lg:order-2"}`}
        style={{ aspectRatio: `${section.image.width} / ${section.image.height}` }}
      >
        <Image src={section.image.src} alt={section.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className={`${reverse ? "lg:order-2 lg:upl-71 lg:upr-76" : "lg:order-1 lg:upl-85 lg:upr-65"}`}>
        <SectionLabel align="left" lineClassName="w-[44px] lg:uw-61">
          {section.label}
        </SectionLabel>
        <h2 className="mt-[14px] font-serif text-[38px] font-medium leading-[1.12] tracking-[-0.015em] text-wine sm:text-[46px] lg:umt-22 lg:ut-65">
          {section.titleLine1}
          <br />
          <span className="font-normal italic text-gold">{section.titleLine2}</span>
        </h2>
        <p className="mt-[12px] max-w-[580px] font-body text-[18px] leading-[1.5] text-body lg:umaxw-560 lg:umt-10 lg:ut-23">{section.text}</p>

        <ul className="mt-[26px] lg:umt-44">
          {section.items.map((item, i) => (
            <Fragment key={item.name}>
              {i > 0 && <li aria-hidden="true" className="dashed-line my-[14px] h-px lg:umb-12 lg:umt-10" />}
              <li>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-[21px] font-medium leading-tight text-wine lg:ut-25.5">{item.name}</h3>
                  <span className="shrink-0 font-serif text-[21px] font-medium text-gold lg:ut-25.5">{item.price}</span>
                </div>
                <p className="mt-[4px] font-body text-[15px] leading-snug text-body lg:umt-2 lg:ut-18.5">{item.description}</p>
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
        aria-label="Menu categories"
        className="mx-auto mt-[30px] flex max-w-full flex-wrap items-center justify-center gap-y-3 px-5 lg:umt-34"
      >
        {sections.map((s, i) => {
          const active = s.id === activeTab;
          return (
            <Fragment key={s.id}>
              {i > 0 && <span aria-hidden="true" className="mx-[14px] hidden h-[36px] w-[2px] bg-gold-line sm:block lg:uh-45 lg:umx-38" />}
              <button
                type="button"
                role="tab"
                aria-selected={active}
                // The first tab is the default overview, so it brings all featured sections back.
                onClick={() => setSelected(i === 0 ? null : s.id)}
                className={`rounded-full font-body text-[17px] transition-colors lg:ut-22 ${
                  active
                    ? "h-[48px] bg-maroon-dark px-[30px] text-white lg:uh-60 lg:upx-54"
                    : "h-[48px] px-[16px] text-ink-soft transition-colors hover:text-gold lg:uh-60 lg:upx-31"
                }`}
              >
                {s.tab}
              </button>
            </Fragment>
          );
        })}
      </div>

      <div className="mx-auto mt-[44px] flex max-w-[1920px] flex-col gap-14 px-5 md:px-8 lg:umt-53 lg:ugap-50 lg:px-0">
        {visible.map((section, i) => (
          <MenuRow key={section.id} section={section} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
