import { BookButton } from "@/components/ui/BookButton";
import type { NotFoundData } from "@/types/templates.types";

export const NotFoundSection = ({ data }: { data?: NotFoundData }) => {
  if (!data) return null;
  return (
    <section aria-labelledby="not-found-title" className="mx-auto flex max-w-[1920px] flex-col items-center px-5 py-[var(--section-space)] text-center md:px-8">
      <p data-intro="down" className="font-display text-[min(120px,30vw)] font-semibold leading-none text-[var(--color-gold-pale)] lg:text-[max(calc(200*var(--u)),var(--text-min))]">
        {data.code}
      </p>
      <span aria-hidden="true" data-intro="line" data-delay="2" className="mt-[12px] block h-[2px] w-[64px] bg-[var(--color-gold-soft)] lg:mt-[calc(16*var(--u))] lg:w-[calc(75*var(--u))]" />
      <h1 id="not-found-title" data-intro="up" data-delay="3" className="mt-[20px] font-heading text-[clamp(26px,8.5vw,40px)] font-medium leading-[1.08] tracking-[-0.015em] text-[var(--color-wine)] sm:text-[52px] lg:mt-[calc(26*var(--u))] lg:text-[max(calc(72*var(--u)),var(--text-min))]">
        {data.titleLine1}
        <br />
        <span className="font-normal italic text-[var(--color-gold)]">{data.titleLine2}</span>
      </h1>
      <p data-intro="up" data-delay="4" className="mt-[16px] max-w-[620px] font-body text-[17px] leading-[1.5] text-[var(--color-body)] lg:mt-[calc(18*var(--u))] lg:max-w-[calc(680*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
        {data.text}
      </p>
      <BookButton
        data-intro="up"
        data-delay="6"
        href={data.button.href}
        label={data.button.label}
        className="mt-[28px] h-[54px] px-[30px] text-[18px] lg:mt-[calc(37*var(--u))] lg:h-[calc(61*var(--u))] lg:px-[calc(40*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]"
      />
    </section>
  );
};
