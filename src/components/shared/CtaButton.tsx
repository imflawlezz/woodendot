'use client';
import type { CtaButtonProps } from '@/types/CtaButtonProps';

export const CtaButton = ({
  label,
  onClick,
  className
}: CtaButtonProps) => {
    return (
        <button
            className={`${className} text-white border px-12 py-1 font-cardo font-bold text-xl text-center hover:bg-white hover:text-gray-500 transition duration-200 ease-in-out`}
            onClick={onClick}>
                {label}
        </button>
    )
}