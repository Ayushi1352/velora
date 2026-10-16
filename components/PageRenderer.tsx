import type { ComponentType } from "react";
import type { Metadata } from "next";
import { getPage, getSectionData, settings, template, type PageComponentEntry, type SectionComponentProps } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import OurStory from "@/components/OurStory";
import AboutStory from "@/components/AboutStory";
import FoodMenu from "@/components/FoodMenu";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import LatestBlogs from "@/components/LatestBlogs";
import Services from "@/components/Services";
import MenuPage from "@/components/MenuPage";
import ChefsSection from "@/components/ChefsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsListing from "@/components/TestimonialsListing";
import BlogListing from "@/components/BlogListing";
import BlogDetail from "@/components/BlogDetail";
import Booking from "@/components/Booking";
import ContactDetails from "@/components/ContactDetails";
import MessageSection from "@/components/MessageSection";
import OfficeLocations from "@/components/OfficeLocations";

// `never` lets every section component register here whatever its own data type is.
type SectionComponent = ComponentType<SectionComponentProps<never>>;

/** Component names used in site.json (`templateComponents` and `sections.*.variants`) → React components. */
const registry: Record<string, SectionComponent> = {
  VeloraHeader1: Navbar,
  VeloraFooter1: Footer,
  VeloraPageBanner1: PageBanner,
  VeloraHero1: Hero,
  VeloraHighlights1: Highlights,
  VeloraStory1: OurStory,
  VeloraStory2: AboutStory,
  VeloraFoodMenu1: FoodMenu,
  VeloraTestimonial1: Testimonials,
  VeloraGalleryPreview1: GalleryPreview,
  VeloraBlog1: LatestBlogs,
  VeloraServices1: Services,
  VeloraMenuPage1: MenuPage,
  VeloraChefs1: ChefsSection,
  VeloraGallery1: GallerySection,
  VeloraTestimonialsPage1: TestimonialsListing,
  VeloraBlogPage1: BlogListing,
  VeloraBlogDetail1: BlogDetail,
  VeloraBooking1: Booking,
  VeloraContact1: ContactDetails,
  VeloraContactForm1: MessageSection,
  VeloraLocations1: OfficeLocations,
};

function renderEntry({ key, component, data }: PageComponentEntry, item?: SectionComponentProps<never>["item"], index = 0) {
  const Component = registry[component];
  if (!Component) throw new Error(`No component registered for "${component}" (section "${key}") in PageRenderer`);
  const merged = { ...getSectionData(key, component), ...data };
  return <Component key={`${key}-${component}-${index}`} data={merged as never} settings={settings} item={item} />;
}

/** Header / Footer from `templateComponents.<activeTemplate>.shared`. */
export function SharedSection({ slot }: { slot: string }) {
  const component = template.shared[slot];
  return component ? renderEntry({ key: slot, component }) : null;
}

/** Renders a page's sections in the order listed in `templateComponents.<activeTemplate>.pages.<page>`. */
export default function PageRenderer({ page, item }: { page: string; item?: SectionComponentProps<never>["item"] }) {
  return <>{getPage(page).components.map((entry, i) => renderEntry(entry, item, i))}</>;
}

export function pageMetadata(page: string): Metadata {
  const { seo } = getPage(page);
  // Only set what the page defines, so the rest falls back to `settings.seo` in the root layout.
  return {
    ...(seo?.title && { title: seo.title }),
    ...(seo?.description && { description: seo.description }),
  };
}
