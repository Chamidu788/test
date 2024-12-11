import react from 'react';
function HSStepsSection() {
  return (
    <div className="relative bg-cover bg-white bg-center py-20" style={{ backgroundImage: 'url(/bg.png)' }}>
      <div className="relative container mx-auto lg:px-[100px] sm:px-5 z-10 text-blue-900">
        <div className="mb-10">
          <h2 className="text-4xl md:text-[46px] font-poppins font-bold mb-4 text-center md:text-left">How to Get Started with <br/> Courtney</h2>
          <p className="text-18px md:text-xl text-center md:text-left">
            From full-time remote engineering teams to hourly <br/> contractors, work with remote devs as needed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="h-16 w-16 rounded-[8px] bg-[#cdcdcd] flex items-center justify-center mb-4 md:mb-0 md:mr-4">
              <img src="/request.png" alt="Step 1" className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl font-semibold mb-2">01. Request</h3>
              <p className="text-base ">Tell us more about your <br/> requirements and technical needs</p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center">
            <div className="h-16 w-16 rounded-[8px] bg[#cdcdcd] flex items-center justify-center mb-4 md:mb-0 md:mr-4">
              <img src="/interview.png" alt="Step 2" className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl font-semibold mb-2">02. Interview</h3>
              <p className="text-base ">You interview candidates. Average 2 <br/> interviews to hire.</p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center">
            <div className="h-16 w-16 rounded-[8px] bg-[#cdcdcd] flex items-center justify-center mb-4 md:mb-0 md:mr-4">
              <img src="/hire.png" alt="Step 3" className="h-8 w-8" />
            </div>
            <div className="text-center md:text-left px-4">
              <h3 className="text-2xl font-semibold mb-2">03. Hire</h3>
              <p className="text-base ">You choose who to hire, and we  <br/> handle all the paperwork.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HSStepsSection;
