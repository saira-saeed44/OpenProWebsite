import React from 'react';

const ProjectDetail = ({ textPosition, title, subHeading, description, listItems, imageSrc }) => {
  return (
    <div className={`flex flex-col md:flex-row ${textPosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center my-10`}>
      <div className="w-full md:w-1/2 p-5">
        <img src={imageSrc} alt="Project" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-5 text-paragraph">
        <h2 className="font-architects-daughter text-xl md:text-2xl text-purple-600 mb-2">{title}</h2>
        <h3 className="text-2xl md:text-4xl font-bold mb-4 font-sans">{subHeading}</h3> 
        <p className="text-base md:text-xl text-paragraph mb-4">{description}</p>
        <ul className="text-base md:text-lg text-paragraph -mb-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center mb-2 font-sans">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
