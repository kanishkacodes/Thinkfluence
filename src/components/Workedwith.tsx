"use client";
import React from "react";
import Image from "next/image";

function WorkedWith() {
  // Array of logos
  const logos = [
    { src: "/servicestestimg1.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg2.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg3.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg4.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg5.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg6.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg1.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg2.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg3.jpg", alt: "Thinkfluence" },
    { src: "/servicestestimg4.jpg", alt: "Thinkfluence" },
  ];

  return (
    <div id="clients" className="bg-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Worked with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 px-4">
          {" "}
          {/* Added horizontal padding */}
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative rounded-full overflow-hidden h-24 w-24">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkedWith;
