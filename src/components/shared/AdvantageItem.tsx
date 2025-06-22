import type { AdvantageItemProps } from '@/types/AdvantageItemProps';
import Image from "next/image";
export const AdvantageItem = ({
                              text,
                              imageURL,
                              className
                          }: AdvantageItemProps) => {
    return (
        <div  className={`${className} flex items-center gap-5 hover:scale-110 duration-200`}>
            {imageURL &&
                <div className="w-12 aspect-square">
                    <Image
                        src={imageURL}
                        width={50}
                        height={50}
                        alt={text}
                        className="object-contain w-full h-full"/>
                </div>
            }
            <h1 className="text-xs text-center">{text}</h1>
        </div>
    )
}