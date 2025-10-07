import React, { useEffect, useRef } from "react";
import AboutImg from "../assets/images/driver.png";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { GiSteeringWheel } from 'react-icons/gi'
import { SiTransportforlondon } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa";
import AOS from "aos";

const About = () => {

  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      AOS.init({
        duration: 50,
      });
      AOS.refresh();
    }
    return () => (mounted.current = false);
  }, []);
  return (
    <>
      <section className="about_wrapper pt-1">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 col-sm-12 mb-4 mb-md-0">
              <h2 className="">About Us</h2>
              <p className="sub-text">WHAT WE CAN DO FOR YOU</p>
              <img src={AboutImg} alt="wom-solution-about-img" className="img-fluid" data-aos="fade-right" data-aos-duration='700' />
            </div>
            <div className="col-md-7 col-sm-12 text-md-start">
              <div className="row">
                <div className="col-11 service-box mb-2">
                  <p className="m-0">
                    Wom Solutions is a pioneering name in the realm of logistics and transport management system software, specializing in a comprehensive suite of software solutions tailored for the industry. Since our inception, we have excelled in providing ERP software specifically designed for transport and logistics operations, enhancing efficiency and scalability for businesses of all sizes.
                  </p>
                </div>
                <div className="col-11 service-box mb-2">
                  <p className="m-0">
                  Our expertise extends to warehouse management software that optimizes inventory control and logistics operations, ensuring streamlined workflows and cost-effective management. Additionally, we offer cutting-edge GPS vehicle tracking devices that provide real-time monitoring and fleet management solutions, enhancing security and operational visibility.
                  </p>
                </div>
                <div className="col-11 service-box mb-2">
                  <p className="m-0">
                  At Wom Solutions, we are committed to innovation and customer satisfaction, continuously evolving our offerings to meet the dynamic needs of the transport and logistics sectors. Our solutions are crafted with precision and reliability, empowering businesses to achieve operational excellence and profitability in today's competitive landscape.
                  </p>
                </div>
              </div>
              {/* <div className="row">
                <Link className="col-lg-5 col-md-12 col-11 service-box" to="/services/1" >
                  <h6>
                    <span>
                      <AiFillCar />
                    </span>
                    Digital Vehicle Inspection Checklist
                  </h6>
                  <p className="m-0">
                  Vehicle checklist is specifically designed for Trucks and Cars checklist with 30-35 questions. 
                  </p>
                </Link>
                <Link className="col-lg-5 col-md-12 col-11 service-box" to="/services/2">
                  <h6>
                    <span>
                      <GiSteeringWheel />
                    </span>
                    Digital Driver Inspection Checklist
                  </h6>
                  <p className="m-0">
                    We offer a full turn-key package that includes web design,
                    web promotion, software development and domain
                  </p>
                </Link>
              </div>
              <div className="row">
                <Link className="col-lg-5 col-md-12 col-11 service-box" to="/services/3" data-aos="zoom-in" data-aos-duration='700'>
                  <h6>
                    <span>
                      <SiTransportforlondon />
                    </span>
                    Transport & Logistics Management Software
                  </h6>
                  <p className="m-0">
                  Transportation logistics management is an integral part of delivering goods from suppliers to customers.
                  </p>
                </Link>
                <Link className="col-lg-5 col-md-12 col-11 service-box" to="/services/8" data-aos="zoom-in" data-aos-duration='700'>
                  <h6>
                    <span>
                      <FaWarehouse />
                    </span>
                    Warehouse and Inventory Management Software
                  </h6>
                  <p className="m-0">
                  Wholesale Trader of a wide range of products which include warehouse management software and warehouse management system.
                  </p>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
