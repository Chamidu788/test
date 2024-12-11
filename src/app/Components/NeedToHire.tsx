import React from "react";


const Hire: React.FC = () => {
  const features: string[] = [
    "Talent shortage",
    "Lack of Expertise",
    "Quick Kick-off",
    "Cost Optimization",
    "Talent Accessible",
    "Administrative Hassle",
  ];

  return (
    <div
      className="relative bg-cover bg-white bg-center py-20 max-w-10xl mx-auto"
      style={{ backgroundImage: 'url(/BG/BG.png)' }}
    >
      <div className="relative container mx-auto lg:px-[100px] sm:px-5 z-10 text-blue-900">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-center md:text-left">
            Why You Need To Hire <br /> Remote Developers
          </h2>
        </div>
      </div>

      <section className="bg-white bg-[src('/BG/BG.png')]">
        <div className="grid grid-cols-1 sm:grid-cols-3 py-2 px-20 bg-gray-50 max-w-10xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[357px] text-[#16205F] text-lg font-semibold font-poppins py-4 gap-x-60"
            >
              › {feature}
            </div>
          ))}
        </div>
<div className="max-w-10xl mx-auto">
        <img
          src="./HowToStart/howtostartsecondimg.png"
          alt="Team working together"
          className="w-[1507px] h-[447px] rounded-tr-[20px] rounded-bl-[100px]"
          />
          </div>
      </section>
    </div>
  );
};

export default Hire;
