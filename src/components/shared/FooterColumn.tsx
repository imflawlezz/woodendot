import Link from "next/link";
import { FooterColumnProps } from "@/types/FooterColumnProps";

export const FooterColumn = ({
    title,
    links
}: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-2 md:gap-5 items-start lg:items-center">
            <h3 className="uppercase font-semibold mb-5 lg:mb-10">{title}</h3>
            {links.map((item, index) => (
                item.text && (
                    <Link key={index} href={item.link} className="hover:underline hover:text-[var(--hover)]">
                        {item.text}
                    </Link>
                )
            ))}
        </div>
    )
}