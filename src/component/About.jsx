// src/About.jsx
import React from 'react';
import {aboutContent} from '../data/index'; // Adjust the import based on your data file's location


const About = () => {
  return (
    <div id="about" className="w-full py-20 bg-gradient-to-r from-black via-purple-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        {/* Main Text with Image */}
        <div className="col-span-2 relative">
          <img
            src={aboutContent.mainImage}
            alt="Main Visual"
            className="rounded-xl w-full h-auto"
          />
          <div className="md:absolute md:top-64 md:left-4 bg-opacity-70 bg-black p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{aboutContent.mainText}</h2>
          </div>
        </div>

        {/* Secondary Text */}
        <div className="flex flex-col justify-between gap-10">
          <div className="bg-gray-800 p-6 rounded-xl items-center justify-center">
            <h2 className="text-xl font-bold text-center">{aboutContent.secondaryText}</h2>
            <img 
              src={aboutContent.secondaryImage} 
              alt='time'
              className='rounded-xl w-full h-auto'
            />
          </div>
          {/* Tech Stack */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">{aboutContent.techStackText}</h2>
            <div className="flex flex-wrap gap-4">
              {aboutContent.techStackItems.map((tech, index) => (
                <span key={index} className="bg-purple-600 px-3 py-2 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
