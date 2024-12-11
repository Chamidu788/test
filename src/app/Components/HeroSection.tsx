"use client";

import React, { useState } from 'react';
import Modal from './Modal'; 

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 

  return (
    <>
      
      <div
        className={`bg-white bg-[url('/BG.png')] pt-0 h-auto sm:pl-0 sm:pr-0 lg:py-12 transition-opacity duration-300 ${
          isModalOpen ? 'opacity-20 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
          
          <div className="md:w-1/2 text-left mt-6 md:mt-0">
            <h1 className="text-3xl font-poppins sm:text-[36px] md:text-5xl lg:text-[46px] font-bold text-blue-900 leading-tight">
              Building dev team, <br />
              Quickly and <br />
              Affordably
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed text-justify text-base sm:text-[20px] md:text-xl lg:text-[22px]">
              We specialize in helping you build a team of <br />
              expert developers, testers, and leaders. We are <br />
              set up to deliver long-term solutions, or scale to <br />
              different needs quickly.
            </p>
            <button
              className="mt-6 mb-6 px-6 py-2 w-full md:w-auto bg-[#3B6BE1] text-white font-semibold rounded-md hover:bg-blue-700 text-sm sm:text-base md:text-lg lg:text-xl"
              onClick={openModal}
            >
              Build a team →
            </button>
          </div>

          
          <div className="md:w-1/2">
            <img
              src="/Rectangle-mobile.jpeg"
              alt="Team working"
              className="w-[400px] md:hidden object-cover mr-0 mb-0 h-48 sm:h-full pl-[0px] pr-[0px] md:h-auto mt-0"
            />
            <img
              src="/Rectangle.png"
              alt="Team working"
              className="hidden md:block rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>

     
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;