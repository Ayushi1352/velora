import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TestimonialsListing from "@/components/TestimonialsListing";
import { site } from "@/data";

const { bannerTitle: title } = site.testimonialsPage;

export const metadata: Metadata = { title };

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={title} />
      <TestimonialsListing />
    </>
  );
}
