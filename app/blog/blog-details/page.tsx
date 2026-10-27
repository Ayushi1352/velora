import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogDetail from "@/components/BlogDetail";
import { site } from "@/data";

const { blogPage, blogDetailPage } = site;

// One common detail page for every blog post: all blog links point here and it shows the first post.
const post = blogPage.items[0];

export const metadata: Metadata = {
  title: `${post.titleLine1} ${post.titleLine2}`,
  description: post.excerpt,
};

export default function BlogDetailPage() {
  return (
    <>
      <PageBanner title={post.shortTitle} parent={blogDetailPage.parent} />
      <BlogDetail post={post} />
    </>
  );
}
