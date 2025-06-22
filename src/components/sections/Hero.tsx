'use client';
import {CtaButton} from "@/components/shared/CtaButton";
import {resolveAsset} from "@/utils/resolveAsset";

export const Hero = () => {
    return (
        <section className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${resolveAsset('sections', 'hero.jpeg')})` }}>
            <div className="flex flex-col sm:items-center justify-center max-w-4xl sm:text-center gap-10 px-6">
                <h1 className="text-3xl font-bold text-white">
                    Furniture designed to live in harmony, creating distinctive and timeless spaces
                </h1>
                <CtaButton label={"Discover now"}/>
            </div>

        </section>
    )
}