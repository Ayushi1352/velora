import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import { SharedSection } from "@/components/PageRenderer";
import { settings } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: settings.seo.title,
    template: `%s | ${settings.brand.name}`,
  },
  description: settings.seo.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={settings.lang}
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
