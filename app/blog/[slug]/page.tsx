import type { Metadata } from "next";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleBody from "@/components/ArticleBody";

const SMALL_WORDS = new Set(["a", "an", "and", "the", "of", "for", "in", "on", "to", "with"]);

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word, i) => (i > 0 && SMALL_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

function getPost(slug: string) {
  return site.posts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return site.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.titleLine1} ${post.titleLine2}`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Breadcrumb and banner use only the name from the URL, e.g. /blog/the-art-of-plating -> "The Art of Plating".
  const title = slugToTitle(slug);
  const blog = site.navigation.find((item) => item.href === "/blog") ?? { label: "Blog", href: "/blog" };

  return (
    <>
      <PageBanner title={title} breadcrumb={title} parent={blog} />
      <article>
        <ArticleHeader post={post} />
        <ArticleBody post={post} />
      </article>
    </>
  );
}
