import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faStar, faCogs, faLightbulb, faTachometerAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'fa-rocket': faRocket,
  'fa-star': faStar,
  'fa-cogs': faCogs,
  'fa-lightbulb': faLightbulb,
  'fa-tachometer-alt': faTachometerAlt,
  'fa-chart-line': faChartLine
};

const Feature = ({ icon, heading, paragraph }) => {
  return (
    <div className="p-6 text-center rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full">
        <FontAwesomeIcon icon={iconMap[icon]} className="text-2xl" />
      </div>
      <h4 className="text-xl font-bold  text-gray-200 mb-2">{heading}</h4>
      <p className="text-gray-400 text-lg">{paragraph}</p>
    </div>
  );
};

export default Feature;

// import React, { useState } from 'react';
// // import Featurecomp from './Featurecomp';
// import Togglesection from './Togglesection';

// function App() {
//   // const [showFeatures, setShowFeatures] = useState(false);

//   const handleToggle = (value) => {
//     setShowFeatures(value); 
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
//       {/* <h1 className="text-3xl font-bold mb-6">Your App</h1> */}
//       <Togglesection onToggle={handleToggle} />
//       {/* {showFeatures && <Featurecomp />} */}
//     </div>
//   );
// }

// export default App;
