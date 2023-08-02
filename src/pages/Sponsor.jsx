import React from "react";
import { totalChildren } from "../data";
import {Link} from "react-router-dom";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";

const Sponsor = () => {
  return (
    <div className="sponsor-page-div">
    <Navbarr/>
    <div className="blue-sponsor">
      <h1>Sponsor a Child</h1>
    </div>
    <div className="children-page">
      {totalChildren.map((child) => (
        <div className="children-page-sub" key={child.id}>
          <img src={child.img} className="children-page-image" />
          <h2>{child.name}</h2>
          <p>
            I'm a <b>{child.age}-year-old {child.gender}</b>
          </p>
          <div className="spons-prof">
            <button id="spons-prof-one" className="btn btn-primary">
              SPONSOR ME
            </button>

            <button id="spons-prof-two" className="btn btn-primary">
              <Link to={`/profile/${child.id}`}>
                MY PROFILE  
              </Link>
            </button>
          </div>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Sponsor;
