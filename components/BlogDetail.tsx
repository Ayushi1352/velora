import { site, type SectionProps, type VeloraBlogDetailData, type VeloraBlogPost } from "@/data";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleBody from "@/components/ArticleBody";

/** Blog post page body; the post is the `item` the `expand: "items"` blog-detail page is rendered for. */
export default function BlogDetail({ data = site.blogDetailPage, item: post }: SectionProps<VeloraBlogDetailData> & { item?: VeloraBlogPost }) {
  if (!post) return null;

  return (
    <article>
      <ArticleHeader post={post} byLabel={data.meta.by} />
      <ArticleBody post={post} />
    </article>
  );
}
