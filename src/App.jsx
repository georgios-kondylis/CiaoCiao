import React, { useState, useEffect, useContext } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import {maxSM, maxMD, maxLG} from "./utils";

export const customContext = React.createContext();

function App() {
  const [mobileNavActive, setMobileNavActive] = useState();

  return (
    <customContext.Provider value={{
      mobileNavActive, setMobileNavActive
    }}>
      <div className="w-full overflow-x-hidden">
        <MobileNavbar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* <Route path="/food" element={ 
            <div className="mx-auto w-full W_LIMIT">
              <Food/>
            </div>}
          /> */}
        </Routes>
      </div>
    </customContext.Provider>
  );
}

export default App;

