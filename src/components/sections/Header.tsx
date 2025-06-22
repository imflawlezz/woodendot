"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {resolveAsset} from "@/utils/resolveAsset";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white font-cardo py-4 px-5">
            <div className="hidden md:flex items-center">
                <nav className="flex-1 flex items-center gap-8 text-lg">
                    <Link
                        href="/"
                        className="hover:text-[var(--hover)] transition-colors duration-300"
                    >
                        Wooden Furniture
                    </Link>
                    <Link
                        href="/"
                        className="hover:text-[var(--hover)] transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        href="/"
                        className="hover:text-[var(--hover)] transition-colors duration-300"
                    >
                        Stories
                    </Link>
                </nav>

                <div className="flex-1 flex justify-center">
                    <Image
                        src={resolveAsset('logos', 'logo.svg')}
                        alt="Logo"
                        width={170}
                        height={36}
                        className="hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="flex-1"></div>
            </div>

            <div className="md:hidden flex items-center justify-between">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6 " />
                    ) : (
                        <Bars3Icon className="h-6 w-6 " />
                    )}
                </button>

                <div className="flex-1 flex justify-center">
                    <Image
                        src={resolveAsset('logos', 'logo.svg')}
                        alt="Logo"
                        width={170}
                        height={36}
                        className="hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="w-10"></div> {/* Spacer for balance */}
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                    <nav className="flex flex-col items-center gap-6 py-6 text-lg">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                        >
                            Wooden Furniture
                        </Link>
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                        >
                            Stories
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};