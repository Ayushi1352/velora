import { site, type VeloraBlogPost } from "@/data";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleBody from "@/components/ArticleBody";

const data = site.blogDetailPage;

export default function BlogDetail({ post }: { post: VeloraBlogPost }) {
  return (
    <article>
      <ArticleHeader post={post} byLabel={data.meta.by} />
      <ArticleBody post={post} />
    </article>
  );
}
