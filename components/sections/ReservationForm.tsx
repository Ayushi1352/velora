"use client";

import type { ReactNode } from "react";
import { FormThankYou } from "@/components/ui/FormThankYou";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import type { BookingFormData, GlobalUIData } from "@/types/templates.types";

const box =
  "relative flex rounded-[4px] border border-[var(--color-line)] bg-[var(--color-white)] transition-colors focus-within:border-[var(--color-gold-soft)]";
// The single-line height is kept separate so the message box can set its own height (no two h-* on one element).
const row = "h-[60px] items-center lg:h-[calc(72*var(--u))]";
const control =
  "h-full w-full bg-transparent pl-[52px] pr-[16px] font-ui text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-body)] lg:pl-[calc(68*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]";
const iconClass = "pointer-events-none absolute left-[18px] size-[20px] text-[var(--color-muted)] lg:left-[calc(30*var(--u))] lg:size-[calc(27*var(--u))]";

function Field({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <label className={`${box} ${row}`}>
      <Icon name={icon} className={iconClass} />
      {children}
    </label>
  );
}

function SelectField({ icon, name, placeholder, options }: { icon: string; name: string; placeholder: string; options: string[] }) {
  return (
    <Field icon={icon}>
      <select name={name} required defaultValue="" aria-label={placeholder} className={`${control} appearance-none !pr-[44px] invalid:text-[var(--color-body)]`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[var(--color-ink)]">
            {o}
          </option>
        ))}
      </select>
      <Icon name="HiOutlineChevronDown" strokeWidth={2} className="pointer-events-none absolute right-[18px] size-[18px] text-[var(--color-gold)] lg:right-[calc(24*var(--u))] lg:size-[calc(20*var(--u))]" />
    </Field>
  );
}

export const ReservationForm = ({ form, ui }: { form: BookingFormData; ui?: GlobalUIData }) => {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  return (
    <div data-reveal="right" data-delay="2" className="rounded-[12px] bg-[var(--color-cream)] px-5 py-8 sm:px-8 lg:pb-[calc(44*var(--u))] lg:pl-[calc(41*var(--u))] lg:pr-[calc(41*var(--u))] lg:pt-[calc(48*var(--u))]">
      <h2 className="font-heading text-[34px] font-medium leading-tight text-[var(--color-wine)] lg:text-[max(calc(48*var(--u)),var(--text-min))]">{form.title}</h2>
      <span aria-hidden="true" data-reveal="line" data-delay="5" className="mt-[12px] block h-[2px] w-[60px] origin-left bg-[var(--color-gold-soft)] lg:mt-[calc(14*var(--u))] lg:w-[calc(72*var(--u))]" />
      <p className="mt-[16px] max-w-[640px] font-body text-[17px] leading-[1.3] text-[var(--color-body)] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]">{form.text}</p>

      {showThanks ? (
        <FormThankYou title={form.successTitle} message={form.success} closeLabel={ui?.closeMessage} name={name} hiding={hiding} onClose={dismiss} />
      ) : (
        <form onSubmit={onSubmit} aria-busy={status === "sending"} className="mt-[24px] grid gap-[16px] sm:grid-cols-2 lg:mt-[calc(28*var(--u))] lg:gap-x-[calc(24*var(--u))] lg:gap-y-[calc(23*var(--u))]">
          <Field icon="HiOutlineUser">
            <input type="text" name="name" required autoComplete="name" placeholder={fields.name} aria-label={fields.name} className={control} />
          </Field>
          <Field icon="HiOutlineEnvelope">
            <input type="email" name="email" required autoComplete="email" placeholder={fields.email} aria-label={fields.email} className={control} />
          </Field>
          <Field icon="HiOutlinePhone">
            <input type="tel" name="phone" required autoComplete="tel" placeholder={fields.phone} aria-label={fields.phone} className={control} />
          </Field>
          <SelectField icon="HiOutlineUsers" name="guests" placeholder={fields.guests} options={form.guestOptions} />
          <Field icon="HiOutlineCalendarDays">
            <input
              type="text"
              name="date"
              required
              placeholder={fields.date}
              aria-label={fields.date}
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => {
                if (!e.currentTarget.value) e.currentTarget.type = "text";
              }}
              className={control}
            />
            <Icon name="HiOutlineChevronDown" strokeWidth={2} className="pointer-events-none absolute right-[18px] size-[18px] text-[var(--color-gold)] lg:right-[calc(24*var(--u))] lg:size-[calc(20*var(--u))]" />
          </Field>
          <SelectField icon="FaRegClock" name="time" placeholder={fields.time} options={form.timeOptions} />
          <label className={`${box} h-[140px] items-start sm:col-span-2 lg:h-[calc(165*var(--u))]`}>
            <Icon name="HiOutlineChatBubbleLeftEllipsis" className={`${iconClass} top-[20px] lg:top-[calc(26*var(--u))]`} />
            <textarea name="message" placeholder={fields.message} aria-label={fields.message} className={`${control} resize-none pt-[18px] lg:pt-[calc(24*var(--u))]`} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-[4px] flex h-[62px] items-center justify-center gap-[14px] rounded-[2px] bg-[linear-gradient(180deg,var(--color-wine),var(--color-maroon))] font-ui text-[18px] font-medium text-[var(--color-white)] shadow-[0_8px_18px_var(--color-shadow-button)] transition-colors hover:bg-none hover:bg-[var(--color-gold)] disabled:opacity-80 sm:col-span-2 lg:h-[calc(77*var(--u))] lg:mt-0 lg:gap-[calc(16*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]"
          >
            {status === "sending" ? form.sending : form.button}
            {status === "sending" ? (
              <span aria-hidden="true" className="size-[18px] animate-spin rounded-full border-2 border-[var(--color-white-40)] border-t-[var(--color-white)]" />
            ) : (
              <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-[18px] lg:size-[calc(20*var(--u))]" />
            )}
          </button>
        </form>
      )}
    </div>
  );
};
