import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import image from "../assets/images.png";
import {useHistory} from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
  let history =useHistory();

  const Logout = () => {
    history.push('/')
  }

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
  <div>
     <nav className="navbar navbar-expand-lg">
      <div className="logo-div">
        <Link to="/">
          <img src={image} className="logoo" alt="logoo" />
        </Link>
      </div>
      <div id="navbarSupportedContent">
        <ul>
          <li className="nav-link">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink activeClassName="active" to="/arrivals">
              Arrivals
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink activeClassName="active" to="/departures">
              Departures
            </NavLink>
          </li>

          <li className="nav-link">
            <button onClick={Logout}>
              logout
            </button>
          </li>
        </ul>
      </div>
      {nav ? (
        <div id="navbarSupportedContentMobile">
          <ul>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
