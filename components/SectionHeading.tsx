import type { ReactNode } from "react";

type LabelStyle = "serif" | "sans" | "sans-wide";

const labelStyles: Record<LabelStyle, string> = {
  serif: "font-serif font-semibold tracking-[0.3em] text-[14px] lg:text-[max(calc(17*var(--u)),var(--text-min))]",
  sans: "font-montserrat font-semibold tracking-[0.04em] text-[15px] lg:text-[max(calc(18*var(--u)),var(--text-min))]",
  "sans-wide": "font-montserrat font-medium tracking-[0.3em] text-[13px] lg:text-[max(calc(16*var(--u)),var(--text-min))]",
};

type SectionLabelProps = {
  children: ReactNode;
  variant?: LabelStyle;
  lines?: "left" | "both";
  align?: "center" | "left";
  className?: string;
  /** Text colour of the label; passed separately so it can be changed without `!important`. */
  colorClassName?: string;
  lineClassName?: string;
};

export function SectionLabel({
  children,
  variant = "serif",
  lines = "left",
  align = "center",
  className = "",
  colorClassName = "text-gold",
  lineClassName = "w-[44px] lg:w-[calc(62*var(--u))]",
}: SectionLabelProps) {
  return (
    <p
      data-reveal="up"
      className={`flex items-center gap-[16px] uppercase ${colorClassName} lg:gap-[calc(23*var(--u))] ${labelStyles[variant]} ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      {/* the rules grow outwards from the label text */}
      <span aria-hidden="true" data-reveal="line" data-delay="2" className={`h-[2px] shrink-0 origin-right bg-gold-soft ${lineClassName}`} />
      <span>{children}</span>
      {lines === "both" && <span aria-hidden="true" data-reveal="line" data-delay="2" className={`h-[2px] shrink-0 origin-left bg-gold-soft ${lineClassName}`} />}
    </p>
  );
}

type SectionHeadingProps = {
  label?: string;
  labelVariant?: LabelStyle;
  labelLines?: "left" | "both";
  labelClassName?: string;
  labelLineClassName?: string;
  line1: string;
  line2?: string;
  /** "italic" renders the accent line in gold italic (inner pages), "upright" keeps it roman (home page). */
  accent?: "italic" | "upright";
  /** Render both parts on one line, e.g. "What Our Guests Say". */
  inline?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  text?: ReactNode;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
};

export default function SectionHeading({
  label,
  labelVariant = "serif",
  labelLines = "left",
  labelClassName = "mb-[12px] lg:mb-[calc(16*var(--u))]",
  labelLineClassName,
  line1,
  line2,
  accent = "italic",
  inline = false,
  align = "center",
  as: Tag = "h2",
  text,
  className = "",
  titleClassName = "text-[40px] sm:text-[52px] lg:text-[max(calc(72*var(--u)),var(--text-min))]",
  textClassName = "mt-[16px] lg:mt-[calc(18*var(--u))] text-[17px] lg:text-[max(calc(21*var(--u)),var(--text-min))]",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center" : "text-left"} ${className}`}>
      {label && (
        <SectionLabel variant={labelVariant} lines={labelLines} align={align} className={labelClassName} lineClassName={labelLineClassName}>
          {label}
        </SectionLabel>
      )}
      <Tag data-reveal="up" data-delay="1" className={`font-serif font-medium leading-[1.08] tracking-[-0.015em] text-wine ${titleClassName}`}>
        {line1}
        {line2 && (
          <>
            {inline ? " " : <br />}
            <span className={`text-gold ${accent === "italic" ? "font-normal italic" : ""}`}>{line2}</span>
          </>
        )}
      </Tag>
      {text && <div data-reveal="up" data-delay="2" className={`font-body leading-[1.5] text-body ${center ? "mx-auto" : ""} ${textClassName}`}>{text}</div>}
    </div>
  );
}
