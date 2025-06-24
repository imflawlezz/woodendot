import {PublishersList} from "@/data/PublishersList";
import Image from "next/image";

export const Publishers = () => {
    return (
        <section className="w-full px-4 md:px-12 flex flex-col items-center justify-center gap-10 py-10 md:py-20">
            <p className="font-cardo text-xl">
                Those who are talking about us...
            </p>
            <div className="flex flex-wrap md:flex-row items-center justify-center gap-8">
                {PublishersList.map((publisher, idx) => (
                    <Image
                        src={publisher.imageURL}
                        alt={publisher.name}
                        key={idx}
                        width={100}
                        height={100}
                        className="w-auto h-10 object-contain object-center"
                    />
                ))}
            </div>

        </section>
    )
}