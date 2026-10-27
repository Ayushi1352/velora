import Image from "next/image";
import { site } from "@/data";
import { SectionLabel } from "@/components/SectionHeading";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

const services = site.servicesSection;

export default function Services() {
  const { main, top, bottom } = services.images;

  return (
    <section aria-label={services.label} className="bg-cream">
      <div className="mx-auto grid max-w-[1920px] gap-12 lg:grid-cols-[calc(760*var(--u))_1fr] lg:gap-0">
        {/* Copy + services list */}
        <div className="py-(--section-space) px-5 md:px-8 lg:px-0 lg:pl-[calc(116*var(--u))]">
          <SectionLabel variant="serif" align="left" className="font-body! font-normal!" colorClassName="text-body" lineClassName="w-[44px] lg:w-[calc(65*var(--u))]">
            {services.label}
          </SectionLabel>
          <h2 data-reveal="up" data-delay="1" className="mt-[14px] font-serif text-[46px] font-medium leading-[1.06] tracking-[-0.02em] text-wine sm:text-[58px] lg:mt-[calc(16*var(--u))] lg:text-[max(calc(79*var(--u)),var(--text-min))]">
            {services.titleLine1}
            <br />
            <span className="font-normal italic text-gold">{services.titleLine2}</span>
          </h2>
          <p data-reveal="up" data-delay="2" className="mt-[18px] max-w-[580px] font-body text-[17px] leading-[1.6] text-body lg:max-w-[calc(570*var(--u))] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
            {services.text}
          </p>

          <ul className="mt-[34px] flex flex-col gap-[28px] lg:mt-[calc(46*var(--u))] lg:gap-[calc(46*var(--u))]">
            {services.items.map((item, i) => {
              const Icon = featureIcons[item.icon as FeatureIconName];
              return (
                <li key={item.title} data-reveal="left" data-delay={i * 2 + 3} className="group flex items-center gap-[18px] lg:gap-0">
                  <span className="grid size-[78px] shrink-0 place-items-center rounded-full border border-gold-line text-wine transition-[background-color,border-color,color,scale] duration-300 group-hover:scale-110 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white lg:size-[calc(102*var(--u))]">
                    <Icon className="w-[50%]" />
                  </span>
                  <span aria-hidden="true" className="hidden h-px w-[22px] shrink-0 bg-gold-line sm:block lg:w-[calc(32*var(--u))] lg:ml-[calc(20*var(--u))]" />
                  <div className="border-l border-gold-line pl-[18px] lg:pl-[calc(36*var(--u))] lg:py-[calc(2*var(--u))]">
                    <h3 className="font-serif text-[23px] font-medium leading-tight text-wine lg:text-[max(calc(28.5*var(--u)),var(--text-min))]">{item.title}</h3>
                    <p className="mt-[4px] max-w-[360px] font-body text-[16px] leading-[1.55] text-body lg:max-w-[calc(360*var(--u))] lg:mt-[calc(6*var(--u))] lg:text-[max(calc(19.5*var(--u)),var(--text-min))]">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image collage; bottom padding is the section space minus the 25u it is lifted by */}
        <div className="grid grid-cols-2 gap-[12px] px-5 pb-(--section-space) md:px-8 lg:grid-cols-[calc(495*var(--u))_1fr] lg:gap-[calc(19*var(--u))] lg:px-0 lg:pt-0 lg:pb-[calc(var(--section-space)-25*var(--u))] lg:-translate-y-[calc(25*var(--u))]">
          <div data-reveal="mask-up" data-delay="2" className="relative col-span-2 aspect-[495/723] overflow-hidden sm:col-span-1 sm:row-span-2 lg:aspect-auto lg:h-[calc(723*var(--u))] lg:mt-[calc(392*var(--u))]">
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <div data-reveal="mask-down" data-delay="3" className="relative aspect-[414/486] overflow-hidden lg:aspect-auto lg:h-[calc(486*var(--u))]">
            <Image src={top.src} alt={top.alt} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
          </div>
          <div data-reveal="mask-up" data-delay="5" className="relative aspect-[414/611] overflow-hidden lg:aspect-auto lg:h-[calc(611*var(--u))]">
            <Image src={bottom.src} alt={bottom.alt} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
