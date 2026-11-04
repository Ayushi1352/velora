import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { CompanyData, ContactData, ContactInfoItem } from "@/types/templates.types";

type ContactInfoProps = Pick<ContactData, "info" | "image"> & { company: CompanyData };

export const ContactInfo = ({ info, image, company }: ContactInfoProps) => {
  // Phone and email come from common.company, so they match the footer.
  const linesOf = (item: ContactInfoItem) =>
    item.contactKey ? [company[item.contactKey as "phone" | "email"]] : (item.lines ?? []);

  return (
    <div className="mt-[40px] grid gap-10 px-5 md:px-8 lg:mt-[calc(55*var(--u))] lg:grid-cols-[calc(720*var(--u))_1fr] lg:gap-0 lg:px-0">
      <ul className="flex flex-col gap-[28px] lg:gap-0 lg:pl-[calc(79*var(--u))] lg:pt-[calc(26*var(--u))]">
        {info.map((item, i) => {
          return (
            <li key={item.title} data-reveal="left" data-delay={i * 2 + 1} className="group flex items-center lg:h-[calc(187*var(--u))]">
              <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-[var(--color-blush)] text-[var(--color-gold)] transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-gold-bright)] lg:size-[calc(97*var(--u))]">
                <Icon name={item.icon} className="size-[36px] lg:size-[calc(46*var(--u))]" />
              </span>
              <span aria-hidden="true" className="mx-[24px] h-[96px] w-[2px] shrink-0 bg-[var(--color-gold-line)] lg:h-[calc(115*var(--u))] lg:ml-[calc(54*var(--u))] lg:mr-[calc(53*var(--u))]" />
              <div className="min-w-0">
                <h2 className="font-heading text-[28px] leading-tight text-[var(--color-ink)] lg:text-[max(calc(38*var(--u)),var(--text-min))]">{item.title}</h2>
                {linesOf(item).map((line) => (
                  <p key={line} className="mt-[6px] break-words font-body text-[16px] tracking-[0.01em] sm:text-[18px] text-[var(--color-body)] lg:mt-[calc(2*var(--u))] lg:text-[max(calc(23.5*var(--u)),var(--text-min))]">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <div data-reveal="mask-right" data-delay="2" className="relative aspect-[966/606] overflow-hidden lg:aspect-auto lg:h-[calc(606*var(--u))]">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
};
