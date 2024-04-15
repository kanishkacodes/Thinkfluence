"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    
    <nav className="bg-black py-4 flex items-center justify-between sticky top-0 w-full z-50">
      {/* Logo */}
      <div className="ml-2 md:ml-8 mt-2">
        <div className="h-8 md:h-12">
          <Link href="/">
            <Image
              src="/thinkfluecewhite.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>
      {/* Hamburger menu for tablet and mobile */}
      <div className="md:hidden mr-4">
        <button className="text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Menu items for desktop view */}
      <div className="hidden md:flex flex-grow  justify-end pr-3 mr-3">
        <Link
          href="/"
          className="transition duration-300 hover:text-purple-700 mx-4"
        >
          Home
        </Link>
        <Link
          href="#about"
          onClick={closeMenu}
          className="transition duration-300 hover:text-purple-700 mx-4"
        >
          About
        </Link>
        <Link
          href="#services"
          onClick={closeMenu}
          className="transition duration-300 hover:text-purple-700 mx-4"
        >
          Services
        </Link>
        <Link
          href="#contact"
          onClick={closeMenu}
          className="transition duration-300 hover:text-purple-700 mx-4"
        >
          Contact
        </Link>
       
      </div>
      
      <div
        className={`md:hidden absolute top-16 right-0 left-0 bg-black rounded-xl py-2 ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-purple-700"
        >
          Home
        </Link>
        <Link
          href="#about"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-purple-700"
        >
          About
        </Link>
        <Link
          href="#services"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-purple-700"
        >
          Services
        </Link>
        <Link
          href="#contact"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-purple-700"
        >
          Contact
        </Link>
        
      </div>
    </nav>
    </>
  );
}

export default Navbar;
