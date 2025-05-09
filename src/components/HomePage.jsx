import React from "react";
import Home from "./Home/Home";
import Footer from "./Footer/Fotter";

const HomePage = () => {
  return (
    <>
      <section className="BG w-full flex justify-center">
        <Home />
      </section>
      <section id="contact"
        className="relative border-t border-[#6f232340] shadow-[0px_-10px_20px_#6f232340] w-full flex justify-center items-center mainPX">
        <Footer />
      </section>
      {/* <section id="contact" className="relative border-t border-[#80808075] w-full flex justify-center items-center mainPX mt-[100px] 
                bg-[url('/images/footerBG.png')] bg-cover bg-center">
       {/* Top Gradient */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#101010] via-black/80 to-transparent z-0 pointer-events-none" />
      <Footer/>
    </section> */}
    </>
  );
};

export default HomePage;
