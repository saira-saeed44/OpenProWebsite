import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
          <p className="mb-4 text-gray-400">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <p className="text-gray-400 text-sm my-5 py-9">© Cruip.com. All rights reserved.</p>
          <div className="flex  justify-end space-x-4  mt-9">
            <a href="#" className="flex items-center justify-center text-purple-600  hover:text-gray-100 bg-gray-800 hover:bg-gray-400 p-3 rounded-full">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="flex items-center justify-center text-purple-600 hover:text-gray-100 bg-gray-800 hover:bg-gray-400 p-3 rounded-full">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="flex items-center justify-center text-purple-600 hover:text-gray-100 bg-gray-800 hover:bg-gray-400 p-3 rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="flex items-center justify-center text-purple-600 hover:text-gray-100 bg-gray-800 hover:bg-gray-400 p-3 rounded-full">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="flex items-center justify-center text-purple-600 hover:text-gray-100 bg-gray-800 hover:bg-gray-400 p-3 rounded-full">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-between">
          <ul className="w-full md:w-1/3 mb-6 md:mb-0 pl-7">
            <li className="font-semibold text-gray-200 mb-2">Products</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Web Studio</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>DynamicBox Flex</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Programming Forms</li>
          </ul>
          <ul className="w-full md:w-1/3 mb-6 md:mb-0">
            <li className="font-semibold mb-2 text-gray-200">Resources</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Nostrud exercitation</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Visual mockups</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Nostrud exercitation</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Visual mockups</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Nostrud exercitation</li>
          </ul>
          <ul className="w-full md:w-1/3 mb-6 md:mb-0">
            <li className="font-semibold mb-2 text-gray-300">Company</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100 '>Consectetur adipiscing</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Labore et dolore</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Consectetur adipiscing</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Labore et dolore</li>
            <li className='text-gray-400 cursor-pointer hover:text-gray-100'>Consectetur adipiscing</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
