import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { SectionLabel } from "@/components/SectionHeading";

type Img = { src: string; alt: string };

type StoryBlockProps = {
  label: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  imageLeft: Img;
  imageRight: Img;
  /** Layout classes for the left photo frame (aspect / desktop size & offset). */
  leftFrameClassName?: string;
  /** Desktop offset & font size of the paragraph block. */
  textClassName?: string;
  button?: { label: string; href: string };
};

/** Three column "Our Story" layout shared by the Home and About Us pages. */
export default function StoryBlock({
  label,
  titleLine1,
  titleLine2,
  paragraphs,
  imageLeft,
  imageRight,
  leftFrameClassName = "aspect-square lg:w-[calc(505*var(--u))] lg:mt-[calc(73*var(--u))]",
  textClassName = "lg:mt-[calc(46*var(--u))] lg:text-[max(calc(21.75*var(--u)),var(--text-min))]",
  button,
}: StoryBlockProps) {
  return (
    <div className="mx-auto grid max-w-[1920px] gap-10 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-[calc(552*var(--u))_1fr_calc(405*var(--u))] lg:gap-0 lg:px-0">
      <div className="order-2 lg:order-1 lg:pl-[calc(3*var(--u))]">
        <div data-reveal="mask-left" className={`relative overflow-hidden ${leftFrameClassName}`}>
          <Image src={imageLeft.src} alt={imageLeft.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>

      <div className="order-1 md:col-span-2 lg:order-2 lg:col-span-1">
        <SectionLabel variant="sans" align="left" lineClassName="w-[44px] lg:w-[calc(61*var(--u))]">
          {label}
        </SectionLabel>
        <h2 data-reveal="up" data-delay="1" className="mt-[12px] font-serif text-[clamp(26px,8.5vw,40px)] font-medium leading-[1.04] tracking-[-0.018em] text-wine sm:text-[56px] lg:mt-[calc(27*var(--u))] lg:text-[max(calc(73.5*var(--u)),var(--text-min))]">
          {titleLine1}
          <br />
          <span className="text-gold">{titleLine2}</span>
        </h2>
        <div className={`mt-[22px] max-w-[560px] space-y-[1.4em] font-body text-[17px] leading-[1.38] text-ink-soft lg:ml-[calc(84*var(--u))] lg:max-w-[calc(520*var(--u))] ${textClassName}`}>
          {paragraphs.map((p, i) => (
            <p key={i} data-reveal="up" data-delay={2 + i}>
              {p}
            </p>
          ))}
        </div>
        {button && (
          <Link
            data-reveal="zoom"
            data-delay="3"
            href={button.href}
            className="group mt-[30px] grid size-[160px] place-items-center rounded-full border border-gold-line text-center transition-colors hover:border-maroon hover:bg-maroon lg:ml-[calc(73*var(--u))] lg:mt-[calc(46*var(--u))] lg:size-[calc(182*var(--u))]"
          >
            <span className="flex flex-col items-center font-serif text-[18px] font-medium leading-[1.12] text-wine transition-colors group-hover:text-white lg:text-[max(calc(21*var(--u)),var(--text-min))]">
              <span className="max-w-[7.4em]">{button.label}</span>
              <ArrowRight className="mt-[0.55em] size-[0.8em] text-gold transition-[translate] duration-300 group-hover:translate-x-1.5 group-hover:text-white" />
            </span>
          </Link>
        )}
      </div>

      <div className="order-3 lg:mt-[calc(139*var(--u))]">
        <div data-reveal="mask-right" data-delay="3" className="relative aspect-[381/453] overflow-hidden lg:w-[calc(338*var(--u))]">
          <Image src={imageRight.src} alt={imageRight.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
