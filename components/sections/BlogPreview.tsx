import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { BlogPreviewData, BlogsData } from "@/types/templates.types";

type Post = { slug: string; href: string; title: string; date: string; category: string; image: { src: string; alt: string } };

/** Title, date and category come from the blog post itself; the home card only picks its image. */
function resolvePosts(cards: BlogPreviewData["posts"], blogs: BlogsData): Post[] {
  return cards.flatMap(({ slug, image }) => {
    const post = blogs.items.find((p) => p.slug === slug);
    return post ? [{ slug, href: post.href, image, title: post.shortTitle, date: post.date, category: post.category }] : [];
  });
}

const zoom = "object-cover transition-transform duration-700 group-hover:scale-105";

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

function ReadMore({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-[0.7em] border-b-2 border-[var(--color-gold-line)] pb-[0.35em] font-label text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:text-[var(--color-wine)] lg:text-[max(calc(13*var(--u)),var(--text-min))]"
    >
      {label}
      <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-[1em] transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export const BlogPreview = ({ data: blog, blogs }: { data?: BlogPreviewData; blogs?: BlogsData }) => {
  if (!blog || !blogs) return null;
  const [featured, ...rest] = resolvePosts(blog.posts, blogs);
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
        line1={blog.titleLine1}
        line2={blog.titleLine2}
        accent="upright"
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(74*var(--u)),var(--text-min))]"
      />
      <span aria-hidden="true" data-reveal="line" data-delay="2" className="mx-auto mt-[16px] block h-[2px] w-[40px] bg-[var(--color-gold-soft)] lg:mt-[calc(22*var(--u))] lg:w-[calc(46*var(--u))]" />

      <div className="mt-[28px] grid gap-14 px-5 md:px-8 lg:mt-[calc(27*var(--u))] lg:grid-cols-[calc(969*var(--u))_calc(513*var(--u))] lg:gap-[calc(26*var(--u))] lg:px-0 lg:pl-[calc(91*var(--u))]">
        <article>
          <Link data-reveal="mask-up" href={featured.href} aria-label={featured.title} className="group relative block aspect-[1098/740] overflow-hidden lg:aspect-auto lg:h-[calc(653*var(--u))]">
            <Image src={featured.image.src} alt={featured.image.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className={zoom} />
          </Link>
          <div data-reveal="up" data-delay="3" className="mt-[20px] lg:mt-[calc(22*var(--u))]">
            <Meta post={featured} />
            <h3 className="mt-[12px] font-heading text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-[var(--color-wine)] sm:text-[38px] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(47*var(--u)),var(--text-min))]">
              <Link href={featured.href} className="transition-colors hover:text-[var(--color-gold)]">
                {featured.title}
              </Link>
            </h3>
            <div className="mt-[16px] lg:mt-[calc(12*var(--u))]">
              <ReadMore href={featured.href} label={blog.readMore} />
            </div>
          </div>
        </article>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-1 lg:content-start lg:gap-[calc(34*var(--u))]">
          {rest.map((post, i) => (
            <article key={post.slug} data-reveal="right" data-delay={i * 2 + 2}>
              <Link
                href={post.href}
                aria-label={post.title}
                className={`group relative block overflow-hidden ${i === 0 ? "aspect-[581/280] lg:aspect-auto lg:h-[calc(249*var(--u))]" : "aspect-[581/260] lg:aspect-auto lg:h-[calc(231*var(--u))]"}`}
              >
                <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
              </Link>
              <div className="mt-[18px] lg:mt-[calc(17*var(--u))]">
                <Meta post={post} />
                <h3
                  className={`mt-[10px] font-heading text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--color-wine)] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(29*var(--u)),var(--text-min))] ${
                    i === 0 ? "lg:max-w-[calc(270*var(--u))]" : ""
                  }`}
                >
                  <Link href={post.href} className="transition-colors hover:text-[var(--color-gold)]">
                    {post.title}
                  </Link>
                </h3>
                <div className="mt-[14px] lg:mt-[calc(10*var(--u))]">
                  <ReadMore href={post.href} label={blog.readMore} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
