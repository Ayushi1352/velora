import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactDetails from "@/components/ContactDetails";
import MessageSection from "@/components/MessageSection";
import OfficeLocations from "@/components/OfficeLocations";
import { site } from "@/data";

const { bannerTitle: title } = site.contactPage;

export const metadata: Metadata = { title };

export default function ContactUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <ContactDetails />
      <MessageSection />
      <OfficeLocations />
    </>
  );
}
