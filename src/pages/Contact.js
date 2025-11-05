import React, { useState, useEffect, useRef } from "react";
import ContactForm from "../components/Contact/ContactForm";
import { MdPhone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FiMapPin } from 'react-icons/fi';
import AOS from "aos";

const Contact = () => {

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
      <div className="contact-section container">
        <div className="row contact-content">
           <div>
             <h4 ><b>Contact US</b></h4>
           </div>
          {/* <h2 className="contact-head">Get in Touch And We’ll Help Your Business</h2> */}

          <div className="contact-text-section col-lg-6  col-12">

            {/* <p className="desc-section">
              Welcome to WOM Solutions a software development company with
              majorly working on GPS Vehicle Tracking system and solutions and
              Transport/Fleet and Logistics management solutions !
            </p> */}

            <ul className="contact-list">
              <li className="contact-lists" data-aos="flip-left" data-aos-duration='600'>
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-text">
                  {/* <h4 className="contact-tect-heading">Office Address</h4> */}
                  <p className="text-left">
                     New Delhi, India.
                  </p>
                </div>

              </li>
              <li className="contact-lists" data-aos="flip-left" data-aos-duration='800'>
                <div className="contact-icon">
                  <MdPhone />
                </div>
                <div className="contact-text">
                  {/* <h4 className="contact-tect-heading">Telephone Number</h4> */}
                  <p className="text-left">+(91)8376836323</p>
                </div>
              </li>
              <li className="contact-lists" data-aos="flip-left" data-aos-duration='600'>
                <div className="contact-icon">
                  <FaRegEnvelope className="innerContact_icon" />
                </div>
                <div className="contact-text">
                  {/* <h4 className="contact-tect-heading">Mail Address</h4> */}
                  <p className="text-left">sales@womsolutions.in</p>
                </div>
              </li>
            </ul>

          </div>
          <div className="contact-form-section col-lg-6  col-12">
            <ContactForm />
          </div>

        </div>
      </div>
      {/* <div className="container-fluid my-5">
        <div className="row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.252718355847!2d77.08616281503605!3d28.62218698242191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b07d2b1ac1%3A0xe7ba38c6d9d27eef!2sWOM%20Solutions!5e0!3m2!1sen!2sin!4v1645344371935!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
