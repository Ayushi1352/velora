import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { Locations } from "@/components/sections/Locations";

export const metadata: Metadata = { ...(rawData as RestaurantTemplateData).common.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.RestaurantContact1} />
      <ContactForm data={sectionData.ContactForm?.variants?.RestaurantContactForm1} />
      <Locations data={sectionData.Locations?.variants?.RestaurantLocations1} />
    </main>
  );
}
