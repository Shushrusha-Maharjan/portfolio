// src/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section id="/" className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-opacity-20 bg-black">
        {/* Add any content for the grid here if needed */}
      </div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl text-purple-500">Welcome to my Portfolio Website</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Shushrusha Maharjan
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          React Developer | Frontend Developer
        </p>
        <a href="#experience">
          <button className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Show my work &#8594;
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
