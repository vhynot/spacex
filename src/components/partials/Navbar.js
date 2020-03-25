import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';

function Navbar() {
   const [toggleMenu,setToggleMenu] = useState(false);

   const setToggle = () => setToggleMenu(!toggleMenu);

    return (
      <nav className="navbar">
         <Link to="/">
            <img className="navbar__logo" src={logo} alt="logo"/>
         </Link>
         <ul className={`navbar__menu ${toggleMenu ? "navbar__menu--active": "navbar__menu--inactive"}`}>
            <Link to="/about" onClick={setToggle}>
               <li className={`${toggleMenu ? "navbar__link--fadein-1": "navbar__link--fadeout-1"}`}>ABOUT</li>
            </Link>
            <Link to="/fleet" onClick={setToggle}>
               <li className={`${toggleMenu ? "navbar__link--fadein-2": "navbar__link--fadeout-2"}`}>FLEET</li>
            </Link>
            <Link to="/careers" onClick={setToggle}>
               <li className={`${toggleMenu ? "navbar__link--fadein-3": "navbar__link--fadeout-3"}`}>CAREERS</li>
            </Link>
            <Link to="/history" onClick={setToggle}>
               <li className={`${toggleMenu ? "navbar__link--fadein-4": "navbar__link--fadeout-4"}`}>HISTORY</li>
            </Link>
         </ul>
         <div className="navbar__burger" onClick={setToggle}>
            <div className={` ${toggleMenu ? "navbar__burger--vert-1": "navbar__burger--hor-1"}`}></div>
            <div className={` ${toggleMenu ? "navbar__burger--vert-2": "navbar__burger--hor-2"}`}></div>
            <div className={` ${toggleMenu ? "navbar__burger--vert-3": "navbar__burger--hor-3"}`}></div>
         </div>
      </nav>
    )
}

export default Navbar;