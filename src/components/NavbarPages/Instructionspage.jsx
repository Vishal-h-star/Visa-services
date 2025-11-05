import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Instructionspage = () => {
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
                                <b>Instructions for Applicants</b>
                            </h4>



                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>Step 1: Prepare Your Documents</h6>
                                    <p>Before you begin your application, make sure all the required documents are ready. Each file should be clear, easy to read, and in a digital format (JPG or PDF). The exact documents you need depend on the type of e-Visa you are applying for:</p>

                                    <h6>For e-Tourist Visa:</h6>
                                    <ul>
                                        <li>A recent passport-size photograph in digital format</li>
                                        <li>A scanned copy of your passport’s bio page</li>
                                    </ul>

                                    <h6>For e-Business Visa:</h6>
                                    <ul>
                                        <li>A copy of your business card</li>
                                        <li>An invitation letter from the Indian company or business partner</li>
                                    </ul>

                                    <h6>For e-Medical Visa:</h6>
                                    <ul>
                                        <li>An official invitation letter from the Indian hospital providing treatment</li>
                                    </ul>

                                    <h6>For e-Medical Attendant Visa:</h6>
                                    <ul>
                                        <li>A companion letter from the Indian hospital</li>
                                        <li>The visa number of the patient’s approved e-Medical Visa</li>
                                    </ul>

                                    <h6>For e-Conference Visa:</h6>
                                    <ul>
                                        <li>An invitation letter from the conference organizer</li>
                                        <li>Political clearance from the Ministry of External Affairs (MEA)</li>
                                        <li>Event clearance from the Ministry of Home Affairs (MHA), if applicable</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>Step 2: Submit Your Documents</h6>
                                    <p>Once you’ve prepared all the required documents, you can send them to us using one of the following methods:</p>

                                    <ul>
                                        <li>Direct Upload: Upload your documents directly during the online visa application process on our website.</li>
                                        <li><b>Email Submission:</b> After completing your application form, you can also email your documents to indianvisaonlines@gmail.com</li>
                                    </ul>
                                    <p>Please make sure to include your <b>application reference number</b> in the email subject line to help us locate your file quickly.</p>
                                </div>
                            </div>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>Step 3: Wait for Confirmation</h6>
                                    <p>Once your application is received, our <b>expert team </b> will review your details and documents to ensure everything is complete and accurate before submission to Indian authorities.</p>
                                    <hr style={{ color: "black" }} />
                                    <h6>Important Reminders:</h6>
                                     <ul>
                                        <li> <b>Additional Information:</b> In some cases, the <b>Indian immigration authorities</b> may contact you by email to request extra details or documents. Please respond promptly within the given time to avoid delays or rejection.</li>
                                         <li><b>Final Approval:</b> The final decision on all visa applications is made solely by the <b>Government of India’s immigration department.</b></li>
                                     </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instructionspage