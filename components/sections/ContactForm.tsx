import Image from "next/image";
import { MessageForm } from "@/components/sections/MessageForm";
import type { ContactFormData, GlobalUIData } from "@/types/templates.types";

export const ContactForm = ({ data, ui }: { data?: ContactFormData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { form, special } = data;

  return (
    <section aria-label={form.title} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(65*var(--u))]">
      <div data-reveal="up" className="grid gap-8 rounded-[12px] bg-[var(--color-cream)] p-5 sm:p-8 lg:grid-cols-[1fr_calc(598*var(--u))] lg:gap-0 lg:p-0 lg:pr-[calc(23*var(--u))] lg:py-[calc(10*var(--u))]">
        <div className="lg:pb-[calc(34*var(--u))] lg:pl-[calc(40*var(--u))] lg:pr-[calc(50*var(--u))] lg:pt-[calc(62*var(--u))]">
          <h2 data-reveal="up" data-delay="2" className="font-heading text-[32px] font-medium leading-tight text-[var(--color-wine)] lg:text-[max(calc(43*var(--u)),var(--text-min))]">{form.title}</h2>
          <span aria-hidden="true" data-reveal="line" data-delay="4" className="mt-[12px] block h-[2px] w-[60px] origin-left bg-[var(--color-gold-soft)] lg:mt-[calc(16*var(--u))] lg:w-[calc(72*var(--u))]" />
          <p data-reveal="up" data-delay="3" className="mt-[16px] font-body text-[17px] text-[var(--color-body)] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(21.5*var(--u)),var(--text-min))]">{form.text}</p>
          <MessageForm form={form} ui={ui} />
        </div>

        <aside data-reveal="right" data-delay="3" className="flex flex-col overflow-hidden rounded-[10px] bg-[var(--color-sand)]">
          <div className="relative aspect-[598/343] overflow-hidden rounded-[10px]">
            <Image src={special.image.src} alt={special.image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
          </div>
          <div className="m-[24px] border-l-[2px] border-[var(--color-gold-line)] pl-[22px] lg:mb-[calc(40*var(--u))] lg:ml-[calc(32*var(--u))] lg:mr-[calc(30*var(--u))] lg:mt-[calc(50*var(--u))] lg:pl-[calc(30*var(--u))]">
            <h3 className="font-heading text-[26px] font-medium leading-tight text-[var(--color-wine)] lg:text-[max(calc(34*var(--u)),var(--text-min))]">{special.title}</h3>
            <p className="mt-[12px] font-body text-[17px] leading-[1.55] text-[var(--color-body)] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(22.5*var(--u)),var(--text-min))]">{special.text}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
