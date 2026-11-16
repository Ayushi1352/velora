import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { RestaurantTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.blogDetailBreadcrumb?.seo };

export default function BlogDetailPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const blogData = sectionData.Blogs?.variants?.RestaurantBlogs1;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={blogData} postId={blogData?.detailPostId} />
    </main>
  );
}
