import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("blog");

export default function BlogPage() {
  return <PageRenderer page="blog" />;
}
