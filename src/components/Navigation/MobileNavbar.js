import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import Backdrop from "../Backdrop";
import SideDrawer from "./SideDrawer";
import { navbarList } from "../../assets/data/NavData";
import { Link } from "react-router-dom";
import logo  from "../../assets/images/NewLogo.jpg";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoMenuOutline, IoHomeOutline } from "react-icons/io5";
import { BiHeart, BiShoppingBag, BiUser } from "react-icons/bi";

const MobileNavbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const OpenDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen}>
        <div className="mobile-navbar">
          <nav className="mobile-navigation-menu">
            <div className="menu-top title">
              <h2 className="menu-title">Menu</h2>

              <button className="menu-close-btn" onClick={closeDrawerHandler}>
                <FaTimes />
              </button>
            </div>

            <ul className="mobile-menu-category-list">
              <li className="menu-category">
                <Link
                  to="/"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Home
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/AboutUs"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  About Us
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/privacy"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                   Privacy
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/documentRequired"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Document Required
                </Link>
              </li>


              <li className="menu-category">
                <Link
                  to="/service"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Services
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/Faq"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Faq
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/Terms-and-Conditions"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Terms And Conditions
                </Link>
              </li>

               <li className="menu-category">
                <Link
                  to="/Refund-Policy"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                 Refund Policy
                </Link>
              </li>

               <li className="menu-category">
                <Link
                  to="/Instruction"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
               Instruction for Applications
                </Link>
              </li>

               <li className="menu-category">
                <Link
                  to="/Visa-Fee-Details"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                 visa Fee Details
                </Link>
              </li>

               <li className="menu-category">
                <Link
                  to="/contact"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Contact US
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </SideDrawer>

      <div className="mobile-navbar-heading">
        <p className="main-navigation__title">
        <Link to="/">
            <img src={logo} className="mobile-logo" alt="logo" width="100" />
          </Link>
        </p>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" onClick={OpenDrawerHandler}>
            <IoMenuOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
