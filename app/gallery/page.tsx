import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import GallerySection from "@/components/GallerySection";
import { site } from "@/data";

const { bannerTitle: title } = site.galleryPage;

export const metadata: Metadata = { title };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title={title} />
      <GallerySection />
    </>
  );
}
