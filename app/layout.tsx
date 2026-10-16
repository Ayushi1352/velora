import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="antialiased"
    >
      <body className="flex min-h-screen flex-col">
        <ScrollToTop />
        <SharedSection slot="Header" />
        <main className="flex-1">{children}</main>
        <SharedSection slot="Footer" />
      </body>
    </html>
  );
}
