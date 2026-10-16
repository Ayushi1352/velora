import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("about-us");

export default function AboutUsPage() {
  return <PageRenderer page="about-us" />;
}
