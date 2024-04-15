"use client";
import React from "react";
import Image from "next/image";

function Team() {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: "/servicestestimg1.jpg",
      width: 150,
      height: 150,
    },
    {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "/servicestestimg2.jpg",
      width: 150,
      height: 150,
    },
    {
      name: "Dries Vincent",
      role: "Business Relations",
      imageUrl: "/servicestestimg3.jpg",
      width: 150,
      height: 150,
    },
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl: "/servicestestimg4.jpg",
      width: 150,
      height: 150,
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      imageUrl: "/servicestestimg5.jpg",
      width: 150,
      height: 150,
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      imageUrl: "/servicestestimg6.jpg",
      width: 150,
      height: 150,
    },
  ];

  return (
    <div
      id="team"
      className="bg-black  dark:bg-black bg-grid-small-white/[0.2] py-24 sm:py-32 text-white pb-8"
    >
      {" "}
      {/* Added pb-8 for bottom padding */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        {" "}
        {/* Added pt-8 for top padding */}
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Meet our leadership
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {people.map((person, index) => (
            <li key={index} className="flex flex-col items-center gap-y-2">
              <Image
                className="h-16 w-16 rounded-full"
                src={person.imageUrl}
                alt={person.name}
                width={person.width}
                height={person.height}
              />
              <div className="text-center">
                <h3 className="text-base font-semibold">{person.name}</h3>
                <p className="text-sm font-semibold text-indigo-600">
                  {person.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;
