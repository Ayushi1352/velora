import Image from "next/image";
import { label, site } from "@/data";
import BookButton from "@/components/BookButton";
import Loop from "@/components/Loop";

const hero = site.hero;

export default function Hero() {
  return (
    <section aria-label={label("welcome", { brand: site.navbar.brand.name })}>
      {/* Intro: plays on load (data-intro), not on scroll, so the first screen is never empty */}
      <div className="mx-auto grid max-w-[1920px] gap-10 py-(--section-space) px-5 md:grid-cols-[38%_1fr] md:items-center md:gap-6 md:px-8 lg:grid-cols-[calc(683*var(--u))_1fr] lg:items-start lg:gap-0 lg:px-0">
        <div data-intro="zoom" className="flex justify-center lg:block lg:pl-[calc(70*var(--u))] lg:pt-[calc(36*var(--u))]">
          <Loop effect="float" delay={1400}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 24vw, (min-width: 768px) 36vw, 80vw"
              className="h-auto w-[min(78vw,330px)] md:w-full lg:w-[calc(391*var(--u))]"
            />
          </Loop>
        </div>

        <div className="text-center md:text-left">
          <span aria-hidden="true" data-intro="line" data-delay="2" className="mx-auto block h-[3px] w-[70px] origin-center bg-gold-bright md:mx-0 md:origin-left lg:h-[calc(3.5*var(--u))] lg:w-[calc(88*var(--u))]" />
          <h1>
            <span data-intro="up" data-delay="3" className="mt-[18px] block font-cormorant text-[min(60px,15.5vw)] font-semibold uppercase leading-[0.8] tracking-[-0.005em] text-wine sm:text-[84px] md:text-[clamp(64px,8.6vw,96px)] lg:mt-[calc(24*var(--u))] lg:text-[max(calc(127*var(--u)),var(--text-min))] lg:tracking-[-0.03em] lg:scale-y-[1.12] lg:origin-bottom">
              {hero.title}
            </span>
            <span data-intro="up" data-delay="5" className="mt-[14px] block font-marcellus text-[38px] leading-none tracking-[-0.012em] text-ink sm:text-[56px] md:text-[clamp(44px,6.9vw,74px)] lg:mt-[calc(15*var(--u))] lg:text-[max(calc(101*var(--u)),var(--text-min))]">
              {hero.subtitle}
            </span>
          </h1>
          <ul className="mt-[22px] flex flex-col items-center justify-center gap-x-[14px] gap-y-2 sm:flex-row sm:flex-wrap font-montserrat text-[12px] font-medium uppercase tracking-[0.2em] text-body md:justify-start lg:gap-x-[calc(22*var(--u))] lg:mt-[calc(20*var(--u))] lg:text-[max(calc(18*var(--u)),var(--text-min))]">
            {hero.highlights.map((item, i) => (
              <li key={item} data-intro="up" data-delay={7 + i} className="flex items-center gap-x-[14px] lg:gap-x-[calc(22*var(--u))]">
                {i > 0 && <span aria-hidden="true" className="hidden h-[1.05em] w-[2px] bg-gold-bright sm:block" />}
                {item}
              </li>
            ))}
          </ul>
          <BookButton
            data-intro="up"
            data-delay="10"
            href={hero.button.href}
            label={hero.button.label}
            className="mt-[28px] h-[58px] px-[30px] text-[21px] lg:h-[calc(76*var(--u))] lg:mt-[calc(37*var(--u))] lg:px-[calc(42*var(--u))] lg:text-[max(calc(28*var(--u)),var(--text-min))]"
          />
        </div>
      </div>

      {/* Signature dish on the maroon band: the band sweeps in, then the photo is uncovered */}
      <div className="pb-(--section-space) relative">
        <div aria-hidden="true" data-reveal="line" className="absolute inset-x-0 top-0 h-[42%] origin-left bg-maroon lg:h-[calc(444*var(--u))]" />
        <div className="relative mx-auto w-[calc(100%-40px)] pt-[56px] md:w-[calc(100%-64px)] lg:w-[calc(1229*var(--u))] lg:pt-[calc(170*var(--u))]">
          <div data-reveal="mask-up" data-delay="3" className="relative aspect-[1414/729] overflow-hidden">
            <Image src={hero.banner.src} alt={hero.banner.alt} fill sizes="(min-width: 1024px) 73vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
