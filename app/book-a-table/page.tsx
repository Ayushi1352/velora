import PageRenderer, { pageMetadata } from "@/components/PageRenderer";

export const metadata = pageMetadata("book-a-table");

export default function BookATablePage() {
  return <PageRenderer page="book-a-table" />;
}
