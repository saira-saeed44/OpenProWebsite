import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <p className="text-lg mb-4">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <p>All rights reserveds.</p>
        </div>
        <div className="w-w-1/3 md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex flex-col">
          <h4 className="text-lg mb-4 hover:cursor-pointer hover:text-red-400">Resources</h4>
          <ul>
            <li className="hover:cursor-pointer hover:text-red-400">Nostrud exercitation</li>
            <li className="hover:cursor-pointer hover:text-red-400">Visual mockups</li>
            <li className="hover:cursor-pointer hover:text-red-400">Nostrud exercitation</li>
            <li className="hover:cursor-pointer hover:text-red-400">Visual mockups</li>
            <li className="hover:cursor-pointer hover:text-red-400">Nostrud exercitation</li>
          </ul>
        </div>
        <div className="w-w-1/3 md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex flex-col">
          <h4 className="text-md mb-4 hover:cursor-pointer hover:text-red-400">Company</h4>
          <ul>
            <li className="hover:cursor-pointer hover:text-red-400">Consectetur adipiscing</li>
            <li className="hover:cursor-pointer hover:text-red-400">Labore et dolore</li>
            <li className="hover:cursor-pointer hover:text-red-400">Consectetur adipiscing</li>
            <li className="hover:cursor-pointer hover:text-red-400">Labore et dolore</li>
            <li className="hover:cursor-pointer hover:text-red-400">Consectetur adipiscing</li>
          </ul>
        </div>
        <div className="w-full text-left md:text-right">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="mr-4 hover:cursor-pointer hover:text-red-400">
            <i class="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="mr-4 hover:cursor-pointer hover:text-red-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mr-4 hover:cursor-pointer hover:text-red-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
