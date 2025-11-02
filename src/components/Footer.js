import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="disclaimer">
          <p>
            Disclaimer: <br />
            www.indiansvisaonline.com is a commercial website. We are not the
            Embassy/Consulate/High Commission or the representative of any
            Government Department of India. We provide expert guidance on Indian
            visa applications. If you prefer a non-guided service, you can visit
            the Indian Government Website.
          </p>
        </div>
        <div class="footer_cont2">
          <hr/>
          <span> © Copyright 2020 by Indiavisa. All Rights Reserved</span>
        </div>
      </section>
    </>
  );
};

export default Footer;

// import React, { useEffect, useRef } from "react";
// import { NavLink, Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";
// import AOS from "aos";
// import logo from "../assets/images/main-logo1.png";

// const Footer = () => {
//   const mounted = useRef(false);
//   useEffect(() => {
//     mounted.current = true;
//     if (mounted.current) {
//       AOS.init({
//         duration: 50,
//       });
//       AOS.refresh();
//     }
//     return () => (mounted.current = false);
//   }, []);
//   return (
//     <>
//       <section className="footer" data-aos="zoom-in" data-aos-duration="700">
//         <footer className="footer-top">
//           <div className="container">
//             <div className="row">
//               <div className="footer-col col-lg-4 col-md-6 col-sm-6 col-12 sm-mb-3">
//                 <h3 className="main-heading">
//                   <Link to="/">
//                     <img src={logo} alt="logo" width="150" />
//                   </Link>
//                 </h3>
//                 <p>
//                   Welcome to WOM Solutions a software development compnay with
//                   majorly working on GPS Vehicle Tracking system and solutions
//                   and Transport/Fleet and Logistics management solutions !
//                 </p>
//                 <div className="social-links mb-4">
//                   <a
//                     href="https://www.facebook.com/Womsolutions"
//                     target="_blank"
//                   >
//                     <FaFacebookF />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/womsolutionsin/"
//                     target="_blank"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a href="#">
//                     <FaLinkedin />
//                   </a>
//                   <a href="#">
//                     <FaTwitter />
//                   </a>
//                 </div>
//               </div>
//               <div className="footer-col col-lg-2 col-md-6 col-sm-6 col-12">
//                 <h4>Useful Links</h4>
//                 <ul>
//                   <li>
//                     <NavLink to="/about">About Us</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/contact">Contact Us</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/products">Our Products</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/services">Our Services</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/career">Our Careers</NavLink>
//                   </li>
//                   <li>
//                     <a href="http://womvts.womsolutions.in/" target="_blank">
//                       GPS Login
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-col col-lg-2 col-md-6 col-sm-6 col-12">
//                 <h4>Hot Services</h4>
//                 <ul>
//                   <li>
//                     <a href="/services/2">Driver Ins. Checklist.</a>
//                   </li>
//                   <li>
//                     <a href="/services/1">Vehicle Ins. Checklist</a>
//                   </li>
//                   <li>
//                     <a href="/products/3">GPS Tracker</a>
//                   </li>
//                   <li>
//                     <a href="/products/12">Child GPS Tracker</a>
//                   </li>
//                   <li>
//                     <a href="/products/17">Teltonika FMC</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-col col-lg-4 col-md-6 col-sm-6 col-12">
//                 <h4>Contact Us</h4>
//                 <div className="contact-box mt-30">
//                   {/* <div className="contact-icon">
//                   <i className="fa fa-map-marker" aria-hidden="true"></i>
//                 </div> */}
//                   <div className="contact-details">
//                     <p className="need-help-text">
//                       B - 116 Second Floor, Ganesh Nagar. Near Janak Puri East
//                       Metro Station. New Delhi 110018
//                     </p>
//                   </div>
//                 </div>

//                 <div className="contact-box mt-30">
//                   {/* <div className="contact-icon">
//                   <i className="fa fa-envelope" aria-hidden="true"></i>
//                 </div> */}
//                   <div className="contact-details">
//                     <a
//                       href="mailto:sales@womsolutions.in"
//                       title="Toll Free Number"
//                     >
//                       sales@womsolutions.in
//                     </a>
//                   </div>
//                 </div>
//                 <div className="contact-box mt-30">
//                   {/* <div className="contact-icon">
//                   <i className="fa fa-phone"></i>
//                 </div> */}
//                   <div className="contact-details">
//                     <a href="tel:9101141251500" title="Toll Free Number">
//                       +91-9891210081
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//         <div className="footer-bottom">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <p className="text-center">
//                   © 2024 WOMSOLUTIONS. All rights reserved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;
