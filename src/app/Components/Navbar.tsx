"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (

  
    <div>
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[93px]">
            
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Gaxios Logo"
                  width={150}
                  height={120}
                  priority
                />
              </Link>
            </div>

           
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/HowToStart" className="text-gray-800 text-[18px] font-poppins hover:text-blue-600">
                How to start
              </Link>

              
              <button
                ref={buttonRef}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-800 hover:text-blue-600 flex text-[18px] font-poppins items-center gap-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <Link href="/Technologies" className="text-gray-800 text-[18px] font-poppins hover:text-blue-600">
                Technologies
              </Link>
              <Link href="/team" className="text-gray-800 text-[18px] font-poppins hover:text-blue-600">
                Team
              </Link>
              <Link href="/Careers" className="text-gray-800 text-[18px] font-poppins hover:text-blue-600">
                Careers
              </Link>
            </div>

            
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/github"
                className="px-4 py-2 h-[45px] w-[159px] flex items-center justify-center text-[20px] font-poppins text-black  border border-[#3972FD] rounded-[8px] font-bold hover:bg-blue-50"
              >
                GHUB
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 h-[45px] w-[159px] flex items-center justify-center text-[20px] font-poppins text-white bg-[#3B6BE1] rounded-[8px] font-bold hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>

            
            <div className="lg:hidden">
              <button
                className="text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      
      {dropdownOpen && (
        <div 
          ref={dropdownRef}
          className="absolute left-0 right-0 bg-[#F8FAFC] shadow-lg z-10 border-t border-gray-100 hidden lg:block"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 divide-x divide-gray-200">
              
              <div className="px-6">
                <h4 className="text-gray-900 font-semibold text-lg mb-4">
                  Development Services
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Custom software for businesses</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Full-stack web development</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Native and cross-platform apps</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Cloud hosting and migration</li>
                </ul>
              </div>

              
              <div className="px-6">
                <h4 className="text-gray-900 font-semibold text-lg mb-4">
                  Creative Technology
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Modern UI/UX designs</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Interactive prototypes</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Usability testing</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Innovative tech solutions</li>
                </ul>
              </div>

             
              <div className="px-6">
                <h4 className="text-gray-900 font-semibold text-lg mb-4">
                  Specialized Services
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">AI and automation systems</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Strong cybersecurity measures</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Data analytics for insights</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Scalable SaaS solutions</li>
                </ul>
              </div>

              
              <div className="px-6">
                <h4 className="text-gray-900 font-semibold text-lg mb-4">
                  Consulting & Strategy
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Technology stack selection</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Digital transformation planning</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">System optimization audits</li>
                  <li className="text-gray-600 hover:text-blue-600 cursor-pointer text-sm">Growth-focused tech strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/how-to-start"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
              onClick={handleMobileLinkClick}
            >
              How to start
            </Link>
            
            
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full text-left px-3 py-2 text-gray-800 hover:text-blue-600 flex items-center justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              
              {dropdownOpen && (
                <div className="px-4 py-2 bg-gray-50">
                  <div className="space-y-6">
                    
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        Development Services
                      </h4>
                      <ul className="space-y-2 pl-4">
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Custom software for businesses</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Full-stack web development</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Native and cross-platform apps</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Cloud hosting and migration</li>
                      </ul>
                    </div>

                    
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        Creative Technology
                      </h4>
                      <ul className="space-y-2 pl-4">
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Modern UI/UX designs</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Interactive prototypes</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Usability testing</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Innovative tech solutions</li>
                      </ul>
                    </div>

                    
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        Specialized Services
                      </h4>
                      <ul className="space-y-2 pl-4">
                        <li className="text-gray-600 hover:text-blue-600 text-sm">AI and automation systems</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Strong cybersecurity measures</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Data analytics for insights</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Scalable SaaS solutions</li>
                      </ul>
                    </div>

                    
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        Consulting & Strategy
                      </h4>
                      <ul className="space-y-2 pl-4">
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Technology stack selection</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Digital transformation planning</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">System optimization audits</li>
                        <li className="text-gray-600 hover:text-blue-600 text-sm">Growth-focused tech strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/technologies"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
              onClick={handleMobileLinkClick}
            >
              Technologies
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
              onClick={handleMobileLinkClick}
            >
              Team
            </Link>
            <Link
              href="/careers"
              className="block px-3 py-2 text-gray-800 hover:text-blue-600"
              onClick={handleMobileLinkClick}
            >
              Careers
            </Link>
            
            
            <div className="pt-4 space-y-2">
              <Link
                href="/github"
                className="block px-3 py-2 text-center text-blue-600 border border-blue-600 rounded"
                onClick={handleMobileLinkClick}
              >
                GITHUB
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-center text-white bg-blue-600 rounded"
                onClick={handleMobileLinkClick}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}