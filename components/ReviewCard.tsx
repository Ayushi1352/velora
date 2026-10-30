import Image from "next/image";
import { QuoteMark, Star } from "@/components/Icons";
import { label } from "@/data";

type Review = {
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  image: { src: string; alt: string };
};

/** `delay` staggers the card's scroll reveal (see data-delay in globals.css). */
export default function ReviewCard({ item, delay }: { item: Review; delay?: number }) {
  return (
    <article data-reveal="up" data-delay={delay} className="flex gap-[18px] md:gap-[12px] rounded-[14px] border-[1.5px] border-gold-pale bg-white px-[20px] py-[22px] shadow-[0_8px_24px_rgba(140,90,40,0.04)] transition-[translate,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-gold-line hover:shadow-[0_20px_44px_rgba(140,90,40,0.12)] lg:min-h-[calc(335*var(--u))] lg:gap-[calc(20*var(--u))] lg:pl-[calc(28*var(--u))] lg:pr-[calc(24*var(--u))] lg:pt-[calc(21*var(--u))]">
      <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-blush text-gold lg:size-[calc(64*var(--u))]">
        <QuoteMark className="h-[18px] w-[24px] lg:h-[calc(20*var(--u))] lg:w-[calc(27*var(--u))]" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col lg:pt-[calc(14*var(--u))]">
        <div className="flex gap-[6px] text-gold-bright lg:gap-[calc(5*var(--u))]" role="img" aria-label={label("rating", { rating: item.rating })}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="size-[22px] lg:size-[calc(26*var(--u))]" />
          ))}
        </div>
        {/* flex-1 keeps the divider and author on one line across a row, whatever the review's length */}
        <p className="mt-[12px] flex-1 font-body text-[17px] leading-[1.42] text-body lg:mt-[calc(14*var(--u))] lg:pr-[calc(24*var(--u))] lg:text-[max(calc(19.5*var(--u)),var(--text-min))]">{item.text}</p>
        <span aria-hidden="true" className="mt-[14px] block h-[2px] w-[40px] bg-gold-line lg:mt-[calc(12*var(--u))] lg:w-[calc(42*var(--u))]" />
        <div className="mt-[12px] flex items-center gap-[18px] md:gap-[12px] lg:mt-[calc(8*var(--u))] lg:gap-[calc(22*var(--u))]">
          <div className="relative size-[70px] shrink-0 overflow-hidden rounded-full lg:size-[calc(82*var(--u))]">
            <Image src={item.image.src} alt={item.image.alt} fill sizes="82px" className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-[21px] font-medium leading-tight text-wine md:whitespace-nowrap lg:text-[max(calc(24.5*var(--u)),var(--text-min))]">{item.name}</p>
            <p className="mt-[4px] font-body text-[16px] text-muted md:whitespace-nowrap lg:text-[max(calc(19*var(--u)),var(--text-min))]">{item.role ?? item.location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
