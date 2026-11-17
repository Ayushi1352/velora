import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterLinks } from '@/components/common/FooterLinks';
import { Icon } from '@/components/ui/Icon';
import { lines } from '@/components/ui/text';
import type { FooterProps } from '@/types/templates.types';

const contactText = 'font-body text-[17px] leading-[1.38] text-[var(--color-ink-soft)] lg:text-[max(calc(20*var(--u)),var(--text-min))]';
const iconCircle = 'grid size-[44px] shrink-0 place-items-center rounded-full border border-[var(--color-gold-line)] text-[var(--color-maroon)] lg:size-[calc(46*var(--u))]';

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  'use cache';
  return new Date().getFullYear();
}

export const Footer = async ({ data: footer }: FooterProps) => {
  if (!footer) return null;
  const copyright = footer.copyrightText.replace('{year}', String(await currentYear()));

  return (
    <footer>
      <div className="bg-[var(--color-cream)]">
        <div className="mx-auto grid max-w-[1920px] gap-10 px-5 py-[44px] md:grid-cols-2 md:px-8 lg:grid-cols-[calc(815*var(--u))_calc(441*var(--u))_1fr] lg:items-center lg:gap-0 lg:pl-[calc(80*var(--u))] lg:pr-[calc(40*var(--u))] lg:py-[calc(48*var(--u))]">
          {/* Brand */}
          <div data-reveal="up" className="md:col-span-2 lg:col-span-1">
            <Link href={footer.logoUrl} aria-label={footer.logoLabel} className="inline-block">
              <Image
                src={footer.logo}
                alt={footer.logoAlt}
                width={footer.logoWidth}
                height={footer.logoHeight}
                sizes="(min-width: 1024px) 15vw, 220px"
                className="h-auto w-[190px] md:w-[210px] lg:w-[calc(250*var(--u))]"
              />
            </Link>
            <p className="mt-4 pl-[16px] font-heading text-[34px] font-normal italic leading-[1.08] tracking-[-0.02em] text-[var(--color-wine)] lg:mt-[calc(18*var(--u))] lg:pl-[calc(17*var(--u))] lg:text-[max(calc(50*var(--u)),var(--text-min))]">
              {footer.title}
              <span className="block pl-[0.16em] text-[var(--color-gold)]">{footer.titleHighlight}</span>
            </p>
            <span aria-hidden="true" data-reveal="line" data-delay="3" className="ml-[22px] mt-4 block h-[2px] w-[48px] origin-left bg-[var(--color-gold-soft)] lg:ml-[calc(24*var(--u))] lg:mt-[calc(16*var(--u))] lg:w-[calc(52*var(--u))]" />
            <p className="mt-4 pl-[22px] font-body text-[16px] leading-[1.45] text-[var(--color-ink-soft)] lg:mt-[calc(18*var(--u))] lg:pl-[calc(24*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
              {lines(footer.description).map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && (
                    <>
                      <br className="hidden sm:block" />{' '}
                    </>
                  )}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>

          {/* Contact */}
          <ul data-reveal="up" data-delay="2" className="flex flex-col gap-5 md:order-2 lg:order-none lg:gap-[calc(24*var(--u))]">
            {footer.contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-5 lg:gap-[calc(37*var(--u))]">
                <span className={iconCircle}>
                  {/* the address line (the one without a link) has the slightly larger pin icon */}
                  <Icon name={item.icon} className={item.url ? 'size-[16px] lg:size-[calc(16*var(--u))]' : 'size-[18px] lg:size-[calc(18*var(--u))]'} />
                </span>
                {item.url ? (
                  // an email address has no spaces, so it may break anywhere on a narrow screen
                  <a href={item.url} className={`${contactText} ${item.url.startsWith('mailto:') ? 'break-all ' : ''}transition-colors hover:text-[var(--color-gold)]`}>
                    {item.text}
                  </a>
                ) : (
                  <span className={contactText}>
                    {lines(item.text).map((line, i) => (
                      <Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                      </Fragment>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Links */}
          <FooterLinks links={footer.quickLinks.links} label={footer.quickLinks.title} />
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,var(--color-maroon-dark)_0%,var(--color-maroon)_50%,var(--color-maroon-dark)_100%)]">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-5 px-5 py-5 sm:flex-row sm:gap-8 md:px-8 lg:h-[calc(76*var(--u))] lg:gap-[calc(35*var(--u))] lg:py-0 lg:pl-[calc(68*var(--u))] lg:pr-[calc(63*var(--u))]">
          <p className="shrink-0 whitespace-nowrap text-center font-body text-[min(15px,3.75vw)] text-[var(--color-white-90)] lg:text-[max(calc(19*var(--u)),var(--text-min))]">{copyright}</p>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-[var(--color-gold-line)] sm:block" />
          <ul className="flex shrink-0 items-center gap-5 lg:gap-[calc(25*var(--u))] lg:ml-[calc(45*var(--u))]">
            {footer.socialLinks.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-[40px] place-items-center rounded-full border border-[var(--color-gold-line)] text-[var(--color-white)] transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[var(--color-gold)] lg:size-[calc(42*var(--u))]"
                >
                  <Icon name={s.icon} className="size-[17px] lg:size-[calc(18*var(--u))]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
