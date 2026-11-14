import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.notFound?.seo };

export default function NotFoundPage() {
  const templateData: RestaurantTemplateData = rawData;
  const commonData = templateData?.common;

  if (!commonData) return null;

  return (
    <main className="flex-1">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
