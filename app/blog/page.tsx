import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogListing from "@/components/BlogListing";
import { site } from "@/data";

const { bannerTitle: title } = site.blogPage;

export const metadata: Metadata = { title };

export default function BlogPage() {
  return (
    <>
      <PageBanner title={title} />
      <BlogListing />
    </>
  );
}
