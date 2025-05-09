import React, { useState, useContext } from "react";
import { customContext } from "../../App";

const Navbar = () => {
  const {  mobileNavActive, setMobileNavActive } = useContext(customContext)

  return (
    <nav className="w-full flex justify-center">
      {/* Hover OverLay */}
      <span className="navOverLay"></span>

      {/* NVABAR */}
      <div className="mainPX flex w-full justify-between max-sm:justify-center W_LIMIT items-center z-10">
        {/* LOGO */}
        <img src="logo.png" className="w-[140px]" alt="" />

        {/* NavLinks Large Screen */}
        <div className="flex gap-[10px] lg:gap-[20px] absolute left-1/2 translate-x-[-50%] max-sm:hidden">

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

        <div className="flex items-center gap-[10px] text-[25px] 
                        max-sm:absolute max-sm:right-0 max-sm:top-0 max-sm:p-[15px]">
          <a target="_blank" href="https://www.instagram.com/elsakoup/" className="socMedia">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/elsakoup/" className="socMedia">
          <i className="fa-brands fa-instagram"></i>
          </a>
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
