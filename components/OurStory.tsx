import { site } from "@/data";
import StoryBlock from "@/components/StoryBlock";

const story = site.storySection;

export default function OurStory() {
  return (
    <section aria-label={story.label} className="py-(--section-space)">
      <StoryBlock
        label={story.label}
        titleLine1={story.titleLine1}
        titleLine2={story.titleLine2}
        paragraphs={story.paragraphs}
        imageLeft={story.imageLeft}
        imageRight={story.imageRight}
        button={story.button}
      />
    </section>
  );
}
