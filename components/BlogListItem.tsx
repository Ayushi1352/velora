import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import { ArrowUpRight, CalendarSmall, ChatBubble, UserCircle } from "@/components/Icons";

const { meta } = site.blogPage;

type Post = {
  slug: string;
  titleLine1: string;
  titleLine2: string;
  author: string;
  comments: number;
  date: string;
  excerpt: string;
  thumbnail: { src: string; alt: string };
};

export function PostMeta({ post }: { post: Pick<Post, "author" | "comments" | "date"> }) {
  const items = [
    { icon: UserCircle, label: `${meta.by} ${post.author}` },
    { icon: ChatBubble, label: `${post.comments} ${meta.comments}` },
    { icon: CalendarSmall, label: post.date },
  ];
  return (
    <ul className="flex flex-wrap items-center gap-y-2 font-jost text-[15px] text-ink-soft lg:ut-19">
      {items.map(({ icon: Icon, label }, i) => (
        <li key={label} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-[14px] h-[20px] w-px bg-gold-line lg:uh-24 lg:umx-18" />}
          <Icon className="mr-[8px] size-[18px] text-body lg:umr-9 lg:usize-22" />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function BlogListItem({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  const title = `${post.titleLine1} ${post.titleLine2}`;

  return (
    <article className="group grid items-center gap-6 md:grid-cols-[minmax(0,40%)_1fr] lg:grid-cols-[calc(476*var(--u))_1fr_auto] lg:gap-0">
      <Link href={href} aria-label={title} className="relative block aspect-[476/240] overflow-hidden rounded-[6px]">
        <Image src={post.thumbnail.src} alt={post.thumbnail.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="lg:upl-50 lg:upr-40">
        <PostMeta post={post} />
        <h2 className="mt-[12px] font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-wine sm:text-[30px] lg:umt-18 lg:ut-37">
          <Link href={href} className="transition-colors hover:text-gold">
            {title}
          </Link>
        </h2>
        <p className="mt-[10px] font-body text-[16px] leading-[1.4] text-body lg:umaxw-780 lg:umt-10 lg:ut-22.5">{post.excerpt}</p>
      </div>
      <Link
        href={href}
        aria-label={`Read: ${title}`}
        className="grid size-[60px] place-items-center justify-self-start rounded-full border-[1.5px] border-gold-bright text-gold-bright transition-colors hover:bg-maroon hover:text-white md:col-start-2 lg:col-start-auto lg:usize-74 lg:justify-self-end"
      >
        <ArrowUpRight className="size-[28px] lg:usize-36" strokeWidth={1.8} />
      </Link>
    </article>
  );
}
