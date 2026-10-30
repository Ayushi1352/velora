import Image from "next/image";
import type { VeloraBlogPost } from "@/data";
import { CalendarSmall, UserCircle } from "@/components/Icons";

type Post = VeloraBlogPost;

export default function ArticleHeader({ post, byLabel }: { post: Post; byLabel: string }) {
  return (
    <header>
      <div className="mx-auto max-w-[1920px] pt-(--section-space) px-5 pb-[36px] text-center md:px-8 lg:pb-[calc(55*var(--u))]">
        <ul data-intro="down" data-delay="1" className="flex flex-wrap items-center justify-center gap-x-[24px] gap-y-3 font-body text-[16px] text-body lg:gap-x-[calc(44*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
          <li className="rounded-full bg-blush px-[20px] py-[9px] text-gold lg:px-[calc(24*var(--u))] lg:py-[calc(11*var(--u))]">{post.category}</li>
          <li className="flex items-center gap-[10px] lg:gap-[calc(15*var(--u))]">
            <CalendarSmall className="size-[20px] lg:size-[calc(27*var(--u))]" />
            <time>{post.date}</time>
          </li>
          <li className="flex items-center gap-[10px] lg:gap-[calc(15*var(--u))]">
            <UserCircle className="size-[20px] lg:size-[calc(27*var(--u))]" />
            {byLabel} {post.author}
          </li>
        </ul>
        <h1 data-intro="up" data-delay="3" className="mt-[24px] font-serif text-[clamp(26px,8.5vw,40px)] font-medium leading-[1.08] tracking-[-0.025em] text-wine sm:text-[56px] lg:mt-[calc(46*var(--u))] lg:text-[max(calc(90*var(--u)),var(--text-min))]">
          {post.titleLine1}
          <br />
          <span className="font-normal italic text-gold">{post.titleLine2}</span>
        </h1>
      </div>

      <div data-intro="settle" className="relative mx-auto aspect-[1688/603] max-w-[1920px] overflow-hidden">
        <Image src={post.cover.src} alt={post.cover.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      </div>
    </header>
  );
}
