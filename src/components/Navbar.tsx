"use client"

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="bg-black py-6 flex items-center justify-center sticky top-0 w-full z-50">
        <div className="flex  justify-center"> {/* Change hidden md:flex to flex md:hidden */}
          <Link
            href="/"
            className="transition duration-300 hover:text-purple-700 mx-4"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="transition duration-300 hover:text-purple-700 mx-4"
          >
            About
          </Link>
          <Link
            href="#services"
            className="transition duration-300 hover:text-purple-700 mx-4"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="transition duration-300 hover:text-purple-700 mx-4"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

