import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Chef, ChefsProps } from "@/types/templates.types";

/** `delay` staggers the card's scroll reveal (see data-delay in components/ui/ScrollReveal.tsx). */
const ChefCard = ({ chef, delay }: { chef: Chef; delay?: number }) => {
  return (
    <article data-reveal="up" data-delay={delay} className="group flex flex-col overflow-hidden rounded-[16px] border border-[var(--color-gold-pale)] bg-[var(--color-white)] shadow-[0_10px_30px_var(--color-shadow-chef)] transition-[box-shadow,border-color] duration-500 hover:border-[var(--color-gold-line)] hover:shadow-[0_22px_50px_var(--color-shadow-chef-hover)] sm:flex-row lg:h-[calc(515*var(--u))]">
      <div className="relative aspect-[386/515] w-full shrink-0 overflow-hidden rounded-tr-[64px] sm:aspect-auto sm:w-[44%] sm:min-h-[420px] lg:min-h-0 lg:w-[calc(386*var(--u))] lg:rounded-tr-[calc(70*var(--u))]">
        <Image src={chef.image.src} alt={chef.image.alt} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-col px-6 py-8 sm:pl-8 lg:p-0 lg:pl-[calc(42*var(--u))] lg:pr-[calc(24*var(--u))] lg:pt-[calc(68*var(--u))]">
        <h2 className="font-heading text-[34px] font-medium leading-none tracking-[-0.015em] text-[var(--color-wine)] lg:text-[max(calc(46*var(--u)),var(--text-min))]">{chef.name}</h2>
        <p className="mt-[14px] font-body text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-gold)] lg:mt-[calc(8*var(--u))] lg:text-[max(calc(16*var(--u)),var(--text-min))]">{chef.role}</p>
        <span aria-hidden="true" data-reveal="line" data-delay="3" className="mt-[16px] block h-[2px] w-[56px] origin-left bg-[var(--color-gold-soft)] lg:mt-[calc(22*var(--u))] lg:w-[calc(62*var(--u))]" />
        <p className="mt-[18px] font-body text-[17px] leading-[1.6] text-[var(--color-body)] lg:mt-[calc(36*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]">{chef.text}</p>
        <p aria-hidden="true" data-reveal="write" data-delay="5" className="mt-[18px] font-signature text-[52px] leading-none text-[var(--color-ink)] lg:mt-[calc(38*var(--u))] lg:text-[max(calc(54*var(--u)),var(--text-min))]">
          {chef.name}
        </p>
      </div>
    </article>
  );
};

export const Chefs = ({ data }: ChefsProps) => {
  if (!data) return null;
  const { intro, chefs } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(45*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(70*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(44*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(82*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[18px] max-w-[840px] text-[17px] !leading-[1.56] lg:max-w-[calc(840*var(--u))] lg:mt-[calc(11*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]"
      />
      <div className="mt-[40px] grid gap-8 lg:grid-cols-2 lg:mt-[calc(49*var(--u))] lg:gap-x-[calc(43*var(--u))] lg:gap-y-[calc(61*var(--u))]">
        {chefs.map((chef, i) => (
          <ChefCard key={`${chef.name}-${i}`} chef={chef} delay={(i % 2) * 2 + 1} />
        ))}
      </div>
    </section>
  );
};
