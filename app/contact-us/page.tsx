import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("contact-us");

export default function ContactUsPage() {
  return <PageRenderer page="contact-us" />;
}
