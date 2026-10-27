"use client";

import BlogListItem, { type PostMetaLabels } from "@/components/BlogListItem";
import Pagination, { usePagination } from "@/components/Pagination";

type Post = Parameters<typeof BlogListItem>[0]["post"];

export default function BlogList({ posts, perPage, meta }: { posts: Post[]; perPage: number; meta: PostMetaLabels }) {
  const { page, setPage, totalPages, pageItems } = usePagination(posts, perPage);

  return (
    <div id="blog-list" className="scroll-mt-32">
      <ul key={page} className="mt-[36px] lg:mt-[calc(36*var(--u))]">
        {pageItems.map((post, i) => (
          <li key={post.slug} data-reveal="up" data-delay="1" className={i > 0 ? "mt-[20px] border-t border-line pt-[20px] lg:mt-[calc(20*var(--u))] lg:pt-[calc(18*var(--u))]" : ""}>
            <BlogListItem post={post} meta={meta} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="blog-list" />
    </div>
  );
}
