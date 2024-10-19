"use client";

export default function Footer() {

    const goToBookingPage = () => {
        window.location.href = 'https://book.squareup.com/appointments/kr78vr5fpzi65v/location/LS75PBSZ2X6Z6/services';
    };

    return (
      <div className='fixed bottom-0 left-0 w-full bg-white flex justify-center items-center h-16'>
         <button onClick={goToBookingPage} className="bg-fuchsia-200 text-black font-custom p-2 rounded-xl">Book Now</button>
      </div>
    );
}
