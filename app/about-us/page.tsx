import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutStory from "@/components/AboutStory";
import Services from "@/components/Services";
import { site } from "@/data";

const { bannerTitle: title } = site.aboutStorySection;

export const metadata: Metadata = { title };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <AboutStory />
      <Services />
    </>
  );
}
