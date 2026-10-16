import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  return <PageRenderer page="gallery" />;
}
