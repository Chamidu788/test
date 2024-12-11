"use client"; // Add this line at the top of the file

import React, { useState } from "react";

export default function Hedersection() {
  <section
    className="bg-[#ffffff] bg-cover bg-center h-auto md:h-[2271px] place-content-center "
    style={{ backgroundImage: 'url("/patterns.png")' }}
  ></section>;
  
   const [selectedFilter, setSelectedFilter] = useState("All");

     const technologies = [
    { name: "JavaScript", img: "/images/js 1.png", category: "Frontend" },
    { name: "React", img: "/images/react_logo 1.png", category: "Frontend" },
    {
      name: "Vue.js",
      img: "/images/logo-vuejs-min 1.png",
      category: "Frontend",
    },
    { name: "e-icon", img: "/images/e-icon 1.png", category: "Backend" },
    { name: "html", img: "/images/html 1.png", category: "Frontend" },
    { name: "css", img: "/images/css 1.png", category: "Frontend" },
    {
      name: "Node.js",
      img: "/images/2560px-Node.js_logo 1.png",
      category: "Backend",
    },
    {
      name: "java",
      img: "/images/Java_programming_language_logo 1.png",
      category: "Backend",
    },
    {
      name: "Python",
      img: "/images/Python-Symbol.png",
      category: "Machine Learning",
    },
    { name: "PHP", img: "/images/PHP-logo.png", category: "Backend" },
    {
      name: "c-sharp",
      img: "/images/c-sharp-c-logo-02F17714BA-seeklogo 1.png",
      category: "Backend",
    },
    {
      name: "C++",
      img: "/images/1822px-ISO_C++_Logo 1.png",
      category: "Mobile App",
    },
    {
      name: "Laravel",
      img: "/images/laravel-logo 1.png",
      category: "Frameworks",
    },
    {
      name: "Symfony",
      img: "/images/symfony-logo-png-2 1.png",
      category: "Frameworks",
    },
    {
      name: "Django",
      img: "/images/2560px-Django_logo 1.png",
      category: "Frameworks",
    },
    {
      name: "Express.js",
      img: "/images/68747470733a2f2f766567696269742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f657870726573736a732e706e67 1.png",
      category: "Frameworks",
    },
    {
      name: "Spring",
      img: "/images/download (1) 1.png",
      category: "Frameworks",
    },
    { name: "IOS", img: "/images/iOS-Logo-2013 1.png", category: "Mobile App" },
    {
      name: "react-native",
      img: "/images/react-native 1.png",
      category: "Mobile App",
    },
    {
      name: "Google-flutter",
      img: "/images/Google-flutter-logo 1.png",
      category: "Mobile App",
    },
    {
      name: "Kotlin",
      img: "/images/Kotlin_logo 1.png",
      category: "Mobile App",
    },
    {
      name: "Ionic",
      img: "/images/1280px-Ionic_Logo 1.png",
      category: "Mobile App",
    },
    { name: "MySQL", img: "/images/MySQL-Logo 1.png", category: "Database" },
    {
      name: "microsoft-sql",
      img: "/images/microsoft-sql-server-logo-96AF49E2B3-seeklogo 1.png",
      category: "Database",
    },
    {
      name: "postgresql",
      img: "/images/postgresql-icon-12 1.png",
      category: "Database",
    },
    {
      name: "mariadb",
      img: "/images/mariadb-logo-vert_blue-transparent 1.png",
      category: "Database",
    },
    {
      name: "mongodb",
      img: "/images/mongodb_logo1-76twgcu2dm 1.png",
      category: "Database",
    },
    { name: "Redis", img: "/images/Redis-Logo 1.png", category: "Database" },
    {
      name: "Oracle",
      img: "/images/Oracle-Logo 1.png",
      category: "Database",
    },
    {
      name: "Go",
      img: "/images/1280px-Go_Logo_Blue 1.png",
      category: "Backend",
    },
    {
      name: "angular",
      img: "/images/angular-logo-icon-png-svg 2.png",
      category: "Frontend",
    },
    {
      name: "android",
      img: "/images/android_logo_PNG3 1.png",
      category: "Mobile App",
    },
    {
      name: "R Studio",
      img: "/images/download (2) 1.png",
      category: "Data Science",
    },
    { name: "hadoop", img: "/images/hadoop 1.png", category: "Data Science" ,},
    {
      name: "power bi",
      img: "/images/fe5f71c970ef036c3b4407faa9ce6c69_300_550 1.png",
      category: "Mobile App",
    },
    {
      name: "OpenCV",
      img: "/images/OpenCV_logo_black_ 1.png",
      category: "Machine Learning",
    },
    // Add more technologies as needed
  ];

  const filters = [
    "All",
    "Frontend",
    "Backend",
    "Frameworks",
    "Mobile App",
    "Database",
    "Data Science",
    "Machine Learning",
    "DevOps",
    "CMS",
    "ECommerce",
    "Security",
  ];

  // Filtered technologies based on the selected filter
  const filteredTechnologies =
    selectedFilter === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedFilter);

  return (
    <div>
      <div
        className="relative h-[408h] bg-cover bg-center"
        style={{ backgroundImage: "url(/bg2.png)" }}
      >
        <div className="container mx-auto px-6 py-20 relative z-0">
          <div className="text-center justify-center text-white">
            <h1 className="text-5xl md:text-[64px] font-poppins font-bold mb-4 ">
              Technologies
            </h1>
            <p className="text-xl md:text-[18px] max-md mx-auto">
              We specialize in helping you build a team of
              <br />
              expert developers
            </p>
          </div>
        </div>
      </div>
      <section className="top-[618px]">
        <div
          className="bg-[#ffffff] bg-cover bg-center h-auto md:h-[2271px] place-content-center"
          style={{ backgroundImage: "url('/patterns.png')" }}
        >
          {/*Apply patterns.png here as well*/}
          <div className="text-[#16205F] font-[poppins]">
            <h1 className="font-semibold md:text-[46px] leading-[58px] text-justify md:leading-[58px] mt-10 ml-[70px]">
              Technologies
            </h1>
            <p className="font-normal leading-[27px] text-justify md:text-[18px] mt-[15px] mb-40 ml-[70px]">
              Using the right technology for the right problem is our
              <br />
              mantra. We are agile about learning new processes
              <br />
              and tools to save time and reduce complexity.
            </p>
          </div>
          {/* Filters */}
          <div className="flex  space-x-4 overflow-x-auto scrollbar-hide mb-20 flex-wrap ml-[70px] ">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-[12px] w-auto h-auto  text-[15px] ${
                  selectedFilter === filter
                    ? "bg-blue-500 text-white"
                    : " text-[#9F9F9F] hover:bg-blue-200 hover:text-blue-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          {/* Technology Grid */}
          <div className="flex items-center justify-center gap-10 flex-wrap ">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center border h-[160px] w-[190px] rounded-xl shadow-lg "
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="shadow-white shadow-2xl opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
