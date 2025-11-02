import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import WhyChooseUs from '../WhyChooseUs';



const AboutUs = () => {
  return (
    <section className="main_Content">
      <div className="container">
        <div className="row">
          <div className="pageLeftSide col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div class="leftSide_itemOne ">
              <span class="leftSide_itemOneHeading"><b>Support</b></span>
              <div class="leftSide_itemImageDiv">
                {/* <FaHeadset className='support_icon' /> */}
                <img src={user} alt="" />
              </div>
              <div class="pageIcon_div">
                <span> <IoLogoWhatsapp className='media_icon' /><i>&nbsp;&nbsp;-(91)8376836323</i></span>
                <hr className='pageLine' />
                <span> <MdEmail className='media_mail_icon' /><i>&nbsp; &nbsp; -(91)8376836323</i></span>
                {/* <hr  className='pageLine'/> */}
              </div>
            </div>

            <div class="leftSide_itemtwo">
              <ul>
                <li>
                  <a href="/">
                    <b> Home</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/about">
                    <b> About Us</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/PrivacyPolicy">
                    <b> Privacy</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/termCondition">
                    <b> Document Required</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Service">
                    <b> Services</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Faq">
                    <b> FAQ</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Terms-and-Conditions">
                    <b> Terms And Conditions</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Refund-Policy">
                    <b>Refund Policy </b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Instruction">
                    <b> Instruction For Applicants</b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/Visa-Fee-Details">
                    <b>Visa Fee Details </b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
                <li>
                  <a href="/contact">
                    <b>Contact us </b>
                  </a>
                </li>
                <hr className='pagelinkLine'></hr>
              </ul>
            </div>

          </div>

          <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
            <div class="containt">
              <h4>
                <b>About Us:- </b>
              </h4>
              <p>
                Welcome to <b>E Visa Services</b>, your trusted partner for <b>quick and reliable online visa assistance</b>. For over <b>8 years</b>, we’ve been helping travelers from around the world apply for and receive their <b>India eVisa</b> and other travel authorizations with ease.
                Our goal is simple — to make your visa process <b>fast, secure, and stress-free</b>. Whether you’re traveling for <b>tourism</b>, <b>business</b>, or need an <b>urgent eVisa</b>, our experienced team takes care of every detail so you don’t have to worry about forms, errors, or delays.
                Please note that <b>E Visa Services</b> is a <b>private agency</b> and not affiliated with any government department. Our service charge includes both the <b>official government visa fee</b> and a <b>Visa processing fee</b> for our support, review, and secure handling of your application. If you prefer to apply directly through the <b>government website</b>, you can do so anytime.

              </p>
            </div>
            <WhyChooseUs/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs