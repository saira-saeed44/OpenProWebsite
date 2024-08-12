import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="text-paragraph"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-8 px-4 md:px-6">
        <motion.div 
          className="flex flex-wrap justify-between"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <p className="mb-4 text-paragraph">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <p className="text-sm my-5 py-9 text-paragraph">© Cruip.com. All rights reserved.</p>
            <motion.div 
              className="flex justify-center lg:justify-start space-x-4 mt-9"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a 
                href="#" 
                className="flex items-center justify-center text-purple-600 hover:text-heading bg-gray-800 hover:bg-gray-600 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center justify-center text-purple-600 hover:text-heading bg-gray-800 hover:bg-gray-600 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center justify-center text-purple-600 hover:text-heading bg-gray-800 hover:bg-gray-600 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center justify-center text-purple-600 hover:text-heading bg-gray-800 hover:bg-gray-600 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center justify-center text-purple-600 hover:text-heading bg-gray-800 hover:bg-gray-600 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </motion.a>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-between">
            <motion.ul 
              className="w-full md:w-1/3 mb-6 md:mb-0 pl-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <li className="font-semibold text-heading mb-2">Products</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Web Studio</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">DynamicBox Flex</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Programming Forms</li>
            </motion.ul>
            <motion.ul 
              className="w-full md:w-1/3 mb-6 md:mb-0 pl-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <li className="font-semibold text-heading mb-2">Resources</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Nostrud exercitation</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Visual mockups</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Nostrud exercitation</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Visual mockups</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Nostrud exercitation</li>
            </motion.ul>
            <motion.ul 
              className="w-full md:w-1/3 mb-6 md:mb-0 pl-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <li className="font-semibold text-heading mb-2">Company</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Consectetur adipiscing</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Labore et dolore</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Consectetur adipiscing</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Labore et dolore</li>
              <li className="text-paragraph cursor-pointer hover:text-heading">Consectetur adipiscing</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
