import React from 'react';
import Feature from './Features';
import featureData from '../components/utills/data';

const FeaturesList = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <Feature
              key={index}  
              icon={feature.icon}
              heading={feature.heading}
              paragraph={feature.paragraph}
            />
          ))}
        </div>
        <hr className=" mt-12 py-12 md:py-20 border-t border-gray-800" />
      </div>
    </div>
  );
};

export default FeaturesList;
