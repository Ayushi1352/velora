"use client";

import FormThankYou from "@/components/FormThankYou";
import useDummySubmit from "@/components/useDummySubmit";
import { ArrowRight, ChevronDown } from "@/components/Icons";
import { btnFrame } from "@/components/BookButton";

type FormData = {
  fields: Record<"name" | "email" | "phone" | "subject" | "message", string>;
  subjects: string[];
  button: string;
  sending: string;
  successTitle: string;
  success: string;
};

const box = "relative flex h-[60px] items-center rounded-[4px] border border-line bg-white transition-colors focus-within:border-gold-soft lg:h-[calc(74*var(--u))]";
const control =
  "h-full w-full bg-transparent px-[20px] font-jost text-[16px] text-ink outline-none placeholder:text-body lg:px-[calc(26*var(--u))] lg:text-[max(calc(20.5*var(--u)),var(--text-min))]";

export default function ContactForm({ form }: { form: FormData }) {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  if (showThanks) {
    return <FormThankYou title={form.successTitle} message={form.success} name={name} hiding={hiding} onClose={dismiss} />;
  }

  return (
    <form onSubmit={onSubmit} aria-busy={status === "sending"} className="mt-[22px] grid gap-[16px] sm:grid-cols-2 lg:mt-[calc(32*var(--u))] lg:gap-x-[calc(21*var(--u))] lg:gap-y-[calc(19*var(--u))]">
      <label className={box}>
        <input type="text" name="name" required autoComplete="name" placeholder={fields.name} aria-label={fields.name} className={control} />
      </label>
      <label className={box}>
        <input type="email" name="email" required autoComplete="email" placeholder={fields.email} aria-label={fields.email} className={control} />
      </label>
      <label className={box}>
        <input type="tel" name="phone" autoComplete="tel" placeholder={fields.phone} aria-label={fields.phone} className={control} />
      </label>
      <label className={box}>
        <select name="subject" required defaultValue="" aria-label={fields.subject} className={`${control} appearance-none pr-[48px] invalid:text-body`}>
          <option value="" disabled>
            {fields.subject}
          </option>
          {form.subjects.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-[22px] size-[18px] text-gold lg:right-[calc(30*var(--u))] lg:size-[calc(20*var(--u))]" />
      </label>
      <label className={`${box} h-[150px] items-start sm:col-span-2 lg:h-[calc(175*var(--u))]`}>
        <textarea name="message" required placeholder={fields.message} aria-label={fields.message} className={`${control} resize-none pt-[18px] lg:pt-[calc(24*var(--u))]`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${btnFrame} inline-flex h-[54px] items-center gap-[12px] bg-maroon-dark px-[30px] font-marcellus text-[18px] text-white transition-colors hover:bg-gold hover:text-white disabled:opacity-80 lg:h-[calc(58*var(--u))] lg:px-[calc(31*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]`}
        >
          {status === "sending" ? form.sending : form.button}
          {status === "sending" ? (
            <span aria-hidden="true" className="size-[16px] animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <ArrowRight className="size-[16px]" />
          )}
        </button>
      </div>
    </form>
  );
}
