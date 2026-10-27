import { site } from "@/data";
import StoryBlock from "@/components/StoryBlock";

const story = site.aboutStorySection;

export default function AboutStory() {
  return (
    <section aria-label={story.label} className="py-(--section-space)">
      <StoryBlock
        label={story.label}
        titleLine1={story.titleLine1}
        titleLine2={story.titleLine2}
        paragraphs={story.paragraphs}
        imageLeft={story.imageLeft}
        imageRight={story.imageRight}
        leftFrameClassName="aspect-[506/504] lg:w-[calc(506*var(--u))] lg:mt-[calc(74*var(--u))]"
        textClassName="lg:mt-[calc(37*var(--u))] lg:text-[max(calc(20.25*var(--u)),var(--text-min))]"
      />
    </section>
  );
}




