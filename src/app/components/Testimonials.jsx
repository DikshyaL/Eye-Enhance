"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    {
        image: 'r1.jpg',
    },
    {
        image: 'r2.jpg',
    },
    {
        image: 'r3.jpg',
    },
    {
        image: 'r4.jpg',
    },
    {
        image: 'r5.jpg',
    },
    {
        image: 'r6.jpg',
    },
];

export default function Testimonials() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div className='flex flex-col justify-center items-center p-10 md:w-full space-y-6 m-auto '>
            <h1 className="text-2xl font-custom underline text-center  transition-transform duration-300 hover:scale-150 text-center ">Testimonials</h1>
            <div className="w-3/4 m-auto ">
                <Slider {...sliderSettings}>
                    {data?.map((item, index) => (
                        <div key={index} className="p-4 relative z-1">
                            <img src={item.image} alt={`Testimonial ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
