import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SharedSection } from "@/components/PageRenderer";
import { site } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.navbar.seo.title,
    template: `%s | ${site.navbar.brand.name}`,
  },
  description: site.navbar.seo.description,
};

/*
 * Runs before the first paint: the `motion` class hides `[data-reveal]` elements until they scroll
 * into view, so they don't flash in and then disappear on hydration. If the app script never
 * starts (blocked / failed JS), the class is removed again so no content stays hidden.
 */
const motionScript = `(function(d){d.classList.add("motion");setTimeout(function(){if(!window.__revealReady)d.classList.remove("motion")},3500)})(document.documentElement)`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script adds the `motion` class before React hydrates.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <ScrollToTop />
        <RevealOnScroll />
        <SharedSection slot="Header" />
        <main className="flex-1">{children}</main>
        <SharedSection slot="Footer" />
      </body>
    </html>
  );
}
