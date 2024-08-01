import React from "react";
import img from "./images/hero.jpg";
import playIcon from "../components/images/play.png"; 

const Hero = () => {
  return (
    <div className="py-20  text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-200 mb-4">
          Landing template for startups
        </h1>
        <p className="text-gray-400 text-xl mb-6">
          Our landing page template works on all devices, so you only have to
          set it up once, <br /> and get beautiful results forever.
        </p>
        <div className="mb-8">
          <button className="bg-blue-700 hover:bg-blue-800 rounded text-white font-semibold py-3 px-8 mr-4">
            Start free trial
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 rounded text-white font-semibold py-3 px-8">
            Learn more
          </button>
        </div>
        <div className="relative inline-block mt-5">
          <img src={img} alt="Hero Image"  className="w-full h-auto" />
          <button
            className="absolute inset-0 flex justify-center items-center"
            style={{ background: 'rgba(0, 0, 0,0)', border: 'none', borderRadius: '2%' }}
            onClick={() => alert('Play button clicked')} 
          >
            <img src={playIcon} alt="Play" className="w-12 rounded-3xl h-12" />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-4 mt-20">
        The majority of our customers do not <br /> understand their workflows.
      </h1>
      <p className="text-gray-400 mb-6">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt <br /> mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Hero;
