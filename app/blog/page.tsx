import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.blogsBreadcrumb?.seoTitle ?? commonData.blogsBreadcrumb?.title, description: commonData.blogsBreadcrumb?.description };

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.RestaurantBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
