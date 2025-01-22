import AboutMe from "../home/AboutMe";
import ContactMe from "../home/ContactMe";
import Footer from "../Footer";
import HeroSection from "../home/HeroSection";
import MyPortfolio from "../home/MyPortfolio";
import Navbar from "../home/Navbar-Home";
import MySkills from "../home/MySkills";
import Testimonial from "../home/Testimonials";
import ScrollToTop from "../ScrollToTop";
import RadioProject from "../radio/ProjectRadio";
import DigitalCircuitDesign from "../home/DigitalCircuitDesign";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';



export default function Home() {
  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        duration: 0,
        delay: 0,
        offset : -70,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {/* <ScrollToTop /> */}
      <HeroSection />
      <MySkills />
      {/* <AboutMe /> */}
      <MyPortfolio />
      {/* <RadioProject />
      <DigitalCircuitDesign /> */}
      {/* <Testimonial />
      <ContactMe /> */}
      <Footer />
    </>
  );
}
