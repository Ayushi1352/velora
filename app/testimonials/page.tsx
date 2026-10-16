import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("testimonials");

export default function TestimonialsPage() {
  return <PageRenderer page="testimonials" />;
}
