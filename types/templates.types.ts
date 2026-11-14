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

/** Only the breadcrumb reads these; every section keeps its own labels in its data. */
export interface GlobalUIData {
  breadcrumbLabel: string;
}

/** Screen-reader labels for the page numbers under a paged list; "{n}" is the page number. */
export interface PaginationLabels {
  paginationLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pageLabel: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  label: string;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
}

/** Page title and description for the browser tab and search results (spread into a page's metadata). */
export interface SeoData {
  title: string;
  description: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
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
  seo: SeoData;
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
  menuLabel: string;
  logoLabel: string;
  address: string[];
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
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
  logoLabel: string;
  menuLabel: string;
  mobileMenuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  highlights: string[];
  button: LinkData;
  image: SizedImageData;
  banner: ImageData;
  sectionLabel: string;
}

export interface HighlightItem {
  title: string;
  icon: string;
  image: ImageData;
}

export interface HighlightsData {
  items: HighlightItem[];
  sectionLabel: string;
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
  /** "{rating}" is the guest's star rating */
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  /** "{n}" is the slide number */
  showSlideLabel: string;
}

export interface GalleryPreviewData {
  label: string;
  href: string;
  titleLine1: string;
  titleLine2: string;
  images: ImageData[];
  viewGalleryLabel: string;
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
  categoriesLabel: string;
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

export interface GalleryData extends PaginationLabels {
  intro: SectionIntroData;
  filters: string[];
  images: GalleryImage[];
  perPage: number;
  categoriesLabel: string;
  /** "{name}" is the image's alt text */
  openImageLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  image: ImageData;
}

export interface TestimonialListingData extends PaginationLabels {
  intro: SectionIntroData;
  items: Testimonial[];
  perPage: number;
  /** "{rating}" is the guest's star rating */
  ratingLabel: string;
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

export interface BlogsData extends PaginationLabels {
  intro: SectionIntroData;
  meta: BlogMetaLabels;
  perPage: number;
  items: BlogPost[];
  /** "{title}" is the post title */
  readPostLabel: string;
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
  closeMessageLabel: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  lines: string[];
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
  closeMessageLabel: string;
}

export interface LocationItem {
  city: string;
  address: string[];
  phone: string;
  email: string;
  mapQuery: string;
}

export interface LocationsData {
  label: string;
  titleLine1: string;
  titleLine2: string;
  directionLabel: string;
  items: LocationItem[];
  /** Place shown on the embedded map */
  mapQuery: string;
  mapLabel: string;
}

// ── Component props ──

export interface HeaderProps {
  data?: HeaderData;
}

export interface FooterProps {
  data?: FooterData;
}

export interface FooterLinksProps {
  links: NavLink[];
  label?: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface HighlightsProps {
  data?: HighlightsData;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** "page" is the About Us page version of the section */
  layout?: "home" | "page";
}

export interface FoodMenuProps {
  data?: FoodMenuData;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
  /** The Testimonials page reviews; the home slider only names its guests, so both always match. */
  reviews?: TestimonialListingData;
}

export interface GalleryPreviewProps {
  data?: GalleryPreviewData;
}

export interface BlogPreviewProps {
  data?: BlogPreviewData;
  blogs?: BlogsData;
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface MenuProps {
  data?: MenuData;
}

export interface ChefsProps {
  data?: ChefsData;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface TestimonialListingProps {
  data?: TestimonialListingData;
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface BlogDetailProps {
  data?: BlogDetailData;
  blogs?: BlogsData;
}

export interface BookingProps {
  data?: BookingData;
}

export interface ContactProps {
  data?: ContactData;
}

export interface ContactFormProps {
  data?: ContactFormData;
}

export interface LocationsProps {
  data?: LocationsData;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface RestaurantSections {
  Header?: { variants?: { RestaurantHeader1?: HeaderData } };
  Hero?: { variants?: { RestaurantHero1?: HeroData } };
  Highlights?: { variants?: { RestaurantHighlights1?: HighlightsData } };
  AboutUs?: { variants?: { RestaurantAboutUs1?: AboutUsData; RestaurantAboutUs2?: AboutUsData } };
  FoodMenu?: { variants?: { RestaurantFoodMenu1?: FoodMenuData } };
  Testimonials?: { variants?: { RestaurantTestimonials1?: TestimonialsData } };
  GalleryPreview?: { variants?: { RestaurantGalleryPreview1?: GalleryPreviewData } };
  BlogPreview?: { variants?: { RestaurantBlogPreview1?: BlogPreviewData } };
  Services?: { variants?: { RestaurantServices1?: ServicesData } };
  Menu?: { variants?: { RestaurantMenu1?: MenuData } };
  Chefs?: { variants?: { RestaurantChefs1?: ChefsData } };
  Gallery?: { variants?: { RestaurantGallery1?: GalleryData } };
  TestimonialListing?: { variants?: { RestaurantTestimonialListing1?: TestimonialListingData } };
  Blogs?: { variants?: { RestaurantBlogs1?: BlogsData } };
  BlogDetail?: { variants?: { RestaurantBlogDetail1?: BlogDetailData } };
  Booking?: { variants?: { RestaurantBooking1?: BookingData } };
  Contact?: { variants?: { RestaurantContact1?: ContactData } };
  ContactForm?: { variants?: { RestaurantContactForm1?: ContactFormData } };
  Locations?: { variants?: { RestaurantLocations1?: LocationsData } };
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface RestaurantTemplateData {
  common: CommonData;
  categories: {
    Restaurant: {
      templateComponents?: TemplateComponentsData;
      sections: RestaurantSections;
    };
  };
}
