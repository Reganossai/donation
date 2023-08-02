import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink,Link } from 'react-router-dom';

const Navbarr = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };

    
  nav
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "auto");

  return (
    <nav id="" className="navbar navbar-expand-lg">
         <div className="logo-div">
      <Link className="logo-links" to="/">
      <img className='nav-imgg' src='https://cdn.givecloud.co/s/files/1/0000/0908/files/agci-logo-no-tagline.png' alt='logo'/>
      </Link>
    </div>

    <div id="navbarSupportedContentt">
      <ul>
    
        <li className="nav-link">
          <NavLink activeClassName="active" to="/" id="menu-links">
          <span><FontAwesomeIcon icon={faCaretLeft} className='caret'/></span> MAIN WEBSITE
          </NavLink>
        </li>

        </ul>
    </div>
   
    {nav ? (
      <div id="navbarSupportedContentMobilee">
        <ul>
        
        <li className="nav-link">
          <NavLink activeClassName="active" to="/" id="menu-links">
          <span><FontAwesomeIcon icon={faCaretLeft} className='caret'/></span> MAIN WEBSITE
          </NavLink>
        </li>

        <hr className='hio'/>

        <li>
          <p>bla bla</p>
        </li>

        
        <li>
          <p>bla bla</p>
        </li>

      
          </ul>
      </div>
    ) : null}

    <div onClick={handleNav} className="zarachoo">
      {nav ? (
        <FontAwesomeIcon icon={faXmark} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </div>
      
    </nav>
  )
}

export default Navbarr