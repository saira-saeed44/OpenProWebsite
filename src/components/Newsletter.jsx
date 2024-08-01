import React from "react";
const Newsletter = () => {
  return (
    <div className="bg-blue-700 flex justify-between items-center mx-9 py-12 my-12">
      <div className="w-full m-4 md:w-1/2 lg:w-2/5">
        <h2 className="text-3xl font-bold text-gray-100 mx-4">Stay in the loop</h2>
        <p className="text-xl text-gray-300 p-4">Join newsletter to get news before anyone else.</p>
      </div>
      <div className="w-full  md:w-1/2 lg:w-2/5 flex flex-col md:flex-row items-center md:items-start">
        <input
          type="email"
          placeholder="Your best email"
          className="w-full md:w-2/3 py-3 bg-blue-800 border-gray-500 border mb-4 md:mb-0 md:mr-2 focus:outline-none"
        />
        <button className="w-full md:w-1/3 px-6 py-3 mr-7 bg-gray-300 font-semibold	 text-blue-700  focus:outline-none hover:text-blue-400">
          Subscribe
        </button> 
      </div>
    </div>
  );
};

export default Newsletter;
