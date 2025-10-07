import React, { useEffect, useRef } from "react";
import serviceBlockImg from "../assets/images/feature.webp";
import Title from "./Title/Title";
import Para from "./Title/Para";
import {  FaUserCheck  } from 'react-icons/fa'
import { IoLocateSharp, IoAnalytics, IoLinkOutline   } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { RiShip2Fill } from 'react-icons/ri';
import { GrIntegration } from "react-icons/gr";

import AOS from "aos";

const Features = () => {
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
      <section className="features_wrapper py-5">
        {/* <Title title="Our logistic and transport management system software offers flowing robust features" /> */}
        <h3 className="text-center">Our logistic and transport management system software offers flowing robust features</h3>
        {/* <Para para="We offer a full turn-key package that includes web design, web promotion, software development and domain names registration." /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card bg-transparent border-0">
                <div className="card-body text-start">
                  <div className="features" data-aos="fade-down" data-aos-duration='500'>
                    <div className="feature-icon">
                      <span>
                        <IoLocateSharp className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>Real-time Tracking</h3>
                      <p>
                      Real-time tracking provides live updates on vehicle locations, enhancing operational efficiency, safety, and customer satisfaction in logistics and transport.
                      </p>
                    </div>
                  </div>

                  <div className="features" data-aos="fade-down" data-aos-duration='700'>
                    <div className="feature-icon">
                      <span>
                        <RiShip2Fill className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>Comprehensive Fleet Management</h3>
                      <p>
                      Comprehensive fleet management ensures optimal vehicle performance, efficiency, and safety through tracking, maintenance, fuel management, and driver monitoring capabilities.
                      </p>
                    </div>
                  </div>
                  <div className="features" data-aos="fade-down" data-aos-duration='900'>
                    <div className="feature-icon">
                      <span>
                        <TbReportAnalytics className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>Customizable Reporting</h3>
                      <p>
                      Customizable reporting offers tailored insights and analytics, allowing users to generate and analyze data specific to their operational needs and business objectives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 feature-img">
              <div className="card bg-transparent border-0">
                <div className="card-body text-center">
                  <img
                    src={serviceBlockImg}
                    alt=""
                    className="img-fluid mb-4 service_phone"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card bg-transparent border-0">
                <div className="card-body text-start">
                <div className="features" data-aos="fade-down" data-aos-duration='500'>
                    <div className="feature-icon">
                      <span>
                        <IoAnalytics className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>Detailed Analytics</h3>
                      <p>
                      Detailed analytics provide in-depth insights into operational performance, enabling informed decision-making and strategic improvements in logistics and transport management.
                      </p>
                    </div>
                  </div>
                  <div className="features" data-aos="fade-down" data-aos-duration='700'>
                    <div className="feature-icon">
                      <span>
                        <FaUserCheck className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>User-friendly Interface</h3>
                      <p>
                      A user-friendly interface ensures ease of navigation and accessibility, enhancing efficiency and user satisfaction in logistics and transport management software.
                      </p>
                    </div>
                  </div>
                  <div className="features" data-aos="fade-down" data-aos-duration='900'>
                    <div className="feature-icon">
                      <span>
                        <IoLinkOutline className="icons"/>
                      </span>
                    </div>
                    <div className="feature-text">
                      <h3>Integration Capabilities</h3>
                      <p>
                      Integrates smoothly with other business systems such as ERP, WMS, and accounting software for seamless data flow and holistic management of logistics operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
