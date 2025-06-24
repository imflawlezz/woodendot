import {ReviewItemProps} from "@/types/ReviewItemProps";

export const ReviewItem = ({
    name,
    location,
    quote,
    className
}: ReviewItemProps) => {
    return(
        <div className={`flex flex-col items-center justify-center text-center gap-5 md:gap-10 ${className}`}>
            <p className="font-cardo italic text-xl">
                &ldquo;
                {quote}
                &rdquo;
            </p>

            <p className="font-cardo">
                {name}, {location}
            </p>
        </div>
    )
}