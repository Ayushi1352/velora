import Image from "next/image";
import Link from "next/link";
import { site, type SectionProps, type VeloraFoodMenuData } from "@/data";
import BookButton from "@/components/BookButton";
import { SectionLabel } from "@/components/SectionHeading";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

export default function FoodMenu({ data: menu = site.foodMenuSection }: SectionProps<VeloraFoodMenuData>) {
  return (
    <section aria-label={`${menu.label} ${menu.titleLine1} ${menu.titleLine2}`} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-0 lg:upl-55">
      <div className="grid items-start gap-12 lg:grid-cols-[calc(338*var(--u))_1fr] lg:gap-0">
        <div className="text-center lg:upt-76 lg:text-left">
          <SectionLabel variant="sans" align="left" className="justify-center lg:justify-start" lineClassName="w-[44px] lg:uw-59">
            {menu.label}
          </SectionLabel>
          <h2 data-reveal="up" data-delay="1" className="mt-[10px] font-serif text-[78px] font-medium leading-[0.88] tracking-[-0.025em] text-wine sm:text-[96px] lg:umt-12 lg:ut-115">
            {menu.titleLine1}
            <br />
            <span className="text-gold">{menu.titleLine2}</span>
          </h2>
          <span aria-hidden="true" data-reveal="line" data-delay="3" className="mx-auto mt-[24px] block h-[2px] w-[64px] origin-center bg-gold-soft lg:mx-0 lg:origin-left lg:umt-16 lg:uw-75" />
          <p data-reveal="up" data-delay="3" className="mx-auto mt-[20px] max-w-[300px] font-montserrat text-[13px] font-medium uppercase leading-[1.6] tracking-[0.3em] text-ink-soft lg:mx-0 lg:umaxw-300 lg:umt-22 lg:ut-15.5">
            {menu.text}
          </p>
          <BookButton
            data-reveal="up"
            data-delay="4"
            href={menu.button.href}
            label={menu.button.label}
            className="mt-[26px] h-[54px] px-[30px] text-[18px] lg:uh-61 lg:umt-30 lg:upx-40 lg:ut-19"
          />
        </div>

        <ul className="mx-auto grid w-full max-w-[680px] grid-cols-1 gap-x-6 gap-y-20 xs:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-[repeat(4,calc(297*var(--u)))] lg:ugapx-23">
          {menu.categories.map((cat, i) => {
            const Icon = featureIcons[cat.icon as FeatureIconName];
            return (
              <li key={cat.title} data-reveal="up" data-delay={i * 2 + 1} className="mx-auto w-full max-w-[300px] md:max-w-none lg:uw-297">
                <Link
                  href={cat.href}
                  className="group relative mb-[7.5%] flex flex-col items-center rounded-[999px] border-[1.5px] border-gold-line p-[3.4%] pb-[64px] transition-[box-shadow,border-color,translate] duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_18px_40px_rgba(77,0,8,0.12)] lg:upb-69"
                >
                  <div className="relative aspect-[279/379] w-full overflow-hidden rounded-t-[999px] rounded-b-[50%_16%]">
                    <Image
                      src={cat.image.src}
                      alt={cat.image.alt}
                      fill
                      sizes="(min-width: 768px) 18vw, (min-width: 480px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-[20px] whitespace-nowrap font-serif text-[22px] font-medium uppercase leading-none tracking-[-0.01em] text-wine transition-colors group-hover:text-gold lg:umt-28 lg:ut-25">
                    {cat.title}
                  </h3>
                  <span aria-hidden="true" className="mt-[16px] block h-[2px] w-[40px] bg-gold-soft lg:umt-21 lg:uw-44" />
                  <span data-reveal="pop" data-delay={i * 2 + 5} className="absolute bottom-0 left-1/2 grid aspect-square w-[30%] -translate-x-1/2 translate-y-[25%] place-items-center rounded-full bg-maroon text-gold-bright transition-colors duration-300 group-hover:bg-gold group-hover:text-white lg:w-auto lg:usize-88">
                    <Icon className="w-[54%]" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
