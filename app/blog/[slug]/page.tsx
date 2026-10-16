import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data";
import PageRenderer from "@/components/PageRenderer";

function getPost(slug: string) {
  return site.blogPage.items.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return site.blogPage.items.map((post) => ({ slug: post.slug }));
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

  return <PageRenderer page="blog-detail" item={post} />;
}
