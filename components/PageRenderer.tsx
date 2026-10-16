import type { ComponentType } from "react";
import type { Metadata } from "next";
import siteData, { type SectionProps, type VeloraBlogPost } from "@/data";
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

type Entry = { key: string; component: string };
type PageConfig = { expand?: string; components: Entry[] };
type TemplateConfig = { shared: Record<string, string>; pages: Record<string, PageConfig> };
type VariantData = Record<string, unknown>;

/** Extra props the renderer adds on top of the ai-builder `SectionProps`. */
type RendererProps = {
  /** The list item an `expand: "items"` page is rendered for (the blog post on `/blog/[slug]`). */
  item?: VeloraBlogPost;
  /** PageBanner only: taken from the `bannerTitle` / `parent` of the page's own section. */
  title?: string;
  breadcrumb?: string;
  parent?: { label: string; href: string };
};

// The props the renderer passes; `data: never` lets every `SectionProps<T>` component register whatever its T is.
type SectionComponent = ComponentType<Pick<SectionProps<never>, "data"> & RendererProps>;

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

const { templateComponents, sections } = siteData.Velora;
// site.json holds a single template, like the other ai-builder templates.
const template = Object.values(templateComponents)[0] as TemplateConfig;

function sectionData({ key, component }: Entry): VariantData {
  const all = sections as unknown as Record<string, { variants: Record<string, VariantData> }>;
  return all[key]?.variants[component] ?? {};
}

function getPage(page: string): PageConfig {
  const config = template.pages[page];
  if (!config) throw new Error(`Page "${page}" is missing from templateComponents.pages`);
  return config;
}

/** The first `field` found on the page's sections, e.g. its `bannerTitle`. */
function pageField<T>(config: PageConfig, field: string): T | undefined {
  for (const entry of config.components) {
    const value = sectionData(entry)[field];
    if (value !== undefined) return value as T;
  }
}

function renderEntry(entry: Entry, extra: RendererProps, index = 0) {
  const Component = registry[entry.component];
  if (!Component) throw new Error(`No component registered for "${entry.component}" (section "${entry.key}") in PageRenderer`);
  return <Component key={`${entry.key}-${entry.component}-${index}`} data={sectionData(entry) as never} {...extra} />;
}

/** Header / Footer from `templateComponents.<template>.shared`. */
export function SharedSection({ slot }: { slot: string }) {
  const component = template.shared[slot];
  return component ? renderEntry({ key: slot, component }, {}) : null;
}

/** Renders a page's sections in the order listed in `templateComponents.<template>.pages.<page>`. */
export default function PageRenderer({ page, item }: { page: string; item?: VeloraBlogPost }) {
  const config = getPage(page);
  // The banner shows the page section's `bannerTitle`, or the item's short title on an expanded page.
  const bannerTitle = pageField<string>(config, "bannerTitle") ?? item?.shortTitle ?? "";
  const banner = { title: bannerTitle, breadcrumb: bannerTitle, parent: pageField<RendererProps["parent"]>(config, "parent") };

  return <>{config.components.map((entry, i) => renderEntry(entry, entry.key === "PageBanner" ? banner : { item }, i))}</>;
}

export function pageMetadata(page: string): Metadata {
  const title = pageField<string>(getPage(page), "bannerTitle");
  return title ? { title } : {};
}
