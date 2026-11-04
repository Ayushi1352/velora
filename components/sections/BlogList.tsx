"use client";

import { BlogListItem } from "@/components/sections/BlogListItem";
import { Pagination, usePagination } from "@/components/ui/Pagination";
import type { BlogMetaLabels, BlogPost, GlobalUIData } from "@/types/templates.types";

export const BlogList = ({ posts, perPage, meta, ui }: { posts: BlogPost[]; perPage: number; meta: BlogMetaLabels; ui?: GlobalUIData }) => {
  const { page, setPage, totalPages, pageItems } = usePagination(posts, perPage);

  return (
    <div id="blog-list" className="scroll-mt-32">
      <ul key={page} className="mt-[36px] lg:mt-[calc(36*var(--u))]">
        {pageItems.map((post, i) => (
          <li key={post.slug} data-reveal="up" data-delay="1" className={i > 0 ? "mt-[20px] border-t border-[var(--color-line)] pt-[20px] lg:mt-[calc(20*var(--u))] lg:pt-[calc(18*var(--u))]" : ""}>
            <BlogListItem post={post} meta={meta} ui={ui} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="blog-list" ui={ui} />
    </div>
  );
};
