import React from 'react';
const Card = ({card}) => {
console.log("main component is here",card);
  return (
    
    <div className="rounded-lg shadow-md p-4">
      <img src={card?.imageUrl} alt={card?.title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{card?.title}</h2>
      <p className="text-white">{card?.description}</p>
    </div> 
  );
};

export default Card;
