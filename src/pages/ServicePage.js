import React from "react";
import ServiceImg from "../assets/images/service/transport/main.jpg";
import ServiceImg2 from "../assets/images/service/transport/2.jpg";
import ServiceImg3 from "../assets/images/service/transport/3.jpg";
import trackingImg from "../assets/images/service/vehicledesc.png";
import trackImg from "../assets/images/service/gpstracker.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const ServicePage = () => {
  return (
    <>
      <div className="services_background-banner-1 py-5">
        <div className="container py-5">
          <h3 className="text-left text-light">
            TRANSPORT AND LOGISTICS MANAGEMENT SOFTWARE
          </h3>
          <p className="text-left text-light wid-50">
            We offer a full turn-key package that includes web design, web
            promotion, software development and domain names registration.
          </p>
        </div>
      </div>
      <section className="servicepage_wrapper">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={ServiceImg} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 content-div">
              <h3 className="service-name">
                Transport and Logistics Management Software
              </h3>
              <p>
                Type : <span>Data Analysis</span>
              </p>
              <p>
                Minimum Order Quantity : <span>1 Unit</span>
              </p>
              <p>
                Software Type : <span>Inventory Management System</span>
              </p>

              <div>
                <h4>Key Features:</h4>
                <ul>
                  <li>Payment gateways: All types of payment gateways</li>
                  <li>Unlimited Categories and Products</li>
                  <li>Two products variation families</li>
                  <li>Manual and automatic stock control</li>
                  <li>
                    Customer account areas: Customers log in and admin their own
                    account area
                  </li>
                  <li>
                    Get your business up and running 24/7 and generate sales
                    even when you are sleeping.
                  </li>
                  <li>Facebook comments on products</li>
                  <li>
                    Unlimited offer discounts either all categories or specific
                    product lines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row py-5 servicepage-data">
            <div className="col-lg-6 col-md-6 col-12 content-div">
              <div className="img-div">
                <img src={ServiceImg3} className="img-fluid" />
              </div>
              <h3 className="service-name mt-3">Know More</h3>
              <p>
                We are actively devoted towards trading and supplying of a
                quality approved Vehicle Tracking GPS Device. Our provided
                Vehicle Tracking GPS Dev....
              </p>
              <h3 className="service-name my-2">Download Our Brochure</h3>
              <div className="service-brochure">
                <span>
                  <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </span>
                <span>transport list.pdf</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 content-div">
              <div className="img-div">
                <img src={ServiceImg2} className="img-fluid" />
              </div>
              <h3 className="service-name mt-3">Why we are the Best</h3>
              <div className="service-best">
              <Accordion allowZeroExpanded preExpanded={[1]}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>title</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div align="left">content</div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>title</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div align="left">content</div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>title</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div align="left">content</div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              </div>
            </div>
          </div>
          <div className="row py-5 servicepage-description">
            <div className="col-lg-6 col-md-6 col-12 img-div">
              <img src={trackImg} className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 content-div">
              <h3 className="service-name mb-3">Additional Info</h3>
              
                        <div className="about-quality">
                            <div className="about-quality-1">
                                <h5>Real Time Tracking.</h5>
                                <p>Praesent a nostra lacus aliquet torquelaer leo vulputate ut nascetur sociis mus a mi sem conubia.</p>
                            </div>
                            <div className="about-quality-2">
                                <h5>Logistics Functionality.</h5>
                                <p>Praesent a nostra lacus aliquet torquelaer leo vulputate ut nascetur sociis mus a mi sem conubia.</p>
                            </div>
                            <div className="about-quality-3">
                                <h5>Estimated time of Arrival.</h5>
                                <p>Praesent a nostra lacus aliquet torquelaer leo vulputate ut nascetur sociis mus a mi sem conubia.</p>
                            </div>
                            <div className="about-quality-4">
                                <h5>Barcoding and Scanning.</h5>
                                <p>Praesent a nostra lacus aliquet torquelaer leo vulputate ut nascetur sociis mus a mi sem conubia.</p>
                            </div>
                        </div>
                    
            </div>
          </div>
          <div className="row py-5 servicepage-description">
            <div className="col-lg-6 col-md-6 col-12 content-div">
              <h3 className="service-name">
                Why do you need to track your vehicle
              </h3>
              <p>
                We are actively devoted towards trading and supplying of a
                quality approved Vehicle Tracking GPS Device. Our provided
                Vehicle Tracking GPS Device is available in different designs
                and specifications in order to cater the demands of our clients.
              </p>
              <ul>
                <li>Payment gateways: All types of payment gateways</li>
                <li>Unlimited Categories and Products</li>
                <li>Two products variation families</li>
                <li>Manual and automatic stock control</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZYzbalQ6Lg8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
