"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const items = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Name 1",
    title: "Title 1",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Name 2",
    title: "Title 2",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Name 3",
    title: "Title 3",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Name 4",
    title: "Title 4",
  },
  // Add more items as needed
];

function TestimonialCard() {
  return (
    <div
      id="reviews"
      className="h-[40rem] w-full ☐ dark:bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Reviews</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={items} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
