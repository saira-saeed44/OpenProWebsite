import React from 'react';
import Feature from './Features'; 
import featureData from '../components/utills/data'; 
import { motion } from 'framer-motion';

const FeaturesList = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-16 mx-9">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Feature
                icon={feature.icon}
                heading={feature.heading}
                paragraph={feature.paragraph}
              />
            </motion.div>
          ))}
        </div>
        <hr className="mt-12 pt-12 md:pt-20 border-t border-gray-800" />
      </div>
    </div>
  );
};

export default FeaturesList;
