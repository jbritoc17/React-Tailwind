import React, { useState } from "react";

const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 absolute top-0 left-0 w-full`}
          >
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-2xl">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-l-md hover:bg-gray-700"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-r-md hover:bg-gray-700"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
