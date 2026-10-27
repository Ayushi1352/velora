import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ChefsSection from "@/components/ChefsSection";
import { site } from "@/data";

const { bannerTitle: title } = site.chefsPage;

export const metadata: Metadata = { title };

export default function OurChefsPage() {
  return (
    <>
      <PageBanner title={title} />
      <ChefsSection />
    </>
  );
}
