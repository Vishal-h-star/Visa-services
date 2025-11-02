import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Service = () => {
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
                                <b>Our Services:-</b>
                            </h4>
                            <p>
                                Applicants always have the option to apply for an Indian e-Visa directly through the official government website. However, the online visa process can often be confusing and uncertain. It’s important to follow the exact procedures set by the Government of India to avoid delays or rejections.

                            </p>
                            <p>
                                At E Visa Services <a className="webLink" href="https://indiansvisaonline.com/" target='_blank'>Visit Indian eVisa Website</a>, we specialize in simplifying this process. As one of the leading service providers for Indian e-Visa assistance, we ensure your application is error-free, secure, and processed efficiently. Below are the exclusive benefits we offer — services that are not provided by the official government website.
                            </p>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>1. Rechecking of e-Visa Application Form Before Submission</h6>
                                    <p>Many visa applications are rejected due to incorrect information or unclear documents. Our <b>expert team</b> carefully reviews every detail of your application before final submission to government authorities. Any mistakes or missing information are corrected promptly to reduce the chances of rejection.</p>
                                </div>
                            </div>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>2. &nbsp; 24/7 Customer Support</h6>
                                    <p>We provide round-the-clock customer care via phone and email. Our friendly support staff is available 24 hours a day, 7 days a week to answer questions, provide updates, or assist with your visa process.</p>
                                </div>
                            </div>

                            <div className="all_services">
                                <div className="dis-content">
                                    <h6>3. Recovery of e-Visa Approval (in Case of Loss or Theft)</h6>
                                    <p>We securely store a copy of your e-Visa approval in our system until your arrival in India. If your e-Visa approval is ever lost or deleted, we can resend a copy immediately, as long as it remains valid.</p>
                                </div>
                            </div>

                            <div className="all_services">
                                <div className="dis-content">
                                    <h6>4. Regular Application Status Updates</h6>
                                    <p>We keep applicants informed about every stage of their e-Visa application. You can contact our team anytime to check your status. If additional documents or details are needed, we notify you instantly. In case of a rejection, we also share the official reason provided by the Indian authorities.</p>
                                </div>
                            </div>

                             <div className="all_services">
                                <div className="dis-content">
                                    <h6>5. Multilingual Support to Overcome Language Barriers</h6>
                                    <p>Since English and Hindi are the official languages of India, we understand that not all travelers may be fluent in them. To make communication easy, our company employs <b>interpreters fluent in major international languages</b>, allowing applicants to interact comfortably in their <b>native language</b>.</p>
                                </div>
                            </div>

                              <div className="all_services">
                                <div className="dis-content">
                                    <h6>6. Live Expert Assistance During Application Submission</h6>
                                    <p>Our <b>trained visa experts</b> are available to guide you step-by-step during the application process. You can receive <b>real-time help</b> via phone, chat, or email to ensure your form and documents are completed correctly.</p>
                                </div>
                            </div>

                             <div className="all_services">
                                <div className="dis-content">
                                    <h6>7. Multiple Secure Payment Options</h6>
                                    <p>While the official e-Visa portal accepts only credit/debit cards and PayPal, we offer more <b>flexible payment options</b> — including , <b>mobile banking</b>, <b>internet banking</b>and <b>bank transfers</b> — for your convenience.</p>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
