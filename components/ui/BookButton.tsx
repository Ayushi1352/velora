import type { ComponentProps } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

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
  "relative isolate after:pointer-events-none after:absolute after:inset-[3px_-3px_-3px_3px] after:z-[-1] after:border after:border-[var(--color-gold-bright)] after:transition-[inset] after:duration-350 after:ease-out hover:after:inset-[-4px_4px_4px_-4px] [&_svg]:transition-transform [&_svg]:duration-350 [&_svg]:ease-out [&_svg]:hover:translate-x-1";

/** Maroon button with the offset gold frame used across the site. Extra props (e.g. `data-reveal`) go to the link. */
export const BookButton = ({ href, label, className = "", ...rest }: BookButtonProps) => (
  <Link
    {...rest}
    href={href}
    className={`${btnFrame} inline-flex items-center justify-center gap-[0.65em] bg-[var(--color-maroon-dark)] font-accent tracking-[0.01em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-white)] ${className}`}
  >
    {label}
    <Icon name="HiOutlineArrowRight" strokeWidth={2} className="size-[0.72em]" />
  </Link>
);
