import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: RestaurantTemplateData = rawData;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.notFound?.title };

export default function NotFoundPage() {
  return (
    <main className="flex-1">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
