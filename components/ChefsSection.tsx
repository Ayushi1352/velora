import { site } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import ChefCard from "@/components/ChefCard";

const data = site.chefsPage;

export default function ChefsSection() {
  const { intro, chefs } = data;

  return (
    <section aria-label={intro.label} className="mx-auto max-w-[1920px] py-(--section-space) px-5 md:px-8 lg:px-[calc(45*var(--u))]">
      <SectionHeading
        label={intro.label}
        labelLineClassName="w-[44px] lg:w-[calc(70*var(--u))]"
        labelClassName="mb-[14px] lg:mb-[calc(44*var(--u))]"
        line1={intro.titleLine1}
        line2={intro.titleLine2}
        titleClassName="text-[clamp(26px,8.5vw,40px)] sm:text-[56px] lg:text-[max(calc(82*var(--u)),var(--text-min))] leading-[1.1]"
        text={intro.text}
        textClassName="mt-[18px] max-w-[840px] text-[17px] leading-[1.56]! lg:max-w-[calc(840*var(--u))] lg:mt-[calc(11*var(--u))] lg:text-[max(calc(23*var(--u)),var(--text-min))]"
      />
      <div className="mt-[40px] grid gap-8 lg:grid-cols-2 lg:mt-[calc(49*var(--u))] lg:gap-x-[calc(43*var(--u))] lg:gap-y-[calc(61*var(--u))]">
        {chefs.map((chef, i) => (
          <ChefCard key={`${chef.name}-${i}`} chef={chef} delay={(i % 2) * 2 + 1} />
        ))}
      </div>
    </section>
  );
}
