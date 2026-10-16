import Image from "next/image";
import site from "@/data/site.json";
import { CalendarSmall, UserCircle } from "@/components/Icons";

type Post = (typeof site.posts)[number];

export default function ArticleHeader({ post }: { post: Post }) {
  return (
    <header>
      <div className="mx-auto max-w-[1920px] section-pt px-5 pb-[36px] text-center md:px-8 lg:upb-55">
        <ul className="flex flex-wrap items-center justify-center gap-x-[24px] gap-y-3 font-body text-[16px] text-body lg:ugapx-44 lg:ut-21">
          <li className="rounded-full bg-blush px-[20px] py-[9px] text-gold lg:upx-24 lg:upy-11">{post.category}</li>
          <li className="flex items-center gap-[10px] lg:ugap-15">
            <CalendarSmall className="size-[20px] lg:usize-27" />
            <time>{post.date}</time>
          </li>
          <li className="flex items-center gap-[10px] lg:ugap-15">
            <UserCircle className="size-[20px] lg:usize-27" />
            {site.blogPage.meta.by} {post.author}
          </li>
        </ul>
        <h1 className="mt-[24px] font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.025em] text-wine sm:text-[56px] lg:umt-46 lg:ut-90">
          {post.titleLine1}
          <br />
          <span className="font-normal italic text-gold">{post.titleLine2}</span>
        </h1>
      </div>

      <div className="relative mx-auto aspect-[1688/603] max-w-[1920px] overflow-hidden">
        <Image src={post.cover.src} alt={post.cover.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      </div>
    </header>
  );
}
