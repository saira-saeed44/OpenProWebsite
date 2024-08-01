import React from 'react';

const Card = ({ image, text, author }) => {
  return (
    <div className="">
      <div className="p-4">
        <img src={image} alt="Testimonial" className="w-16 h-16 object-cover rounded-full mx-auto mb-4" />
      </div>
      <div className="p-4">
        <p className=" mb-4">{text}</p>
        <p className="font-semibold text-red-900">{author}</p>
      </div>
    </div>
  );
};

export default Card;
