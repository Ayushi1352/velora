"use client";

import type { ComponentType, ReactNode, SVGProps } from "react";
import FormThankYou from "@/components/FormThankYou";
import useDummySubmit from "@/components/useDummySubmit";
import { ArrowRight, CalendarSmall, ChatBubble, ChevronDown, Clock, Envelope, Guests, PhoneLine, User } from "@/components/Icons";

type FormData = {
  title: string;
  text: string;
  fields: Record<"name" | "email" | "phone" | "guests" | "date" | "time" | "message", string>;
  guestOptions: string[];
  timeOptions: string[];
  button: string;
  sending: string;
  successTitle: string;
  success: string;
};

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const box =
  "relative flex h-[60px] items-center rounded-[4px] border border-line bg-white transition-colors focus-within:border-gold-soft lg:h-[calc(72*var(--u))]";
const control =
  "h-full w-full bg-transparent pl-[52px] pr-[16px] font-jost text-[16px] text-ink outline-none placeholder:text-body lg:pl-[calc(68*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]";
const iconClass = "pointer-events-none absolute left-[18px] size-[20px] text-muted lg:left-[calc(30*var(--u))] lg:size-[calc(27*var(--u))]";

function Field({ icon: Icon, children }: { icon: Icon; children: ReactNode }) {
  return (
    <label className={box}>
      <Icon className={iconClass} />
      {children}
    </label>
  );
}

function SelectField({ icon, name, placeholder, options }: { icon: Icon; name: string; placeholder: string; options: string[] }) {
  return (
    <Field icon={icon}>
      <select name={name} required defaultValue="" aria-label={placeholder} className={`${control} appearance-none pr-[44px] invalid:text-body`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-[18px] size-[18px] text-gold lg:right-[calc(24*var(--u))] lg:size-[calc(20*var(--u))]" />
    </Field>
  );
}

export default function ReservationForm({ form }: { form: FormData }) {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  return (
    <div data-reveal="right" data-delay="2" className="rounded-[12px] bg-cream px-5 py-8 sm:px-8 lg:pb-[calc(44*var(--u))] lg:pl-[calc(41*var(--u))] lg:pr-[calc(41*var(--u))] lg:pt-[calc(48*var(--u))]">
      <h2 className="font-serif text-[34px] font-medium leading-tight text-wine lg:text-[max(calc(48*var(--u)),var(--text-min))]">{form.title}</h2>
      <span aria-hidden="true" data-reveal="line" data-delay="5" className="mt-[12px] block h-[2px] w-[60px] origin-left bg-gold-soft lg:mt-[calc(14*var(--u))] lg:w-[calc(72*var(--u))]" />
      <p className="mt-[16px] max-w-[640px] font-body text-[17px] leading-[1.3] text-body lg:mt-[calc(22*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]">{form.text}</p>

      {showThanks ? (
        <FormThankYou title={form.successTitle} message={form.success} name={name} hiding={hiding} onClose={dismiss} />
      ) : (
        <form onSubmit={onSubmit} aria-busy={status === "sending"} className="mt-[24px] grid gap-[16px] sm:grid-cols-2 lg:mt-[calc(28*var(--u))] lg:gap-x-[calc(24*var(--u))] lg:gap-y-[calc(23*var(--u))]">
          <Field icon={User}>
            <input type="text" name="name" required autoComplete="name" placeholder={fields.name} aria-label={fields.name} className={control} />
          </Field>
          <Field icon={Envelope}>
            <input type="email" name="email" required autoComplete="email" placeholder={fields.email} aria-label={fields.email} className={control} />
          </Field>
          <Field icon={PhoneLine}>
            <input type="tel" name="phone" required autoComplete="tel" placeholder={fields.phone} aria-label={fields.phone} className={control} />
          </Field>
          <SelectField icon={Guests} name="guests" placeholder={fields.guests} options={form.guestOptions} />
          <Field icon={CalendarSmall}>
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
            <ChevronDown className="pointer-events-none absolute right-[18px] size-[18px] text-gold lg:right-[calc(24*var(--u))] lg:size-[calc(20*var(--u))]" />
          </Field>
          <SelectField icon={Clock} name="time" placeholder={fields.time} options={form.timeOptions} />
          <label className={`${box} h-[140px] items-start sm:col-span-2 lg:h-[calc(165*var(--u))]`}>
            <ChatBubble className={`${iconClass} top-[20px] lg:top-[calc(26*var(--u))]`} />
            <textarea name="message" placeholder={fields.message} aria-label={fields.message} className={`${control} resize-none pt-[18px] lg:pt-[calc(24*var(--u))]`} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-[4px] flex h-[62px] items-center justify-center gap-[14px] rounded-[2px] bg-[linear-gradient(180deg,var(--color-wine),var(--color-maroon))] font-jost text-[18px] font-medium text-white shadow-[0_8px_18px_rgba(115,12,21,0.25)] transition-colors hover:bg-none hover:bg-gold disabled:opacity-80 sm:col-span-2 lg:h-[calc(77*var(--u))] lg:mt-0 lg:gap-[calc(16*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]"
          >
            {status === "sending" ? form.sending : form.button}
            {status === "sending" ? (
              <span aria-hidden="true" className="size-[18px] animate-spin rounded-full border-2 border-white/40 border-t-white" />
            ) : (
              <ArrowRight className="size-[18px] lg:size-[calc(20*var(--u))]" />
            )}
          </button>
        </form>
      )}
    </div>
  );
}
