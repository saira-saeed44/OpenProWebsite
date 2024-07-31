import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FeatureToggle = ({ onToggle }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
    onToggle && onToggle(!showFeatures);
  };

  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      onClick={toggleFeatures}
    >
      {showFeatures ? (
        <>
          Hide Features <FiChevronUp className="inline-block ml-1" />
        </>
      ) : (
        <>
          Show Features <FiChevronDown className="inline-block ml-1" />
        </>
      )}
    </button>
  );
};

export default FeatureToggle;
