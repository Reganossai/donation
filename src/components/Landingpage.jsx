import React from 'react';
import LandingNavbar from './LandingNavbar';
import airplane from '../assets/airplane.jpg';

const Landingpage = () => {
  return (
    <div>
      <LandingNavbar/>
      <div>
        <img src={airplane} className="airplane" alt="airplane"/>
      </div>
    </div>
  )
}

export default Landingpage