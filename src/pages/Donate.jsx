import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import donate from "../assets/donate.jpeg";
import Footer from "../components/Footer";

const Donate = () => {
  return (
    <div>
      <Navbar />
      <div className="donate-sub-div">
        <h1>DONATE</h1>
        <h5>
          You can make a difference by giving to vulnerable children and
          families through All God’s Children International! Below you’ll find
          the many ways your family can give and change lives!
        </h5>
        <img src={donate} alt="don" className="preapp"/>
        <h3>CREDIT CARD</h3>
        <h4>Click the button below and follow the given instructions to donate via credit or debit card.</h4>
        <button id="don-btt" className="btn btn-danger">GIVE A GIFT</button>
      </div>

      <div className="submit-pre-app">
        <h1>
          <span>
            <img
              src="data:image/png;base64,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"
              alt="clipboard"
              className="clipboard"
            />
          </span>
          <Link to="/preapp">SUBMIT A FREE PRE-APP</Link>
        </h1>
      </div>

      <Footer/>
    </div>
  );
};

export default Donate;
