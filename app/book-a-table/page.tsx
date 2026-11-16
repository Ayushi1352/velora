import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { RestaurantTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Booking } from '@/components/sections/Booking';

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.bookingBreadcrumb?.seo };

export default function BookATablePage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.bookingBreadcrumb} ui={commonData.globalUI} />
      <Booking data={sectionData.Booking?.variants?.RestaurantBooking1} />
    </main>
  );
}
