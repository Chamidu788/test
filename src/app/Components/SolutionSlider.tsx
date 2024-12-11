"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination"; 

interface Solution {
  title: string;
  description: string;
}

const SolutionSlider: React.FC = () => {
  const solutions: Solution[] = [
    {
      title: "Architect your Solution",
      description:
        "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.",
    },
    {
      title: "Engineer your Solution",
      description:
        "We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific.",
    },
    {
      title: "ReEngineer your Business Process",
      description:
        "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.",
    },
  ];

  return (

  
    <div className="bg-white py-12">
      
      <div className="block md:hidden px-4  mb-6">
        <h2 className="text-blue-900 text-[22px] font-bold">Solutions</h2>
        <p className="text-blue-900 font-bold text-[36px] leading-10">
          Software Solutions, with expert software engineering teams
        </p>
        <p className="text-gray-600 text-[20px] text-justify mt-2">
          We specialize in helping you build a team of expert developers, testers, and leaders.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span 
                  class="${className}" 
                  style="
                    display: inline-block;
                    width: 50px; 
                    height: 8px; 
                    margin: 0 5px; 
                    background-color: ${
                      className.includes("swiper-pagination-bullet-active")
                        ? "#000" 
                        : "#ccc" 
                    }; 
                    border-radius: 0px;">
                </span>`;
            },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white ">
                <h3 className="text-[20px] font-poppins font-bold text-blue-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-justify font-poppins">
                  {solution.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SolutionSlider;