"use client";
import HeroSection from "./Components/HeroSection";
import SolutionSlider from "./Components/SolutionSlider";
import Group_65 from "./Components/Group_65";
//import Heder from "./Components/Heder";
import OurSpecializations from "./Components/OurSpecializations";
import TechnologySection from "./Components/TechnologySection";
import ClientSection from "./Components/ClientsSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <SolutionSlider />
      <Group_65 />
       
      <OurSpecializations />
      <TechnologySection />
      <ClientSection />
      
      </div>
  );
}
