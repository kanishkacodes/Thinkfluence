import React from 'react';

// Array of objects containing heading and paragraph data
const cardData = [
  {
    heading: 'Improve Business',
    paragraph: 'We believe in continuously refining and optimizing business processes to drive efficiency and effectiveness. Through meticulous analysis and strategic interventions, we help businesses unlock their full potential and achieve sustainable growth.'
  },
  {
    heading: 'Enhance Bottomline',
    paragraph: 'Our focus extends beyond revenue generation to maximizing profitability. By implementing innovative cost-saving measures, streamlining operations, and identifying revenue-generating opportunities, we strive to bolster the bottom line of our clients ventures.'
  },
  {
    heading: 'Engagement',
    paragraph: 'Central to our approach is fostering meaningful connections with customers. Through personalized experiences, targeted marketing strategies, and leveraging data insights, we aim to deepen customer relationships, increase loyalty, and drive repeat business.'
  },
  {
    heading: 'Innovate',
    paragraph: 'Innovation is at the heart of everything we do. We embrace creativity, experimentation, and forward-thinking solutions to stay ahead in the ever-evolving hospitality landscape. By pushing boundaries and challenging conventions, we empower our clients to stand out, adapt, and thrive in a competitive market.'
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
