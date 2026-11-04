import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Libre_Caslon_Text, Marcellus, Montserrat, Mrs_Saint_Delafield, Newsreader } from "next/font/google";
import rawData from "@/data/templates.json";
import type { RestaurantTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-cormorant-garamond" });
const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-marcellus" });
const newsreader = Newsreader({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"], style: ["normal", "italic"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-newsreader" });
const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-libre-caslon" });
const jost = Jost({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-jost" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const signature = Mrs_Saint_Delafield({ subsets: ["latin"], weight: ["400"], style: ["normal"], display: "swap", fallback: ["cursive"], variable: "--font-mrs-saint-delafield" });
const fontClasses = [cormorant, marcellus, newsreader, caslon, jost, montserrat, signature].map((font) => font.variable).join(" ");

const templateData: RestaurantTemplateData = rawData;
const sectionData = templateData.categories.Restaurant.sections;
const commonData = templateData.common;

const { fonts } = commonData.theme;
const fontVariables = {
  "--font-display": fonts.display,
  "--font-accent": fonts.accent,
  "--font-heading": fonts.heading,
  "--font-body": fonts.body,
  "--font-ui": fonts.ui,
  "--font-label": fonts.label,
  "--font-signature": fonts.signature,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

/*
 * Runs before the first paint: the `motion` class hides `[data-reveal]` / `[data-intro]` elements until
 * ScrollReveal plays them, so they don't flash in and then disappear on hydration. If the app script
 * never starts (blocked / failed JS), the class is removed again so no content stays hidden.
 */
const motionScript = `(function(d){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("motion");setTimeout(function(){if(!window.__revealReady)d.classList.remove("motion")},3500)})(document.documentElement)`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script adds the `motion` class before React hydrates.
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // --u is one design pixel: 1px below 1024px, then the 1688px mockup scaled to the screen, capped at 1920px.
      // --section-space is the space above and below every section; --text-min is the smallest desktop text
      // (11px at 1440px, scaling with the screen below that). Everything clickable gets the pointer (in :where(),
      // so a cursor-* class on the element still wins). With reduced motion turned on nothing transitions.
      className={`${fontClasses} overflow-x-clip scroll-smooth antialiased motion-reduce:scroll-auto [--u:1px] lg:[--u:calc(100vw/1688)] min-[1920px]:[--u:calc(1920px/1688)] [--section-space:32px] md:[--section-space:40px] lg:[--section-space:min(3.5vw,50px)] [--text-min:min(11px,0.7639vw)] [:where(&)_:where(a,button:not(:disabled),[role=button],[role=tab],select,summary,label:has(select),input[type=date],input[type=submit])]:cursor-pointer [:where(&)_:where(button:disabled)]:cursor-not-allowed [&.motion_:is([data-reveal],[data-intro]:not([data-intro=settle]))]:opacity-0 motion-reduce:[&_*]:!transition-none motion-reduce:[&_*::after]:!transition-none`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="overflow-x-clip">
        <ScrollReveal />
        {/* Each section caps its own content at 1920px; their backgrounds still run the full screen width. */}
        <div className="flex min-h-screen flex-col">
          <Header data={sectionData.Header?.variants?.RestaurantHeader1} company={commonData.company} ui={commonData.globalUI} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} ui={commonData.globalUI} />
        </div>
      </body>
    </html>
  );
}
