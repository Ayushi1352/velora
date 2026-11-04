import { Fragment } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionHeading";
import type { CompanyData, GlobalUIData, LocationsData } from "@/types/templates.types";

const mapUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const Locations = ({ data: locations, company: contact, ui }: { data?: LocationsData; company?: CompanyData; ui?: GlobalUIData }) => {
  if (!locations || !contact) return null;
  // The main office uses common.company (also shown in the footer).
  const items = locations.items.map((loc) =>
    loc.isMain
      ? { city: loc.city, address: contact.address, phone: contact.phone, email: contact.email, mapQuery: contact.mapQuery }
      : { city: loc.city, address: loc.address ?? [], phone: loc.phone ?? "", email: loc.email ?? "", mapQuery: loc.mapQuery ?? "" },
  );
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=16&output=embed`;

  return (
    <section aria-label={locations.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(80*var(--u))]">
      <SectionLabel variant="sans-wide" align="left" className="!font-ui !font-medium !tracking-[0.3em] lg:!text-[max(calc(19*var(--u)),var(--text-min))]" lineClassName="w-[50px] lg:w-[calc(64*var(--u))]">
        {locations.label}
      </SectionLabel>
      <h2 data-reveal="up" data-delay="1" className="mt-[8px] font-heading text-[clamp(26px,8.5vw,40px)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-wine)] sm:text-[56px] lg:mt-[calc(6*var(--u))] lg:text-[max(calc(72*var(--u)),var(--text-min))]">
        {locations.titleLine1} <span className="font-normal italic text-[var(--color-gold)]">{locations.titleLine2}</span>
      </h2>

      <ul className="mt-[20px] border-t border-[var(--color-line)] lg:mt-[calc(16*var(--u))]">
        {items.map((loc, i) => (
          <li
            key={loc.city}
            data-reveal="up"
            data-delay={i + 1}
            className="grid items-center gap-4 border-b border-[var(--color-line)] py-[24px] sm:grid-cols-2 lg:grid-cols-[calc(421*var(--u))_calc(464*var(--u))_1fr_auto] lg:gap-0 lg:h-[calc(123*var(--u))] lg:py-0"
          >
            <h3 className="font-heading text-[30px] leading-none text-[var(--color-ink)] lg:text-[max(calc(46*var(--u)),var(--text-min))]">{loc.city}</h3>
            <p className="font-ui text-[16px] leading-[1.55] text-[var(--color-body)] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
              {loc.address.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
            <p className="font-ui text-[16px] leading-[1.55] text-[var(--color-body)] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
              <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-[var(--color-gold)]">
                {loc.phone}
              </a>
              <br />
              <a href={`mailto:${loc.email}`} className="transition-colors hover:text-[var(--color-gold)]">
                {loc.email}
              </a>
            </p>
            <a
              href={mapUrl(loc.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[22px] font-ui text-[15px] font-semibold uppercase tracking-[0.02em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold)] lg:gap-[calc(31*var(--u))] lg:pr-[calc(10*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]"
            >
              <span className="grid size-[56px] place-items-center rounded-full border-[1.5px] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] transition-colors group-hover:border-[var(--color-maroon)] group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-white)] lg:size-[calc(68*var(--u))]">
                <Icon name="HiOutlineArrowUpRight" strokeWidth={1.8} className="size-[28px] lg:size-[calc(34*var(--u))]" />
              </span>
              {locations.directionLabel}
            </a>
          </li>
        ))}
      </ul>

      <div data-reveal="up" data-delay="2" className="mt-[40px] overflow-hidden rounded-[12px] lg:mt-[calc(47*var(--u))] lg:-mx-[calc(7*var(--u))]">
        <iframe
          src={mapEmbed}
          title={ui?.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[320px] w-full border-0 lg:h-[calc(378*var(--u))]"
        />
      </div>
    </section>
  );
};
