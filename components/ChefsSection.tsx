import { site, type SectionProps, type VeloraChefsData } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ChefCard from "@/components/ChefCard";

export default function ChefsSection({ data = site.chefsPage }: SectionProps<VeloraChefsData>) {
  const { intro, chefs } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] section-space px-5 md:px-8 lg:px-[calc(45*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:uw-70"
        labelClassName="mb-[14px] lg:umb-44"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[42px] sm:text-[56px] lg:ut-82 leading-[1.1]"
        text={intro.text}
        textClassName="mt-[18px] max-w-[840px] text-[17px] leading-[1.56]! lg:umaxw-840 lg:umt-11 lg:ut-23"
      />
      <div className="mt-[40px] grid gap-8 lg:grid-cols-2 lg:umt-49 lg:ugapx-43 lg:ugapy-61">
        {chefs.map((chef, i) => (
          <ChefCard key={`${chef.name}-${i}`} chef={chef} />
        ))}
      </div>
    </section>
  );
}
