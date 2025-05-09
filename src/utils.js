// Screen width utilities
export const maxSM = () => window.innerWidth < 770;
export const maxMD = () => window.innerWidth < 1000;
export const maxLG = () => window.innerWidth >= 1024;

  // ------------------------- Framer Motion ---------------------- //
  export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  