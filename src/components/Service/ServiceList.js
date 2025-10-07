import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import { useParams } from "react-router";
import { GrCloudSoftware } from "react-icons/gr";
import { MdBusiness } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { AiFillAndroid, AiFillCar, AiFillPrinter } from "react-icons/ai";
import { FaFingerprint, FaBluetooth } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import { GiWorld, GiSteeringWheel } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { SiPivotaltracker, SiTransportforlondon } from "react-icons/si";
import { servicelist } from "../../assets/data/ServicesData";
import { useHistory } from "react-router-dom";

const ServiceList = () => {
  const history = useHistory();
  const { id } = useParams();
  const [service, setService] = useState(servicelist);

  useEffect(() => {
    let service = servicelist.find((service) => service.id === id);
    if (service) {
      history.push(`/services/${id}`);
      setService(service);
    }
  }, [service]);

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      AOS.init({
        duration: 50,
      });
      AOS.refresh();
    }
    // return () => (mounted.current = false);
  }, []);

  return (
    <>
      <ul className="service-menu-items">
        
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services" className="nav-link">
            <span className="icon">
              <BsCardList />
            </span>
            <span>All Services</span>
          </a>
        </li>

        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/1" className="nav-link">
            <span className="icon">
              <AiFillCar />
            </span>
            <span>Vehicle checklist</span>
          </a>
        </li>
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/2" className="nav-link">
            <span className="icon">
              <GiSteeringWheel />
            </span>
            <span>Driver checklist</span>
          </a>
        </li>
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/3" className="nav-link">
            <span className="icon">
              <SiTransportforlondon />
            </span>
            <span>Transport & logistic</span>
          </a>
        </li>
        
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/4" className="nav-link">
            <span className="icon">
              <MdBusiness />
            </span>
            <span>Ecommerce Development</span>
          </a>
        </li>
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/6" className="nav-link">
            <span className="icon">
              <FaFingerprint />
            </span>
            <span>ERP Software</span>
          </a>
        </li>
        <li className="service-menu-item" data-aos="fade-right">
          <a exact href="/services/7" className="nav-link">
            <span className="icon">
              <SiPivotaltracker />
            </span>
            <span>Vehicle Tracking</span>
          </a>
        </li>
        {/* <li className="service-menu-item" data-aos="fade-right">
              <NavLink exact to="/services/2" className="nav-link">
                <span className="icon" ><AiFillPrinter /></span>
                <span>3D Printer</span>
              </NavLink>
            </li> */}
        {/* <li className="service-menu-item" data-aos="fade-right">
              <NavLink exact to="/services/28" className="nav-link">
                <span className="icon" ><BiCurrentLocation /></span>
                <span>GPS System</span>
              </NavLink>
            </li> */}
        {/* <li className="service-menu-item" data-aos="fade-right">
              <NavLink exact to="/services/25" className="nav-link">
                <span className="icon" ><FaBluetooth /></span>
                <span>Teltonika</span>
              </NavLink>
            </li> */}

      </ul>
    </>
  );
};

export default ServiceList;
