import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { Highlights } from "@/components/sections/Highlights";
import { AboutUs } from "@/components/sections/AboutUs";
import { FoodMenu } from "@/components/sections/FoodMenu";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.RestaurantHero1} company={commonData.company} ui={commonData.globalUI} />
      <Highlights data={sectionData.Highlights?.variants?.RestaurantHighlights1} company={commonData.company} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.RestaurantAboutUs1} />
      <FoodMenu data={sectionData.FoodMenu?.variants?.RestaurantFoodMenu1} />
      <Testimonials data={sectionData.Testimonials?.variants?.RestaurantTestimonials1} reviews={sectionData.TestimonialListing?.variants?.RestaurantTestimonialListing1} ui={commonData.globalUI} />
      <GalleryPreview data={sectionData.GalleryPreview?.variants?.RestaurantGalleryPreview1} ui={commonData.globalUI} />
      <BlogPreview data={sectionData.BlogPreview?.variants?.RestaurantBlogPreview1} blogs={sectionData.Blogs?.variants?.RestaurantBlogs1} />
    </main>
  );
}
