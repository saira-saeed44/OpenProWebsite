import React from "react";
const Newsletter = () => {
  return (
    <div className="container bg-blue-700 mx-auto flex justify-between items-center py-12 my-12 ">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <h2 className="text-2xl font-bold text-white mx-4">Stay in the loop</h2>
        <p className="text-lg text-white m-4">Join our newsletter to get top news before anyone else.</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col md:flex-row items-center md:items-start">
        <input
          type="email"
          placeholder="Your email"
          className="w-full md:w-2/3 px-6 py-3 rounded-l-lg mb-4 md:mb-0 md:mr-2 bg-gray-100 focus:outline-none"
        />
        <button className="w-full md:w-1/3 px-6 py-3 bg-white font-bold	 text-blue-900 rounded-r-lg focus:outline-none hover:text-blue-400">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
