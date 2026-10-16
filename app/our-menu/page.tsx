import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("our-menu");

export default function OurMenuPage() {
  return <PageRenderer page="our-menu" />;
}
