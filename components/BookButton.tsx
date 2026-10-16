import type { ComponentProps } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

type BookButtonProps = Omit<ComponentProps<"a">, "href" | "className"> & {
  href: string;
  label: string;
  /** Sizing classes (height, padding, font-size). */
  className?: string;
};

/** Maroon button with the offset gold frame used across the site. Extra props (e.g. `data-reveal`) go to the link. */
export default function BookButton({ href, label, className = "", ...rest }: BookButtonProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={`btn-frame inline-flex items-center justify-center gap-[0.65em] bg-maroon-dark font-marcellus tracking-[0.01em] text-white transition-colors hover:bg-gold hover:text-white ${className}`}
    >
      {label}
      <ArrowRight className="size-[0.72em]" />
    </Link>
  );
}
