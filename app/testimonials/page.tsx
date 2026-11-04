import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialListing } from "@/components/sections/TestimonialListing";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.testimonialsBreadcrumb?.seoTitle ?? commonData.testimonialsBreadcrumb?.title, description: commonData.testimonialsBreadcrumb?.description };

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialListing data={sectionData.TestimonialListing?.variants?.RestaurantTestimonialListing1} ui={commonData.globalUI} />
    </main>
  );
}
