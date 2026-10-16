import { featureIcons, type FeatureIconName } from "@/components/Icons";

type Feature = { icon: string; title: string; text: string };

export default function BookingFeatures({ features }: { features: Feature[] }) {
  return (
    <ul className="mt-[56px] grid gap-10 md:grid-cols-3 md:gap-0 lg:umt-78">
      {features.map((f, i) => {
        const Icon = featureIcons[f.icon as FeatureIconName];
        return (
          <li
            key={f.title}
            className={`flex flex-col items-center px-4 text-center lg:px-0 ${i > 0 ? "md:border-l md:border-gold-line" : ""} md:py-[8px]`}
          >
            <span className="grid size-[80px] place-items-center rounded-full bg-blush text-gold lg:usize-90">
              <Icon className="size-[36px] lg:usize-38" />
            </span>
            <h3 className="mt-[18px] font-serif text-[26px] font-medium leading-tight text-wine lg:umt-22 lg:ut-33">{f.title}</h3>
            <p className="mt-[10px] max-w-[420px] font-body text-[16px] leading-[1.6] text-body lg:umaxw-430 lg:umt-10 lg:ut-20">{f.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
