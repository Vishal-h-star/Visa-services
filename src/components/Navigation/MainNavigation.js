import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";
import logo  from "../../assets/images/NewLogo.jpg";
import LangSwitcher from "../LangSwitch/LangSwitcher";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const drawerHandle = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        {/* <div className='container'> */}
           
        <div className="navigation__box">
           <div className="logo_div">
             <Link to="/">
            <img src={logo} alt="logo" width="100px" height={'100px'}  />
          </Link>
           </div>
          
          <button className="main-navigation__menu-btn" onClick={drawerHandle}>
            {drawerIsOpen ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars" aria-hidden="true"></i>
            )}
          </button>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
         <LangSwitcher/>
        {/* </div> */}
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
