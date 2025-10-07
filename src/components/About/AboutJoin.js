import React from "react";
// import './AboutJoin.css'
import { FaHandsHelping, FaNetworkWired } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import about1 from "../../assets/images/vehicletracking.png";
import about2 from "../../assets/images/country.png";
import about3 from "../../assets/images/logistics.png";

const AboutJoin = () => {
  return (
    <>
      <section className="about-join">
        <h2 className="join-head">Why we are the best</h2>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 join-content">
              <div className="img-div">
                <img src={about1} className="img-fluid" />
              </div>
              <h4>Vehicle Solution</h4>
             
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 join-content">
              <div className="img-div">
                <img src={about2} className="img-fluid" />
              </div>
              <h4>Country Connection</h4>
             
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 join-content">
              <div className="img-div">
                <img src={about3} className="img-fluid" />
              </div>
              <h4>Logistics Management</h4>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12 join-content-1">
              <AiOutlineFundProjectionScreen className="about-icon" />
              <h4>200</h4>
              <p>
                Projects
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutJoin;
