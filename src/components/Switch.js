import React from 'react';

const Switch = ({ isDarkMode, onToggle }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <div
        className={`relative inline-flex items-center ${isDarkMode ? 'bg-blue-600' : 'bg-gray-400'} rounded-full w-12 h-6`}
        onClick={onToggle}
      >
        <span
          className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </div>
    </div>
  );
};

export default Switch;
