"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import site from "@/data/site.json";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Footer page links; the current page is underlined, like in the navbar. */
export default function FooterLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Footer navigation" className="md:border-l md:border-gold-line md:pl-10 lg:upl-99">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-[12px] md:flex md:flex-col md:py-1 lg:ugap-16 lg:upy-6">
        {site.footer.links.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-block pb-[9px] font-body text-[17px] leading-tight transition-colors hover:text-gold lg:upb-10 lg:ut-20 ${
                  active ? "text-wine" : "text-ink-soft"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold-soft transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
