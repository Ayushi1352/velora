import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";

type Post = { slug: string; title: string; date: string; category: string; image: { src: string; alt: string } };

/** Title, date and category come from the blog post itself; the home card only picks its image. */
function resolvePosts(cards: typeof site.home.blog.posts): Post[] {
  return cards.flatMap(({ slug, image }) => {
    const post = site.posts.find((p) => p.slug === slug);
    return post ? [{ slug, image, title: `${post.titleLine1} ${post.titleLine2}`, date: post.date, category: post.category }] : [];
  });
}

const zoom = "object-cover transition-transform duration-700 group-hover:scale-105";

function Meta({ post }: { post: Post }) {
  return (
    <p className="flex items-center gap-[12px] font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-wine lg:ugap-16 lg:ut-11.25">
      <span aria-hidden="true" className="h-[2px] w-[34px] shrink-0 bg-gold-soft lg:uw-42" />
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
      className="group inline-flex items-center gap-[0.7em] border-b-2 border-gold-line pb-[0.35em] font-montserrat text-[13px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-wine lg:ut-13"
    >
      {label}
      <ArrowRight className="size-[1em] transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default function LatestBlogs() {
  const { blog } = site.home;
  const [featured, ...rest] = resolvePosts(blog.posts);

  return (
    <section aria-label={blog.label} className="mx-auto max-w-[1920px] section-space">
      <SectionHeading
        className="px-5"
        label={blog.label}
        labelVariant="sans-wide"
        labelLines="both"
        labelLineClassName="w-[36px] lg:uw-46"
        labelClassName="mb-[12px] lg:umb-16"
        line1={blog.titleLine1}
        line2={blog.titleLine2}
        accent="upright"
        titleClassName="text-[44px] sm:text-[56px] lg:ut-74 leading-[0.96]"
      />
      <span aria-hidden="true" className="mx-auto mt-[16px] block h-[2px] w-[40px] bg-gold-soft lg:umt-22 lg:uw-46" />

      <div className="mt-[28px] grid gap-14 px-5 md:px-8 lg:umt-27 lg:grid-cols-[calc(969*var(--u))_calc(513*var(--u))] lg:ugap-26 lg:px-0 lg:upl-91">
        <article>
          <Link href={`/blog/${featured.slug}`} aria-label={featured.title} className="group relative block aspect-[1098/740] overflow-hidden lg:aspect-auto lg:uh-653">
            <Image src={featured.image.src} alt={featured.image.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className={zoom} />
          </Link>
          <div className="mt-[20px] lg:umt-22">
            <Meta post={featured} />
            <h3 className="mt-[12px] font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-wine sm:text-[38px] lg:umt-14 lg:ut-47">
              <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-gold">
                {featured.title}
              </Link>
            </h3>
            <div className="mt-[16px] lg:umt-12">
              <ReadMore href={`/blog/${featured.slug}`} label={blog.readMore} />
            </div>
          </div>
        </article>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-1 lg:content-start lg:ugap-34">
          {rest.map((post, i) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                aria-label={post.title}
                className={`group relative block overflow-hidden ${i === 0 ? "aspect-[581/280] lg:aspect-auto lg:uh-249" : "aspect-[581/260] lg:aspect-auto lg:uh-231"}`}
              >
                <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw" className={zoom} />
              </Link>
              <div className="mt-[18px] lg:umt-17">
                <Meta post={post} />
                <h3
                  className={`mt-[10px] font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-wine lg:umt-10 lg:ut-29 ${
                    i === 0 ? "lg:umaxw-270" : ""
                  }`}
                >
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold">
                    {post.title}
                  </Link>
                </h3>
                <div className="mt-[14px] lg:umt-10">
                  <ReadMore href={`/blog/${post.slug}`} label={blog.readMore} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
