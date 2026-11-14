import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialListing } from "@/components/sections/TestimonialListing";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialListing data={sectionData.TestimonialListing?.variants?.RestaurantTestimonialListing1} />
    </main>
  );
}
