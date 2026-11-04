import { ArticleHeader } from "@/components/sections/ArticleHeader";
import { ArticleBody } from "@/components/sections/ArticleBody";
import type { BlogDetailData, BlogsData } from "@/types/templates.types";

// One common detail page for every blog post: all blog links point here and it shows the first post.
export const BlogDetail = ({ data, blogs }: { data?: BlogDetailData; blogs?: BlogsData }) => {
  const post = blogs?.items[0];
  if (!data || !post) return null;
  return (
    <article>
      <ArticleHeader post={post} byLabel={data.meta.by} />
      <ArticleBody post={post} />
    </article>
  );
};
