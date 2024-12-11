import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Define the type for technology image objects
interface Technology {
  src: string;
  width: string;
  height: string;
}

export default function OurSpecialization() {
  const technologies: Technology[] = [
    { src: "/React.png", width: "213px", height: "71px" },
    { src: "/Anguler.png", width: "232px", height: "57px" },
    { src: "/next js.png", width: "148px", height: "81px" },
    { src: "/node js.png", width: "171px", height: "94px" }
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto">
      <h3 className="hidden lg:block text-center text-[22px] font-semibold text-[#16205F] mb-8">
        Powered by Expertise
      </h3>
      <h3 className="hidden lg:block text-center text-[46px] font-semibold text-[#16205F] mb-8">
        Technologies
      </h3>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center gap-8 flex-wrap">
        {technologies.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image.src}
              alt={`Technology ${index + 1}`}
              style={{
                width: image.width,
                height: image.height,
              }}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Mobile View (Swiper for Technologies) */}
       <h3 className="lg:hidden text-[24px] font-semibold font-poppins text-[#16205F] mb-8 flex justify-center">
        Powered by Expertise
      </h3>
      <h3 className="lg:hidden text-[24px] font-semibold font-poppins text-[#16205F] mb-8 flex justify-center">
        Technologies
      </h3>
      <div className="lg:hidden item-start">
        <Swiper spaceBetween={10} slidesPerView={1}>
          {technologies.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={image.src}
                  alt={`Technology ${index + 1}`}
                  style={{
                    width: image.width,
                    height: image.height,
                  }}
                  className="max-w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
