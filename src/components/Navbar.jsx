import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import image from "../assets/images.png";


const Navbar = ({handleLogout}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };



  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar navbar-expand-lg">
    <div className="logo-div">
      <Link className="logo-links" to="/">
        <img src="https://allgodschildren.org/wp-content/uploads/2018/12/all-gods-children-logo@2x.png"  className="nav-img" alt="kink"/>
        
      </Link>
    </div>
    <div id="navbarSupportedContent">
      <ul>
      <li>
          <NavLink exact activeClassName="active" to="/" id="menu-links">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/signup" id="menu-links">
            DISCOVER
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink activeClassName="active" to="/signin" id="menu-links">
            CHILD SPONSORSHIP          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink activeClassName="active" to="/prod" id="menu-links">
            INTERNATIONAL ADOPTION
          </NavLink>
        </li>

        <li>
          <button id="adoption-bt" className="btn btn-primary">ADOPTION PRE-APP</button>
        </li>
        
        <li>
          <button  id="donate-bt" className="btn btn-danger">DONATE</button>
        </li>

       
        </ul>
    </div>
   
    {nav ? (
      <div id="navbarSupportedContentMobile">
        <ul>
          <li>
            <Link to="/signup" id="menu-links">
              ABOUT US
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/signin" id="menu-links">
              DISCOVER 
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/sponsor" id="menu-links">
              CHILD SPONSORSHIP
            </Link>
          </li>

          
          <li className="nav-link">
            <Link to="/prod" id="menu-links">
              INTERNATIONAL ADOPTION
            </Link>
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
  );
};

export default Navbar;
