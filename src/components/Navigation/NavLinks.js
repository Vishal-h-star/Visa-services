import React from "react";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" exact>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/privacy" exact>
          Privacy
        </NavLink>
      </li>
      <li>
        <NavLink to="/documentRequired" exact>
          <span> Document</span>
        </NavLink>
      </li>
    
      <li>
        <NavLink to="/service" exact>
          Services
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/contact" exact>
          Contact
        </NavLink>
      </li> */}
      
    </ul>
  );
};

export default NavLinks;
