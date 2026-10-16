import Link from "next/link";
import { site, type SectionProps, type VeloraPageBannerData } from "@/data";

type PageBannerProps = SectionProps<VeloraPageBannerData> & {
  /** The page section's `bannerTitle` (or the blog post's short title on the blog detail page). */
  title?: string;
  breadcrumb?: string;
  /** Optional middle crumb, e.g. Blog on the blog detail page. */
  parent?: { label: string; href: string };
};

function Separator() {
  return <span aria-hidden="true" className="block h-px w-[16px] bg-line lg:uw-18" />;
}

export default function PageBanner({ data = site.pageBanner, title = "", breadcrumb = "", parent }: PageBannerProps) {
  const { homeLabel, homeHref } = data;

  return (
    <section className="bg-maroon">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center px-5 pb-[52px] pt-[52px] text-center sm:pb-[64px] sm:pt-[72px] lg:uh-370 lg:upb-0 lg:upt-140">
        <nav aria-label="Breadcrumb" data-intro="down" data-delay="1">
          <ol className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-1 rounded-full bg-white px-[20px] py-[9px] font-jost text-[15px] font-medium tracking-[0.07em] lg:ugapx-15 lg:upx-25 lg:upy-13 lg:ut-19">
            <li>
              <Link href={homeHref} className="text-ink transition-colors hover:text-gold">
                {homeLabel}
              </Link>
            </li>
            {parent && (
              <>
                <li>
                  <Separator />
                </li>
                <li>
                  <Link href={parent.href} className="text-ink transition-colors hover:text-gold">
                    {parent.label}
                  </Link>
                </li>
              </>
            )}
            <li>
              <Separator />
            </li>
            <li aria-current="page" className="text-wine">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <h1 data-intro="up" data-delay="3" className="mt-[22px] max-w-[1100px] text-balance font-marcellus text-[34px] leading-[1.15] text-white sm:text-[40px] lg:umaxw-1300 lg:umt-24 lg:text-[min(45px,3.125vw)]">{title}</h1>
      </div>
    </section>
  );
}
