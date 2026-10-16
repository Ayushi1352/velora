import Image from "next/image";

type Chef = {
  name: string;
  role: string;
  text: string;
  image: { src: string; alt: string };
};

/** `delay` staggers the card's scroll reveal (see data-delay in globals.css). */
export default function ChefCard({ chef, delay }: { chef: Chef; delay?: number }) {
  return (
    <article data-reveal="up" data-delay={delay} className="group flex flex-col overflow-hidden rounded-[16px] border border-gold-pale bg-white shadow-[0_10px_30px_rgba(120,80,40,0.05)] transition-[box-shadow,border-color] duration-500 hover:border-gold-line hover:shadow-[0_22px_50px_rgba(120,80,40,0.14)] sm:flex-row lg:uh-515">
      <div className="relative aspect-[386/515] w-full shrink-0 overflow-hidden rounded-tr-[64px] sm:aspect-auto sm:w-[44%] sm:min-h-[420px] lg:min-h-0 lg:uw-386 lg:rounded-tr-[calc(70*var(--u))]">
        <Image src={chef.image.src} alt={chef.image.alt} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 44vw, 100vw" className="object-cover transition-[scale] duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-col px-6 py-8 sm:pl-8 lg:p-0 lg:upl-42 lg:upr-24 lg:upt-68">
        <h2 className="font-serif text-[34px] font-medium leading-none tracking-[-0.015em] text-wine lg:ut-46">{chef.name}</h2>
        <p className="mt-[14px] font-body text-[14px] font-bold uppercase tracking-[0.3em] text-gold lg:umt-8 lg:ut-16">{chef.role}</p>
        <span aria-hidden="true" data-reveal="line" data-delay="3" className="mt-[16px] block h-[2px] w-[56px] origin-left bg-gold-soft lg:umt-22 lg:uw-62" />
        <p className="mt-[18px] font-body text-[17px] leading-[1.6] text-body lg:umt-36 lg:ut-20">{chef.text}</p>
        <p aria-hidden="true" data-reveal="write" data-delay="5" className="mt-[18px] font-signature text-[52px] leading-none text-ink lg:umt-38 lg:ut-54">
          {chef.name}
        </p>
      </div>
    </article>
  );
}
