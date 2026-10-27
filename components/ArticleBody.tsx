import Image from "next/image";
import type { VeloraBlogPost } from "@/data";
import { CheckCircle, QuoteMark } from "@/components/Icons";

type Post = VeloraBlogPost;

/*
 * Desktop: 18px text in a column exactly one design line wide (61.9em), so the first line ends at
 * "…At our restaurant," like the mockup. On narrower screens the text scales down with the
 * container (cqi) so the line breaks stay the same.
 */
const paragraph = "font-body text-[17px] leading-[1.6] text-body lg:mx-auto lg:max-w-[61.9em] lg:text-[min(18px,calc(100cqi/64))]";

export default function ArticleBody({ post }: { post: Post }) {
  return (
    <div className="mx-auto max-w-[1920px] pb-(--section-space) px-5 pt-[40px] md:px-8 lg:px-[calc(103*var(--u))] lg:pt-[calc(58*var(--u))] lg:[container-type:inline-size]">
      <div className="space-y-[1.6em]">
        {post.content.map((p, i) => (
          <p key={i} data-reveal="up" className={paragraph}>
            {p}
          </p>
        ))}
      </div>

      <ul className="mt-[36px] flex flex-col gap-[16px] lg:mx-auto lg:max-w-[61.9em] lg:mt-[calc(70*var(--u))] lg:gap-[calc(19*var(--u))] lg:text-[min(18px,calc(100cqi/64))]">
        {post.highlights.map((h, i) => (
          <li key={h} data-reveal="left" data-delay={i + 1} className="flex items-center gap-[18px] font-body text-[17px] text-body lg:gap-[calc(28*var(--u))] lg:text-[min(18px,calc(100cqi/64))]">
            <CheckCircle className="size-[30px] shrink-0 text-gold lg:size-[calc(36*var(--u))]" />
            {h}
          </li>
        ))}
      </ul>

      <div data-reveal="mask-up" className="relative mt-[40px] aspect-[1485/443] overflow-hidden rounded-[10px] lg:mt-[calc(62*var(--u))]">
        <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1024px) 88vw, 100vw" className="object-cover" />
      </div>

      <figure data-reveal="up" data-delay="1" className="mt-[24px] flex flex-col gap-4 rounded-[14px] bg-sand px-[24px] py-[30px] sm:flex-row sm:gap-0 lg:h-[calc(215*var(--u))] lg:mt-[calc(30*var(--u))] lg:pl-[calc(66*var(--u))] lg:pr-[calc(40*var(--u))] lg:pt-[calc(45*var(--u))]">
        <QuoteMark aria-hidden="true" className="h-[48px] w-[64px] shrink-0 text-gold-pale lg:h-[calc(60*var(--u))] lg:w-[calc(78*var(--u))]" />
        <div className="sm:pl-[40px] lg:pl-[calc(92*var(--u))]">
          <blockquote className="font-serif text-[24px] italic leading-[1.3] text-wine sm:text-[30px] lg:text-[max(calc(41*var(--u)),var(--text-min))]">
            “ {post.quote.text} ”
          </blockquote>
          <figcaption className="mt-[16px] flex items-center gap-[20px] font-body text-[16px] tracking-[0.1em] text-gold lg:mt-[calc(18*var(--u))] lg:gap-[calc(27*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
            <span aria-hidden="true" className="h-[2px] w-[44px] bg-gold-soft lg:w-[calc(53*var(--u))]" />
            {post.quote.author}
          </figcaption>
        </div>
      </figure>

      <p data-reveal="up" className={`mt-[36px] lg:mt-[calc(58*var(--u))] ${paragraph}`}>{post.closing}</p>
    </div>
  );
}
