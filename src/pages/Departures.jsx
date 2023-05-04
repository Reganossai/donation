import React from "react";
import Navbar from "../components/Navbar";
import Departuretable from "../components/Departuretable";
import Footer from '../components/Footer';

const Departures = ({ handleLogout }) => {
  return (
    <div className="departure-div">
      <Navbar handleLogout={handleLogout} />
      <hr/>
      <h5>Departures(Frankfurt International Airport (EDDF))</h5>
      <Departuretable />
      <Footer/>
    </div>
  );
};

export default Departures;
