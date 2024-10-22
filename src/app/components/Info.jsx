"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons'; // added faYelp for Yelp icon
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info() {
    return (
        <div className='flex flex-col justify-center items-center border-t-2 border-purple-400 pb-12 bg-white'>
            <div className="md:p-10 py-8 flex flex-col sm:flex-row md:w-1/2 justify-between items-center text-black h-40">
                
                {/* Social Media Links */}
                <div className='flex flex-col items-start space-y-2'>
                    <a
                        href="https://www.instagram.com/eyeenhancethreading/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        <span className='text-black'>@eyeenhancethreading</span>
                    </a>

                    <a
                        href="https://www.google.com/search?q=eye+enhance+threading+brighton+ma&oq=eye+e&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRhAMggIAhBFGCcYOzIGCAMQRRg7MgYIBBBFGDkyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3NjgxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89e379739b29895b:0x672f16769eeb732,1,,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black"
                    >
                        <FontAwesomeIcon icon={faGoogle} className='text-purple-400' /> Leave a Google Review
                    </a>

                    <a
                        href="https://www.yelp.com/biz/eye-enhance-threading-boston"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black"
                    >
                        <FontAwesomeIcon icon={faYelp} className='text-purple-400' /> Yelp Review
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-center mt-4 text-black">
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} className='text-purple-400' /> 857-221-2399
                    </p>
                    <p>
                        <a
                            href="mailto:eyeenhance1@gmail.com"
                            className="text-black"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className='text-purple-400' /> eyeenhance1@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="mt-8 sm:mt-0 text-center pb-8">
                <p>&copy; 2024 Eye Enhance Threading. All rights reserved.</p>
            </div>
        </div>
    );
};
