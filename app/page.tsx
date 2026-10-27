import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import OurStory from "@/components/OurStory";
import FoodMenu from "@/components/FoodMenu";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import LatestBlogs from "@/components/LatestBlogs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <OurStory />
      <FoodMenu />
      <Testimonials />
      <GalleryPreview />
      <LatestBlogs />
    </>
  );
}
