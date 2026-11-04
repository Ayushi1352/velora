import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.blogDetailBreadcrumb?.seoTitle ?? commonData.blogDetailBreadcrumb?.title, description: commonData.blogDetailBreadcrumb?.description };

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.RestaurantBlogDetail1} blogs={sectionData.Blogs?.variants?.RestaurantBlogs1} />
    </main>
  );
}
