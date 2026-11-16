import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { RestaurantTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Blogs } from '@/components/sections/Blogs';

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.blogsBreadcrumb?.seo };

export default function BlogPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.RestaurantBlogs1} showAll />
    </main>
  );
}
