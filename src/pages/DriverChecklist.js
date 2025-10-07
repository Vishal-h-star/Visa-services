import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ServiceImg2 from "../assets/images/service/transport/driver-checklist.jpg";
import ServiceImg3 from "../assets/images/service/transport/70226.gif";
import warehouse from "../assets/images/service/transport/driver.webp";
import { AiFillPlayCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import PDF from "../components/Service/Pdf";
import ServiceList from "../components/Service/ServiceList";
import Backdrop from "../components/Backdrop";
import Enqbutton from "../components/Enqbutton";

const ServicePages = () => {
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
      <div className="servicepage_background-banner-1 py-5">
        <div className="container py-5">
          <h3 className="text-left text-light">
            Driver Checklist Survey Mobile App
          </h3>
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
                <div className="filter-slide" onClick={() => showHideFilter()}>
                  <i class="fa fa-filter" aria-hidden="true"></i>
                  <span>Filter</span>
                </div>
              </div>
              <div className="service-mobile-list mb-4" ref={categoryRef}>
                {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />} */}
                <ServiceList />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 content-div">
              <div className="service-quote">
                <p>
                  Driver checklist mobile app used for precheck of driver
                  checklist. So before trip all major checks related to Covid or
                  corona checks.
                </p>
              </div>
              <div className="servicepage-img">
                <img src={warehouse} alt="" className="img-fluid" />
              </div>

              <div className="servicepage-name">
                <h4>Driver Checklist Survey Mobile App</h4>
              </div>
              <div className="row content-row">
                <div className="col-lg-12 col-md-12 col-12">
                  {isReadMore ? (
                    <p>
                      Driver checklist mobile app used for precheck of driver
                      checklist. So before trip all major checks related to
                      Covid or corona checks...
                    </p>
                  ) : (
                    <p>
                      {" "}
                      Driver checklist mobile app used for precheck of driver
                      checklist. So before trip all major checks related to
                      Covid or corona checks. Dress, behaviour, insurance,
                      License and many other questions related to driver to make
                      a safe trip.
                    </p>
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
                {/* <div className="col-lg-6 col-md-6 col-12">
                  <p>
                    WOM Solutions keeps doing what comes naturally to them which
                    is building teams with their clients, partners and creating
                    exceptional software dev. and support. Job well done.
                    Congratulations to all your teams.
                  </p>
                </div> */}
              </div>
              <div className="row file-row">
                <div className="content">
                  <h5>Download our service brochures</h5>
                </div>
                <div className="file">
                  <PDF />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 content-div">
                  <div className="img-div">
                    <img src={ServiceImg3} className="img-fluid" />
                  </div>
                  <h3 className="service-name mt-3">Product Details</h3>

                  <ul>
                    <li>
                      <b>Minimum order quantity: </b>1 unit
                    </li>
                    <li>
                      <b>development platforms: </b>Android
                    </li>
                    <li>
                      <b>Design: </b>Web,Android and iOS app
                    </li>
                    <li>
                      <b>Technology: </b>Web,Android and iOS app
                    </li>
                    <li>
                      <b>Service type: </b>Transport and Fleet Management
                    </li>
                    <li>
                      <b>Service mode: </b>Offline and Online
                    </li>
                    <li>
                      <b>Service Available: </b>Android Mobile app
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12 content-div">
                  <div className="img-div">
                    <img src={ServiceImg2} className="img-fluid" />
                  </div>
                  <h3 className="service-name mt-3">Important Info.</h3>
                  <div className="service-best">
                    <ul>
                      <li>
                        <b>Maintenance: </b>Yes
                      </li>
                      <li>
                        <b>Language Required: </b>English and HIndi
                      </li>
                      <li>
                        <b>Back Camera: </b>Yes
                      </li>
                      <li>
                        <b>Features: </b>Driver 15 checklist points
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 text-right">
                    <Enqbutton />
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
  );
};

export default ServicePages;
