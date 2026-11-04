"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";
import type { GlobalUIData } from "@/types/templates.types";

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
  ui?: GlobalUIData;
};

const circle =
  "grid size-[46px] place-items-center rounded-full border font-body text-[17px] transition-colors lg:size-[calc(52*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]";

export const Pagination = ({ page, totalPages, onChange, scrollTargetId, className = "", ui }: PaginationProps) => {
  if (totalPages <= 1) return null;

  function go(next: number) {
    if (next < 1 || next > totalPages || next === page) return;
    onChange(next);
    if (scrollTargetId) document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label={ui?.pagination} className={`mt-[40px] flex items-center justify-center gap-[10px] lg:mt-[calc(56*var(--u))] lg:gap-[calc(14*var(--u))] ${className}`}>
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label={ui?.previousPage}
        className={`${circle} border-[var(--color-gold-line)] text-[var(--color-ink)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-40`}
      >
        <Icon name="HiOutlineChevronLeft" strokeWidth={2} className="size-[16px] lg:size-[calc(18*var(--u))]" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => go(n)}
          aria-label={ui && fill(ui.page, { n })}
          aria-current={n === page ? "page" : undefined}
          className={`${circle} ${n === page ? "border-[var(--color-maroon)] bg-[var(--color-maroon)] text-[var(--color-white)]" : "border-[var(--color-gold-line)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:bg-[var(--color-blush)] hover:text-[var(--color-wine)]"}`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label={ui?.nextPage}
        className={`${circle} border-[var(--color-gold-line)] text-[var(--color-ink)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-40`}
      >
        <Icon name="HiOutlineChevronRight" strokeWidth={2} className="size-[16px] lg:size-[calc(18*var(--u))]" />
      </button>
    </nav>
  );
};
