"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@/components/Icons";
import { label } from "@/data";

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
  "grid size-[46px] place-items-center rounded-full border font-body text-[17px] transition-colors lg:size-[calc(52*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]";

export default function Pagination({ page, totalPages, onChange, scrollTargetId, className = "" }: PaginationProps) {
  if (totalPages <= 1) return null;

  function go(next: number) {
    if (next < 1 || next > totalPages || next === page) return;
    onChange(next);
    if (scrollTargetId) document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label={label("pagination")} className={`mt-[40px] flex items-center justify-center gap-[10px] lg:mt-[calc(56*var(--u))] lg:gap-[calc(14*var(--u))] ${className}`}>
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label={label("previousPage")}
        className={`${circle} border-gold-line text-ink hover:bg-maroon hover:text-white disabled:pointer-events-none disabled:opacity-40`}
      >
        <ChevronLeft className="size-[16px] lg:size-[calc(18*var(--u))]" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => go(n)}
          aria-label={label("page", { n })}
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
        aria-label={label("nextPage")}
        className={`${circle} border-gold-line text-ink hover:bg-maroon hover:text-white disabled:pointer-events-none disabled:opacity-40`}
      >
        <ChevronRight className="size-[16px] lg:size-[calc(18*var(--u))]" />
      </button>
    </nav>
  );
}
