import Image from "next/image";
import { QuoteMark, Star } from "@/components/Icons";

type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
};

export default function ReviewCard({ item }: { item: Review }) {
  return (
    <article className="flex gap-[18px] rounded-[14px] border-[1.5px] border-gold-pale bg-white px-[20px] py-[22px] shadow-[0_8px_24px_rgba(140,90,40,0.04)] lg:uh-335 lg:ugap-20 lg:upl-28 lg:upr-24 lg:upt-21">
      <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-blush text-gold lg:usize-64">
        <QuoteMark className="h-[18px] w-[24px] lg:uh-20 lg:uw-27" />
      </span>
      <div className="min-w-0 flex-1 lg:upt-14">
        <div className="flex gap-[6px] text-gold-bright lg:ugap-5" role="img" aria-label={`${item.rating} out of 5 stars`}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="size-[22px] lg:usize-26" />
          ))}
        </div>
        <p className="mt-[12px] font-body text-[17px] leading-[1.42] text-body lg:umt-14 lg:upr-24 lg:ut-19.5">{item.text}</p>
        <span aria-hidden="true" className="mt-[14px] block h-[2px] w-[40px] bg-gold-line lg:umt-12 lg:uw-42" />
        <div className="mt-[12px] flex items-center gap-[18px] lg:umt-8 lg:ugap-22">
          <div className="relative size-[70px] shrink-0 overflow-hidden rounded-full lg:usize-82">
            <Image src={item.image} alt={item.name} fill sizes="82px" className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-[21px] font-medium leading-tight text-wine lg:ut-24.5">{item.name}</p>
            <p className="mt-[4px] font-body text-[16px] text-muted lg:ut-19">{item.location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
