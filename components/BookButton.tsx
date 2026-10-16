import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

type BookButtonProps = {
  href: string;
  label: string;
  /** Sizing classes (height, padding, font-size). */
  className?: string;
};

/** Maroon button with the offset gold frame used across the site. */
export default function BookButton({ href, label, className = "" }: BookButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-frame inline-flex items-center justify-center gap-[0.65em] bg-maroon-dark font-marcellus tracking-[0.01em] text-white transition-colors hover:bg-gold hover:text-white ${className}`}
    >
      {label}
      <ArrowRight className="size-[0.72em]" />
    </Link>
  );
}
