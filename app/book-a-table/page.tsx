import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Booking } from "@/components/sections/Booking";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.bookingBreadcrumb?.seoTitle ?? commonData.bookingBreadcrumb?.title, description: commonData.bookingBreadcrumb?.description };

export default function BookATablePage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.bookingBreadcrumb} ui={commonData.globalUI} />
      <Booking data={sectionData.Booking?.variants?.RestaurantBooking1} ui={commonData.globalUI} />
    </main>
  );
}
