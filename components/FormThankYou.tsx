import { CheckCircle, CloseIcon } from "@/components/Icons";

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
    <div
      role="status"
      aria-live="polite"
      className={`relative mt-[24px] flex flex-col items-center rounded-[10px] border border-gold-line bg-white px-6 py-10 text-center transition-[opacity,transform] duration-400 lg:umt-28 lg:upx-40 lg:upy-56 ${
        hiding ? "translate-y-2 opacity-0" : "animate-[fade_0.5s_ease] opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close message"
        className="absolute right-[12px] top-[12px] grid size-[36px] place-items-center rounded-full text-muted transition-colors hover:bg-blush hover:text-wine"
      >
        <CloseIcon className="size-[18px]" />
      </button>
      <span className="grid size-[76px] place-items-center rounded-full bg-blush lg:usize-90">
        <CheckCircle className="size-[44px] text-gold lg:usize-52" />
      </span>
      <h3 className="mt-[18px] font-serif text-[28px] font-medium leading-tight text-wine lg:umt-22 lg:ut-36">{heading}</h3>
      <span aria-hidden="true" className="mt-[12px] block h-[2px] w-[56px] bg-gold-soft lg:umt-14 lg:uw-62" />
      <p className="mt-[14px] max-w-[460px] font-body text-[17px] leading-[1.55] text-body lg:umaxw-480 lg:umt-16 lg:ut-21">{message}</p>
    </div>
  );
}
