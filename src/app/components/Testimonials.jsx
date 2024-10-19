"use client";

const data = [
    {
        image1: 'r1.jpg',
        image2: 'r2.jpg',
    },
    {
        image1: 'r3.jpg',
        image2: 'r4.jpg',
    },
    {
        image1: 'r5.jpg',
        image2: 'r6.jpg',
    },
];

export default function Testimonials() {
    return (
        <div className='flex flex-col justify-center items-center p-10 md:w-full space-y-6 m-auto'>
            <h1 className="text-2xl font-custom underline text-center transition-transform duration-300 hover:scale-150">Testimonials</h1>
            <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((item, index) => (
                    <div 
                        key={index} 
                        className=" relative z-1"
                    >
                        
                        <img 
                            src={item.image1} 
                            alt={`Testimonial ${index + 1}`} 
                            className="w-full h-auto rounded-2xl shadow-lg" 
                        />

                        
                        <img 
                            src={item.image2} 
                            alt={`Testimonial ${index + 1} extra`} 
                            className="w-full h-auto rounded-2xl shadow-lg mt-4" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
