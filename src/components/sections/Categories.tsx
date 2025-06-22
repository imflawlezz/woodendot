import {CategoryCard} from "@/components/shared/CategoryCard";
import {CategoriesList} from "@/data/CategoriesList";

export const Categories = () => {
    return (
        <section className="flex flex-col md:flex-row items-center w-full">
            {CategoriesList.map((item, index) => (
                <CategoryCard
                    key={index}
                    title={item.title}
                    imageURL={item.imageURL}
                    textColor={item.textColor}
                />
            ))}
        </section>
    )
}
