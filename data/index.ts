import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type VeloraSchema = typeof siteData.Velora;
export type VeloraSections = VeloraSchema["sections"];
export type VeloraTemplateComponents = VeloraSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type VeloraHeaderData = VeloraSections["Header"]["variants"]["VeloraHeader1"];
export type VeloraFooterData = VeloraSections["Footer"]["variants"]["VeloraFooter1"];
export type VeloraPageBannerData =
  VeloraSections["PageBanner"]["variants"]["VeloraPageBanner1"];
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
export type VeloraContactDetails = VeloraFooterData["contact"];
export type VeloraMenuCategory = VeloraFoodMenuData["categories"][number];
export type VeloraMenuSection = VeloraMenuPageData["sections"][number];
export type VeloraMenuItem = VeloraMenuSection["items"][number];
export type VeloraChef = VeloraChefsData["chefs"][number];
export type VeloraTestimonialItem = VeloraTestimonialsPageData["items"][number];
export type VeloraGalleryImage = VeloraGalleryData["images"][number];
export type VeloraBlogPost = VeloraBlogPageData["items"][number];
export type VeloraLocation = VeloraLocationsData["items"][number];

// ── Legacy Site Map for Standalone Velora Site ──
const sec = siteData.Velora.sections;

const site = {
  navbar: sec.Header.variants.VeloraHeader1,
  footer: sec.Footer.variants.VeloraFooter1,
  pageBanner: sec.PageBanner.variants.VeloraPageBanner1,
  hero: sec.Hero.variants.VeloraHero1,
  highlightsSection: sec.Highlights.variants.VeloraHighlights1,
  storySection: sec.Story.variants.VeloraStory1,
  aboutStorySection: sec.Story.variants.VeloraStory2,
  foodMenuSection: sec.FoodMenu.variants.VeloraFoodMenu1,
  testimonialSection: sec.Testimonial.variants.VeloraTestimonial1,
  galleryPreviewSection: sec.GalleryPreview.variants.VeloraGalleryPreview1,
  blogSection: sec.Blog.variants.VeloraBlog1,
  servicesSection: sec.Services.variants.VeloraServices1,
  menuPage: sec.MenuListing.variants.VeloraMenuPage1,
  chefsPage: sec.Chefs.variants.VeloraChefs1,
  galleryPage: sec.Gallery.variants.VeloraGallery1,
  testimonialsPage: sec.TestimonialListing.variants.VeloraTestimonialsPage1,
  blogPage: sec.BlogListing.variants.VeloraBlogPage1,
  blogDetailPage: sec.BlogDetail.variants.VeloraBlogDetail1,
  bookingPage: sec.Booking.variants.VeloraBooking1,
  contactPage: sec.ContactDetails.variants.VeloraContact1,
  contactFormSection: sec.ContactForm.variants.VeloraContactForm1,
  locationsSection: sec.Locations.variants.VeloraLocations1,
  Velora: siteData.Velora,
};

export type SiteData = typeof site;
export { site };
export default siteData;
