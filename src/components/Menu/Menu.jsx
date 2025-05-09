import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='w-1/2 flex flex-col justify-center items-center'>

        <div className="relative group cursor-pointer">
          <Link to="/food" className="navilnk">Food</Link>
          <span className="pseudoBorder"></span>
          <span className="pseudoGlance pseudoGlanceBG"></span>
        </div>

        <div className="relative group cursor-pointer">
          <Link to="/coffee" className="navilnk">Coffee</Link>
          <span className="pseudoBorder"></span>
          <span className="pseudoGlance pseudoGlanceBG"></span>
        </div>

        <div className="relative group cursor-pointer">
          <Link to="/drinks" className="navilnk">Beers / Wine</Link>
          <span className="pseudoBorder"></span>
          <span className="pseudoGlance pseudoGlanceBG"></span>
        </div>

      </div>

      <div className='w-1/2'>
        <img className='w-full' src="coffee_machine.gif" alt="coffee machine" />
      </div>
    </div>
  );
};

export default Menu;
