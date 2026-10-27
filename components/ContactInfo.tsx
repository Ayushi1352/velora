import Image from "next/image";
import type { VeloraContactData, VeloraContactDetails } from "@/data";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

type ContactInfoProps = Pick<VeloraContactData, "info" | "image"> & { contact: VeloraContactDetails };

export default function ContactInfo({ info, image, contact }: ContactInfoProps) {
  // Phone and email come from the shared Footer `contact` block so they match the footer.
  const linesOf = (item: (typeof info)[number]) =>
    item.contactKey ? [contact[item.contactKey as "phone" | "email"]] : (item.lines ?? []);

  return (
    <div className="mt-[40px] grid gap-10 px-5 md:px-8 lg:mt-[calc(55*var(--u))] lg:grid-cols-[calc(720*var(--u))_1fr] lg:gap-0 lg:px-0">
      <ul className="flex flex-col gap-[28px] lg:gap-0 lg:pl-[calc(79*var(--u))] lg:pt-[calc(26*var(--u))]">
        {info.map((item, i) => {
          const Icon = featureIcons[item.icon as FeatureIconName];
          return (
            <li key={item.title} data-reveal="left" data-delay={i * 2 + 1} className="group flex items-center lg:h-[calc(187*var(--u))]">
              <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-blush text-gold transition-[background-color,color,scale] duration-300 group-hover:scale-105 group-hover:bg-maroon group-hover:text-gold-bright lg:size-[calc(97*var(--u))]">
                <Icon className="size-[36px] lg:size-[calc(46*var(--u))]" />
              </span>
              <span aria-hidden="true" className="mx-[24px] h-[96px] w-[2px] shrink-0 bg-gold-line lg:h-[calc(115*var(--u))] lg:ml-[calc(54*var(--u))] lg:mr-[calc(53*var(--u))]" />
              <div className="min-w-0">
                <h2 className="font-serif text-[28px] leading-tight text-ink lg:text-[max(calc(38*var(--u)),var(--text-min))]">{item.title}</h2>
                {linesOf(item).map((line) => (
                  <p key={line} className="mt-[6px] break-words font-body text-[16px] tracking-[0.01em] sm:text-[18px] text-body lg:mt-[calc(2*var(--u))] lg:text-[max(calc(23.5*var(--u)),var(--text-min))]">
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
}
