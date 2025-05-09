import React from 'react';

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden">

      <div className="relative z-10 flex flex-col items-center py-10 px-4 text-center space-y-4 w-full max-w-[500px]">
        <img className="w-[200px]" src="logo.png" alt="Brew Haven Logo" />

        <div className='flex items-start gap-2 max-sm:gap-0'>
          <i className="fas fa-map-marker-alt text-burgundy mt-[2px]" />
          <p className="flex items-start">
            Restaurang Gatan, Delicious City, Stockholm 18336, SW
          </p>
        </div>
       
        <a href="mailto:georgios.p.kondylis@gmail.com" className="flex items-center gap-2 hover:text-burgundy quicksand">
          <i className="fas fa-envelope text-burgundy" />
          babis_o_kauliaris@gmail.com
        </a>

        <a href="tel:+460769018014" className="flex items-center gap-2 hover:text-burgundy quicksand">
          <i className="fas fa-phone text-burgundy" />
          Booking Request: +46 076 901 8014
        </a>

        <p className="flex items-center gap-2 ">
          <i className="fas fa-clock text-burgundy" />
          Open: 09:00 am - 01:00 pm
        </p>
      </div>
    </footer>
  );
};

export default Footer;
