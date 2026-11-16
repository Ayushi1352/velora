import rawData from '@/data/templates.json';
import type { RestaurantTemplateData } from '@/types/templates.types';
import { HeroSection } from '@/components/sections/HeroSection';
import { Highlights } from '@/components/sections/Highlights';
import { AboutUs } from '@/components/sections/AboutUs';
import { FoodMenu } from '@/components/sections/FoodMenu';
import { Testimonials } from '@/components/sections/Testimonials';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { Blogs } from '@/components/sections/Blogs';

export default function HomePage() {
  const templateData: RestaurantTemplateData = rawData;
  const sectionData = templateData?.categories?.Restaurant?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.RestaurantHero1} />
      <Highlights data={sectionData.Highlights?.variants?.RestaurantHighlights1} />
      <AboutUs data={sectionData.AboutUs?.variants?.RestaurantAboutUs1} />
      <FoodMenu data={sectionData.FoodMenu?.variants?.RestaurantFoodMenu1} />
      <Testimonials data={sectionData.Testimonials?.variants?.RestaurantTestimonials1} />
      <GalleryPreview data={sectionData.GalleryPreview?.variants?.RestaurantGalleryPreview1} />
      <Blogs data={sectionData.Blogs?.variants?.RestaurantBlogs1} />
    </main>
  );
}
