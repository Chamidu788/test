"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Define the type for each specialization
interface Specialization {
  name: string;
  image: string;
}

const specializations: Specialization[] = [
  { name: "Frontend Engineer", image: "/ourspecilization/frontend.png" },
  { name: "Angular Developer", image: "/ourspecilization/anguler developer.png" },
  { name: "AI and ML Engineers Deep Learning/Machine Vision/NLP", image: "/ourspecilization/AI ML eng.png" },
  { name: "Application Security Engineers", image: "/ourspecilization/application security.png" },
  { name: "Fullstack Engineers", image: "/ourspecilization/fullstack engineers.png" },
  { name: "Data Scientist / Data Engineers", image: "/ourspecilization/data science.png" },
  { name: "DevOps + DevSecOps Engineers", image: "/ourspecilization/devops + devscop.png" },
  { name: "IOS and Android Developers", image: "/ourspecilization/IOS and Android.png" },
  { name: "UI/UX Engineers", image: "/ourspecilization/ui ux engineers.png" },
  { name: "PHP Developers", image: "/ourspecilization/php developers.png" },
  { name: "Project Managers", image: "/ourspecilization/project managers.png" },
  { name: "Solution Architects", image: "/ourspecilization/solution architech.png" },
  { name: "QA Engineers", image: "/ourspecilization/QA engineers.png" },
  { name: "Wordpress CMS Developers", image: "/ourspecilization/wordpress developers.png" },
  { name: "Business Analyst", image: "/ourspecilization/business analysit.png" },
  { name: "Tech Leads / Team Leads", image: "/ourspecilization/tech leads.png" },
  { name: "Product Designer", image: "/ourspecilization/project designer.png" },
  { name: "Mobile App Developer", image: "/ourspecilization/mobile app developer.png" },
  { name: "Information Security Engineer", image: "/ourspecilization/information security engineer.png" },
  { name: "Golang Dev", image: "/ourspecilization/go lang dev.png" },
  { name: "Database Admin", image: "/ourspecilization/database admin.png" },
];

const OurSpecialization: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="bg-white bg-[url('/BG.png')] lg:py-12 px-6">
        <h6 className="hidden lg:block text-[22px] font-bold text-[#16205F] text-poppins mb-6 
                  sm:text-lg sm:mb-8 lg:text-2xl lg:mb-10">
          Our Expert Team &
        </h6>
        <h2 className="hidden lg:block text-[58px] font-bold text-[#16205F] text-poppins mb-6 
                  sm:text-4xl sm:mb-8 lg:text-5xl lg:mb-12">
          Our Specializations
        </h2>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-5">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex items-center bg-[#007AFF] text-poppins text-white rounded-lg shadow-lg hover:scale-105 transform transition"
              style={{ width: "300px", height: "75px", borderRadius: "13px" }}
            >
              <div
                className="bg-[#666666]"
                style={{
                  width: "13px",
                  height: "75px",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              ></div>
              <div className="flex items-center pl-5 gap-10 z-10">
                <img src={spec.image} className="w-[52px] h-[52px]" alt={spec.name} />
                <span className="font-semibold text-sm">{spec.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Swiper */}
        <h6 className="lg:hidden text-center text-[22px] font-semibold font-poppins text-[#16205F] mb-4">
          Our Expert Team &
        </h6>
        <h2 className="lg:hidden text-center text-[32px] font-semibold font-poppins text-[#16205F] mb-6">
          Our Specializations
        </h2>
        <div className="lg:hidden flex justify-center">
          <Swiper
            direction="horizontal"
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
            modules={[Pagination]}
            className="w-full relative"
          >
            {/* Grouping 6 cards per SwiperSlide */}
            {Array.from({ length: Math.ceil(specializations.length / 6) }).map((_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-rows-6 gap-4 justify-center">
                  {specializations
                    .slice(slideIndex * 6, slideIndex * 6 + 6)
                    .map((spec, index) => (
                      <div
                        key={index}
                        className="flex bg-[#007AFF] text-white rounded-lg shadow-lg hover:scale-105 transform transition"
                        style={{ width: "100%", height: "72px", maxWidth: "358px", borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }}
                      >
                        <div
                          className="bg-[#666666]"
                          style={{
                            width: "13px",
                            height: "72px",
                            borderTopLeftRadius: "12px",
                            borderBottomLeftRadius: "12px",
                          }}
                        ></div>
                        <div className="flex items-center pl-5 gap-10 z-10">
                          <img src={spec.image} className="w-[52px] h-[52px]" alt={spec.name} />
                          <span className="font-semibold text-sm">{spec.name}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default OurSpecialization;