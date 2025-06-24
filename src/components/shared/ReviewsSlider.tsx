'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { ReviewItem } from "@/components/shared/ReviewItem";
import { ReviewsList } from "@/data/ReviewsList";

export const ReviewsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        created() {
            setLoaded(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        mode: 'snap',
        slides: {
            origin: 'center',
            perView: 1,
            spacing: 10,
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.moveToIdx(currentSlide, true);
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center  px-4 lg:px-30">
            <div ref={sliderRef} className="keen-slider py-4">
                {ReviewsList.map((review, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide"
                        style={{ width: '100%' }}
                    >
                        <div className="px-2">
                            <ReviewItem {...review} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2.5 mt-2 md:mt-4">
                {loaded && ReviewsList.map((_, idx) => (
                    <button
                        key={idx}
                        className={`
                            w-2 h-2 bg-black
                            transition-all duration-300 ease-out
                            ${currentSlide === idx ? 'scale-125' : 'scale-50'}
                        `}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        aria-label={`Go to review ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};