import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Booking from "@/components/Booking";
import { site } from "@/data";

const { bannerTitle: title } = site.bookingPage;

export const metadata: Metadata = { title };

export default function BookATablePage() {
  return (
    <>
      <PageBanner title={title} />
      <Booking />
    </>
  );
}
