import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import Backdrop from "../Backdrop";
import SideDrawer from "./SideDrawer";
import { navbarList } from "../../assets/data/NavData";
import { Link } from "react-router-dom";
import logo  from "../../assets/images/main-logo1.png";

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
                  to="/about"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  About
                </Link>
              </li>
              <li className="menu-category">
                <Link
                  to="/blogs"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Blogs
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/products"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Products
                </Link>
              </li>

              {/* {navbarList.map((item, index) => {
                return (
                  <>
                    <li
                      className="menu-category"
                      onClick={() => toggle(index)}
                      key={index}
                    >
                      <button className="accordion-menu">
                        <p className="menu-title">{item.catname}</p>

                        <div>
                          {clicked === index ? (
                            <FiMinus className="cat-icon" />
                          ) : (
                            <FiPlus className="cat-icon" />
                          )}
                        </div>
                      </button>

                      {clicked === index ? (
                        <ul className="submenu-category-list">
                          {item.subcategory.map((subcat, index) => {
                            return (
                              <>
                                <li className="submenu-category">
                                  <Link
                                    to="/"
                                    className="submenu-title"
                                    onClick={closeDrawerHandler}
                                    key={index}
                                  >
                                    {subcat.subcatname}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  </>
                );
              })} */}

              <li className="menu-category">
                <Link
                  to="/services"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Services
                </Link>
              </li>

              <li className="menu-category">
                <Link
                  to="/contact"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Contact
                </Link>
              </li>
              <li className="menu-category">
                <Link
                  to="/career"
                  className="menu-title"
                  onClick={closeDrawerHandler}
                >
                  Career
                </Link>
              </li>
            </ul>

            <div>
              <ul className="mobile-social-container">
                <li>
                  <a href="#" className="social-link">
                    {/* <BsFacebook /> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <BsTwitter /> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <BsInstagram /> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <BsLinkedin /> */}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </SideDrawer>

      <div className="mobile-navbar-heading">
        <p className="main-navigation__title">
        <Link to="/">
            <img src={logo} alt="logo" width="150" />
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
