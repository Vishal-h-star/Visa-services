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
        <NavLink to="/questions" exact>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" exact>
          Privacy
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" exact>
          <span> Document</span>
        </NavLink>
      </li>
      {/* <li className="submenu-heading">
        <NavLink to="/software" exact>
          Software
        </NavLink>

        <div className="dropdown-panel">
          <ul className="dropdown-panel-list">
            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <FaTruckLoading className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Trucking Dispatch System</h5>
                  <br />
                  <p>Plan, create, and notify with one unified solution</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <MdAccountBalance className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Account Management System</h5>
                  <br />
                  <p>Manage income, expenses, and settlements in real-time</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <TbReportMedical className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Full Truck Load</h5>
                  <br />
                  <p>
                    Generate detailed IFTA reports using dispatch or ELD data
                  </p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <MdAccountBalance className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Less than Truck Load</h5>
                  <br />
                  <p>Manage income, expenses, and settlements in real-time</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <GiSteeringWheel className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Driver Management System</h5>
                  <br />
                  <p>Assign dispatches, get updates, and track expenses</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <AiFillSetting className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Trucking Maintenance</h5>
                  <br />
                  <p>Keep track of maintenance schedules for all your trucks</p>
                </div>
              </NavLink>
            </li>
          </ul>

          <ul className="dropdown-panel-list">
            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <FaClipboardList className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Load Board</h5>
                  <br />
                  <p>Search load boards, communicate, and finalize loads</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <FaBusinessTime className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Business Intelligence</h5>
                  <br />
                  <p>
                    Make informed decisions based on detailed business reporting
                  </p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <TbSteeringWheel className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Driver Mobility Solutions</h5>
                  <br />
                  <p>Dispatch, invoice, and add expenses from anywhere</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <HiOutlineDocumentReport className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Digital Document Management</h5>
                  <br />
                  <p>Secure and access all your documents in one place</p>
                </div>
              </NavLink>
            </li>

            <li className="submenu-title">
              <NavLink
                to="/solutions/trucking-dispatch-software"
                className="submenu-link"
              >
                <div className="submenu-div1">
                  <GoCircuitBoard className="submenu-icon" />
                </div>
                <div className="submenu-div2">
                  <h5>Integrations</h5>
                  <br />
                  <p>Improve operational efficiency and reduce data entry</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </li> */}
      <li>
        <NavLink to="/services" exact>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact>
          Contact
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/career" exact>
          Career
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
