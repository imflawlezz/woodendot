import {FurnitureCard} from "@/components/shared/FurnitureCard";
import {FeaturedFurnitureList} from "@/data/FeaturedFurnitureList";

export const FeaturedFurniture = () => {
    return (
        <section className="flex flex-col gap-y-4 md:gap-y-7 my-6 lg:mt-28">
            {FeaturedFurnitureList.map((item, index) => (
                <FurnitureCard
                    key={`${item.title}-${index}`}
                    mark={item.mark}
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    description={item.description}
                    additions={item.additions}
                    awards={item.awards}
                    imageURL={item.imageURL}
                    variant={index % 2 === 0 ? 'left' : 'right'}
                />
            ))}
        </section>
    )
}