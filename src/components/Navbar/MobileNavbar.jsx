import React, { useContext } from "react";
import { customContext } from "../../App";
import { useState, useEffect } from "react";

const MobileNavbar = () => {
  const { mobileNavActive, setMobileNavActive } = useContext(customContext);

    // Auto-close on resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 640 && mobileNavActive) {
          setMobileNavActive(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [mobileNavActive, setMobileNavActive]);

  return (
    <>
      {/* Dark overlay */}
      {mobileNavActive && (<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" onClick={() => setMobileNavActive(false)} />)}

      {/* Side navbar */}
      <div className={`fixed top-0 h-full BG w-[40%] max-w-[300px] min-w-[200px] z-20 transition2 ${
           mobileNavActive ? "left-0" : "left-[-500px]" }`} >

        <i className="fa-solid fa-circle-xmark absolute right-3 top-3 text-[24px] hover:text-burgundy hover:rotate-90 transition-transform duration-300 cursor-pointer"
          onClick={() => setMobileNavActive(false)} >
        </i>

        {/* Logo */}
        <div className="flex justify-center py-6 mt-[30px]">
          <img src="/logo.png" alt="Logo" className="w-[150px] rounded-full" />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center mainPX mt-[20px] gap-[5px]">
          {[
            { label: "Home", href: "#" },
            { label: "Menu", href: "#menu" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#reviews" },
            { label: "Contact", href: "#contact" },
          ].map((item, i) => (
            <div key={i} className="relative group text-[20px]" onClick={() => setMobileNavActive(false)} >
              <a href={item.href} className="navilnk">{item.label}</a>
              <span className="pseudoBorder"></span>
            <span className="pseudoGlance pseudoGlanceMobileBG"></span>
          </div>
          ))}

        </nav>


        {/* Your nav content here */}
      </div>
    </>
  );
};

export default MobileNavbar;
