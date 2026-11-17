import type { CSSProperties } from 'react';

// Types for data/templates.json. Keep them in step when the JSON changes.

// ── Shared pieces ──

/** Page title and description for the browser tab and search results (spread into a page's metadata). */
export interface SeoData {
  title: string;
  description: string;
}

/** A picture with its alt text (stored flat elsewhere as `image` + `imageAlt`). */
export interface ImageItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface LinkData {
  label: string;
  url: string;
}

export interface NavLink extends LinkData {
  id: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

/** Labels and icons of the page numbers under a paged list; "{n}" is the page number. */
export interface PaginationData {
  label: string;
  previousLabel: string;
  previousIcon: string;
  nextLabel: string;
  nextIcon: string;
  pageLabel: string;
}

/** Heading of an inner page section: label, title and the gold second line. "
" in `text` starts a new line (on desktop). */
export interface SectionIntroData {
  label: string;
  title: string;
  titleHighlight: string;
  text: string;
}

/** A list item that is just a line of text. */
export interface TextItem {
  id: string;
  text: string;
}

/** Text of a form's submit button and of the thank-you message shown after it is sent. */
export interface FormSubmitLabels {
  buttonText: string;
  buttonIcon: string;
  sending: string;
  successIcon: string;
  /** "{name}" is the visitor's first name */
  successTitle: string;
  success: string;
}

// ── Common ──

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

/** CSS variables layout.tsx sets on <html> from common.theme.fonts. */
export type ThemeFontVariables = CSSProperties & {
  '--font-display': string;
  '--font-accent': string;
  '--font-heading': string;
  '--font-body': string;
  '--font-ui': string;
  '--font-label': string;
  '--font-signature': string;
};

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

/** One step of the breadcrumb trail; the last step is the current page (no url). */
export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  seo: SeoData;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface NotFoundData {
  seo: SeoData;
  code: string;
  title: string;
  titleHighlight: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface NotFoundProps {
  data?: NotFoundData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoUrl: string;
  logoLabel: string;
  title: string;
  titleHighlight: string;
  /** "
" starts a new line (from sm up) */
  description: string;
  contactItems: FooterContactItem[];
  quickLinks: FooterQuickLinks;
  /** "{year}" is the current year */
  copyrightText: string;
  socialLinks: SocialLink[];
}

/** Address, phone or email line of the footer; "
" starts a new line. Items with a url are links. */
export interface FooterContactItem {
  id: string;
  icon: string;
  text: string;
  url?: string;
}

/** The footer's page links; `title` names the list for screen readers. */
export interface FooterQuickLinks {
  title: string;
  links: NavLink[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface FooterLinksProps {
  links: NavLink[];
  label?: string;
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

// ── Sections ──

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoUrl: string;
  logoLabel: string;
  navLinks: NavLink[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  menuLabel: string;
  mobileMenuLabel: string;
  openMenuLabel: string;
  openMenuIcon: string;
  closeMenuLabel: string;
  closeMenuIcon: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  highlights: TextItem[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  bannerImage: string;
  bannerImageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface HighlightItem {
  id: string;
  title: string;
  icon: string;
  image: string;
  imageAlt: string;
}

export interface HighlightsData {
  sectionLabel: string;
  items: HighlightItem[];
}

export interface HighlightsProps {
  data?: HighlightsData;
}

export interface AboutUsData {
  label: string;
  title: string;
  titleHighlight: string;
  /** One paragraph per "
"-separated line */
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  leftImage: string;
  leftImageAlt: string;
  rightImage: string;
  rightImageAlt: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** "page" is the About Us page version of the section */
  layout?: 'home' | 'page';
}

export interface FoodMenuCategory {
  id: string;
  title: string;
  icon: string;
  url: string;
  image: string;
  imageAlt: string;
}

export interface FoodMenuData {
  label: string;
  title: string;
  titleHighlight: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  categories: FoodMenuCategory[];
}

export interface FoodMenuProps {
  data?: FoodMenuData;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  image: string;
  imageAlt: string;
}

/** Heading of a section's home page version (the full page uses `intro`). */
export interface HomeHeadingData {
  label: string;
  title: string;
  titleHighlight: string;
}

/** Every guest review; the home page slider shows `homeItemIds`, the Testimonials page shows them all. */
export interface TestimonialsData {
  home: HomeHeadingData;
  intro: SectionIntroData;
  homeItemIds: string[];
  items: Testimonial[];
  /** Reviews per page on the Testimonials page */
  perPage: number;
  /** Time each testimonial stays up while the home slider auto-plays. */
  sliderIntervalMs: number;
  quoteIcon: string;
  starIcon: string;
  /** "{rating}" is the guest's star rating */
  ratingLabel: string;
  previousLabel: string;
  previousIcon: string;
  nextLabel: string;
  nextIcon: string;
  /** "{n}" is the slide number */
  showSlideLabel: string;
  pagination: PaginationData;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
  /** true on the Testimonials page: every review in a paged grid instead of the home slider */
  showAll?: boolean;
}

export interface GalleryPreviewData {
  label: string;
  title: string;
  titleHighlight: string;
  url: string;
  viewGalleryLabel: string;
  images: ImageItem[];
}

export interface GalleryPreviewProps {
  data?: GalleryPreviewData;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface ServicesData {
  label: string;
  title: string;
  titleHighlight: string;
  text: string;
  items: ServiceItem[];
  mainImage: string;
  mainImageAlt: string;
  topImage: string;
  topImageAlt: string;
  bottomImage: string;
  bottomImageAlt: string;
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  id: string;
  tab: string;
  label: string;
  title: string;
  titleHighlight: string;
  text: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  items: MenuItem[];
  showByDefault: boolean;
}

export interface MenuData {
  intro: SectionIntroData;
  categoriesLabel: string;
  sections: MenuSection[];
}

export interface MenuProps {
  data?: MenuData;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface ChefsData {
  intro: SectionIntroData;
  chefs: Chef[];
}

export interface ChefsProps {
  data?: ChefsData;
}

export interface GalleryImage extends ImageItem {
  category: string;
}

export interface GalleryData {
  intro: SectionIntroData;
  categoriesLabel: string;
  filters: string[];
  images: GalleryImage[];
  perPage: number;
  /** "{name}" is the image's alt text */
  openImageLabel: string;
  closeLabel: string;
  closeIcon: string;
  previousLabel: string;
  previousIcon: string;
  nextLabel: string;
  nextIcon: string;
  /** "{n}" is the open image's number, "{total}" the number of images */
  counterLabel: string;
  pagination: PaginationData;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface BlogMetaData {
  by: string;
  authorIcon: string;
  comments: string;
  commentsIcon: string;
  dateIcon: string;
}

export interface BlogPost {
  id: string;
  url: string;
  shortTitle: string;
  title: string;
  titleHighlight: string;
  author: string;
  comments: number;
  date: string;
  category: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Photo of the home page card (only posts listed in homePostIds have one) */
  homeImage?: string;
  homeImageAlt?: string;
  coverImage: string;
  coverImageAlt: string;
  /** One paragraph per "
"-separated line */
  content: string;
  highlights: TextItem[];
  image: string;
  imageAlt: string;
  quote: {
    text: string;
    author: string;
  };
  closing: string;
}

export interface BlogHomeData extends HomeHeadingData {
  readMore: string;
  readMoreIcon: string;
}

/** Labels and icons of the blog detail page */
export interface BlogDetailData {
  byLabel: string;
  authorIcon: string;
  dateIcon: string;
  highlightIcon: string;
  quoteIcon: string;
}

/** Every blog post; the home page, the Blog page and the detail page each pick theirs by id. */
export interface BlogsData {
  home: BlogHomeData;
  intro: SectionIntroData;
  meta: BlogMetaData;
  perPage: number;
  /** "{title}" is the post title */
  readPostLabel: string;
  readPostIcon: string;
  pagination: PaginationData;
  detail: BlogDetailData;
  homePostIds: string[];
  listingPostIds: string[];
  /** Post the common /blog/blog-details page shows */
  detailPostId: string;
  posts: BlogPost[];
}

export interface BlogsProps {
  data?: BlogsData;
  /** true on the Blog page: the paged list of listingPostIds instead of the home cards */
  showAll?: boolean;
}

export interface BlogDetailProps {
  data?: BlogsData;
  postId?: string;
}

type BookingField = 'name' | 'email' | 'phone' | 'guests' | 'date' | 'time' | 'message';

export interface BookingFormData extends FormSubmitLabels {
  title: string;
  text: string;
  fields: Record<BookingField, string>;
  fieldIcons: Record<BookingField, string>;
  selectIcon: string;
  guestOptions: string[];
  timeOptions: string[];
}

export interface BookingFeature {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface BookingData {
  intro: SectionIntroData;
  image: string;
  imageAlt: string;
  form: BookingFormData;
  closeMessageLabel: string;
  closeMessageIcon: string;
  features: BookingFeature[];
}

export interface BookingProps {
  data?: BookingData;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  /** One line per "
"-separated part */
  text: string;
}

export interface ContactData {
  intro: SectionIntroData;
  info: ContactInfoItem[];
  image: string;
  imageAlt: string;
}

export interface ContactProps {
  data?: ContactData;
}

export interface ContactFormFields extends FormSubmitLabels {
  title: string;
  text: string;
  fields: Record<'name' | 'email' | 'phone' | 'subject' | 'message', string>;
  selectIcon: string;
  subjects: string[];
}

export interface ContactFormData {
  form: ContactFormFields;
  closeMessageLabel: string;
  closeMessageIcon: string;
  special: {
    image: string;
    imageAlt: string;
    title: string;
    text: string;
  };
}

export interface ContactFormProps {
  data?: ContactFormData;
}

export interface LocationItem {
  id: string;
  city: string;
  /** "
" starts a new line */
  address: string;
  phone: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
  /** Google Maps link that opens this address */
  directionUrl: string;
}

export interface LocationsData {
  label: string;
  title: string;
  titleHighlight: string;
  directionLabel: string;
  directionIcon: string;
  items: LocationItem[];
  mapLabel: string;
  /** Embed url of the map shown under the list */
  mapEmbedUrl: string;
}

export interface LocationsProps {
  data?: LocationsData;
}

// ── Whole file ──

export interface RestaurantSections {
  Header?: { variants?: { RestaurantHeader1?: HeaderData } };
  Hero?: { variants?: { RestaurantHero1?: HeroData } };
  Highlights?: { variants?: { RestaurantHighlights1?: HighlightsData } };
  AboutUs?: { variants?: { RestaurantAboutUs1?: AboutUsData; RestaurantAboutUs2?: AboutUsData } };
  FoodMenu?: { variants?: { RestaurantFoodMenu1?: FoodMenuData } };
  Testimonials?: { variants?: { RestaurantTestimonials1?: TestimonialsData } };
  GalleryPreview?: { variants?: { RestaurantGalleryPreview1?: GalleryPreviewData } };
  Services?: { variants?: { RestaurantServices1?: ServicesData } };
  Menu?: { variants?: { RestaurantMenu1?: MenuData } };
  Chefs?: { variants?: { RestaurantChefs1?: ChefsData } };
  Gallery?: { variants?: { RestaurantGallery1?: GalleryData } };
  Blogs?: { variants?: { RestaurantBlogs1?: BlogsData } };
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
      sections: RestaurantSections;
      templateComponents?: TemplateComponentsData;
    };
  };
}
