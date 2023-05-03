import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import airplane from "../assets/airplane.jpg";

const Landingpage = () => {
  return (
    <div className="landingpage-div">
      <LandingNavbar />
      <div>
        <img src={airplane} className="airplane" alt="airplane" />
      </div>
      <div className="homepage">
        <h1>
          <b> Hello,</b>
        </h1>
        <h2>
          <b>Welcome Aboard, Thanks for choosing Reagan</b>
        </h2>
        <h3>This is the landing page of Reagan International Airport</h3>
        <h3>
          This airport was built in 2023 and serves as a route through which
          several individuals travel through air .The airport provides both
          national and international aircraft services efficiently on a daily
          basis.<br/> <b>Fasten up your seatbelts, Fly Reagan.</b>
        </h3>
      </div>
    </div>
  );
};

export default Landingpage;
