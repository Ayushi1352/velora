import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Menu } from "@/components/sections/Menu";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.menuBreadcrumb?.seo };

export default function OurMenuPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.menuBreadcrumb} ui={commonData.globalUI} />
      <Menu data={sectionData.Menu?.variants?.RestaurantMenu1} />
    </main>
  );
}
