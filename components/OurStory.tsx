import type { SectionComponentProps, VeloraStoryData } from "@/data";
import StoryBlock from "@/components/StoryBlock";

export default function OurStory({ data: story }: SectionComponentProps<VeloraStoryData>) {
  return (
    <section aria-label={story.label} className="section-space">
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
