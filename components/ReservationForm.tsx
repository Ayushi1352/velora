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
  "relative flex h-[60px] items-center rounded-[4px] border border-line bg-white transition-colors focus-within:border-gold-soft lg:uh-72";
const control =
  "h-full w-full bg-transparent pl-[52px] pr-[16px] font-jost text-[16px] text-ink outline-none placeholder:text-body lg:upl-68 lg:ut-20";
const iconClass = "pointer-events-none absolute left-[18px] size-[20px] text-muted lg:left-[calc(30*var(--u))] lg:usize-27";

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
      <ChevronDown className="pointer-events-none absolute right-[18px] size-[18px] text-gold lg:right-[calc(24*var(--u))] lg:usize-20" />
    </Field>
  );
}

export default function ReservationForm({ form }: { form: FormData }) {
  const { status, name, onSubmit, dismiss, showThanks, hiding } = useDummySubmit();
  const { fields } = form;

  return (
    <div data-reveal="right" data-delay="2" className="rounded-[12px] bg-cream px-5 py-8 sm:px-8 lg:upb-44 lg:upl-41 lg:upr-41 lg:upt-48">
      <h2 className="font-serif text-[34px] font-medium leading-tight text-wine lg:ut-48">{form.title}</h2>
      <span aria-hidden="true" data-reveal="line" data-delay="5" className="mt-[12px] block h-[2px] w-[60px] origin-left bg-gold-soft lg:umt-14 lg:uw-72" />
      <p className="mt-[16px] max-w-[640px] font-body text-[17px] leading-[1.3] text-body lg:umt-22 lg:ut-23">{form.text}</p>

      {showThanks ? (
        <FormThankYou title={form.successTitle} message={form.success} name={name} hiding={hiding} onClose={dismiss} />
      ) : (
        <form onSubmit={onSubmit} aria-busy={status === "sending"} className="mt-[24px] grid gap-[16px] sm:grid-cols-2 lg:umt-28 lg:ugapx-24 lg:ugapy-23">
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
            <ChevronDown className="pointer-events-none absolute right-[18px] size-[18px] text-gold lg:right-[calc(24*var(--u))] lg:usize-20" />
          </Field>
          <SelectField icon={Clock} name="time" placeholder={fields.time} options={form.timeOptions} />
          <label className={`${box} h-[140px] items-start sm:col-span-2 lg:uh-165`}>
            <ChatBubble className={`${iconClass} top-[20px] lg:top-[calc(26*var(--u))]`} />
            <textarea name="message" placeholder={fields.message} aria-label={fields.message} className={`${control} resize-none pt-[18px] lg:upt-24`} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-[4px] flex h-[62px] items-center justify-center gap-[14px] rounded-[2px] bg-[linear-gradient(180deg,var(--color-wine),var(--color-maroon))] font-jost text-[18px] font-medium text-white shadow-[0_8px_18px_rgba(115,12,21,0.25)] transition-colors hover:bg-none hover:bg-gold disabled:opacity-80 sm:col-span-2 lg:uh-77 lg:umt-0 lg:ugap-16 lg:ut-21"
          >
            {status === "sending" ? form.sending : form.button}
            {status === "sending" ? (
              <span aria-hidden="true" className="size-[18px] animate-spin rounded-full border-2 border-white/40 border-t-white" />
            ) : (
              <ArrowRight className="size-[18px] lg:usize-20" />
            )}
          </button>
        </form>
      )}
    </div>
  );
}
