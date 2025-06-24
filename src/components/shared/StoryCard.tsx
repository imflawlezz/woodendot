import {StoryCardProps} from "@/types/StoryCardProps";
import Image from "next/image";
import Link from "next/link";

export const StoryCard = ({
    title,
    description,
    link,
    imageURL,
    className
}: StoryCardProps) => {
    return (
        <div className={`min-h-[300] md:min-h-[370] w-full h-full px-10 font-cardo text-center flex flex-col gap-4 items-center justify-center ${className}`}>
            <div className="w-20 aspect-square">
                <Image
                    src={imageURL}
                    width={50}
                    height={50}
                    alt={title}
                    className="object-contain w-full h-full"/>
            </div>
            <h1 className="text-2xl uppercase">{title}</h1>
            <p className="text-base">{description}</p>
            <Link
                href={`${link}`}
                className="underline">
                Learn More
            </Link>
        </div>
    )
}