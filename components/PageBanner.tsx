import Link from "next/link";
import { label, site } from "@/data";

const { homeLabel, homeHref } = site.pageBanner;

type PageBannerProps = {
  /** The page section's `bannerTitle` from site.json. */
  title: string;
  /** Last breadcrumb; defaults to the title. */
  breadcrumb?: string;
  /** Optional middle crumb, e.g. Blog on the blog detail page. */
  parent?: { label: string; href: string };
};

function Separator() {
  return <span aria-hidden="true" className="block h-px w-[16px] bg-line lg:w-[calc(18*var(--u))]" />;
}

export default function PageBanner({ title, breadcrumb = title, parent }: PageBannerProps) {
  return (
    <section className="bg-maroon">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center px-5 pb-[52px] pt-[52px] text-center sm:pb-[64px] sm:pt-[72px] lg:h-[calc(370*var(--u))] lg:pb-0 lg:pt-[calc(140*var(--u))]">
        <nav aria-label={label("breadcrumb")} data-intro="down" data-delay="1">
          <ol className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-1 rounded-full bg-white px-[20px] py-[9px] font-jost text-[15px] font-medium tracking-[0.07em] lg:gap-x-[calc(15*var(--u))] lg:px-[calc(25*var(--u))] lg:py-[calc(13*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
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
        <h1 data-intro="up" data-delay="3" className="mt-[22px] max-w-[1100px] text-balance font-marcellus text-[34px] leading-[1.15] text-white sm:text-[40px] lg:max-w-[calc(1300*var(--u))] lg:mt-[calc(24*var(--u))] lg:text-[min(45px,3.125vw)]">{title}</h1>
      </div>
    </section>
  );
}
