import React from "react";
import Navbar from "../components/Navbar";
import Arrivaltable from "../components/Arrivaltable";
import Departuretable from "../components/Departuretable";
import Footer from '../components/Footer';



const Dashboard = ({ handleLogout}) => {
  return (
    <div className="dashboard">
      <Navbar  handleLogout={handleLogout}/>  
      <hr/>
      <h2>Arrivals</h2>
      <Arrivaltable />

      <h2>Departures</h2>
      <Departuretable/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
