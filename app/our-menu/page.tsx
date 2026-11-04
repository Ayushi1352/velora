import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Menu } from "@/components/sections/Menu";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.menuBreadcrumb?.seoTitle ?? commonData.menuBreadcrumb?.title, description: commonData.menuBreadcrumb?.description };

export default function OurMenuPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.menuBreadcrumb} ui={commonData.globalUI} />
      <Menu data={sectionData.Menu?.variants?.RestaurantMenu1} ui={commonData.globalUI} />
    </main>
  );
}
