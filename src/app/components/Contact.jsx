"use client";

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  

  const sendEmail = (e) => {
    e.preventDefault();
  
   
    const selectedServicesString = selectedServices.join(', ');
  
   
    emailjs.send('service_dqs8yel', 'template_ie5zwem', {
      name: form.current.name.value,
      phone: form.current.phone.value,
      email: form.current.email.value,
      message: form.current.message.value,
    }, 'D27CPhcKan1F1Zda7')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        form.current.reset(); 
        setIsSubmitted(true); 
      }, (error) => {
        console.log(error.text);
        alert('Error sending email. Please try again.');
      });
  };
  

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-10'>
      <div className='flex flex-col justify-center items-center p-10 lg:m-1/2 md:w-1/2 space-y-6 m-auto'>
        <h1 className="text-2xl font-custom underline text-center mt-[-20px] transition-transform duration-300 hover:scale-150 p-4">Contact Us</h1>

        <div className="flex flex-row justify-between items-center space-x-8 w-full m-auto">
          <input type="text" name="name" className="border-2 border-none rounded-md p-2 w-2/3" placeholder="Name:" required />
          <input type="text" name="phone" className="border-2 border-none rounded-md p-2" placeholder="Phone No:" required />
        </div>

        <input type="email" name="email" className="border-2 border-none rounded-md p-2 w-full" placeholder="Email:" required />
        <textarea name="message" className="border-2 border-none rounded-md p-2 w-full h-48" placeholder="Message:"></textarea>
        <button type='submit' className='bg-white rounded-full p-3 w-1/3 m-auto text-black font-custom text-2xl items-center'>Submit</button>
      </div>

      {isSubmitted && (
        <div className="text-center text-black text-2xl font-custom mt-6">
          <p>Thank you!! We will contact you soon.</p>
        </div>
      )}
    </form>
  );
};
