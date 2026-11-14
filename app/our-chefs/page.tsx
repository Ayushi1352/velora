import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Chefs } from "@/components/sections/Chefs";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.chefsBreadcrumb?.seo };

export default function OurChefsPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.chefsBreadcrumb} ui={commonData.globalUI} />
      <Chefs data={sectionData.Chefs?.variants?.RestaurantChefs1} />
    </main>
  );
}
