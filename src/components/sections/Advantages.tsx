import {AdvantageItem} from "@/components/shared/AdvantageItem";
import {AdvantageItemsList} from "@/data/AdvantageItemsList";

export const Advantages = () => {
    return (
        <section className="flex flex-col gap-8 md:flex-row items-center justify-between py-8 md:px-14 lg:px-28 md:py-14">
            {AdvantageItemsList.map((item, index) => (
                <AdvantageItem
                    key={index}
                    text={item.text}
                    imageURL={item.imageURL}
                />
            ))}
        </section>
    )
}