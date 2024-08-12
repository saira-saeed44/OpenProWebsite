import React from 'react';
import testimonialImage from '../components/images/testimonial.jpg'; 

const TestimonialCard = ({ image = testimonialImage, text, author,author2 }) => {
  return (

    <div className="p-7 bg-gray-800 max-w-xs mx-auto">
      <img
        src={image}
        alt="Testimonial"
        className="w-13 h-13 rounded-full ml-1 mx-auto"
      />
      <p className="mt-4 text-gray-400 text-md font-semibold text-center">{text}</p>
      <hr className="my-4 border-gray-700"/>
      <p className="text-gray-300 font-semibold text-md text-center">{author}<span className=' text-md font-bold text-blue-900'>{author2}</span>
      </p>
    </div>  
    
  



  );
};

export default TestimonialCard;
