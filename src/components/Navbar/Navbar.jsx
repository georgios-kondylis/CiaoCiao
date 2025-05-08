import React, { useState, useContext } from "react";
import { customContext } from "../../App";

const Navbar = () => {
  const {  mobileNavActive, setMobileNavActive } = useContext(customContext)

  return (
    <nav>
      {/* Hover OverLay */}
      <span className="navOverLay"></span>

      {/* NVABAR */}
      <div className="W_LIMIT mainPX flex w-full justify-start max-sm:justify-center items-center z-10">
        {/* LOGO */}
        <img src="logo.png" className="w-[140px]" alt="" />

        {/* NavLinks Large Screen */}
        <div className="flex gap-[10px] absolute left-1/2 translate-x-[-50%] max-sm:hidden">

          <div className="relative group cursor-pointer">
            <a href="#" className="navilnk">Home</a>
            <span className="pseudoBorder"></span>
            <span className="pseudoGlance pseudoGlanceBG"></span>
          </div>

          <div className="relative group">
            <a href="#about" className="navilnk">About</a>
            <span className="pseudoBorder"></span>
            <span className="pseudoGlance pseudoGlanceBG"></span>
          </div>
          <div className="relative group">
            <a href="#menu" className="navilnk">Menu</a>
            <span className="pseudoBorder"></span>
            <span className="pseudoGlance pseudoGlanceBG"></span>
          </div>
          <div className="relative group">
            <a href="#contact" className="navilnk">Contact</a>
            <span className="pseudoBorder"></span>
            <span className="pseudoGlance pseudoGlanceBG"></span>
          </div>
          

        </div>

        {/* ------------------------ MOBILE VERSION ------------------------ */}

        <div className="absolute sm:hidden left-0 mainPX cursor-pointer text-[22px] hover:text-burgundy"
             onClick={ ()=> setMobileNavActive(true)}>
          <i className="fa-solid fa-bars "></i>
        </div>  
      </div>

    </nav>
  );
};
export default Navbar;
