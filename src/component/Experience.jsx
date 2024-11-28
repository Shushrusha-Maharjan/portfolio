// src/Experience.jsx
import React from 'react';
import {workExperience} from '../data/index'; // Adjust the import based on your data file's location
import Button from './Button';



const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-500">Work Experience</span>
      </h1>

      <div className="w-full mt-12 px-10 md:px-5 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgb(4,7,29)',
              backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              borderRadius: 'calc(1.75rem)',
            }}
            className="flex-1 text-purple-500 dark:text-white shadow-lg dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-6 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="rounded-full lg:w-32 md:w-20 w-16"
                style={{ width: '50px', height: '50px' }}
              />
              <div className="lg:ml-5">
                <h1 className="text-xl md:text-2xl font-bold text-start">
                  {card.title}
                </h1>
                <p className="text-sm text-gray-400 mt-2 font-semibold text-start">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
