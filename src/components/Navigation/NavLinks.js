import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation("common");

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" >
         { t("nav.home")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" >
          { t("nav.about")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/privacy">
          { t("nav.privacy")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/documentRequired">
          <span>  { t("nav.document")}</span>
        </NavLink>
      </li>
    
      <li>
        <NavLink to="/service">
          { t("nav.services")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
         { t("nav.contact")}
        </NavLink>
      </li>
      
    </ul>
  );
};

export default NavLinks;
