import Image from "next/image";
import site from "@/data/site.json";
import { featureIcons, type FeatureIconName } from "@/components/Icons";

export default function ContactInfo() {
  const { info, image } = site.contactPage;
  // Phone and email come from the shared `contact` block so they match the footer.
  const linesOf = (item: (typeof info)[number]) =>
    item.contactKey ? [site.contact[item.contactKey as "phone" | "email"]] : (item.lines ?? []);

  return (
    <div className="mt-[40px] grid gap-10 px-5 md:px-8 lg:umt-55 lg:grid-cols-[calc(720*var(--u))_1fr] lg:gap-0 lg:px-0">
      <ul className="flex flex-col gap-[28px] lg:ugap-0 lg:upl-79 lg:upt-26">
        {info.map((item) => {
          const Icon = featureIcons[item.icon as FeatureIconName];
          return (
            <li key={item.title} className="flex items-center lg:uh-187">
              <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-blush text-gold lg:usize-97">
                <Icon className="size-[36px] lg:usize-46" />
              </span>
              <span aria-hidden="true" className="mx-[24px] h-[96px] w-[2px] shrink-0 bg-gold-line lg:uh-115 lg:uml-54 lg:umr-53" />
              <div className="min-w-0">
                <h2 className="font-serif text-[28px] leading-tight text-ink lg:ut-38">{item.title}</h2>
                {linesOf(item).map((line) => (
                  <p key={line} className="mt-[6px] break-words font-body text-[16px] tracking-[0.01em] sm:text-[18px] text-body lg:umt-2 lg:ut-23.5">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="relative aspect-[966/606] overflow-hidden lg:aspect-auto lg:uh-606">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
