import Image from "next/image";
import { site, type SectionProps, type VeloraServicesData } from "@/data";
import { SectionLabel } from "@/components/SectionHeading";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

export default function Services({ data: services = site.servicesSection }: SectionProps<VeloraServicesData>) {
  const { main, top, bottom } = services.images;

  return (
    <section aria-label={services.label} className="bg-cream">
      <div className="mx-auto grid max-w-[1920px] gap-12 lg:grid-cols-[calc(760*var(--u))_1fr] lg:gap-0">
        {/* Copy + services list */}
        <div className="section-space px-5 md:px-8 lg:px-0 lg:upl-116">
          <SectionLabel variant="serif" align="left" className="font-body! font-normal! text-body!" lineClassName="w-[44px] lg:uw-65">
            {services.label}
          </SectionLabel>
          <h2 className="mt-[14px] font-serif text-[46px] font-medium leading-[1.06] tracking-[-0.02em] text-wine sm:text-[58px] lg:umt-16 lg:ut-79">
            {services.titleLine1}
            <br />
            <span className="font-normal italic text-gold">{services.titleLine2}</span>
          </h2>
          <p className="mt-[18px] max-w-[580px] font-body text-[17px] leading-[1.6] text-body lg:umaxw-570 lg:umt-22 lg:ut-21">
            {services.text}
          </p>

          <ul className="mt-[34px] flex flex-col gap-[28px] lg:umt-46 lg:ugap-46">
            {services.items.map((item) => {
              const Icon = featureIcons[item.icon as FeatureIconName];
              return (
                <li key={item.title} className="group flex items-center gap-[18px] lg:ugap-0">
                  <span className="grid size-[78px] shrink-0 place-items-center rounded-full border border-gold-line text-wine transition-colors group-hover:border-maroon group-hover:bg-maroon group-hover:text-white lg:usize-102">
                    <Icon className="w-[50%]" />
                  </span>
                  <span aria-hidden="true" className="hidden h-px w-[22px] shrink-0 bg-gold-line sm:block lg:uw-32 lg:uml-20" />
                  <div className="border-l border-gold-line pl-[18px] lg:upl-36 lg:upy-2">
                    <h3 className="font-serif text-[23px] font-medium leading-tight text-wine lg:ut-28.5">{item.title}</h3>
                    <p className="mt-[4px] max-w-[360px] font-body text-[16px] leading-[1.55] text-body lg:umaxw-360 lg:umt-6 lg:ut-19.5">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image collage; bottom padding is the section space minus the 25u it is lifted by */}
        <div className="grid grid-cols-2 gap-[12px] px-5 section-pb md:px-8 lg:grid-cols-[calc(495*var(--u))_1fr] lg:ugap-19 lg:px-0 lg:pt-0 lg:pb-[calc(var(--section-space)-25*var(--u))] lg:-translate-y-[calc(25*var(--u))]">
          <div className="relative col-span-2 aspect-[495/723] overflow-hidden sm:col-span-1 sm:row-span-2 lg:aspect-auto lg:uh-723 lg:umt-392">
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[414/486] overflow-hidden lg:aspect-auto lg:uh-486">
            <Image src={top.src} alt={top.alt} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[414/611] overflow-hidden lg:aspect-auto lg:uh-611">
            <Image src={bottom.src} alt={bottom.alt} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
