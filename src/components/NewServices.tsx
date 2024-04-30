import React from 'react';
import Image from 'next/image'; 

function NewServices() {
  const data = [
    {
      imageUrl: "/images/o.png",
      heading: "Social Media Management",
      paragraph: "Enhance your online presence with our expert social media management services. We create compelling content, engage with your audience, and build a loyal community around your brand across various social media platforms."
    },
    {
      imageUrl: "/images/social-media.png",
      heading: "Social Media Marketing",
      paragraph: "Elevate your brand visibility and engagement with our strategic social media marketing solutions. We craft tailored campaigns to attract your target audience, drive traffic, and generate leads, ultimately boosting your brand's online influence and sales."
    },
    {
      imageUrl: "/strategy-development.png",
      heading: "Performance Marketing",
      paragraph: "Maximize your return on investment (ROI) with our specialized performance marketing strategies. We focus on delivering measurable results, efficiently allocating your marketing budget to achieve higher conversions and revenue growth."
    },
    {
      imageUrl: "/images/web-development.png",
      heading: "Website Building",
      paragraph: "Establish a strong online presence with our professional website building services. We design and develop user-friendly, visually appealing websites tailored to your brand identity, ensuring seamless navigation and engaging user experience."
    },
    {
      imageUrl: "/images/brand-engagement.png",
      heading: "Brand Building",
      paragraph: "Strengthen your brand identity and perception with our comprehensive brand building services. From crafting compelling brand stories to implementing cohesive brand strategies, we help you connect with your audience on a deeper level and stand out in the market."
    },
    {
      imageUrl: "/images/consulting.png",
      heading: "Consultancy",
      paragraph: "Gain valuable insights and strategic guidance for your business with our consultancy services. We conduct in-depth feasibility studies, analyze market trends, and provide expert recommendations to help you formulate unique and profitable concepts for your venture."
    },
    {
      imageUrl: "/images/audit1.png",
      heading: "Audits",
      paragraph: "Enhance the efficiency and performance of your business with our thorough audits. We assess all aspects of your operations, identify areas for improvement, and recommend tailored measures to optimize workflows and achieve greater success."
    },
    {
      imageUrl: "/management.png",
      heading: "Management",
      paragraph: "Achieve optimum business standards with our comprehensive management services. From handling profit and loss to streamlining back-end and front-end functionalities, we provide expert guidance and support to ensure smooth operations and sustainable growth."
    },
    {
      imageUrl: "/images/concept.png",
      heading: "Concept Design",
      paragraph: "Bring your vision to life with our customized turnkey concept design services. We tailor concepts based on feasibility reports, providing architectural and design support to create unique and captivating spaces that resonate with your target audience."
    },
    {
      imageUrl: "/images/staircase.png",
      heading: "Architect and Interior",
      paragraph: "Transform your space into a captivating environment with our architectural and interior design services. Our team offers a wide range of design solutions, from creating construction documents to managing projects, ensuring every detail reflects your brand's identity and enhances the customer experience."
    }
];


  

  return (
 <><div className='bg-grid-small-white/[0.2]'>
 <h2 className="md:text-3xl text-2xl font-bold text-center mb-8 z-10 pt-20">Services</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-7 p-5 md:pl-7 md:pr-7 pb-10 ">
  {data.map((service, index) => (
    <div key={index} className=" bg-slate-700 bg-opacity-30 rounded-lg overflow-hidden shadow-md hover:bg-slate-900">
      <div className="relative grid grid-cols-1 mr-2 pl-20  items-center mt-3 ">
        <Image
          src={service.imageUrl}
          alt={service.heading}
          width={300}
          height={300}
          className="rounded-t-lg p-4 w-36 h-36 "
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-2 ml-2 mr-2">{service.heading}</h2>
        <p className="text-sm text-gray-400  text-balance mb-2 ml-2 mr-2">{service.paragraph}</p>
      </div>
    </div>
  ))}
</div>
</div>

 </>
  );
}

export default NewServices;


{/* <div id="services" className='dark:bg-black bg-grid-small-white/[0.2]'>

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
  </div> */}

  // layout="fill"
  //         objectFit="cover"
  //w-full h-48 sm:h-56 md:h-64 lg:h-72