import React from "react";
import Home from "./Home/Home";
import Footer from "./Footer/Fotter";
import AboutMid from "./About/AboutMid";
import AboutSmall from "./About/AboutSmall";
import About from "./About/About";
import { useState, useEffect } from "react";
import { maxSM, maxMD, maxLG } from "../utils";
import Menu from "./Menu/Menu";

const HomePage = () => {
  useEffect(() => { // add Custom breakpoint with window resize
    const handleResize = () => {
      setSmallScreen(maxSM());
      setMediumScreen(maxMD());
      setLargeScreen(maxLG());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size based on window width

    return () => window.removeEventListener('resize', handleResize);
  }, []);  
  const [smallScreen, setSmallScreen] = useState(false);
  const [mediumScreen, setMediumScreen] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);

  return (
    <>
      <section className="BG w-full flex justify-center">
        <Home />
      </section>

      <section className="BG w-full flex justify-center">
        <Menu />
      </section>


      <section id="about" className="BG w-full flex justify-center pb-[80px] items-center mainPX" 
                          onClick={() => setAcountIsActive(false)}>
        {smallScreen ? <AboutSmall />
          : mediumScreen ? <AboutMid />
          : <About />  }
      </section>

      <section id="contact" className="relative BG border-t border-[#6f232340] shadow-[0px_-10px_20px_#6f232340] w-full flex justify-center items-center mainPX">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;





















 {/* <section id="contact" className="relative border-t border-[#80808075] w-full flex justify-center items-center mainPX mt-[100px] 
                bg-[url('/images/footerBG.png')] bg-cover bg-center">
       {/* Top Gradient */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#101010] via-black/80 to-transparent z-0 pointer-events-none" />
      <Footer/>
    </section> */}