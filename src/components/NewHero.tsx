import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./ui/Sparkles.tsx";

function HeroSection() {
  return (
    <div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#ddaaff"
        />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="py-10 md:py-10"> 
            <Image
              className=" w-72 md:w-96"
              src="/thinkfluecewhite.png"
              alt="Thinkfluence Logo"
              width={300}
              height={300}
              
            />
          </div>
          <div className="p-4 relative z-10 w-full text-center md:pt-32">
            <h1 className="mt-4 md:mt-2 text-base md:text-xl font-bold bg-clip-text text-cyan">
              <div className="px-4 md:px-20">
              Where Hospitality meets Expertise
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end py-8 md:py-16">
          <p className="text-sm md:text-base mb-4 md:mb-0">powered by</p>
          <Link href="https://explorex.co/">
            <Image
              src="/explorex.png"
              alt="Explorex Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default HeroSection;
