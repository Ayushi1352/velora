import Image from "next/image";
import Link from "next/link";
import { label, type VeloraBlogPageData } from "@/data";
import { ArrowUpRight, CalendarSmall, ChatBubble, UserCircle } from "@/components/Icons";

type Post = {
  slug: string;
  href: string;
  titleLine1: string;
  titleLine2: string;
  author: string;
  comments: number;
  date: string;
  excerpt: string;
  thumbnail: { src: string; alt: string };
};

export type PostMetaLabels = VeloraBlogPageData["meta"];

export function PostMeta({ post, meta }: { post: Pick<Post, "author" | "comments" | "date">; meta: PostMetaLabels }) {
  const items = [
    { icon: UserCircle, label: `${meta.by} ${post.author}` },
    { icon: ChatBubble, label: `${post.comments} ${meta.comments}` },
    { icon: CalendarSmall, label: post.date },
  ];
  return (
    // Every item starts with a divider; the list is pulled left under a clipping wrapper so the
    // divider that lands at the start of a line is hidden and a wrapped line never begins with one.
    <div className="overflow-hidden">
      <ul className="-ml-[29px] flex flex-wrap items-center gap-y-2 font-jost text-[15px] text-ink-soft lg:ml-[calc(-37*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center">
            <span aria-hidden="true" className="mx-[14px] h-[20px] w-px bg-gold-line lg:h-[calc(24*var(--u))] lg:mx-[calc(18*var(--u))]" />
            <Icon className="mr-[8px] size-[18px] text-body lg:mr-[calc(9*var(--u))] lg:size-[calc(22*var(--u))]" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogListItem({ post, meta }: { post: Post; meta: PostMetaLabels }) {
  const { href } = post;
  const title = `${post.titleLine1} ${post.titleLine2}`;

  return (
    <article className="group grid items-center gap-6 md:grid-cols-[minmax(0,38%)_1fr_auto] lg:grid-cols-[calc(476*var(--u))_1fr_auto] lg:gap-0">
      <Link href={href} aria-label={title} className="relative block aspect-[476/240] overflow-hidden rounded-[6px]">
        <Image src={post.thumbnail.src} alt={post.thumbnail.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 768px) 38vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="lg:pl-[calc(50*var(--u))] lg:pr-[calc(40*var(--u))]">
        <PostMeta post={post} meta={meta} />
        <h2 className="mt-[12px] font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-wine sm:text-[30px] lg:mt-[calc(18*var(--u))] lg:text-[max(calc(37*var(--u)),var(--text-min))]">
          <Link href={href} className="transition-colors hover:text-gold">
            {title}
          </Link>
        </h2>
        <p className="mt-[10px] font-body text-[16px] leading-[1.4] text-body lg:max-w-[calc(780*var(--u))] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(22.5*var(--u)),var(--text-min))]">{post.excerpt}</p>
      </div>
      <Link
        href={href}
        aria-label={label("readPost", { title })}
        className="grid size-[60px] place-items-center justify-self-start rounded-full border-[1.5px] border-gold-bright text-gold-bright transition-colors hover:bg-maroon hover:text-white md:justify-self-end lg:size-[calc(74*var(--u))]"
      >
        <ArrowUpRight className="size-[28px] lg:size-[calc(36*var(--u))]" strokeWidth={1.8} />
      </Link>
    </article>
  );
}
