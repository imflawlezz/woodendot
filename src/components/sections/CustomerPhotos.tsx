
import {CustomerPhotosSlider} from "@/components/shared/CustomerPhotosSlider";

export const CustomerPhotos = () => {
    return (
        <section className="flex flex-col gap-5 md:gap-9 my-12">
            <div className="font-cardo flex flex-col items-center justify-center text-center gap-4 md:gap-5 px-4 ">
                <h1 className="font-bold text-2xl md:text-3xl">
                    Our pieces inside your home
                </h1>
                <p className="md:text-lg">
                    Get inspired by our products in real-life. Tag us and be featured!
                </p>
            </div>
            <CustomerPhotosSlider/>
        </section>
    )
}