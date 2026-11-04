import type { JSX, SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCircle,
  FaRegClock,
  FaStar,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiOutlineArrowUpRight,
  HiOutlineBars3,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineXMark,
} from "react-icons/hi2";

type GlyphProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Restaurant illustrations drawn for the Velora design; react-icons has no matching set. */

const VeloraGrill = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={1.6} {...props}>
    <path d="M14 30h36c0 9-8 15-18 15s-18-6-18-15z" />
    <path d="M12 30h40M24 45l-6 13M40 45l6 13M32 45v13M20 52h24" />
    <path d="M26 26c-3-4 2-7 0-12 4 2 5 6 3 9M34 26c-2-5 3-8 1-14 5 3 6 8 3 12M42 26c-1-3 2-5 1-8 3 2 3 5 2 8" />
    <path d="M8 14l12 12M6 18c-2-2-2-5 0-7s5-2 7 0" />
  </svg>
);

const VeloraChef = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={1.6} {...props}>
    <path d="M18 28c-5 0-8-4-8-8s4-8 9-7c1-5 6-8 11-7 3-3 9-3 12 1 5-1 9 3 9 8 0 4-3 7-7 7" />
    <path d="M20 28v8h22v-8M20 32h22" />
    <path d="M38 40c6-4 14-1 14 6 0 8-10 13-14 16-4-3-14-8-14-16 0-4 3-6 6-6" />
    <path d="M30 46h16M30 51h14M34 42v14M40 42v14" strokeWidth={1.1} />
  </svg>
);

const VeloraBowl = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={2} {...props}>
    <path d="M10 32h44c0 11-10 18-22 18S10 43 10 32z" />
    <path d="M24 50v4h16v-4" />
    <path d="M18 32c-1-5 2-9 6-9M28 32c0-6 3-9 6-10M38 32c1-5 4-8 8-8M22 24c2-3 5-4 8-3M36 22c3-2 6-2 9 0" />
  </svg>
);

const VeloraCloche = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={2} {...props}>
    <path d="M8 46h48M12 46c0-12 9-21 20-21s20 9 20 21" />
    <path d="M28 25v-3h8v3M10 50h44" />
    <path d="M24 14c-1-3 1-5 0-8M32 14c-1-3 1-5 0-8M40 14c-1-3 1-5 0-8" strokeWidth={1.4} />
  </svg>
);

const VeloraLobster = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={1.8} {...props}>
    <path d="M32 20c-4 0-6 3-6 7v13c0 5 3 9 6 11 3-2 6-6 6-11V27c0-4-2-7-6-7z" />
    <path d="M26 30h12M26 36h12M27 42h10M32 51v6M28 59l4-2 4 2" />
    <path d="M26 24c-6-2-8-8-6-14 3 0 5 2 6 5M20 10c-3 1-5 4-4 7 2 1 4 0 5-1" />
    <path d="M38 24c6-2 8-8 6-14-3 0-5 2-6 5M44 10c3 1 5 4 4 7-2 1-4 0-5-1" />
    <path d="M26 32l-7 2M26 38l-7 3M38 32l7 2M38 38l7 3M29 20c-2-5-6-8-11-9M35 20c2-5 6-8 11-9" strokeWidth={1.2} />
  </svg>
);

const VeloraCupcake = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={1.9} {...props}>
    <path d="M16 34h32l-4 22H20z" />
    <path d="M25 34l1 22M32 34v22M39 34l-1 22" />
    <path d="M14 34c-2-6 3-10 7-9 0-6 6-10 11-7 5-3 11 1 11 7 4-1 9 3 7 9" />
    <circle cx="32" cy="11" r="3" />
    <path d="M32 14v4" />
  </svg>
);

const VeloraWine = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={2} {...props}>
    <path d="M21 8h22c1 9 0 17-4 21-2 2-4 3-7 3s-5-1-7-3c-4-4-5-12-4-21z" />
    <path d="M22 20h20" />
    <path d="M32 32v20M23 56h18" />
    <path d="M22.5 20c.5 4 2 7 3.5 9 2 2 4 3 6 3s4-1 6-3c1.5-2 3-5 3.5-9z" fill="currentColor" fillOpacity={0.25} stroke="none" />
  </svg>
);

const VeloraCalendar = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={2.2} {...props}>
    <rect x="10" y="13" width="44" height="42" rx="4" />
    <path d="M10 24h44M21 8v10M43 8v10" />
    <path d="M20 33h3M30.5 33h3M41 33h3M20 42h3M30.5 42h3M41 42h3" strokeWidth={3} />
  </svg>
);

const VeloraCatering = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" {...line} strokeWidth={2} {...props}>
    <path d="M12 34h40v6H12zM16 40v14h32V40" />
    <path d="M16 34c0-10 7-17 16-17s16 7 16 17" />
    <path d="M32 17v-4M24 28c1-4 4-6 8-6" />
    <path d="M22 47h20" />
  </svg>
);

const VeloraStar = (props: GlyphProps) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <path d="m32 8 6.7 14.4 15.8 1.9-11.6 10.8 3 15.6L32 42.9l-13.9 7.8 3-15.6L9.5 24.3l15.8-1.9z" />
  </svg>
);

// The quote mark keeps the design's wide 4:3 shape, so it fills the boxes the layout gives it.
const VeloraQuote = (props: GlyphProps) => (
  <svg viewBox="0 0 64 48" fill="currentColor" {...props}>
    <path d="M27 6C15 9 6 18 6 31c0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-1c1-6 6-11 12-13zM58 6c-12 3-21 12-21 25 0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-1c1-6 6-11 12-13z" />
  </svg>
);

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType | ((props: GlyphProps) => JSX.Element)> = {
  FaCheckCircle,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaStar,
  FaYoutube,
  HiOutlineArrowRight,
  HiOutlineArrowUpRight,
  HiOutlineBars3,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiOutlineXMark,
  VeloraGrill,
  VeloraChef,
  VeloraBowl,
  VeloraCloche,
  VeloraLobster,
  VeloraCupcake,
  VeloraWine,
  VeloraCalendar,
  VeloraCatering,
  VeloraStar,
  VeloraQuote,
};

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  // strokeWidth is only passed when set, so each glyph keeps its own default.
  return <Glyph aria-hidden="true" className={className} {...(strokeWidth ? { strokeWidth } : {})} />;
};
