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
    <div className="mx-auto max-w-[1920px] section-pb px-5 pt-[40px] md:px-8 lg:px-[calc(103*var(--u))] lg:upt-58 lg:[container-type:inline-size]">
      <div className="space-y-[1.6em]">
        {post.content.map((p, i) => (
          <p key={i} data-reveal="up" className={paragraph}>
            {p}
          </p>
        ))}
      </div>

      <ul className="mt-[36px] flex flex-col gap-[16px] lg:mx-auto lg:max-w-[61.9em] lg:umt-70 lg:ugap-19 lg:text-[min(18px,calc(100cqi/64))]">
        {post.highlights.map((h, i) => (
          <li key={h} data-reveal="left" data-delay={i + 1} className="flex items-center gap-[18px] font-body text-[17px] text-body lg:ugap-28 lg:text-[min(18px,calc(100cqi/64))]">
            <CheckCircle className="size-[30px] shrink-0 text-gold lg:usize-36" />
            {h}
          </li>
        ))}
      </ul>

      <div data-reveal="mask-up" className="relative mt-[40px] aspect-[1485/443] overflow-hidden rounded-[10px] lg:umt-62">
        <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1024px) 88vw, 100vw" className="object-cover" />
      </div>

      <figure data-reveal="up" data-delay="1" className="mt-[24px] flex flex-col gap-4 rounded-[14px] bg-sand px-[24px] py-[30px] sm:flex-row sm:gap-0 lg:uh-215 lg:umt-30 lg:upl-66 lg:upr-40 lg:upt-45">
        <QuoteMark aria-hidden="true" className="h-[48px] w-[64px] shrink-0 text-gold-pale lg:uh-60 lg:uw-78" />
        <div className="sm:pl-[40px] lg:upl-92">
          <blockquote className="font-serif text-[24px] italic leading-[1.3] text-wine sm:text-[30px] lg:ut-41">
            “ {post.quote.text} ”
          </blockquote>
          <figcaption className="mt-[16px] flex items-center gap-[20px] font-body text-[16px] tracking-[0.1em] text-gold lg:umt-18 lg:ugap-27 lg:ut-21">
            <span aria-hidden="true" className="h-[2px] w-[44px] bg-gold-soft lg:uw-53" />
            {post.quote.author}
          </figcaption>
        </div>
      </figure>

      <p data-reveal="up" className={`mt-[36px] lg:umt-58 ${paragraph}`}>{post.closing}</p>
    </div>
  );
}
