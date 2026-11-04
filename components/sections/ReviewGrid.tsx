"use client";

import { ReviewCard } from "@/components/sections/ReviewCard";
import { Pagination, usePagination } from "@/components/ui/Pagination";
import type { GlobalUIData, Testimonial } from "@/types/templates.types";

export const ReviewGrid = ({ items, perPage, ui }: { items: Testimonial[]; perPage: number; ui?: GlobalUIData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(items, perPage);

  return (
    <div id="reviews" className="scroll-mt-32">
      <div key={page} className="mt-[36px] grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:mt-[calc(34*var(--u))] lg:gap-[calc(21*var(--u))]">
        {pageItems.map((item, i) => (
          <ReviewCard key={item.name} item={item} delay={(i % 3) * 2 + 1} ui={ui} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="reviews" ui={ui} />
    </div>
  );
};
