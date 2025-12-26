import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation("common");

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
         { t("nav.home")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" exact>
          { t("nav.about")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/privacy" exact>
          { t("nav.privacy")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/documentRequired" exact>
          <span>  { t("nav.document")}</span>
        </NavLink>
      </li>
    
      <li>
        <NavLink to="/service" exact>
          { t("nav.services")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact>
         { t("nav.contact")}
        </NavLink>
      </li>
      
    </ul>
  );
};

export default NavLinks;
