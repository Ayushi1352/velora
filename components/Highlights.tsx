import Image from "next/image";
import { label, site } from "@/data";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

const data = site.highlightsSection;

export default function Highlights() {
  const { items } = data;

  return (
    <section aria-label={label("whyChoose", { brand: site.navbar.brand.name })} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-0">
      <div className="grid gap-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[calc(963*var(--u))_1fr] lg:gap-0">
        {items.map((item, i) => {
          const Icon = featureIcons[item.icon as FeatureIconName];
          // The second card follows the first one in.
          const d = i * 3;
          return (
            <article
              key={item.title}
              className={`group flex flex-col items-center ${i === 0 ? "lg:items-start lg:pl-[calc(250*var(--u))]" : "sm:mt-[60px] lg:items-start lg:mt-[calc(88*var(--u))] lg:pl-0"}`}
            >
              {/* top padding = how far the gold ring sticks out above the photo (4.4% of its width) */}
              <div className="flex flex-col items-center pt-[min(3.35vw,13.2px)] sm:pt-[min(1.76vw,13.2px)] lg:pt-[calc(21*var(--u))]">
                <div className="relative w-[min(76vw,300px)] sm:w-[min(40vw,300px)] lg:w-[calc(470*var(--u))]">
                  {/* thin gold ring around the photo */}
                  <span aria-hidden="true" data-reveal="spin" data-delay={d + 1} className="absolute -inset-[3.6%] translate-x-[1.2%] -translate-y-[0.8%] rounded-full border-[1.5px] border-gold-line" />
                  <div data-reveal="zoom" data-delay={d || undefined} className="relative aspect-square overflow-hidden rounded-full">
                    <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 76vw" className="scale-[1.02] object-cover transition-[scale] duration-700 group-hover:scale-110" />
                  </div>
                  <span data-reveal="pop" data-delay={d + 4} className="absolute -left-[1.7%] top-[3.6%] grid aspect-square w-[31%] place-items-center rounded-full border-[5px] border-cream bg-maroon text-gold-bright shadow-[0_6px_16px_rgba(0,0,0,0.14)] lg:border-[calc(6*var(--u))]">
                    <Icon className="w-[62%]" />
                  </span>
                </div>
                <h3 data-reveal="up" data-delay={d + 3} className="mt-[26px] text-center font-cormorant text-[30px] font-semibold uppercase leading-none tracking-[0.035em] text-wine sm:text-[34px] lg:mt-[calc(17*var(--u))] lg:text-[max(calc(50*var(--u)),var(--text-min))]">
                  {item.title}
                </h3>
                <span aria-hidden="true" data-reveal="line" data-delay={d + 5} className="mt-[16px] flex w-[56px] flex-col gap-[4px] lg:mt-[calc(22*var(--u))] lg:w-[calc(66*var(--u))]">
                  <span className="h-[2px] bg-gold-soft" />
                  <span className="h-[2px] bg-gold-soft" />
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
