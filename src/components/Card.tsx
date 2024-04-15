'use client'
import React from "react";
import Image from "next/image";
import cardData from "./data/servicescarddata.json";
import { BackgroundGradient } from "./ui/background-gradient";

const Card = () => {
  return (
    <div  className="">
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
          Our Services
        </h2>
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <BackgroundGradient
                key={index}
                className="rounded-[22px] max-w-8xl p-1 dark:bg-zinc-900"
              >
                <div className="relative rounded-lg overflow-hidden xs-border">
                  <div className="relative  h-96 overflow-hidden rounded-[22px]">
                    <Image
                      src={card.image}
                      alt={`Image ${index + 1}`}
                      layout="fill" // Update this to layout="responsive" or layout="fixed"
                      objectFit="cover" // This can be retained
                      className="rounded-t-[22px]"
                    />
                  </div>
                  <div className="absolute top-0 left-0  w-full h-full bg-black bg-opacity-50 rounded-[22px]">
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                      <div className="p-4 text-white">
                        <p className="text-lg font-semibold mb-2">
                          {card.heading}
                        </p>
                        <p className="text-gray-200 text-pretty">
                          {card.paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
