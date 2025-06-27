import {PaymentMethodList} from "@/data/FooterIconsList";
import Image from "next/image";
import Link from "next/link";
import {resolveAsset} from "@/utils/resolveAsset";
import {FooterColumn} from "@/components/shared/FooterColumn";
import {AboutLinks, HelpLinks, MoreLinks} from "@/data/FooterLinks";

export const Footer = () => {
    return (
        <section className="font-cardo bg-[var(--footer)] px-4 py-10 md:px-10 lg:px-36">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <div className="grid grid-cols-2 gap-6 w-full sm:w-auto px-10 sm:px-0 sm:flex sm:flex-row sm:gap-3 md:gap-10 lg:gap-24 text-base md:text-xl">
                    <FooterColumn title={"About"} links={AboutLinks}/>
                    <FooterColumn title={"Help"} links={HelpLinks}/>
                    <FooterColumn title={"More"} links={MoreLinks}/>
                </div>

                <div className="max-w-xs w-full sm:w-auto text-center">
                    <h4 className="mb-4 text-sm sm:text-base">Don&#39;t miss any news and exclusive offers!</h4>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-4">
                        <Image
                            src={resolveAsset("logos", "fsc.png")}
                            alt={"FSC"}
                            width={66} height={28}
                            className="max-h-[66px] h-full w-auto object-contain object-center"
                        />
                        <Image
                            src={resolveAsset("logos", "otp.png")}
                            alt={"One Tree Planted"}
                            width={66} height={28}
                            className="max-h-[66px] h-full w-auto object-contain object-center"
                        />
                        <Image
                            src={resolveAsset("logos", "trustpilot.png")}
                            alt={"Trustpilot"}
                            width={66} height={28}
                            className="max-h-[45px] h-full w-full object-contain object-center"
                        />
                    </div>
                </div>
            </div>

            <div className="md:mt-10 px-4 lg:px-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-6 md:gap-0 border-t border-gray-200">
                <p className="order-3 md:order-none">© Copyright – WOODENDOT 2025</p>

                <div className="flex flex-wrap md:flex-row items-center gap-1 md:gap-4 order-1 md:order-none w-full justify-center md:w-auto">
                    {PaymentMethodList.map((item, index) => (
                        <Image
                            src={item.imageURL}
                            alt={item.name}
                            width={66} height={28}
                            key={index}
                            className="max-h-[30px] h-auto w-auto object-cover object-center"
                        />
                    ))}
                </div>

                <div className="flex gap-2 sm:gap-4 order-2 md:order-none text-center over:text-[var(--hover)]">
                    <Link href="/" className="text-xs">Terms & Conditions</Link>
                    <span className="hidden sm:inline">|</span>
                    <Link href="/" className="text-xs">Privacy Policy & Cookies</Link>
                    <span className="hidden sm:inline">|</span>
                    <span>
                    Site by{" "}
                        <Link href="https://github.com/imflawlezz" className="underline hover:text-[var(--hover)]" target="_blank">
                        imflawlezz
                    </Link>.
                </span>
                </div>
            </div>
        </section>
    )
}