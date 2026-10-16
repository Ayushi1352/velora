import site from "@/data/site.json";
import StoryBlock from "@/components/StoryBlock";

export default function AboutStory() {
  const { story } = site.about;

  return (
    <section aria-label={story.label} className="section-space">
      <StoryBlock
        label={story.label}
        titleLine1={story.titleLine1}
        titleLine2={story.titleLine2}
        paragraphs={story.paragraphs}
        imageLeft={story.imageLeft}
        imageRight={story.imageRight}
        leftFrameClassName="aspect-[506/504] lg:uw-506 lg:umt-74"
        textClassName="lg:umt-37 lg:ut-20.25"
      />
    </section>
  );
}
