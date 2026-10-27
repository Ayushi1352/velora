import type { ComponentProps } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

type BookButtonProps = Omit<ComponentProps<"a">, "href" | "className"> & {
  href: string;
  label: string;
  /** Sizing classes (height, padding, font-size). */
  className?: string;
};

/**
 * Offset gold frame used on the maroon "Book a Table" style buttons. On hover the frame steps out to the
 * other corner and the arrow nudges forward.
 */
export const btnFrame =
  "relative isolate after:pointer-events-none after:absolute after:inset-[3px_-3px_-3px_3px] after:-z-1 after:border after:border-gold-bright after:transition-[inset] after:duration-350 after:ease-out hover:after:inset-[-4px_4px_4px_-4px] [&_svg]:transition-[translate] [&_svg]:duration-350 [&_svg]:ease-out hover:[&_svg]:translate-x-1";

/** Maroon button with the offset gold frame used across the site. Extra props (e.g. `data-reveal`) go to the link. */
export default function BookButton({ href, label, className = "", ...rest }: BookButtonProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={`${btnFrame} inline-flex items-center justify-center gap-[0.65em] bg-maroon-dark font-marcellus tracking-[0.01em] text-white transition-colors hover:bg-gold hover:text-white ${className}`}
    >
      {label}
      <ArrowRight className="size-[0.72em]" />
    </Link>
  );
}
