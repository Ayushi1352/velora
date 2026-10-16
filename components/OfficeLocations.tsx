import { Fragment } from "react";
import type { SectionComponentProps, VeloraLocationsData } from "@/data";
import { SectionLabel } from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/Icons";

const mapUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default function OfficeLocations({ data: locations, settings }: SectionComponentProps<VeloraLocationsData>) {
  const { contact } = settings;
  // The main office uses the shared `settings.contact` block (also shown in the footer).
  const items = locations.items.map((loc) =>
    loc.isMain
      ? { city: loc.city, address: contact.address, phone: contact.phone, email: contact.email, mapQuery: contact.mapQuery }
      : { city: loc.city, address: loc.address ?? [], phone: loc.phone ?? "", email: loc.email ?? "", mapQuery: loc.mapQuery ?? "" },
  );
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=16&output=embed`;

  return (
    <section aria-label={locations.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(80*var(--u))]">
      <SectionLabel variant="sans-wide" align="left" className="font-jost! font-medium! tracking-[0.3em]! lg:ut-19!" lineClassName="w-[50px] lg:uw-64">
        {locations.label}
      </SectionLabel>
      <h2 className="mt-[8px] font-serif text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-wine sm:text-[56px] lg:umt-6 lg:ut-72">
        {locations.titleLine1} <span className="font-normal italic text-gold">{locations.titleLine2}</span>
      </h2>

      <ul className="mt-[20px] border-t border-line lg:umt-16">
        {items.map((loc) => (
          <li
            key={loc.city}
            className="grid items-center gap-4 border-b border-line py-[24px] sm:grid-cols-2 lg:grid-cols-[calc(421*var(--u))_calc(464*var(--u))_1fr_auto] lg:gap-0 lg:uh-123 lg:py-0"
          >
            <h3 className="font-serif text-[30px] leading-none text-ink lg:ut-46">{loc.city}</h3>
            <p className="font-jost text-[16px] leading-[1.55] text-body lg:ut-21">
              {loc.address.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
            <p className="font-jost text-[16px] leading-[1.55] text-body lg:ut-21">
              <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {loc.phone}
              </a>
              <br />
              <a href={`mailto:${loc.email}`} className="transition-colors hover:text-gold">
                {loc.email}
              </a>
            </p>
            <a
              href={mapUrl(loc.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[22px] font-jost text-[15px] font-semibold uppercase tracking-[0.02em] text-ink transition-colors hover:text-gold lg:ugap-31 lg:upr-10 lg:ut-20"
            >
              <span className="grid size-[56px] place-items-center rounded-full border-[1.5px] border-gold-bright text-gold-bright transition-colors group-hover:border-maroon group-hover:bg-maroon group-hover:text-white lg:usize-68">
                <ArrowUpRight className="size-[28px] lg:usize-34" strokeWidth={1.8} />
              </span>
              {locations.directionLabel}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-[40px] overflow-hidden rounded-[12px] lg:umt-47 lg:-mx-[calc(7*var(--u))]">
        <iframe
          src={mapEmbed}
          title="Our location on the map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[320px] w-full border-0 lg:uh-378"
        />
      </div>
    </section>
  );
}
