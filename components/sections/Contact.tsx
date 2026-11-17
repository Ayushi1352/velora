import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { lines } from '@/components/ui/text';
import { Fragment } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { ContactData, ContactProps } from '@/types/templates.types';

type ContactInfoProps = Pick<ContactData, 'info' | 'image' | 'imageAlt'>;

const ContactInfo = ({ info, image, imageAlt }: ContactInfoProps) => {
  return (
    <div className="mt-[40px] grid gap-10 px-5 md:px-8 lg:mt-[calc(55*var(--u))] lg:grid-cols-[calc(720*var(--u))_1fr] lg:gap-0 lg:px-0">
      <ul className="flex flex-col gap-[28px] lg:gap-0 lg:pl-[calc(79*var(--u))] lg:pt-[calc(26*var(--u))]">
        {info.map((item, i) => {
          return (
            <li key={item.id} data-reveal="left" data-delay={i * 2 + 1} className="group flex items-center lg:h-[calc(187*var(--u))]">
              <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-[var(--color-blush)] text-[var(--color-gold)] transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-gold-bright)] lg:size-[calc(97*var(--u))]">
                <Icon name={item.icon} className="size-[36px] lg:size-[calc(46*var(--u))]" />
              </span>
              <span aria-hidden="true" className="mx-[24px] h-[96px] w-[2px] shrink-0 bg-[var(--color-gold-line)] lg:h-[calc(115*var(--u))] lg:ml-[calc(54*var(--u))] lg:mr-[calc(53*var(--u))]" />
              <div className="min-w-0">
                <h2 className="font-heading text-[28px] leading-tight text-[var(--color-ink)] lg:text-[max(calc(38*var(--u)),var(--text-min))]">{item.title}</h2>
                {lines(item.text).map((line) => (
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
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
};

export const Contact = ({ data }: ContactProps) => {
  if (!data) return null;
  const { intro, info, image, imageAlt } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-[var(--section-space)]">
      <SectionHeading
        className="px-5"
        label={intro.label}
        labelVariant="sans-wide"
        labelLineClassName="w-[50px] lg:w-[calc(72*var(--u))]"
        labelClassName="mb-[12px] lg:mb-[calc(16*var(--u))] !font-ui !tracking-[0.32em] lg:!text-[max(calc(21*var(--u)),var(--text-min))]"
        title={intro.title}
        titleHighlight={intro.titleHighlight}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(78*var(--u)),var(--text-min))]"
        text={lines(intro.text).map((line, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="md:block">{line}</span>
          </Fragment>
        ))}
        textClassName="mt-[16px] max-w-[900px] text-[17px] lg:max-w-[calc(900*var(--u))] lg:mt-[calc(14*var(--u))] lg:text-[max(calc(21*var(--u)),var(--text-min))] !leading-[1.55]"
      />
      <ContactInfo info={info} image={image} imageAlt={imageAlt} />
    </section>
  );
};
