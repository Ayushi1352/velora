import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type VeloraSchema = typeof siteData.Velora;
export type VeloraSettings = VeloraSchema["settings"];
export type VeloraSections = VeloraSchema["sections"];
export type VeloraTemplateComponents = VeloraSchema["templateComponents"];

// ── Strongly Typed Section Variant Data Models ──
export type VeloraHeaderData = VeloraSections["Header"]["variants"]["VeloraHeader1"];
export type VeloraFooterData = VeloraSections["Footer"]["variants"]["VeloraFooter1"];
export type VeloraPageBannerData = VeloraSections["PageBanner"]["variants"]["VeloraPageBanner1"] & {
  parent?: { label: string; href: string };
};
export type VeloraHeroData = VeloraSections["Hero"]["variants"]["VeloraHero1"];
export type VeloraHighlightsData =
  VeloraSections["Highlights"]["variants"]["VeloraHighlights1"];
export type VeloraStoryData = VeloraSections["Story"]["variants"]["VeloraStory1"];
export type VeloraStory2Data = VeloraSections["Story"]["variants"]["VeloraStory2"];
export type VeloraFoodMenuData = VeloraSections["FoodMenu"]["variants"]["VeloraFoodMenu1"];
export type VeloraTestimonialData =
  VeloraSections["Testimonial"]["variants"]["VeloraTestimonial1"];
export type VeloraGalleryPreviewData =
  VeloraSections["GalleryPreview"]["variants"]["VeloraGalleryPreview1"];
export type VeloraBlogData = VeloraSections["Blog"]["variants"]["VeloraBlog1"];
export type VeloraServicesData = VeloraSections["Services"]["variants"]["VeloraServices1"];
export type VeloraMenuPageData =
  VeloraSections["MenuListing"]["variants"]["VeloraMenuPage1"];
export type VeloraChefsData = VeloraSections["Chefs"]["variants"]["VeloraChefs1"];
export type VeloraGalleryData = VeloraSections["Gallery"]["variants"]["VeloraGallery1"];
export type VeloraTestimonialsPageData =
  VeloraSections["TestimonialListing"]["variants"]["VeloraTestimonialsPage1"];
export type VeloraBlogPageData =
  VeloraSections["BlogListing"]["variants"]["VeloraBlogPage1"];
export type VeloraBlogDetailData =
  VeloraSections["BlogDetail"]["variants"]["VeloraBlogDetail1"];
export type VeloraBookingData = VeloraSections["Booking"]["variants"]["VeloraBooking1"];
export type VeloraContactData =
  VeloraSections["ContactDetails"]["variants"]["VeloraContact1"];
export type VeloraContactFormData =
  VeloraSections["ContactForm"]["variants"]["VeloraContactForm1"];
export type VeloraLocationsData =
  VeloraSections["Locations"]["variants"]["VeloraLocations1"];

// ── Item-level types inferred from site.json ──
export type VeloraNavLink = VeloraHeaderData["navigation"][number];
export type VeloraSocialLink = VeloraFooterData["socials"][number];
export type VeloraContactDetails = VeloraSettings["contact"];
export type VeloraMenuCategory = VeloraFoodMenuData["categories"][number];
export type VeloraMenuSection = VeloraMenuPageData["sections"][number];
export type VeloraMenuItem = VeloraMenuSection["items"][number];
export type VeloraChef = VeloraChefsData["chefs"][number];
export type VeloraTestimonialItem = VeloraTestimonialsPageData["items"][number];
export type VeloraGalleryImage = VeloraGalleryData["images"][number];
export type VeloraBlogPost = VeloraBlogPageData["items"][number];
export type VeloraLocation = VeloraLocationsData["items"][number];

// ── Props every section component receives from the PageRenderer ──
export type SectionComponentProps<T> = {
  /** The section variant from `sections`, merged with the page entry's own `data`. */
  data: T;
  /** Site-wide brand, SEO and contact details (`settings` in site.json). */
  settings: VeloraSettings;
  /** The current list item on an expanded page (e.g. the blog post on `/blog/[slug]`). */
  item?: VeloraBlogPost;
};

// ── Page composition (templateComponents) ──
export type PageComponentEntry = {
  key: string;
  component: string;
  data?: Record<string, unknown>;
};

export type PageConfig = {
  seo?: { title?: string; description?: string };
  components: PageComponentEntry[];
};

type TemplateConfig = {
  shared: Record<string, string>;
  pages: Record<string, PageConfig>;
};

const velora = siteData.Velora;

export const settings: VeloraSettings = velora.settings;
export const sections: VeloraSections = velora.sections;

const templates = velora.templateComponents as Record<string, TemplateConfig>;
export const template: TemplateConfig = templates[velora.activeTemplate];

/** Data of one section variant, e.g. `getSectionData("Hero", "VeloraHero1")`. */
export function getSectionData(key: string, variant: string): Record<string, unknown> {
  const all = sections as unknown as Record<string, { variants: Record<string, Record<string, unknown>> }>;
  return all[key]?.variants[variant] ?? {};
}

export function getPage(page: string): PageConfig {
  const config = template.pages[page];
  if (!config) throw new Error(`Page "${page}" is missing from templateComponents.${velora.activeTemplate}.pages`);
  return config;
}

/** All blog posts; used by the blog listing, the home "latest blogs" cards and the blog detail page. */
export const blogPosts: VeloraBlogPost[] = sections.BlogListing.variants.VeloraBlogPage1.items;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export default siteData;
