import React from "react";
import Image from "next/image";

const Group_65: React.FC = () => {
  return (
    <div className="font-[poppins]">
      <section
        className="bg-[#3B6BE1] bg-cover bg-center h-auto md:h-[659px] place-content-center"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="text-center text-[#FFFFFF] not-italic">
          <div className="w-full md:w-[1172.5px] h-[91px] mx-auto">
            <h4 className="font-semibold text-[24px] md:text-[46px] leading-[32px] md:leading-[58px]">
              How to Get Started with Gaxios
            </h4>
          </div>
          <div className="w-full md:w-[735.67px] h-[61px] mx-auto text-[#D7D5D5]">
            <h2 className="font-semibold text-[20px] md:text-[46px] leading-[30px] md:leading-[58px]">
              Easy Process
            </h2>
          </div>
          <div className="w-full md:w-[449.74px] h-auto mt-6 mb-12 mx-auto">
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-normal">
              We specialize in helping you build a team of
              <br />
              expert developers, testers, and leaders.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around text-[#FFFFFF]  ">
          {/* Image and Text 1 */}
          <div className=" flex-col font-semibold flex items-center mb-6 md:mb-0 w-full md:w-auto">
            <div className="w-[137.01px] h-auto mb-2   ">
              <img className="w-full" src="/images/Massege.png" alt="You Ask" />
            </div>
            <div className="  text-center font-semibold  leading-[24px] md:leading-[36px]">
              <h2 className="inline  text-[46px] md:text-[46px]">01</h2>
              <h2 className="inline  text-[28px] md:text-[28px]">YOU ASK</h2>
            </div>
          </div>

          {/* Image and Text 2 */}
          <div className="flex flex-col items-center mb-6 mt-5 md:mb-0 w-full md:w-auto">
            <div className="w-[115.86px] h-auto mb-6 ">
              <img
                className="w-full"
                src="/images/Process.png"
                alt="We Proceed"
              />
            </div>
            <div className="text-center font-semibold  leading-[24px] md:leading-[36px]">
              <h2 className="inline  text-[46px] md:text-[46px]">02</h2>
              <h2 className="inline  text-[28px] md:text-[28px]">WE PROCEED</h2>
            </div>
          </div>

          {/* Image and Text 3 */}
          <div className="flex flex-col items-center mb-6 mt-5 md:mb-0 w-full md:w-auto ">
            <div className="w-[115.86px] h-auto mb-6">
              <img
                className="w-full"
                src="/images/handshake 3.png"
                alt="Negotiate"
              />
            </div>
            <div className="text-center font-semibold leading-[24px] md:leading-[36px] ">
              <h2 className="inline  text-[46px] md:text-[46px]">03 </h2>
              <h2 className="inline  text-[28px] md:text-[28px]">NEGOTIATE</h2>
            </div>
          </div>

          {/* Image and Text 4 */}
          <div className="flex flex-col items-center mb-6 mt-0  md:mb-0 w-full md:w-auto">
            <div className="w-[115.86px] h-auto mb-0  ">
              <img className="w-full" src="/images/medal 3.png" alt="You Get" />
            </div>
            <div className="  text-center font-semibold  leading-[24px] md:leading-[36px]">
              <h2 className=" inline  text-[46px] md:text-[46px]  gap-x-5 ">
                04
              </h2>
              <h2 className="   inline  text-[28px] md:text-[28px] ">
                YOU GET
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF]">
        <div className="flex flex-col md:flex-row items-center justify-between ml-6 mr-6">
          {/* Text Content */}
          <div className="w-full md:w-[874px] mb-6 md:mb-0">
            <h2 className="text-[#16205F] font-semibold text-[20px] md:text-[36px] leading-[28px] md:leading-[58px] mt-9">
              WHY WE’RE THE RIGHT TEAM FOR YOU
            </h2>
            <div className="text-[#16205F] font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-justify mt-4 ml-[7px] mr-[50px]">
              <p>
                The GHUB Skiller Trainee Programme is designed to provide
                comprehensive training and skill development opportunities for
                young professionals. It emphasizes equipping participants with
                the practical skills required in today's job market, focusing on
                areas like technology, engineering, and other specialized
                fields. Participants often engage in structured training
                sessions, hands-on projects, and mentorship opportunities to
                enhance their employability and expertise.
              </p>
              <br />
              <p>
                For detailed information, including eligibility requirements and
                application processes, you can check specific program pages or
                organizational websites associated with GHUB's initiatives.
                Unfortunately, I couldn't find detailed specific pages, but if
                you can provide more context, I can assist further!
              </p>
            </div>
          </div>

         {/* Image */}
<div className="w-full md:w-[637px] rounded-lg mt-7">
  <img
    className="w-full md:w-[637px] rounded-lg"
    src="/images/body.png"
    alt="bg-new1-scaled"
  />
</div>

        </div>
      </section>
    </div>
  );
};

export default Group_65;
