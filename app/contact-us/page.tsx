import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { Locations } from "@/components/sections/Locations";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.contactBreadcrumb?.seoTitle ?? commonData.contactBreadcrumb?.title, description: commonData.contactBreadcrumb?.description };

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.RestaurantContact1} company={commonData.company} />
      <ContactForm data={sectionData.ContactForm?.variants?.RestaurantContactForm1} ui={commonData.globalUI} />
      <Locations data={sectionData.Locations?.variants?.RestaurantLocations1} company={commonData.company} ui={commonData.globalUI} />
    </main>
  );
}
