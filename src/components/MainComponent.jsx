import React from 'react';
import testimonials from '../components/utills/data';
import Card from './Card';

const MainComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ id, image, text, author }) => (
          <Card key={id} image={image} text={text} author={author} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
