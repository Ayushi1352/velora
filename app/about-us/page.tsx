import type { Metadata } from "next";
import site from "@/data/site.json";
import PageBanner from "@/components/PageBanner";
import AboutStory from "@/components/AboutStory";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: site.about.banner.title,
};

export default function AboutUsPage() {
  const { banner } = site.about;

  return (
    <>
      <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />
      <AboutStory />
      <Services />
    </>
  );
}
