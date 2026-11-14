"use client";

import { FormThankYou } from "@/components/ui/FormThankYou";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { btnFrame } from "@/components/ui/BookButton";
import Image from "next/image";
import type { ContactFormFields, ContactFormProps } from "@/types/templates.types";

// The single-line height is kept separate so the message box can set its own height (no two h-* on one element).
const box = "relative flex rounded-[4px] border border-[var(--color-line)] bg-[var(--color-white)] transition-colors focus-within:border-[var(--color-gold-soft)]";
const row = "h-[60px] items-center lg:h-[calc(74*var(--u))]";
const control =
  "h-full w-full bg-transparent px-[20px] font-ui text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-body)] lg:px-[calc(26*var(--u))] lg:text-[max(calc(20.5*var(--u)),var(--text-min))]";

const MessageForm = ({ form, closeLabel }: { form: ContactFormFields; closeLabel: string }) => {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  if (showThanks) {
    return <FormThankYou title={form.successTitle} message={form.success} closeLabel={closeLabel} name={name} hiding={hiding} onClose={dismiss} />;
  }

  return (
    <form onSubmit={onSubmit} aria-busy={status === "sending"} className="mt-[22px] grid gap-[16px] sm:grid-cols-2 lg:mt-[calc(32*var(--u))] lg:gap-x-[calc(21*var(--u))] lg:gap-y-[calc(19*var(--u))]">
      <label className={`${box} ${row}`}>
        <input type="text" name="name" required autoComplete="name" placeholder={fields.name} aria-label={fields.name} className={control} />
      </label>
      <label className={`${box} ${row}`}>
        <input type="email" name="email" required autoComplete="email" placeholder={fields.email} aria-label={fields.email} className={control} />
      </label>
      <label className={`${box} ${row}`}>
        <input type="tel" name="phone" autoComplete="tel" placeholder={fields.phone} aria-label={fields.phone} className={control} />
      </label>
      <label className={`${box} ${row}`}>
        <select name="subject" required defaultValue="" aria-label={fields.subject} className={`${control} appearance-none pr-[48px] invalid:text-[var(--color-body)]`}>
          <option value="" disabled>
            {fields.subject}
          </option>
          {form.subjects.map((s) => (
            <option key={s} value={s} className="text-[var(--color-ink)]">
              {s}
            </option>
          ))}
        </select>
        <Icon name="HiOutlineChevronDown" strokeWidth={2} className="pointer-events-none absolute right-[22px] size-[18px] text-[var(--color-gold)] lg:right-[calc(30*var(--u))] lg:size-[calc(20*var(--u))]" />
      </label>
      <label className={`${box} h-[150px] items-start sm:col-span-2 lg:h-[calc(175*var(--u))]`}>
        <textarea name="message" required placeholder={fields.message} aria-label={fields.message} className={`${control} resize-none pt-[18px] lg:pt-[calc(24*var(--u))]`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${btnFrame} inline-flex h-[54px] items-center gap-[12px] bg-[var(--color-maroon-dark)] px-[30px] font-accent text-[18px] text-[var(--color-white)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-white)] disabled:opacity-80 lg:h-[calc(58*var(--u))] lg:px-[calc(31*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]`}
        >
          {status === "sending" ? form.sending : form.button}
          {status === "sending" ? (
            <span aria-hidden="true" className="size-[16px] animate-spin rounded-full border-2 border-[var(--color-white-40)] border-t-[var(--color-white)]" />
          ) : (
            <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-[16px]" />
          )}
        </button>
      </div>
    </form>
  );
};

export const ContactForm = ({ data }: ContactFormProps) => {
  if (!data) return null;
  const { form, special } = data;

  return (
    <section aria-label={form.title} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(65*var(--u))]">
      <div data-reveal="up" className="grid gap-8 rounded-[12px] bg-[var(--color-cream)] p-5 sm:p-8 lg:grid-cols-[1fr_calc(598*var(--u))] lg:gap-0 lg:p-0 lg:pr-[calc(23*var(--u))] lg:py-[calc(10*var(--u))]">
        <div className="lg:pb-[calc(34*var(--u))] lg:pl-[calc(40*var(--u))] lg:pr-[calc(50*var(--u))] lg:pt-[calc(62*var(--u))]">
          <h2 data-reveal="up" data-delay="2" className="font-heading text-[32px] font-medium leading-tight text-[var(--color-wine)] lg:text-[max(calc(43*var(--u)),var(--text-min))]">{form.title}</h2>
          <span aria-hidden="true" data-reveal="line" data-delay="4" className="mt-[12px] block h-[2px] w-[60px] origin-left bg-[var(--color-gold-soft)] lg:mt-[calc(16*var(--u))] lg:w-[calc(72*var(--u))]" />
          <p data-reveal="up" data-delay="3" className="mt-[16px] font-body text-[17px] text-[var(--color-body)] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(21.5*var(--u)),var(--text-min))]">{form.text}</p>
          <MessageForm form={form} closeLabel={data.closeMessageLabel} />
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
