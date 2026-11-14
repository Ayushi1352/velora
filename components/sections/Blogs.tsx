"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";
import { Pagination, usePagination } from "@/components/ui/Pagination";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BlogMetaLabels, BlogPost, BlogsData, BlogsProps } from "@/types/templates.types";

function PostMeta({ post, meta }: { post: Pick<BlogPost, "author" | "comments" | "date">; meta: BlogMetaLabels }) {
  const items = [
    { icon: "HiOutlineUserCircle", label: `${meta.by} ${post.author}` },
    { icon: "HiOutlineChatBubbleLeftEllipsis", label: `${post.comments} ${meta.comments}` },
    { icon: "HiOutlineCalendarDays", label: post.date },
  ];
  return (
    // Every item starts with a divider; the list is pulled left under a clipping wrapper so the
    // divider that lands at the start of a line is hidden and a wrapped line never begins with one.
    <div className="overflow-hidden">
      <ul className="-ml-[29px] flex flex-wrap items-center gap-y-2 font-ui text-[15px] text-[var(--color-ink-soft)] lg:ml-[calc(-37*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
        {items.map(({ icon, label }) => (
          <li key={label} className="flex items-center">
            <span aria-hidden="true" className="mx-[14px] h-[20px] w-px bg-[var(--color-gold-line)] lg:h-[calc(24*var(--u))] lg:mx-[calc(18*var(--u))]" />
            <Icon name={icon} className="mr-[8px] size-[18px] text-[var(--color-body)] lg:mr-[calc(9*var(--u))] lg:size-[calc(22*var(--u))]" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const BlogListItem = ({ post, meta, readPostLabel }: { post: BlogPost; meta: BlogMetaLabels; readPostLabel: string }) => {
  const { href } = post;
  const title = `${post.titleLine1} ${post.titleLine2}`;

  return (
    <article className="group grid items-center gap-6 md:grid-cols-[minmax(0,38%)_1fr_auto] lg:grid-cols-[calc(476*var(--u))_1fr_auto] lg:gap-0">
      <Link href={href} aria-label={title} className="relative block aspect-[476/240] overflow-hidden rounded-[6px]">
        <Image src={post.thumbnail.src} alt={post.thumbnail.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 768px) 38vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="lg:pl-[calc(50*var(--u))] lg:pr-[calc(40*var(--u))]">
        <PostMeta post={post} meta={meta} />
        <h2 className="mt-[12px] font-heading text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--color-wine)] sm:text-[30px] lg:mt-[calc(18*var(--u))] lg:text-[max(calc(37*var(--u)),var(--text-min))]">
          <Link href={href} className="transition-colors hover:text-[var(--color-gold)]">
            {title}
          </Link>
        </h2>
        <p className="mt-[10px] font-body text-[16px] leading-[1.4] text-[var(--color-body)] lg:max-w-[calc(780*var(--u))] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(22.5*var(--u)),var(--text-min))]">{post.excerpt}</p>
      </div>
      <Link
        href={href}
        aria-label={fill(readPostLabel, { title })}
        className="grid size-[60px] place-items-center justify-self-start rounded-full border-[1.5px] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] transition-colors hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] md:justify-self-end lg:size-[calc(74*var(--u))]"
      >
        <Icon name="HiOutlineArrowUpRight" strokeWidth={1.8} className="size-[28px] lg:size-[calc(36*var(--u))]" />
      </Link>
    </article>
  );
};

const BlogList = ({ posts, perPage, meta, labels }: { posts: BlogPost[]; perPage: number; meta: BlogMetaLabels; labels: BlogsData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(posts, perPage);

  return (
    <div id="blog-list" className="scroll-mt-32">
      <ul key={page} className="mt-[36px] lg:mt-[calc(36*var(--u))]">
        {pageItems.map((post, i) => (
          <li key={post.slug} data-reveal="up" data-delay="1" className={i > 0 ? "mt-[20px] border-t border-[var(--color-line)] pt-[20px] lg:mt-[calc(20*var(--u))] lg:pt-[calc(18*var(--u))]" : ""}>
            <BlogListItem post={post} meta={meta} readPostLabel={labels.readPostLabel} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="blog-list" labels={labels} />
    </div>
  );
};

export const Blogs = ({ data }: BlogsProps) => {
  if (!data) return null;
  const { intro, perPage, meta, items } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(85*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[36px] lg:w-[calc(44*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(14*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(70*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[12px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(12*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] !leading-[1.38]"
      />
      <BlogList posts={items} perPage={perPage} meta={meta} labels={data} />
    </section>
  );
};
