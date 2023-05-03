import React from "react";
import Navbar from "../components/Navbar";
import Arrivaltable from "../components/Arrivaltable";
import Footer from '../components/Footer';

const Arrivals = ({handleLogout}) => {
  return (
      <div className="arrival-div">
        <Navbar handleLogout={handleLogout}/>
      <hr/>
      <h5>Arrivals</h5>
      <Arrivaltable/>
      <Footer/>

     
    </div>
  );
};

export default Arrivals;
