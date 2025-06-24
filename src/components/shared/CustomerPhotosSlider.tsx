'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {CustomerPhotoCard} from "@/components/shared/CustomerPhotoCard";
import {useEffect, useState} from 'react';
import {CustomerPhotosList} from "@/data/CustomerPhotosList";

export const CustomerPhotosSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        mode: 'snap',
        breakpoints: {
            '(max-width: 1024px)': {
                slides: {
                    origin: 'auto',
                    perView: 2,
                    spacing: 10,
                },
            },
            '(max-width: 767px)': {
                slides: {
                    origin: 'auto',
                    perView: 1,
                    spacing: 0,
                },
            },
        },
        slides: {
            origin: 'auto',
            perView: 3,
            spacing: 10,
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.moveToIdx(currentSlide, true);
        }
    }, []);

    return (
        <div className="w-full max-w-screen px-4 lg:px-40">
            <div ref={sliderRef} className="keen-slider py-4">
                {CustomerPhotosList.map((photo, index) => {
                    return (
                        <div
                            key={index}
                            className="keen-slider__slide"
                            style={{ width: '100%' }}
                        >
                            <div

                            >
                                <CustomerPhotoCard {...photo} />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center gap-2 mt-3">
                {CustomerPhotosList.map((_, idx) => (
                    <button
                        key={idx}
                        className={`
                            w-2 h-2 bg-black
                            transition-all duration-300 ease-out
                            ${currentSlide === idx ? 'scale-125' : 'scale-50'}
                        `}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                    />
                ))}
            </div>
        </div>
    );
};