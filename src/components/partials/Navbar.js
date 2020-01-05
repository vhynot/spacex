import React from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/App.css';
import '../../stylesheets/Navbar.css';
import logo from '../../img/logo.png';

function Navbar() {
    return (
      <div className="back-layer">
         <nav className="nav-container">
            <Link to="/">
               <img className="logo" src={logo} alt="logo"/>
            </Link>
            <ul className="nav-links">
               <Link to="/about">
                  <li>ABOUT</li>
               </Link>
               <Link to="/spacefleet">
                  <li>SPACE FLEET</li> 
               </Link>
               <Link to="/careers">
                  <li>CAREERS</li> 
               </Link>
               <Link to="/history">
                  <li>HISTORY</li> 
               </Link>
            </ul>
         </nav>
      </div>
    );
}

export default Navbar;