import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/App.css';
import '../../stylesheets/Navbar.css';
import logo from '../../img/logo.png';


function Navbar() {

   const [toggleMenu,setToggleMenu] = useState(false);

   const setToggle = () => setToggleMenu(!toggleMenu);

    return (
         <nav className="nav-container">
            <Link to="/">
               <img className="logo" src={logo} alt="logo"/>
            </Link>
            
            <ul className={`nav-links ${toggleMenu ? "nav-active": "nav-inactive"}`}>
               
                  <Link to="/about" onClick={setToggle}>
                     <li className={`${toggleMenu ? "nav-links-fadein-1": "nav-links-fadeout-1"}`}>ABOUT</li>
                  </Link>
                  <Link to="/spacefleet" onClick={setToggle}>
                     <li className={`${toggleMenu ? "nav-links-fadein-2": "nav-links-fadeout-2"}`}>SPACE FLEET</li> 
                  </Link>
                  <Link to="/careers" onClick={setToggle}>
                     <li className={`${toggleMenu ? "nav-links-fadein-3": "nav-links-fadeout-3"}`}>CAREERS</li> 
                  </Link>
                  <Link to="/history" onClick={setToggle}>
                     <li className={`${toggleMenu ? "nav-links-fadein-4": "nav-links-fadeout-4"}`}>HISTORY</li> 
                  </Link>

            </ul>
            
            <div className="burger" onClick={setToggle}>
               <div className={` ${toggleMenu ? "ham-div-1": "ham-1"}`}></div>
               <div className={` ${toggleMenu ? "ham-div-2": "ham-2"}`}></div>
               <div className={` ${toggleMenu ? "ham-div-3": "ham-3"}`}></div>
            </div>
         </nav>
    );
}

export default Navbar;