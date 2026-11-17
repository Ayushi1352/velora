import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { lines } from '@/components/ui/text';
import type { BlogPost, BlogDetailData, BlogDetailProps } from '@/types/templates.types';

const ArticleHeader = ({ post, labels }: { post: BlogPost; labels: BlogDetailData }) => {
  return (
    <header>
      <div className="mx-auto max-w-[1920px] pt-[var(--section-space)] px-5 pb-[36px] text-center md:px-8 lg:pb-[calc(55*var(--u))]">
        <ul data-intro="down" data-delay="1" className="flex flex-wrap items-center justify-center gap-x-[24px] gap-y-3 font-body text-[16px] text-[var(--color-body)] lg:gap-x-[calc(44*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
          <li className="rounded-full bg-[var(--color-blush)] px-[20px] py-[9px] text-[var(--color-gold)] lg:px-[calc(24*var(--u))] lg:py-[calc(11*var(--u))]">{post.category}</li>
          <li className="flex items-center gap-[10px] lg:gap-[calc(15*var(--u))]">
            <Icon name={labels.dateIcon} className="size-[20px] lg:size-[calc(27*var(--u))]" />
            <time>{post.date}</time>
          </li>
          <li className="flex items-center gap-[10px] lg:gap-[calc(15*var(--u))]">
            <Icon name={labels.authorIcon} className="size-[20px] lg:size-[calc(27*var(--u))]" />
            {labels.byLabel} {post.author}
          </li>
        </ul>
        <h1 data-intro="up" data-delay="3" className="mt-[24px] font-heading text-[clamp(26px,8.5vw,40px)] font-medium leading-[1.08] tracking-[-0.025em] text-[var(--color-wine)] sm:text-[56px] lg:mt-[calc(46*var(--u))] lg:text-[max(calc(90*var(--u)),var(--text-min))]">
          {post.title}
          <br />
          <span className="font-normal italic text-[var(--color-gold)]">{post.titleHighlight}</span>
        </h1>
      </div>

      <div data-intro="settle" className="relative mx-auto aspect-[1688/603] max-w-[1920px] overflow-hidden">
        <Image src={post.coverImage} alt={post.coverImageAlt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      </div>
    </header>
  );
};

/*
 * Desktop: 18px text in a column exactly one design line wide (61.9em), so the first line ends at
 * "…At our restaurant," like the mockup. On narrower screens the text scales down with the
 * container (cqi) so the line breaks stay the same.
 */
const paragraph = 'font-body text-[17px] leading-[1.6] text-[var(--color-body)] lg:mx-auto lg:max-w-[61.9em] lg:text-[min(18px,calc(100cqi/64))]';

const ArticleBody = ({ post, labels }: { post: BlogPost; labels: BlogDetailData }) => {
  return (
    <div className="mx-auto max-w-[1920px] pb-[var(--section-space)] px-5 pt-[40px] md:px-8 lg:px-[calc(103*var(--u))] lg:pt-[calc(58*var(--u))] lg:[container-type:inline-size]">
      <div className="space-y-[1.6em]">
        {lines(post.content).map((p, i) => (
          <p key={i} data-reveal="up" className={paragraph}>
            {p}
          </p>
        ))}
      </div>

      <ul className="mt-[36px] flex flex-col gap-[16px] lg:mx-auto lg:max-w-[61.9em] lg:mt-[calc(70*var(--u))] lg:gap-[calc(19*var(--u))] lg:text-[min(18px,calc(100cqi/64))]">
        {post.highlights.map((h, i) => (
          <li key={h.id} data-reveal="left" data-delay={i + 1} className="flex items-center gap-[18px] font-body text-[17px] text-[var(--color-body)] lg:gap-[calc(28*var(--u))] lg:text-[min(18px,calc(100cqi/64))]">
            <Icon name={labels.highlightIcon} className="size-[30px] shrink-0 text-[var(--color-gold)] lg:size-[calc(36*var(--u))]" />
            {h.text}
          </li>
        ))}
      </ul>

      <div data-reveal="mask-up" className="relative mt-[40px] aspect-[1485/443] overflow-hidden rounded-[10px] lg:mt-[calc(62*var(--u))]">
        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 88vw, 100vw" className="object-cover" />
      </div>

      <figure data-reveal="up" data-delay="1" className="mt-[24px] flex flex-col gap-4 rounded-[14px] bg-[var(--color-sand)] px-[24px] py-[30px] sm:flex-row sm:gap-0 lg:h-[calc(215*var(--u))] lg:mt-[calc(30*var(--u))] lg:pl-[calc(66*var(--u))] lg:pr-[calc(40*var(--u))] lg:pt-[calc(45*var(--u))]">
        <Icon name={labels.quoteIcon} className="h-[48px] w-[64px] shrink-0 text-[var(--color-gold-pale)] lg:h-[calc(60*var(--u))] lg:w-[calc(78*var(--u))]" />
        <div className="sm:pl-[40px] lg:pl-[calc(92*var(--u))]">
          <blockquote className="font-heading text-[24px] italic leading-[1.3] text-[var(--color-wine)] sm:text-[30px] lg:text-[max(calc(41*var(--u)),var(--text-min))]">
            “ {post.quote.text} ”
          </blockquote>
          <figcaption className="mt-[16px] flex items-center gap-[20px] font-body text-[16px] tracking-[0.1em] text-[var(--color-gold)] lg:mt-[calc(18*var(--u))] lg:gap-[calc(27*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))]">
            <span aria-hidden="true" className="h-[2px] w-[44px] bg-[var(--color-gold-soft)] lg:w-[calc(53*var(--u))]" />
            {post.quote.author}
          </figcaption>
        </div>
      </figure>

      <p data-reveal="up" className={`mt-[36px] lg:mt-[calc(58*var(--u))] ${paragraph}`}>{post.closing}</p>
    </div>
  );
};

// One common detail page for every blog post: all blog links point here and it shows the Blogs post `postId` (detailPostId).
export const BlogDetail = ({ data, postId }: BlogDetailProps) => {
  const post = data?.posts.find((item) => item.id === postId);
  if (!data || !post) return null;
  return (
    <article>
      <ArticleHeader post={post} labels={data.detail} />
      <ArticleBody post={post} labels={data.detail} />
    </article>
  );
};
