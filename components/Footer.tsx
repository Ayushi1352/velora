import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data";
import FooterLinks from "@/components/FooterLinks";
import { Mail, MapPin, Phone, socialIcons } from "@/components/Icons";

const contactText = "font-body text-[17px] leading-[1.38] text-ink-soft lg:text-[max(calc(20*var(--u)),var(--text-min))]";
const iconCircle = "grid size-[44px] shrink-0 place-items-center rounded-full border border-gold-line text-maroon lg:size-[calc(46*var(--u))]";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const footer = site.footer;

export default async function Footer() {
  const { socials } = footer;
  const { contact } = footer;
  const { brand } = site.navbar;
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer>
      <div className="bg-cream">
        <div className="mx-auto grid max-w-[1920px] gap-10 px-5 py-[44px] md:grid-cols-2 md:px-8 lg:grid-cols-[calc(815*var(--u))_calc(441*var(--u))_1fr] lg:items-center lg:gap-0 lg:pl-[calc(80*var(--u))] lg:pr-[calc(40*var(--u))] lg:py-[calc(48*var(--u))]">
          {/* Brand */}
          <div data-reveal="up" className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={brand.name} className="inline-block">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                sizes="(min-width: 1024px) 15vw, 220px"
                className="h-auto w-[190px] md:w-[210px] lg:w-[calc(250*var(--u))]"
              />
            </Link>
            <p className="mt-4 pl-[16px] font-serif text-[34px] font-normal italic leading-[1.08] tracking-[-0.02em] text-wine lg:mt-[calc(18*var(--u))] lg:pl-[calc(17*var(--u))] lg:text-[max(calc(50*var(--u)),var(--text-min))]">
              {footer.titleLine1}
              <span className="block pl-[0.16em] text-gold">{footer.titleLine2}</span>
            </p>
            <span aria-hidden="true" data-reveal="line" data-delay="3" className="ml-[22px] mt-4 block h-[2px] w-[48px] origin-left bg-gold-soft lg:ml-[calc(24*var(--u))] lg:mt-[calc(16*var(--u))] lg:w-[calc(52*var(--u))]" />
            <p className="mt-4 pl-[22px] font-body text-[16px] leading-[1.45] text-ink-soft lg:mt-[calc(18*var(--u))] lg:pl-[calc(24*var(--u))] lg:text-[max(calc(19*var(--u)),var(--text-min))]">
              {footer.text.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && (
                    <>
                      <br className="hidden sm:block" />{" "}
                    </>
                  )}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>

          {/* Contact */}
          <ul data-reveal="up" data-delay="2" className="flex flex-col gap-5 md:order-2 lg:order-none lg:gap-[calc(24*var(--u))]">
            <li className="flex items-center gap-5 lg:gap-[calc(37*var(--u))]">
              <span className={iconCircle}>
                <MapPin className="size-[18px] lg:size-[calc(18*var(--u))]" />
              </span>
              <span className={contactText}>
                {contact.address.map((line, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-5 lg:gap-[calc(37*var(--u))]">
              <span className={iconCircle}>
                <Phone className="size-[16px] lg:size-[calc(16*var(--u))]" />
              </span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={`${contactText} transition-colors hover:text-gold`}>
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-5 lg:gap-[calc(37*var(--u))]">
              <span className={iconCircle}>
                <Mail className="size-[16px] lg:size-[calc(16*var(--u))]" />
              </span>
              <a href={`mailto:${contact.email}`} className={`${contactText} break-all transition-colors hover:text-gold`}>
                {contact.email}
              </a>
            </li>
          </ul>

          {/* Links */}
          <FooterLinks links={footer.links} />
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,var(--color-maroon-dark)_0%,var(--color-maroon)_50%,var(--color-maroon-dark)_100%)]">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-5 px-5 py-5 sm:flex-row sm:gap-8 md:px-8 lg:h-[calc(76*var(--u))] lg:gap-[calc(35*var(--u))] lg:py-0 lg:pl-[calc(68*var(--u))] lg:pr-[calc(63*var(--u))]">
          <p className="shrink-0 whitespace-nowrap text-center font-body text-[min(15px,3.75vw)] text-white/90 lg:text-[max(calc(19*var(--u)),var(--text-min))]">{copyright}</p>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-gold-line sm:block" />
          <ul className="flex shrink-0 items-center gap-5 lg:gap-[calc(25*var(--u))] lg:ml-[calc(45*var(--u))]">
            {socials.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-[40px] place-items-center rounded-full border border-gold-line text-white transition-[background-color,translate] duration-300 hover:-translate-y-1 hover:bg-gold lg:size-[calc(42*var(--u))]"
                  >
                    <Icon className="size-[17px] lg:size-[calc(18*var(--u))]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
