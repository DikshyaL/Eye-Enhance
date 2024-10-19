"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info() {
    return (
        <div className='flex flex-col justify-center items-center border-t-2 border-purple-400 pb-12 bg-white'>
            <div className="md:p-10 py-8 flex flex-col sm:flex-row md:w-1/2 justify-between items-center text-black h-40">

               <div className='flex flex-col items-center space-y-2'>
                    <a
                        href="https://www.instagram.com/eyeenhancethreading/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        <span className='text-black'>@eyeenhancethreading</span>
                    </a>
                    
                </div>
                
                <div className="text-center mt-4 ">
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} /> 857-221-2399
                    </p>
                   
                    <p>
                        <a
                            href="mailto:eyeenhance1@gmail.com"
                            className="text-black"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> eyeenhance1@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            
            <div className="mt-4 sm:mt-0 text-center pb-8">
                <p>&copy; 2024 Eye Enhance Threading. All rights reserved.</p>
            </div>
        </div>
    );
};
