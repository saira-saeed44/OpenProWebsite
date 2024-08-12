import React from 'react';
import TestimonialCard from './Card';
import testimonialImage1 from '../components/images/testimonial.jpg'; 
import testimonialImage2 from '../components/images/testimonial.jpg';
import testimonialImage3 from '../components/images/testimonial.jpg';

const MainComponent = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonialImage1,
      text: "-Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      author: "Anastasia Dan -",
      author2:" UX Board",
    },
    {
      id: 2,
      image: testimonialImage2,
      text: "-Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      author: "Anastasia Dan -",
      author2:" UX Board",
    },
    {
      id: 3,
      image: testimonialImage3,
      text: "-Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
      author: "Anastasia Dan -",
      author2:" UX Board",
    },
  ];

  return (
    <div className="p-4 text-cen">
<div>
<h1 className='text-heading dark:text-heading-dark text-center font-extrabold text-4xl'>
  Don't take our word for it
</h1>
<p className='text-paragraph dark:text-paragraph-dark text-xl pt-2 pb-14 text-center'>
  Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br/> 
  nulla at volutpat diam ut venenatis tellus—in ornare.
</p>

</div>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
        {testimonials.map(({ id, image, text, author,author2 }) => (
          <TestimonialCard key={id} image={image} text={text} author={author} author2={author2} />
        ))}
      </div>
      <hr className=" mt-12 pt-12 md:pt-20 border-t border-gray-800" />

    </div>
  );
};

export default MainComponent;
