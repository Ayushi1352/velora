import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return <PageRenderer page="home" />;
}
