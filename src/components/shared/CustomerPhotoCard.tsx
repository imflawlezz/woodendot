import {CustomerPhotoCardProps} from "@/types/CustomerPhotoCardProps";
import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";

export const CustomerPhotoCard = ({
    username,
    imageURL,
    className,
}: CustomerPhotoCardProps)=> {
    return (
        <div className={`${className} w-full min-h-[550] relative`}>
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Image
                    src={imageURL}
                    alt=""
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>
            <div className="flex items-center gap-1 justify-end px-5 py-10">
                <Image
                    src={resolveAsset("icons", "instagram.png")}
                    alt=""
                    className=""
                    width={14}
                    height={14}
                />
                <p className='font-cardo text-sm text-white'>{username}</p>
            </div>
        </div>
    )
}