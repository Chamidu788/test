import React from "react";

interface NavLink {
  name: string;
  href: string;
  gap?: string; // Optional gap property
}

const Footer: React.FC = () => {
  const navLinks: NavLink[] = [
    { name: "HOW TO START", href: "#how-to-start" },
    { name: "SERVICES", href: "#services" },
    { name: "TECHNOLOGIES", href: "#technologies" },
    { name: "BLOGS", href: "#blogs" },
    { name: "CAREERS", href: "#careers" },
    { name: "CONTACT US", href: "#contact-us" },
    { name: "TERMS & CONDITIONS", href: "#terms&conditions", gap: "10" },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-auto h-[3.05px] bg-[#0081FE] my-5 hidden sm:block"></div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between items-center py-20">
          <div className="flex items-center ml-[80px]">
            <img
              src="./Layer 2.png"
              alt="G"
              style={{ width: "340.71px", height: "86.87px" }}
            />
          </div>

          {/* Right Section: Contact details and Social Media */}
          <div className="flex flex-col space-y-4 text-center ml-[-60px] text-poppins">
            <div className="flex items-center space-x-2">
              <img
                src="./Footer/location.png"
                alt="Location"
                style={{ width: "20.14px", height: "29.71px" }}
              />
              <p className="text-gray-600">No - 175, Haputhale Bandarawela Srilanka</p>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./Footer/phone.png"
                alt="Phone"
                style={{ width: "30.26px", height: "30.83px" }}
              />
              <p className="text-gray-600">+94 761778143</p>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./Footer/mailbox.png"
                alt="Mailbox"
                style={{ width: "28.78px", height: "24.41px" }}
              />
              <p className="text-gray-600">www.Gaxiostec.com</p>
            </div>

            <div className="flex space-x-4 mt-4">
              {["facebook", "twitter", "linkedin black.1", "Youtube-path", "instagram black.1", "googleplus black.1"].map(
                (platform, index) => (
                  <a
                    key={index}
                    href={`https://${platform}.com`}
                  >
                    <img
                      src={`./Footer/${platform}.png`}
                      alt={platform}
                      style={{ width: "29.5px", height: "27.46px" }}
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation and Copyright (Desktop) */}
        <div className="hidden lg:flex w-auto h-[1px] bg-[#0081FE] opacity-50 my-5"></div>
        <nav className="hidden lg:flex bg-white py-5">
          
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <ul className="flex space-x-8 text-[#0A142F]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-assistant"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex text-[#16205F] font-poppins text-[15px] justify-start lg:pl-20">
              &copy; Copyright by {currentYear} Gaxios. All rights reserved.
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="w-[375.91px] h-[1px] bg-[#C4C4C4] my-5 block lg:block"></div>
        <div className="space-y-8 text-[#16205F]">
             <img
      src="./Layer 2.png"
      alt="G"
      style={{ width: "141.35px", height: "38.01px" }}
          />
          <p className="text-[18px] text-[#16205F]">
            Expertly trained, battle-tested, elite <br/> software developers on demand
        </p>
          
    <div className="flex items-center space-x-4">
      <img
        src="./Footer/phone.png"
        alt="Phone"
        style={{ width: "18.04px", height: "18px" }}
      />
      <p className=" text-[18px]">+94 761778143</p>
          </div>
          
    <div className="flex items-center space-x-2">
      <img
        src="./Footer/mailbox.png"
        alt="Mailbox"
        style={{ width: "20.05px", height: "16px" }}
      />
      <p className=" text-[18px]">www.Gaxiostec.com</p>
    </div>
    <div className="flex items-center space-x-2">
      <img
        src="./Footer/location.png"
        alt="Location"
        style={{ width: "14.03px", height: "20px" }}
      />
      <p className="text-[#16205F] text-[18px]">
        No - 175, Haputhale Bandarawela Srilanka
      </p>
    </div>


  <div className="flex  space-x-8">
    {[
      "facebook",
      "twitter",
      "linkedin black.1",
      "Youtube-path",
      "instagram black.1",
      "googleplus black.1",
    ].map((platform, index) => (
      <a
        key={index}
        href={`https://${platform}.com`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`./Footer/${platform}.png`}
          alt={platform}
          style={{ width: "29.92px", height: "36.62px" }}
        />
      </a>
    ))}
          </div>
          </div>
</div>
      <div className="max-w-7xl mx-auto py-20">
        <div className="hidden lg:hidden w-auto h-[1px] bg-[#0081FE] opacity-50 my-5"></div>

        {/* Footer Navigation and Copyright (Mobile) */}
        <div className="block lg:hidden text-[#16205F] font-poppins text-[15px]  justify-center items-center">
          &copy; Copyright by {currentYear} Gaxios. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
