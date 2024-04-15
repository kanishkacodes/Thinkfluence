import React from 'react';

// Array of objects containing heading and paragraph data
const cardData = [
  {
    heading: 'Tailored Expertise',
    paragraph: 'Thinkfluence stands out as a premier consultancy firm solely dedicated to the hospitality domain. Our specialized focus allows us to offer bespoke solutions finely tuned to the unique challenges and opportunities within the industry.'
  },
  {
    heading: 'Seamless Integration',
    paragraph: "As an extension of Explorex, India's leading full-stack OS for restaurant management, Thinkfluence offers a seamless integration of cutting-edge technology and strategic consultancy. This synergy empowers businesses to efficiently manage operations while maximizing revenue generation."
  },
  {
    heading: 'ROI-Driven Approach',
    paragraph: "At Thinkfluence, we specialize in performance marketing strategies that deliver tangible results. By focusing on generating a higher return on investment (ROI) for our clients' marketing spend, we help businesses achieve greater profitability and sustainable growth."
  },
  {
    heading: 'Experience Crafting',
    paragraph: "Beyond marketing and operations optimization, Thinkfluence is committed to crafting unforgettable experiences for both businesses and their customers. By infusing creativity and innovation into every aspect of hospitality, we elevate brand perception and foster long-lasting customer loyalty."
  }
];

function Different() {
  return (
    <>
    <div className='dark:bg-black bg-grid-small-white/[0.2]'>
    <h2 className="md:text-3xl text-xl font-bold text-center mb-8 z-10 pt-20">What Makes Us So Different?</h2>
   
    <div className="flex flex-wrap justify-center pb-20">
         
    
      {cardData.map((data, index) => (
        <div key={index} className="m-4 sm:m-4   md:w-72 lg:w-80 w-80 ">
          <div className=" bg-slate-900 rounded-lg p-8 hover:bg-slate-800 transition duration-300 ease-in-out h-full">
            <h2 className="text-white text-lg font-bold">{data.heading}</h2>
            <p className="text-white mt-6">{data.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Different;
