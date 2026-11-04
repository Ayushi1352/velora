export interface ThemeFonts {
  display: string;
  accent: string;
  heading: string;
  body: string;
  ui: string;
  label: string;
  signature: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  mainNav: string;
  mobileNav: string;
  openMenu: string;
  closeMenu: string;
  footerNav: string;
  breadcrumb: string;
  welcome: string;
  whyChoose: string;
  viewGallery: string;
  menuCategories: string;
  galleryCategories: string;
  viewImage: string;
  close: string;
  previousImage: string;
  nextImage: string;
  rating: string;
  previousTestimonial: string;
  nextTestimonial: string;
  showTestimonial: string;
  pagination: string;
  previousPage: string;
  nextPage: string;
  page: string;
  readPost: string;
  closeMessage: string;
  mapTitle: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  label: string;
}

export interface CompanyData {
  name: string;
  address: string[];
  phone: string;
  email: string;
  mapQuery: string;
  socialLinks: SocialLink[];
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  description: string;
  /** Page title for the browser tab when it differs from the banner title. */
  seoTitle?: string;
  paths: BreadcrumbPath[];
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface SizedImageData extends ImageData {
  width: number;
  height: number;
}

export interface LinkData {
  label: string;
  href: string;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface NotFoundData {
  title: string;
  code: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  button: LinkData;
}

export interface FooterData {
  logo: SizedImageData;
  logoUrl: string;
  titleLine1: string;
  titleLine2: string;
  text: string[];
  links: NavLink[];
  copyright: string;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  company: CompanyData;
  aboutBreadcrumb?: BreadcrumbData;
  menuBreadcrumb?: BreadcrumbData;
  chefsBreadcrumb?: BreadcrumbData;
  galleryBreadcrumb?: BreadcrumbData;
  testimonialsBreadcrumb?: BreadcrumbData;
  blogsBreadcrumb?: BreadcrumbData;
  blogDetailBreadcrumb?: BreadcrumbData;
  bookingBreadcrumb?: BreadcrumbData;
  contactBreadcrumb?: BreadcrumbData;
  notFound?: NotFoundData;
  Footer?: FooterData;
}

export interface HeaderData {
  logo: SizedImageData;
  logoUrl: string;
  nav: NavLink[];
  button: LinkData;
}

export interface HeroData {
  title: string;
  subtitle: string;
  highlights: string[];
  button: LinkData;
  image: SizedImageData;
  banner: ImageData;
}

export interface HighlightItem {
  title: string;
  icon: string;
  image: ImageData;
}

export interface HighlightsData {
  items: HighlightItem[];
}

export interface AboutUsData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  button?: LinkData;
  imageLeft: ImageData;
  imageRight: ImageData;
}

export interface FoodMenuCategory {
  title: string;
  icon: string;
  href: string;
  image: ImageData;
}

export interface FoodMenuData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  button: LinkData;
  categories: FoodMenuCategory[];
}

export interface TestimonialsData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  /** Names of the guests (from TestimonialListing) shown in the home slider. */
  featured: string[];
}

export interface GalleryPreviewData {
  label: string;
  href: string;
  titleLine1: string;
  titleLine2: string;
  images: ImageData[];
}

export interface BlogPreviewCard {
  /** Slug of a post in Blogs; title, date and category come from that post. */
  slug: string;
  image: ImageData;
}

export interface BlogPreviewData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  readMore: string;
  posts: BlogPreviewCard[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
}

export interface ServicesData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  items: ServiceItem[];
  images: {
    main: ImageData;
    top: ImageData;
    bottom: ImageData;
  };
}

export interface SectionIntroData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
}

export interface MultiLineIntroData extends Omit<SectionIntroData, "text"> {
  text: string[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  id: string;
  tab: string;
  label: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  image: SizedImageData;
  items: MenuItem[];
  showByDefault: boolean;
}

export interface MenuData {
  intro: SectionIntroData;
  sections: MenuSection[];
}

export interface Chef {
  name: string;
  role: string;
  text: string;
  image: ImageData;
}

export interface ChefsData {
  intro: SectionIntroData;
  chefs: Chef[];
}

export interface GalleryImage extends ImageData {
  category: string;
}

export interface GalleryData {
  intro: SectionIntroData;
  filters: string[];
  images: GalleryImage[];
  perPage: number;
}

export interface Testimonial {
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  image: ImageData;
}

export interface TestimonialListingData {
  intro: SectionIntroData;
  items: Testimonial[];
  perPage: number;
}

export interface BlogMetaLabels {
  by: string;
  comments: string;
}

export interface BlogPost {
  slug: string;
  href: string;
  shortTitle: string;
  titleLine1: string;
  titleLine2: string;
  author: string;
  comments: number;
  date: string;
  category: string;
  excerpt: string;
  thumbnail: ImageData;
  cover: ImageData;
  content: string[];
  highlights: string[];
  image: ImageData;
  quote: {
    text: string;
    author: string;
  };
  closing: string;
}

export interface BlogsData {
  intro: SectionIntroData;
  meta: BlogMetaLabels;
  perPage: number;
  items: BlogPost[];
}

export interface BlogDetailData {
  meta: Pick<BlogMetaLabels, "by">;
}

export interface FormSubmitLabels {
  button: string;
  sending: string;
  successTitle: string;
  success: string;
}

export interface BookingFormData extends FormSubmitLabels {
  title: string;
  text: string;
  fields: Record<"name" | "email" | "phone" | "guests" | "date" | "time" | "message", string>;
  guestOptions: string[];
  timeOptions: string[];
}

export interface BookingFeature {
  icon: string;
  title: string;
  text: string;
}

export interface BookingData {
  intro: MultiLineIntroData;
  image: ImageData;
  form: BookingFormData;
  features: BookingFeature[];
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  /** Shows this field of common.company instead of `lines`. */
  contactKey?: string;
  lines?: string[];
}

export interface ContactData {
  intro: MultiLineIntroData;
  info: ContactInfoItem[];
  image: ImageData;
}

export interface ContactFormFields extends FormSubmitLabels {
  title: string;
  text: string;
  fields: Record<"name" | "email" | "phone" | "subject" | "message", string>;
  subjects: string[];
}

export interface ContactFormData {
  form: ContactFormFields;
  special: {
    image: ImageData;
    title: string;
    text: string;
  };
}

export interface LocationItem {
  city: string;
  /** The main location shows common.company's address, phone and email. */
  isMain?: boolean;
  address?: string[];
  phone?: string;
  email?: string;
  mapQuery?: string;
}

export interface LocationsData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  directionLabel: string;
  items: LocationItem[];
}

type Section<Variant extends string, Data> = {
  variants?: { [Name in Variant]?: Data };
};

export interface RestaurantSections {
  Header?: Section<"RestaurantHeader1", HeaderData>;
  Hero?: Section<"RestaurantHero1", HeroData>;
  Highlights?: Section<"RestaurantHighlights1", HighlightsData>;
  AboutUs?: Section<"RestaurantAboutUs1" | "RestaurantAboutUs2", AboutUsData>;
  FoodMenu?: Section<"RestaurantFoodMenu1", FoodMenuData>;
  Testimonials?: Section<"RestaurantTestimonials1", TestimonialsData>;
  GalleryPreview?: Section<"RestaurantGalleryPreview1", GalleryPreviewData>;
  BlogPreview?: Section<"RestaurantBlogPreview1", BlogPreviewData>;
  Services?: Section<"RestaurantServices1", ServicesData>;
  Menu?: Section<"RestaurantMenu1", MenuData>;
  Chefs?: Section<"RestaurantChefs1", ChefsData>;
  Gallery?: Section<"RestaurantGallery1", GalleryData>;
  TestimonialListing?: Section<"RestaurantTestimonialListing1", TestimonialListingData>;
  Blogs?: Section<"RestaurantBlogs1", BlogsData>;
  BlogDetail?: Section<"RestaurantBlogDetail1", BlogDetailData>;
  Booking?: Section<"RestaurantBooking1", BookingData>;
  Contact?: Section<"RestaurantContact1", ContactData>;
  ContactForm?: Section<"RestaurantContactForm1", ContactFormData>;
  Locations?: Section<"RestaurantLocations1", LocationsData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponents {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface RestaurantCategory {
  sections: RestaurantSections;
  templateComponents: TemplateComponents;
}

export interface RestaurantTemplateData {
  common: CommonData;
  categories: {
    Restaurant: RestaurantCategory;
  };
}
