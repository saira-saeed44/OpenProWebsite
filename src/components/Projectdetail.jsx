import React from 'react';

const ProjectDetail = ({ textPosition, title, subHeading, description, listItems, imageSrc }) => {
  return (
    <div className={`flex ${textPosition === 'right' ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
      <div className="w-1/2 p-5">
        <img src={imageSrc} alt="Project" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-5 text-gray-200">
        <h2 className="font-architects-daughter text-xl text-purple-600 mb-2">{title}</h2>
        <h3 className="text-4xl font-bold mb-4 font-sans">{subHeading}</h3> 
        <p className="text-xl text-gray-400 mb-4">{description}</p>
        <ul className="text-lg text-gray-400 -mb-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center mb-2 font-sans">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
