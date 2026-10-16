import Image from "next/image";
import { site, type SectionProps, type VeloraHighlightsData } from "@/data";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

export default function Highlights({ data = site.highlightsSection }: SectionProps<VeloraHighlightsData>) {
  const { items } = data;

  return (
    <section aria-label={`Why choose ${site.navbar.brand.name}`} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-0">
      <div className="grid gap-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[calc(963*var(--u))_1fr] lg:gap-0">
        {items.map((item, i) => {
          const Icon = featureIcons[item.icon as FeatureIconName];
          return (
            <article
              key={item.title}
              className={`flex flex-col items-center ${i === 0 ? "lg:items-start lg:upl-250" : "sm:mt-[60px] lg:items-start lg:umt-88 lg:upl-0"}`}
            >
              {/* top padding = how far the gold ring sticks out above the photo (4.4% of its width) */}
              <div className="flex flex-col items-center pt-[min(3.35vw,13.2px)] sm:pt-[min(1.76vw,13.2px)] lg:upt-21">
                <div className="relative w-[min(76vw,300px)] sm:w-[min(40vw,300px)] lg:uw-470">
                  {/* thin gold ring around the photo */}
                  <span aria-hidden="true" className="absolute -inset-[3.6%] translate-x-[1.2%] -translate-y-[0.8%] rounded-full border-[1.5px] border-gold-line" />
                  <div className="relative aspect-square overflow-hidden rounded-full">
                    <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 76vw" className="scale-[1.02] object-cover" />
                  </div>
                  <span className="absolute -left-[1.7%] top-[3.6%] grid aspect-square w-[31%] place-items-center rounded-full border-[5px] border-cream bg-maroon text-gold-bright shadow-[0_6px_16px_rgba(0,0,0,0.14)] lg:border-[calc(6*var(--u))]">
                    <Icon className="w-[62%]" />
                  </span>
                </div>
                <h3 className="mt-[26px] text-center font-cormorant text-[30px] font-semibold uppercase leading-none tracking-[0.035em] text-wine sm:text-[34px] lg:umt-17 lg:ut-50">
                  {item.title}
                </h3>
                <span aria-hidden="true" className="mt-[16px] flex w-[56px] flex-col gap-[4px] lg:umt-22 lg:uw-66">
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
