"use client";

import { FormThankYou } from "@/components/ui/FormThankYou";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { btnFrame } from "@/components/ui/BookButton";
import type { ContactFormFields, GlobalUIData } from "@/types/templates.types";

// The single-line height is kept separate so the message box can set its own height (no two h-* on one element).
const box = "relative flex rounded-[4px] border border-[var(--color-line)] bg-[var(--color-white)] transition-colors focus-within:border-[var(--color-gold-soft)]";
const row = "h-[60px] items-center lg:h-[calc(74*var(--u))]";
const control =
  "h-full w-full bg-transparent px-[20px] font-ui text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-body)] lg:px-[calc(26*var(--u))] lg:text-[max(calc(20.5*var(--u)),var(--text-min))]";

export const MessageForm = ({ form, ui }: { form: ContactFormFields; ui?: GlobalUIData }) => {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  if (showThanks) {
    return <FormThankYou title={form.successTitle} message={form.success} closeLabel={ui?.closeMessage} name={name} hiding={hiding} onClose={dismiss} />;
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
