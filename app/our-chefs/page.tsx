import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Chefs } from "@/components/sections/Chefs";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.chefsBreadcrumb?.seoTitle ?? commonData.chefsBreadcrumb?.title, description: commonData.chefsBreadcrumb?.description };

export default function OurChefsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.chefsBreadcrumb} ui={commonData.globalUI} />
      <Chefs data={sectionData.Chefs?.variants?.RestaurantChefs1} />
    </main>
  );
}
