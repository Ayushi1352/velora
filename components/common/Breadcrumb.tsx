import { Fragment } from "react";
import Link from "next/link";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";

const Separator = () => <span aria-hidden="true" className="block h-px w-[16px] bg-[var(--color-line)] lg:w-[calc(18*var(--u))]" />;

/** Maroon page banner: the breadcrumb trail (last path, without a url, is the current page) and the page title. */
export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui?: GlobalUIData }) => {
  if (!data) return null;
  return (
    <section className="bg-[var(--color-maroon)]">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center px-5 pb-[52px] pt-[52px] text-center sm:pb-[64px] sm:pt-[72px] lg:h-[calc(370*var(--u))] lg:pb-0 lg:pt-[calc(140*var(--u))]">
        <nav aria-label={ui?.breadcrumb} data-intro="down" data-delay="1">
          <ol className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-1 rounded-full bg-[var(--color-white)] px-[20px] py-[9px] font-ui text-[15px] font-medium tracking-[0.07em] lg:gap-x-[calc(15*var(--u))] lg:px-[calc(25*var(--u))] lg:py-[calc(13*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
            {data.paths.map((item, i) => (
              <Fragment key={item.id}>
                {i > 0 && (
                  <li>
                    <Separator />
                  </li>
                )}
                {item.url ? (
                  <li>
                    <Link href={item.url} className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold)]">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li aria-current="page" className="text-[var(--color-wine)]">
                    {item.label}
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </nav>
        <h1 data-intro="up" data-delay="3" className="mt-[22px] max-w-[1100px] text-balance font-accent text-[34px] leading-[1.15] text-[var(--color-white)] sm:text-[40px] lg:max-w-[calc(1300*var(--u))] lg:mt-[calc(24*var(--u))] lg:text-[min(45px,3.125vw)]">{data.title}</h1>
      </div>
    </section>
  );
};
