import FadeIn from "@/components/FadeIn";
import { CheckCircle, CloseIcon } from "@/components/Icons";
import { label } from "@/data";

type FormThankYouProps = {
  title: string;
  message: string;
  /** Visitor's name, filled into `{name}` in the title. */
  name?: string;
  /** True while the message fades out. */
  hiding?: boolean;
  onClose: () => void;
};

/** Shown in place of a form after it is submitted; hides itself after a few seconds. */
export default function FormThankYou({ title, message, name, hiding = false, onClose }: FormThankYouProps) {
  const heading = title.replace("{name}", name?.trim().split(" ")[0] || "").replace(/\s+!/, "!");

  return (
    <FadeIn duration={500}>
      <div
        role="status"
        aria-live="polite"
        className={`relative mt-[24px] flex flex-col items-center rounded-[10px] border border-gold-line bg-white px-6 py-10 text-center transition-[opacity,transform] duration-400 lg:mt-[calc(28*var(--u))] lg:px-[calc(40*var(--u))] lg:py-[calc(56*var(--u))] ${
          hiding ? "translate-y-2 opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={label("closeMessage")}
          className="absolute right-[12px] top-[12px] grid size-[36px] place-items-center rounded-full text-muted transition-colors hover:bg-blush hover:text-wine"
        >
          <CloseIcon className="size-[18px]" />
        </button>
        <span className="grid size-[76px] place-items-center rounded-full bg-blush lg:size-[calc(90*var(--u))]">
          <CheckCircle className="size-[44px] text-gold lg:size-[calc(52*var(--u))]" />
        </span>
        <h3 className="mt-[18px] font-serif text-[28px] font-medium leading-tight text-wine lg:mt-[calc(22*var(--u))] lg:text-[max(calc(36*var(--u)),var(--text-min))]">{heading}</h3>
        <span aria-hidden="true" className="mt-[12px] block h-[2px] w-[56px] bg-gold-soft lg:mt-[calc(14*var(--u))] lg:w-[calc(62*var(--u))]" />
        <p className="mt-[14px] max-w-[460px] font-body text-[17px] leading-[1.55] text-body lg:max-w-[calc(480*var(--u))] lg:mt-[calc(16*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">{message}</p>
      </div>
    </FadeIn>
  );
}
