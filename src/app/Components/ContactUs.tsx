

const ContactUs: React.FC = () => {
  return (
    <main className="relative">
      
      {/* Map Section */}
      <div className="h-[992px] w-[1000px]"
          style={{
            backgroundImage: 'url(./ContactUs/map.png)',
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "100px",
            borderBottomLeftRadius: "20px",
          }}
        ></div>

      <div className=" absolute transform -translate-y-1/2 justify-center items-center  w-[730px] h-[845px] border-[70px] top-1/2 -right-80 border-white rounded-tl-[100px]">
        <div className="w-[644px] h-[707px]  bg-white rounded-md ">
          <h1 className=" text-[#16205F] text-[46px] leading-[58px] font-[poppins] font-semibold">
            Connect With Your
            <br /> Next Great Hire Today!
          </h1>
          <div className="  grid grid-cols-2 gap-4 mb-4 ">
            <div className="text-[#16205F] leading-[24px] font-[poppins] font-semibold mt-3">
              <label
                htmlFor="company"
                className="block text-base text-[16px]  mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className=" border w-[310px] h-[60px] text-base px-2 py-1 focus:outline-none border-[#C5E0FF] rounded-lg"
                placeholder="placeholder"
              />
            </div>
            <div className=" text-[#16205F] text-[16px] leading-[24px] font-[poppins] font-semibold mt-3">
              <label htmlFor="your name" className="block text-base mb-2 ">
                Your Name
              </label>
              <input
                type="text"
                id="your name"
                className=" border w-[310px] h-[60px] text-base px-2 py-1 focus:outline-none border-[#C5E0FF] rounded-lg"
                placeholder="placeholder"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="  text-[#16205F] text-[16px] leading-[24px] font-[poppins] font-semibold mt-3">
              <label htmlFor="phone number" className="block text-base mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone number"
                className="border w-[310px] h-[60px] text-base px-2 py-1 focus:outline-none border-[#C5E0FF] rounded-lg"
                placeholder="placeholder"
              />
            </div>
            <div className=" text-[#16205F] text-[16px] leading-[24px] font-[poppins] font-semibold mt-3">
              <label htmlFor="Email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
                id="Email"
                className="border w-[310px] h-[60px] text-base px-2 py-1 focus:outline-none border-[#C5E0FF] rounded-lg"
                placeholder="placeholder"
              />
            </div>
          </div>
          <div className=" text-[#16205F] text-[16px] leading-[24px] font-[poppins] font-semibold mt-3">
            <label htmlFor="project datail" className="block text-base mb-2 ">
              Project Datail
            </label>
            <input
              type="text"
              id="project datail"
              className=" pl-8 border w-[644px] h-[77px] text-base px-2 py-1 focus:outline-none border-[#C5E0FF] rounded-lg"
              placeholder="placeholder "
            />
          </div>
          <br />
          <div>
            <div>
              <input type="checkbox" />
              <label className="text-[#16205F] text-[16px] leading-[24px] font-[poppins]   ml-2">
                By sending this form I confirm that I have read and accept the
                <br />
                <b className="text-[#16205F] ml-8">Privacy Policy</b>
              </label>
            </div>
          </div>
          <br />
          <br />
          <div className=" text-center justify-center  border-[#007AFF]  bg-[#007AFF] text-white   w-[310px] h-[54px] rounded-lg pt-[16px] pl-[35.47px] pb-[15px] pr-[35.47px]">
            <button className="text-[16px] leading-[24px] font-[poppins] font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs

