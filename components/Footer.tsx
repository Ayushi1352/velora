import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import FooterLinks from "@/components/FooterLinks";
import { Mail, MapPin, Phone, socialIcons } from "@/components/Icons";

const contactText = "font-body text-[17px] leading-[1.38] text-ink-soft lg:ut-20";
const iconCircle = "grid size-[44px] shrink-0 place-items-center rounded-full border border-gold-line text-maroon lg:usize-46";

export default function Footer() {
  const { footer, contact, brand, socials } = site;

  return (
    <footer>
      <div className="bg-cream">
        <div className="mx-auto grid max-w-[1920px] gap-10 px-5 py-[44px] md:grid-cols-2 md:px-8 lg:grid-cols-[calc(815*var(--u))_calc(441*var(--u))_1fr] lg:items-center lg:gap-0 lg:upl-80 lg:upr-40 lg:upy-48">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={brand.name} className="inline-block">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                sizes="(min-width: 1024px) 15vw, 220px"
                className="h-auto w-[190px] md:w-[210px] lg:uw-250"
              />
            </Link>
            <p className="mt-4 pl-[16px] font-serif text-[34px] font-normal italic leading-[1.08] tracking-[-0.02em] text-wine lg:umt-18 lg:upl-17 lg:ut-50">
              {footer.titleLine1}
              <span className="block pl-[0.16em] text-gold">{footer.titleLine2}</span>
            </p>
            <span aria-hidden="true" className="ml-[22px] mt-4 block h-[2px] w-[48px] bg-gold-soft lg:uml-24 lg:umt-16 lg:uw-52" />
            <p className="mt-4 pl-[22px] font-body text-[16px] leading-[1.45] text-ink-soft lg:umt-18 lg:upl-24 lg:ut-19">
              {footer.text[0]}
              <br className="hidden sm:block" /> {footer.text[1]}
            </p>
          </div>

          {/* Contact */}
          <ul className="flex flex-col gap-5 lg:ugap-24">
            <li className="flex items-center gap-5 lg:ugap-37">
              <span className={iconCircle}>
                <MapPin className="size-[18px] lg:usize-18" />
              </span>
              <span className={contactText}>
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </span>
            </li>
            <li className="flex items-center gap-5 lg:ugap-37">
              <span className={iconCircle}>
                <Phone className="size-[16px] lg:usize-16" />
              </span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={`${contactText} transition-colors hover:text-gold`}>
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-5 lg:ugap-37">
              <span className={iconCircle}>
                <Mail className="size-[16px] lg:usize-16" />
              </span>
              <a href={`mailto:${contact.email}`} className={`${contactText} break-all transition-colors hover:text-gold`}>
                {contact.email}
              </a>
            </li>
          </ul>

          {/* Links */}
          <FooterLinks />
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,var(--color-maroon-dark)_0%,var(--color-maroon)_50%,var(--color-maroon-dark)_100%)]">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-5 px-5 py-5 sm:flex-row sm:gap-8 md:px-8 lg:uh-76 lg:ugap-35 lg:py-0 lg:upl-68 lg:upr-63">
          <p className="shrink-0 text-center font-body text-[15px] text-white/90 lg:ut-19">{footer.copyright}</p>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-gold-line sm:block" />
          <ul className="flex shrink-0 items-center gap-5 lg:ugap-25 lg:uml-45">
            {socials.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-[40px] place-items-center rounded-full border border-gold-line text-white transition-colors hover:bg-gold lg:usize-42"
                  >
                    <Icon className="size-[17px] lg:usize-18" />
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
