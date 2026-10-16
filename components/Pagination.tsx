"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@/components/Icons";

/** Splits a list into pages. `page` is 1-based and clamped to the valid range. */
export function usePagination<T>(items: T[], perPage: number) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, totalPages);
  const pageItems = items.slice((current - 1) * perPage, current * perPage);
  return { page: current, setPage, totalPages, pageItems };
}

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** Element to scroll back to when the page changes. */
  scrollTargetId?: string;
  className?: string;
};

const circle =
  "grid size-[46px] place-items-center rounded-full border font-body text-[17px] transition-colors lg:usize-52 lg:ut-19";

export default function Pagination({ page, totalPages, onChange, scrollTargetId, className = "" }: PaginationProps) {
  if (totalPages <= 1) return null;

  function go(next: number) {
    if (next < 1 || next > totalPages || next === page) return;
    onChange(next);
    if (scrollTargetId) document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label="Pagination" className={`mt-[40px] flex items-center justify-center gap-[10px] lg:umt-56 lg:ugap-14 ${className}`}>
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${circle} border-gold-line text-ink hover:bg-maroon hover:text-white disabled:pointer-events-none disabled:opacity-40`}
      >
        <ChevronLeft className="size-[16px] lg:usize-18" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => go(n)}
          aria-label={`Page ${n}`}
          aria-current={n === page ? "page" : undefined}
          className={`${circle} ${n === page ? "border-maroon bg-maroon text-white" : "border-gold-line text-ink hover:border-gold hover:bg-blush hover:text-wine"}`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className={`${circle} border-gold-line text-ink hover:bg-maroon hover:text-white disabled:pointer-events-none disabled:opacity-40`}
      >
        <ChevronRight className="size-[16px] lg:usize-18" />
      </button>
    </nav>
  );
}
