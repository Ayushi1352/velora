import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import MenuPage from "@/components/MenuPage";
import { site } from "@/data";

const { bannerTitle: title } = site.menuPage;

export const metadata: Metadata = { title };

export default function OurMenuPage() {
  return (
    <>
      <PageBanner title={title} />
      <MenuPage />
    </>
  );
}
