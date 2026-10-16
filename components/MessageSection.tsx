import Image from "next/image";
import { site, type SectionProps, type VeloraContactFormData } from "@/data";
import ContactForm from "@/components/ContactForm";

export default function MessageSection({ data = site.contactFormSection }: SectionProps<VeloraContactFormData>) {
  const { form, special } = data;

  return (
    <section aria-label={form.title} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(65*var(--u))]">
      <div className="grid gap-8 rounded-[12px] bg-cream p-5 sm:p-8 lg:grid-cols-[1fr_calc(598*var(--u))] lg:gap-0 lg:p-0 lg:upr-23 lg:upy-10">
        <div className="lg:upb-34 lg:upl-40 lg:upr-50 lg:upt-62">
          <h2 className="font-serif text-[32px] font-medium leading-tight text-wine lg:ut-43">{form.title}</h2>
          <span aria-hidden="true" className="mt-[12px] block h-[2px] w-[60px] bg-gold-soft lg:umt-16 lg:uw-72" />
          <p className="mt-[16px] font-body text-[17px] text-body lg:umt-22 lg:ut-21.5">{form.text}</p>
          <ContactForm form={form} />
        </div>

        <aside className="flex flex-col overflow-hidden rounded-[10px] bg-sand">
          <div className="relative aspect-[598/343] overflow-hidden rounded-[10px]">
            <Image src={special.image.src} alt={special.image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
          </div>
          <div className="m-[24px] border-l-[2px] border-gold-line pl-[22px] lg:umb-40 lg:uml-32 lg:umr-30 lg:umt-50 lg:upl-30">
            <h3 className="font-serif text-[26px] font-medium leading-tight text-wine lg:ut-34">{special.title}</h3>
            <p className="mt-[12px] font-body text-[17px] leading-[1.55] text-body lg:umt-14 lg:ut-22.5">{special.text}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
