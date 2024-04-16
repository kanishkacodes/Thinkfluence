"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div id="support" className="footer bg-black text-white py-12 lg:py-16 ">
      {/* Main div */}
      <div className="container mx-auto lg:px-0 px-4 flex flex-col lg:flex-row justify-between">
        {/* 1st div */}
        <div className="flex-1 lg:mr-4 mb-8 lg:mb-0 lg:pr-8">
          {/* Logo */}
          <div className="mb-4 lg:mb-4  sm:w-48 sm:h-48 md:w-auto md:h-auto">
            <Image
              src="/thinkfluecewhite.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          {/* Company name and address */}
          <div className="mb-8 lg:mb-12">
            {/* <h2 className="text-lg font-bold mb-2">Thinkfluence</h2> */}
            <p>
              Service Road, 2nd Floor, DVK Spaces, 13th Cross, Dr Puneeth
              Rajkumar Rd, 6th Sector, HSR Layout, Bengaluru, Karnataka 560102
            </p>
          </div>
          {/* Social media icons */}
          <div className="flex space-x-4">
            <Link href="/">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="hover:text-gray-500"
              />
            </Link>
            {/* <Link href="/">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="hover:text-gray-500"
              />
            </Link> */}
            <Link href="https://www.instagram.com/thinkfluence.byexplorex/">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:text-gray-500"
              />
            </Link>
            {/* <Link href="/">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="hover:text-gray-500"
              />
            </Link> */}
            {/* <Link href="/">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:text-gray-500"
              />
            </Link> */}
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex-1 mb-8 lg:mb-0 md:ml-72 lg:pr-8">
          {/* Quick links */}
        </div>

        {/* 3rd div */}
        <div className="flex-1 lg:ml-4 lg:text-right">
          {/* Business Enquiries */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-lg font-bold mb-2">Business Enquiries</h2>
            <Link href="mailto:info@thinkfluence.co.in">
              info@thinkfluence.co.in
            </Link>
          </div>
          {/* Support */}
        </div>
      </div>

      {/* Copyright */}

      <div className="text-xs text-center  mt-8 mb-0">
        © 2024 Thinkfluence || All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
