import type { SectionComponentProps, VeloraBlogDetailData } from "@/data";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleBody from "@/components/ArticleBody";

/** Blog post page body; the post itself is the `item` the blog-detail page is expanded for. */
export default function BlogDetail({ data, item: post }: SectionComponentProps<VeloraBlogDetailData>) {
  if (!post) return null;

  return (
    <article>
      <ArticleHeader post={post} byLabel={data.meta.by} />
      <ArticleBody post={post} />
    </article>
  );
}
