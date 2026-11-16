'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { fill } from '@/components/ui/text';
import { Pagination, usePagination } from '@/components/ui/Pagination';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { BlogMetaData, BlogPost, BlogsData, BlogsProps } from '@/types/templates.types';

function PostMeta({ post, meta }: { post: Pick<BlogPost, 'author' | 'comments' | 'date'>; meta: BlogMetaData }) {
  const items = [
    { icon: meta.authorIcon, label: `${meta.by} ${post.author}` },
    { icon: meta.commentsIcon, label: `${post.comments} ${meta.comments}` },
    { icon: meta.dateIcon, label: post.date },
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

const BlogListItem = ({ post, meta, labels }: { post: BlogPost; meta: BlogMetaData; labels: Pick<BlogsData, 'readPostLabel' | 'readPostIcon'> }) => {
  const href = post.url;
  const title = `${post.title} ${post.titleHighlight}`;

  return (
    <article className="group grid items-center gap-6 md:grid-cols-[minmax(0,38%)_1fr_auto] lg:grid-cols-[calc(476*var(--u))_1fr_auto] lg:gap-0">
      <Link href={href} aria-label={title} className="relative block aspect-[476/240] overflow-hidden rounded-[6px]">
        <Image src={post.thumbnail} alt={post.thumbnailAlt} fill sizes="(min-width: 1024px) 28vw, (min-width: 768px) 38vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
        aria-label={fill(labels.readPostLabel, { title })}
        className="grid size-[60px] place-items-center justify-self-start rounded-full border-[1.5px] border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] transition-colors hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] md:justify-self-end lg:size-[calc(74*var(--u))]"
      >
        <Icon name={labels.readPostIcon} strokeWidth={1.8} className="size-[28px] lg:size-[calc(36*var(--u))]" />
      </Link>
    </article>
  );
};

const BlogList = ({ posts, perPage, meta, labels }: { posts: BlogPost[]; perPage: number; meta: BlogMetaData; labels: BlogsData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(posts, perPage);

  return (
    <div id="blog-list" className="scroll-mt-32">
      <ul key={page} className="mt-[36px] lg:mt-[calc(36*var(--u))]">
        {pageItems.map((post, i) => (
          <li key={post.id} data-reveal="up" data-delay="1" className={i > 0 ? 'mt-[20px] border-t border-[var(--color-line)] pt-[20px] lg:mt-[calc(20*var(--u))] lg:pt-[calc(18*var(--u))]' : ''}>
            <BlogListItem post={post} meta={meta} labels={labels} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="blog-list" labels={labels.pagination} />
    </div>
  );
};

/** Blog page: the paged list of listingPostIds. */
const BlogListing = ({ data }: { data: BlogsData }) => {
  const { intro, perPage, meta } = data;
  const posts = data.listingPostIds.flatMap((id) => data.posts.filter((post) => post.id === id));

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)] px-5 md:px-8 lg:px-[calc(85*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[36px] lg:w-[calc(44*var(--u))]"
        labelClassName="mb-[10px] lg:mb-[calc(14*var(--u))]"
        title={intro.title}
        titleHighlight={intro.titleHighlight}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(70*var(--u)),var(--text-min))]"
        text={intro.text}
        textClassName="mt-[12px] max-w-[620px] text-[17px] lg:max-w-[calc(620*var(--u))] lg:mt-[calc(12*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))] !leading-[1.38]"
      />
      <BlogList posts={posts} perPage={perPage} meta={meta} labels={data} />
    </section>
  );
};

type Post = { id: string; url: string; title: string; date: string; category: string; image: string; imageAlt: string };

/** The homePostIds posts as home cards: their own home photo with the post's short title, date and category. */
function homePosts(data: BlogsData): Post[] {
  return data.homePostIds.flatMap((id) => {
    const post = data.posts.find((p) => p.id === id);
    return post?.homeImage && post.homeImageAlt ? [{ id, url: post.url, image: post.homeImage, imageAlt: post.homeImageAlt, title: post.shortTitle, date: post.date, category: post.category }] : [];
  });
}

const zoom = 'object-cover transition-transform duration-700 group-hover:scale-105';

function Meta({ post }: { post: Post }) {
  return (
    <p className="flex items-center gap-[12px] font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-wine)] lg:gap-[calc(16*var(--u))] lg:text-[max(calc(11.25*var(--u)),var(--text-min))]">
      <span aria-hidden="true" className="h-[2px] w-[34px] shrink-0 bg-[var(--color-gold-soft)] lg:w-[calc(42*var(--u))]" />
      <span>
        {post.date} <span className="mx-[0.25em]">•</span> {post.category}
      </span>
    </p>
  );
}

function ReadMore({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-[0.7em] border-b-2 border-[var(--color-gold-line)] pb-[0.35em] font-label text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:text-[var(--color-wine)] lg:text-[max(calc(13*var(--u)),var(--text-min))]"
    >
      {label}
      <Icon name={icon} strokeWidth={2} className="size-[1em] transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/** Home page: one large card and the next posts beside it. */
const BlogHome = ({ data }: { data: BlogsData }) => {
  const blog = data.home;
  const [featured, ...rest] = homePosts(data);
  if (!featured) return null;

  return (
    <section aria-label={blog.label} className="mx-auto max-w-[1920px] py-[var(--section-space)]">
      <SectionHeading
        className="px-5"
        label={blog.label}
        labelVariant="sans-wide"
        labelLines="both"
        labelLineClassName="w-[36px] lg:w-[calc(46*var(--u))]"
        labelClassName="mb-[12px] lg:mb-[calc(16*var(--u))]"
        title={blog.title}
        titleHighlight={blog.titleHighlight}
        accent="upright"
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(74*var(--u)),var(--text-min))]"
      />
      <span aria-hidden="true" data-reveal="line" data-delay="2" className="mx-auto mt-[16px] block h-[2px] w-[40px] bg-[var(--color-gold-soft)] lg:mt-[calc(22*var(--u))] lg:w-[calc(46*var(--u))]" />

      <div className="mt-[28px] grid gap-14 px-5 md:px-8 lg:mt-[calc(27*var(--u))] lg:grid-cols-[calc(969*var(--u))_calc(513*var(--u))] lg:gap-[calc(26*var(--u))] lg:px-0 lg:pl-[calc(91*var(--u))]">
        <article>
          <Link data-reveal="mask-up" href={featured.url} aria-label={featured.title} className="group relative block aspect-[1098/740] overflow-hidden lg:aspect-auto lg:h-[calc(653*var(--u))]">
            <Image src={featured.image} alt={featured.imageAlt} fill sizes="(min-width: 1024px) 58vw, 100vw" className={zoom} />
          </Link>
          <div data-reveal="up" data-delay="3" className="mt-[20px] lg:mt-[calc(22*var(--u))]">
            <Meta post={featured} />
            <h3 className="mt-[12px] font-heading text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-[var(--color-wine)] sm:text-[38px] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(47*var(--u)),var(--text-min))]">
              <Link href={featured.url} className="transition-colors hover:text-[var(--color-gold)]">
                {featured.title}
              </Link>
            </h3>
            <div className="mt-[16px] lg:mt-[calc(12*var(--u))]">
              <ReadMore href={featured.url} label={blog.readMore} icon={blog.readMoreIcon} />
            </div>
          </div>
        </article>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-1 lg:content-start lg:gap-[calc(34*var(--u))]">
          {rest.map((post, i) => (
            <article key={post.id} data-reveal="right" data-delay={i * 2 + 2}>
              <Link
                href={post.url}
                aria-label={post.title}
                className={`group relative block overflow-hidden ${i === 0 ? 'aspect-[581/280] lg:aspect-auto lg:h-[calc(249*var(--u))]' : 'aspect-[581/260] lg:aspect-auto lg:h-[calc(231*var(--u))]'}`}
              >
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
              </Link>
              <div className="mt-[18px] lg:mt-[calc(17*var(--u))]">
                <Meta post={post} />
                <h3
                  className={`mt-[10px] font-heading text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--color-wine)] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(29*var(--u)),var(--text-min))] ${
                    i === 0 ? 'lg:max-w-[calc(270*var(--u))]' : ''
                  }`}
                >
                  <Link href={post.url} className="transition-colors hover:text-[var(--color-gold)]">
                    {post.title}
                  </Link>
                </h3>
                <div className="mt-[14px] lg:mt-[calc(10*var(--u))]">
                  <ReadMore href={post.url} label={blog.readMore} icon={blog.readMoreIcon} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Blogs = ({ data, showAll = false }: BlogsProps) => {
  if (!data) return null;
  return showAll ? <BlogListing data={data} /> : <BlogHome data={data} />;
};
