import {Header} from "@/components/sections/Header";
import {Hero} from "@/components/sections/Hero";
import {Advantages} from "@/components/sections/Advantages";
import {Categories} from "@/components/sections/Categories";
import {FeaturedFurniture} from "@/components/sections/FeaturedFurniture";
import {CustomerPhotos} from "@/components/sections/CustomerPhotos";
import {Reviews} from "@/components/sections/Reviews";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Advantages/>
            <Categories/>
            <FeaturedFurniture/>
            <CustomerPhotos/>
            <Reviews/>
        </>
    );
}
