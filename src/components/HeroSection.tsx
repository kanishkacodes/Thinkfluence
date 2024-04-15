"use client";

import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 sm:left-20 sm:-top-10"
        fill="#776fff"
      />

      <div className="p-4 relative z-10 w-full text-center">
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-cyan flex justify-center items-center">
        <div className="px-4 md:px-0">
          <Image
            src="/thinkfluecewhite.png"
            alt="Thinkfluence Logo"
            width={600}
            height={600}
          />
        </div>
      </h1>
      </div>
      

      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-4 md:px-0">
       powered by Explorex
      </p>

      <div className="mt-4">
        <Link href="/Contactus">
          <Button
            borderRadius="1.75rem"
            className="bg-black text-white dark:bg-white dark:text-black border-slate-800"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
