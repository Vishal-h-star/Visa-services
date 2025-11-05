import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Refund = () => {
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
                                <b>Terms And Conditions</b>
                            </h4>

                            <p>At E Visa Services<a className="webLink" href="https://indiansvisaonline.com/" target='_blank'>Visit Indian eVisa Website</a>, we strive to provide fast and reliable visa assistance. However, if you decide to cancel your application or discontinue our services, you may request a refund under the following conditions:</p>

                            <ul>
                                <li> <b>No refund or cancellation</b> will be accepted for travel scheduled within 24–48 hours.</li>
                                <li><b>Refund or cancellation requests</b> must be submitted  <b>within 30 minutes</b> of completing the application.</li>
                                <li>In approved cases, a  <b>50% cancellation </b>fee will be deducted, and the remaining amount will be refunded to the original payment method.</li>
                            </ul>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>To request a refund, please send an email to indiavisaonlines@gmail.com with the following details:</h6>
                                    <ul>
                                        <li>Reason for requesting the refund</li>
                                        <li>Full name (as shown on your passport)</li>
                                        <li>Unique transaction ID</li>
                                        <li>Passport number</li>
                                        <li>Email address used during application</li>
                                    </ul>
                                </div>
                            </div>

                            <p><b>All eligible refunds are processed within 6–7 business days after the request is received.</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Refund