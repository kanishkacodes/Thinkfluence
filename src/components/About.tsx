"use client";
import React from "react";

const stats = [
  { name: "Clients", value: "100+" },
  { name: "Projects Completed", value: "230" },
  { name: "Team Members", value: "15" },
  { name: "Years in Business", value: "10" },
];

const About = () => (
  <div
    id="about"
    className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 flex flex-col justify-center items-center"
  >
    {" "}
    {/* Center align the content vertically and horizontally */}
    <div
      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
    <div
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      {" "}
      {/* Center align the text */}
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold text-white mb-8 z-10">About Us</h2>{" "}
        {/* Adjusted size and placement */}
        <p className="mt-6 text-lg leading-8 text-gray-300 text-center sm:ml-20 sm:mr-20 md:ml-0 md:mr-0">
          {" "}
          {/* Justify the paragraph text */}
          <span>
          Thinkfluence is a premier bespoke consultancy firm focusing only in
          the Hospitality domain. We are an extension of Explorex, which is
          India&apos;s leading full stack OS which helps in managing your restaurant
          more efficiently thereby helping you generate more revenue. We
          specialise in Performance Marketing thereby generating more ROl on
          your spend, and helping segment & target more effectively. Parallel we
          believe in crafting unforgettable experiences and optimising
          operations for businesses in the dynamic world of hospitality.
          </span>
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default About;
