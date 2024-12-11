import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ClientSection: React.FC = () => {
  const clients = [
    { src: "./trustus/brandfex.png", width: "288px", height: "79px" },
    { src: "./trustus/rimbario.png", width: "339px", height: "94px" },
    { src: "./trustus/HR.png", width: "279px", height: "224px" },
    { src: "./trustus/brocell cofee.png", width: "224px", height: "205px" },
    { src: "./trustus/skyligders.png", width: "299px", height: "175px" },
    { src: "./trustus/fradel travels.png", width: "358px", height: "143px" },
    { src: "./trustus/skill seeker.png", width: "331px", height: "119px" },
    { src: "./trustus/smile.png", width: "235px", height: "177px" },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto">
      {/* Desktop View Title */}
      <h3 className="hidden lg:block text-center text-[46px] font-semibold font-poppins text-[#16205F] mb-8">
        Amazing clients who trust us
      </h3>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center gap-4 flex-wrap">
        {clients.map((image, index) => (
          <div key={index} className="flex justify-center items-center h-auto">
            <img
              src={image.src}
              alt={`Client ${index + 1}`}
              style={{
                width: image.width,
            
                opacity: 0.5, // Fixed opacity to use a number
              }}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Mobile View Title */}
      <h3 className="lg:hidden text-[24px] font-semibold font-poppins text-[#16205F] mb-8 flex justify-center">
        Amazing clients who trust us
      </h3>

      {/* Mobile View Swiper */}
      <div className="lg:hidden flex justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true} // Enable looping
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {clients.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center gap-x-20">
                <img
                  src={image.src}
                  alt={`Client ${index + 1}`}
                  style={{
                    alignItems: 'start',
                    width: image.width,
                    height: image.height,
                  }}
                  className="max-w-full h-auto opacity-80"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
