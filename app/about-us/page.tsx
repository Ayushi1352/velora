import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { RestaurantTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.RestaurantAboutUs2} layout="page" />
      <Services data={sectionData.Services?.variants?.RestaurantServices1} />
    </main>
  );
}
