import {StoriesList} from "@/data/StoriesList";
import {StoryCard} from "@/components/shared/StoryCard";

export const Stories = () => {
    return (
        <section className="flex md:flex-row flex-col items-center my-9 md:my-18">
            {StoriesList.map((story, index) => (
                <StoryCard
                    {...story}
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-[var(--stories-bg)]'}`}
                />
            ))}
        </section>
    )
}