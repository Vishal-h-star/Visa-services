import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ServiceImg2 from "../assets/images/service/transport/driver-checklist.jpg";
import ServiceImg3 from "../assets/images/service/transport/70226.gif";
import warehouse from "../assets/images/service/transport/driver.webp";
import { AiFillPlayCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import PDF from "../components/Service/Pdf";
import ServiceList from "../components/Service/ServiceList";
import Backdrop from "../components/Backdrop";
import Enqbutton from "../components/Enqbutton";
import Enquiry from "../components/Enquiry";
import { servicelist } from "../assets/data/ServicesData";
import {withRouter} from 'react-router';

const Detail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  // console.log(service);

  useEffect(() => {
    let service = servicelist.find((service) => service.id === parseInt(id));
    if (service) {
      setService(service);
    }
  }, [service]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const categoryRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const showHideFilter = () => {
    categoryRef.current.classList.toggle("active");
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    showHideFilter();
    setDrawerIsOpen(false);
  };

  return (
    <>
      {service ? (
        <>
          <div className="servicepage_background-banner-1 py-5">
            <div className="container py-5">
              <h3 className="text-left text-light">{service.name}</h3>
              <p className="text-left text-light wid-50">
                We offer a full turn-key package that includes web design, web
                promotion, software development and domain names registration.
              </p>
            </div>
          </div>
          <section className="servicepage2_wrapper">
            <div className="container">
              <div className="row py-5">
                <div className="col-lg-4 col-md-12 col-12 service-list">
                  <div className="category-filter-icon mb-3">
                    <div
                      className="filter-slide"
                      onClick={() => showHideFilter()}
                    >
                      <i class="fa fa-filter" aria-hidden="true"></i>
                      <span>Filter</span>
                    </div>
                  </div>
                  <div className="service-mobile-list mb-4" ref={categoryRef}>
                    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
                    <ServiceList />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 content-div">
                  <div className="service-quote">
                    <p>{service.description.slice(0, 100)}.</p>
                  </div>
                  <div className="servicepage-img">
                    <img src={service.image01} alt="" className="img-fluid" />
                  </div>

                  <div className="servicepage-name">
                    <h4>{service.name}</h4>
                  </div>
                  <div className="row content-row">
                    <div className="col-lg-12 col-md-12 col-12">
                      {isReadMore ? (
                        <p>{service.description.slice(0, 160)}...</p>
                      ) : (
                        <p> {service.description}</p>
                      )}
                      <div className="text-center show-more">
                        <p className="read-or-hide" onClick={toggleReadMore}>
                          {isReadMore ? (
                            <>
                              <span className="read-more">Read More</span>
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                            </>
                          ) : (
                            <>
                              <span className="read-more">Read Less</span>
                              <i
                                className="fa fa-minus-circle"
                                aria-hidden="true"
                              ></i>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {service.file === undefined ? (
                    ""
                  ) : (
                    <div className="row file-row">
                      <div className="content">
                        <h5>Download our service brochures</h5>
                      </div>

                      <div className="file">
                        <PDF />
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 content-div">
                      {service.detailImg ? (
                        <div className="img-div">
                          <img src={ServiceImg3} className="img-fluid" />
                        </div>
                      ) : (
                        ""
                      )}
                      <h3 className="service-name mt-3">Product Details</h3>
                      <ul>
                        {service.features.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 content-div">
                      {service.infoImg ? (
                        <div className="img-div">
                          <img src={ServiceImg2} className="img-fluid" />
                        </div>
                      ) : (
                        ""
                      )}

                      <h3 className="service-name mt-3">Important Info.</h3>
                      <div className="service-best">
                        <ul>
                          {service.features.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 text-right">
                      <Enquiry />
                    </div>
                    <div className="col-12 youtube-service my-5">
                      <div
                        className="btn btn--white btn--animated"
                        onClick={handleShow}
                      >
                        <AiFillPlayCircle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Modal
                show={show}
                onHide={handleShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body>
                  <iframe
                    height="355"
                    src="https://www.youtube.com/embed/ZYzbalQ6Lg8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </section>
        </>
      ) : (
        "kjkj"
      )}
    </>
  );
};

export default withRouter(Detail);
