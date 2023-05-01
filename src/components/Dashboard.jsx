import React from "react";
import Navbar from "./Navbar";
import Arrivaltable from "./Arrivaltable";
import Departuretable from "./Departuretable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />  
      <hr/>
      <h1>Arrivals</h1>
      <Arrivaltable/>

      <h1>Departures</h1>
      <Departuretable/>
    </div>
  );
};

export default Dashboard;
