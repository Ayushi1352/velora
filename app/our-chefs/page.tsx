import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("our-chefs");

export default function OurChefsPage() {
  return <PageRenderer page="our-chefs" />;
}
