import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.galleryBreadcrumb?.seo };

export default function GalleryPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.RestaurantGallery1} />
    </main>
  );
}
