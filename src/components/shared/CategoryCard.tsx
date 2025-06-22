
import {CategoryCardProps} from "@/types/CategoryCardProps";

export const CategoryCard = ({
    title,
    imageURL,
    textColor,
    className,
    onClick}: CategoryCardProps) => {

    return (
        <div
            className={`cursor-pointer flex justify-center items-center md:items-end hover:-translate-y-5 transition-transform duration-300 w-full h-30 md:h-80 bg-cover bg-center px-10 md:p-5 ${className}`}
            onClick={onClick}
            style={{backgroundImage: "url(" + imageURL + ")"}}>
            <h1 className={`text-3xl md:text-xl font-cardo  ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
                {title}
            </h1>
        </div>
    );
}