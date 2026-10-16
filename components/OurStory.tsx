import site from "@/data/site.json";
import StoryBlock from "@/components/StoryBlock";

export default function OurStory() {
  const { story } = site.home;
  // Same story copy as the About Us page, kept in one place.
  const text = site.about.story.paragraphs[0];

  return (
    <section aria-label={story.label} className="section-space">
      <StoryBlock
        label={story.label}
        titleLine1={story.titleLine1}
        titleLine2={story.titleLine2}
        paragraphs={[text]}
        imageLeft={story.imageLeft}
        imageRight={story.imageRight}
        button={story.button}
      />
    </section>
  );
}
