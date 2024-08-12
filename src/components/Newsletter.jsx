import React from "react";
import newsletterBg from "../components/assests/svg/newsletterbg.svg";

const Newsletter = () => {
  return (
    <div className="bg-sky-600 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-9 py-20 my-12 px-6 md:px-12 relative">
      <img
        src={newsletterBg}
        alt="newsletter backgroud"
        className="absolute right-0 top-0 transform transition-transform duration-1000 ease-in-out hover:scale-110"
      />
      <div className="w-full md:w-1/2 text-center md:text-left mb-3 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 transform transition-transform duration-700 hover:translate-x-2">
          Stay in the loop
        </h2>
        <p className="text-lg md:text-xl text-gray-300 transform transition-transform duration-700 hover:translate-x-2">
          Join our newsletter to get news before anyone.
        </p>
      </div>
      <div className="w-full md:w-1/2 space-x-2 space-y-3 md:space-y-0 flex flex-col md:flex-row items-center justify-center">
        <input
          type="email"
          placeholder="Your best email"
          className="w-full md:w-2/3 py-3 px-4 bg-blue-800 border border-blue-600 text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition-transform duration-700 hover:scale-105"
        />
        <button className="w-full md:w-1/3 px-4 py-3 bg-gray-300 font-semibold text-blue-700 focus:outline-none hover:bg-white hover:text-blue-600 transform transition-transform duration-700 hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
