import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="m15 5-7 7 7 7" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={1.8} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={1.8} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 1.8 3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z" />
    </svg>
  );
}

export function QuoteMark(props: IconProps) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M27 6C15 9 6 18 6 31c0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-1c1-6 6-11 12-13zM58 6c-12 3-21 12-21 25 0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-1c1-6 6-11 12-13z" />
    </svg>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- contact / meta ---------- */

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M6.6 2.5c.6-.3 1.3-.1 1.6.5l2 3.7c.3.6.2 1.3-.3 1.7L8.3 9.7c1.1 2.4 3.6 4.9 6 6l1.3-1.6c.4-.5 1.1-.6 1.7-.3l3.7 2c.6.3.8 1 .5 1.6l-1.2 2.4c-.4.8-1.3 1.3-2.2 1.2C10.2 20.4 3.6 13.8 3 6c-.1-.9.4-1.8 1.2-2.2z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M3 5h18a1 1 0 0 1 1 1v.6l-10 6.3L2 6.6V6a1 1 0 0 1 1-1zm-1 3.9 9.5 6c.3.2.7.2 1 0l9.5-6V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function UserCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="10" r="3.2" />
      <path d="M6.2 18.6c1.3-2.3 3.4-3.6 5.8-3.6s4.5 1.3 5.8 3.6" />
    </svg>
  );
}

export function ChatBubble(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <path d="M4 5h16v11H9l-4 3.5V16H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function CalendarSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M7.5 13h1M11.5 13h1M15.5 13h1M7.5 16.5h1M11.5 16.5h1M15.5 16.5h1" />
    </svg>
  );
}

export function User(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
    </svg>
  );
}

export function Envelope(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

export function PhoneLine(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <path d="M7 3.5 9.2 8 7.6 9.6a12 12 0 0 0 6.8 6.8l1.6-1.6 4.5 2.2-1 3.2c-.2.6-.8 1-1.4.9C10.3 20.3 3.7 13.7 2.9 6.9c-.1-.6.3-1.2.9-1.4z" />
    </svg>
  );
}

export function Guests(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.9-3.4 3.4-5.3 6.5-5.3s5.6 1.9 6.5 5.3" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M16.5 14.3c2.6.2 4.3 1.9 5 4.7" />
    </svg>
  );
}

/* ---------- decorative feature icons ---------- */

export function GrillIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <path d="M14 30h36c0 9-8 15-18 15s-18-6-18-15z" />
      <path d="M12 30h40M24 45l-6 13M40 45l6 13M32 45v13M20 52h24" />
      <path d="M26 26c-3-4 2-7 0-12 4 2 5 6 3 9M34 26c-2-5 3-8 1-14 5 3 6 8 3 12M42 26c-1-3 2-5 1-8 3 2 3 5 2 8" />
      <path d="M8 14l12 12M6 18c-2-2-2-5 0-7s5-2 7 0" />
    </svg>
  );
}

export function ChefIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <path d="M18 28c-5 0-8-4-8-8s4-8 9-7c1-5 6-8 11-7 3-3 9-3 12 1 5-1 9 3 9 8 0 4-3 7-7 7" />
      <path d="M20 28v8h22v-8M20 32h22" />
      <path d="M38 40c6-4 14-1 14 6 0 8-10 13-14 16-4-3-14-8-14-16 0-4 3-6 6-6" />
      <path d="M30 46h16M30 51h14M34 42v14M40 42v14" strokeWidth={1.1} />
    </svg>
  );
}

export function BowlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="M10 32h44c0 11-10 18-22 18S10 43 10 32z" />
      <path d="M24 50v4h16v-4" />
      <path d="M18 32c-1-5 2-9 6-9M28 32c0-6 3-9 6-10M38 32c1-5 4-8 8-8M22 24c2-3 5-4 8-3M36 22c3-2 6-2 9 0" />
    </svg>
  );
}

export function ClocheIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="M8 46h48M12 46c0-12 9-21 20-21s20 9 20 21" />
      <path d="M28 25v-3h8v3M10 50h44" />
      <path d="M24 14c-1-3 1-5 0-8M32 14c-1-3 1-5 0-8M40 14c-1-3 1-5 0-8" strokeWidth={1.4} />
    </svg>
  );
}

export function LobsterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={1.8} {...props}>
      <path d="M32 20c-4 0-6 3-6 7v13c0 5 3 9 6 11 3-2 6-6 6-11V27c0-4-2-7-6-7z" />
      <path d="M26 30h12M26 36h12M27 42h10M32 51v6M28 59l4-2 4 2" />
      <path d="M26 24c-6-2-8-8-6-14 3 0 5 2 6 5M20 10c-3 1-5 4-4 7 2 1 4 0 5-1" />
      <path d="M38 24c6-2 8-8 6-14-3 0-5 2-6 5M44 10c3 1 5 4 4 7-2 1-4 0-5-1" />
      <path d="M26 32l-7 2M26 38l-7 3M38 32l7 2M38 38l7 3M29 20c-2-5-6-8-11-9M35 20c2-5 6-8 11-9" strokeWidth={1.2} />
    </svg>
  );
}

export function CupcakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={1.9} {...props}>
      <path d="M16 34h32l-4 22H20z" />
      <path d="M25 34l1 22M32 34v22M39 34l-1 22" />
      <path d="M14 34c-2-6 3-10 7-9 0-6 6-10 11-7 5-3 11 1 11 7 4-1 9 3 7 9" />
      <circle cx="32" cy="11" r="3" />
      <path d="M32 14v4" />
    </svg>
  );
}

export function WineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="M21 8h22c1 9 0 17-4 21-2 2-4 3-7 3s-5-1-7-3c-4-4-5-12-4-21z" />
      <path d="M22 20h20" />
      <path d="M32 32v20M23 56h18" />
      <path d="M22.5 20c.5 4 2 7 3.5 9 2 2 4 3 6 3s4-1 6-3c1.5-2 3-5 3.5-9z" fill="currentColor" fillOpacity={0.25} stroke="none" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={2.2} {...props}>
      <rect x="10" y="13" width="44" height="42" rx="4" />
      <path d="M10 24h44M21 8v10M43 8v10" />
      <path d="M20 33h3M30.5 33h3M41 33h3M20 42h3M30.5 42h3M41 42h3" strokeWidth={3} />
    </svg>
  );
}

export function CateringIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...line} strokeWidth={2} {...props}>
      <path d="M12 34h40v6H12zM16 40v14h32V40" />
      <path d="M16 34c0-10 7-17 16-17s16 7 16 17" />
      <path d="M32 17v-4M24 28c1-4 4-6 8-6" />
      <path d="M22 47h20" />
    </svg>
  );
}

export function StarBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m32 8 6.7 14.4 15.8 1.9-11.6 10.8 3 15.6L32 42.9l-13.9 7.8 3-15.6L9.5 24.3l15.8-1.9z" />
    </svg>
  );
}

/* ---------- social ---------- */

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Youtube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
    </svg>
  );
}

export const featureIcons = {
  grill: GrillIcon,
  chef: ChefIcon,
  bowl: BowlIcon,
  cloche: ClocheIcon,
  lobster: LobsterIcon,
  cupcake: CupcakeIcon,
  wine: WineIcon,
  calendar: CalendarIcon,
  catering: CateringIcon,
  star: StarBadgeIcon,
  people: Guests,
  phone: Phone,
  mail: Mail,
  clock: Clock,
} as const;

export type FeatureIconName = keyof typeof featureIcons;

export const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const;
