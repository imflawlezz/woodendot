import { FurnitureCardProps } from "@/types/FurnitureCardProps";
import Image from "next/image";
import Link from "next/link";

export const FurnitureCard = ({
                                  mark,
                                  title,
                                  subtitle,
                                  price,
                                  description,
                                  additions,
                                  awards,
                                  imageURL,
                                  link,
                                  className,
                                  variant
                              }: FurnitureCardProps) => {
    return (
        <div className={`relative w-full flex ${variant === 'right' ? 'flex-row' : 'flex-row-reverse'} items-stretch ${className} `}>
            <div className="md:hidden absolute inset-0 -z-10 h-full w-full">
                <Image
                    src={imageURL}
                    alt=""
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>

            <div className="hidden md:block w-full relative flex-1 min-h-[540px]">
                <Image
                    src={imageURL}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 960px) 100vw, 50vw"
                    priority={false}
                />
            </div>

            <div className={`relative flex-1 flex flex-col ${variant === 'right' ? 'items-start text-left' : 'items-end text-right'}
            justify-center gap-y-5 py-10 px-12 lg:max-w-md bg-gray-900/50 text-white md:text-black md:bg-transparent`}>
                {mark && <i className={'font-cardo text-sm md:text-[var(--hover)]'}>{mark}</i>}

                <h1 className={'font-bold text-3xl'}>{title}</h1>

                <p className={'italic font-cardo text-lg'}>{subtitle}</p>

                <p className={'font-cardo'}>From ${price}</p>

                <p className={`font-cardo md:text-[var(--paragraph)]`}>{description}</p>

                {additions && additions?.length > 0 && (
                    <p className="font-cardo md:text-[var(--paragraph-variant)]">
                        + {additions.join(", + ")}
                    </p>
                )}

                <Link
                    href={`/${link}`}
                    className="md:text-black underline font-medium hover:opacity-70 transition"
                >
                    Shop now
                </Link>

                {awards && awards?.length > 0 && (
                    <div className="flex gap-4">
                        {awards.map((award, idx) => (
                            <Image
                                key={idx}
                                src={award}
                                alt={`Award ${idx + 1}`}
                                width={50}
                                height={50}
                                className="object-contain h-12 hover:scale-110 transition-transform duration-200"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};