"use client";

import ReviewCard from "@/components/ReviewCard";
import Pagination, { usePagination } from "@/components/Pagination";

type Review = Parameters<typeof ReviewCard>[0]["item"];

export default function ReviewGrid({ items, perPage }: { items: Review[]; perPage: number }) {
  const { page, setPage, totalPages, pageItems } = usePagination(items, perPage);

  return (
    <div id="reviews" className="scroll-mt-32">
      <div key={page} className="mt-[36px] grid animate-[fade_0.45s_ease] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:umt-34 lg:ugap-21">
        {pageItems.map((item) => (
          <ReviewCard key={`${item.name}-${item.location}`} item={item} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="reviews" />
    </div>
  );
}
