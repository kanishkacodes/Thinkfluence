import React from 'react';
import Image from 'next/image'; 

function NewServices() {
  const data = [
    {
      imageUrl: "/statistics.png",
      heading: "Concept to Brick & Mortar",
      paragraph: "From ideation to execution, we guide you through every step of bringing your hospitality concept to life. Our expert team ensures seamless transition from vision to reality, providing unparalleled support and expertise."
    },
    {
      imageUrl: "/dinnerware.png",
      heading: "Menu Planning & Costing",
      paragraph: "Crafting a menu that delights customers while maintaining profitability is crucial. Our menu planning and costing services help you strike the perfect balance, ensuring culinary excellence and financial viability."
    },
    {
      imageUrl: "/strategy-development.png",
      heading: "Marketing & Strategy Creation",
      paragraph: "Stand out in a crowded market with our strategic marketing solutions. We develop tailored strategies to elevate your brand, attract customers, and drive business growth through innovative marketing campaigns."
    },
    {
      imageUrl: "/management.png",
      heading: "Operations & Management",
      paragraph: "Smooth and efficient operations are the backbone of any successful hospitality venture. Our operations and management services optimize workflows, enhance efficiency, and elevate service standards to exceed customer expectations."
    },
    {
      imageUrl: "/job-seeker.png",
      heading: "Recruitment Services",
      paragraph: "Build a winning team with our recruitment services. We source top talent, conduct thorough assessments, and facilitate seamless onboarding to ensure your staff embodies your brand values and delivers exceptional service."
    },
    {
      imageUrl: "/social-media.png",
      heading: "Social Media Management",
      paragraph: "Leverage the power of social media to engage with your audience and amplify your brand presence. Our social media management services create compelling content, drive engagement, and build a loyal community around your brand."
    },
    {
      imageUrl: "/problem-solving.png",
      heading: "Audits & SOP",
      paragraph: "Maintain consistency and quality across all aspects of your operation with our audits and standard operating procedures (SOP) services. We conduct comprehensive audits and develop tailored SOPs to streamline processes and uphold excellence."
    },
    {
      imageUrl: "/performance.png",
      heading: "Dvelopment",
      paragraph: "Stay ahead of the curve with our development services. Whether it's exploring new concepts, expanding your footprint, or innovating within your existing framework, we provide strategic guidance and support to fuel your growth journey."
    }
  ];

  

  return (
    <div id="services" className='dark:bg-black bg-grid-small-white/[0.2]'>

<h2 className="md:text-3xl text-2xl font-bold text-center mb-8 z-10 pt-20">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:mr-20 md:ml-20 pb-20">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
          <Image src={item.imageUrl} alt={item.heading} width={75} height={75} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
          <p className="text-gray-600">{item.paragraph}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
  );
}

export default NewServices;
