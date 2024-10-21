"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const goToBookingPage = () => {
    window.location.href = 'https://book.squareup.com/appointments/kr78vr5fpzi65v/location/LS75PBSZ2X6Z6/services';
  };

  const servicesData = [
    { title: "Eyebrows", description: "Achieve perfectly shaped brows with our expert services. We provide quick cleanups and detailed shaping tailored to enhance your natural beauty.", Price: "$17" },
    { title: "Brow Lamination", description: "Elevate your brow game with our brow lamination service. This innovative treatment lifts and straightens your brow hairs for a fuller, defined look. Avoid wetting your brows for 24 hours after treatment.", Price: "$75" },
    { title: "Brow Lamination and Tint", description: "Combine shaping and coloring with our brow lamination and tint service. This treatment lifts your brows while adding a rich, vibrant color for a polished finish.", Price: "$90" },
    { title: "Brow Lamination, Tint and Thread", description: "Transform your brows with our comprehensive service that includes lamination, tinting, and threading. Get defined, colored brows with no stray hairs in sight.", Price: "$95" },
    { title: "Brow Lamination and Thread", description: "Our brow lamination with threading service offers a polished look by lifting and shaping your brows while tidying up any unwanted hairs for beautifully defined brows.", Price: "$80" },
    { title: "Brow Henna", description: "For those seeking fuller, thicker brows, our brow henna service is an excellent choice. This treatment adds rich color to enhance your natural shape, leaving you with stunning results.", Price: "$35" },
    { title: "Tint (Darkening)", description: "Enhance your natural beauty with our darkening tint service for brows and lashes. This treatment deepens your color, providing a fuller look that lasts without daily makeup.", Price: "$25" },
    { title: "Tint (Lightening)", description: "Brighten your look with our lightening tint service. This gentle treatment softens your color for a lighter, delicate appearance that enhances your features effortlessly.", Price: "$25" },
    { title: "Lash Lift & Tint", description: "Elevate your lashes with our lash lift and tint service! This semi-permanent treatment curls and lifts your natural lashes, while the tint adds depth and definition without the hassle of mascara.", Price: "$90" },
    { title: "Lash Tint", description: "Revitalize your lashes with our lash tint service, giving the appearance of wearing mascara without the morning routine. Enjoy beautifully defined lashes with a natural look.", Price: "$40" },
    { title: "Lash Lift", description: "Transform your lashes with our lash lift service for a beautiful curl and lift. This treatment enhances your natural lashes, making them appear fuller and more defined.", Price: "$75" },
    { title: "Lash Lift and lower Lash Tint", description: "Transform your lashes with our lash lift service for a beautiful curl and lift. This treatment enhances your natural lashes, making them appear fuller and more defined.", Price: "$95" }, 
    { title: "Forehead", description: "Smooth out your forehead with our threading service. Our expert technique removes unwanted baby hairs for a polished appearance without constant upkeep.", Price: "$10" },
    { title: "SideBurns", description: "Revamp your look with our sideburns threading service! We skillfully shape and clean up sideburns for a contemporary and refined appearance.", Price: "$13" },
    { title: "Upper Lip", description: "Gently remove unwanted hair from your upper lip with our precise threading service, leaving it smooth and well-defined for a more refined look.", Price: "$10" },
    { title: "Full Face", description: "Experience a flawless look with our full face threading service. This thorough treatment removes unwanted hair for a smooth, radiant complexion.", Price: "$45" },
    { title: "Chin", description: "Say goodbye to stubborn chin hairs with our threading service. We ensure your chin looks smooth and well-groomed, boosting your confidence.", Price: "$10" },
    { title: "Neck", description: "Achieve a clean and polished look with our neck threading service. We remove unwanted hair for a well-groomed appearance that makes you feel fresh.", Price: "$10" },
  ];
  


  return (
    <div className="flex flex-col justify-between items-center space-y-8 p-4 w-full">
      <h1 className="text-2xl font-bold underline transition-transform duration-300 hover:scale-150 font-custom">Services</h1>
      <div className="flex flex-col w-full md:w-1/2"> 
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col justify-between space-y-2 items-left bg-white backdrop-blur-md p-4 border-2 border-grey shadow-lg transition-all duration-300  ${activeIndex === index ? 'h-auto' : 'h-16'} cursor-pointer`} 
            onClick={() => toggleDescription(index)}
          >
            <div className="flex justify-between items-center ">
              <h1 className="text-lg font-custom">{service.title}</h1>
              <FontAwesomeIcon 
                icon={activeIndex === index ? faChevronUp : faChevronDown} 
                className="ml-2 cursor-pointer"
              />
            </div>
            {activeIndex === index && (
              <div className='bg-fuchsia-100 p-2 text-center items-center rounded-2xl flex flex-col justify-between space-y-2'>
                <p className="text-md text-center pl-2 pr-2 font-custom">{`Pricing: ${service.Price}`}</p>
                <p className="text-md text-justify pl-2 pr-2">{service.description}</p>
                <button onClick={goToBookingPage} className="bg-fuchsia-200 text-black font-custom p-2   rounded-xl">Book Now</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
