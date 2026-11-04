import { Icon } from "@/components/ui/Icon";
import type { BookingFeature } from "@/types/templates.types";

export const BookingFeatures = ({ features }: { features: BookingFeature[] }) => {
  return (
    <ul className="mt-[56px] grid gap-10 md:grid-cols-3 md:gap-0 lg:mt-[calc(78*var(--u))]">
      {features.map((f, i) => {
        return (
          <li
            key={f.title}
            data-reveal="up"
            data-delay={i * 2 + 1}
            className={`group flex flex-col items-center px-4 text-center lg:px-0 ${i > 0 ? "md:border-l md:border-[var(--color-gold-line)]" : ""} md:py-[8px]`}
          >
            <span data-reveal="pop" data-delay={i * 2 + 3} className="grid size-[80px] place-items-center rounded-full bg-[var(--color-blush)] text-[var(--color-gold)] transition-colors duration-300 group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-gold-bright)] lg:size-[calc(90*var(--u))]">
              <Icon name={f.icon} className="size-[36px] lg:size-[calc(38*var(--u))]" />
            </span>
            <h3 className="mt-[18px] font-heading text-[26px] font-medium leading-tight text-[var(--color-wine)] lg:mt-[calc(22*var(--u))] lg:text-[max(calc(33*var(--u)),var(--text-min))]">{f.title}</h3>
            <p className="mt-[10px] max-w-[420px] font-body text-[16px] leading-[1.6] text-[var(--color-body)] lg:max-w-[calc(430*var(--u))] lg:mt-[calc(10*var(--u))] lg:text-[max(calc(20*var(--u)),var(--text-min))]">{f.text}</p>
          </li>
        );
      })}
    </ul>
  );
};
