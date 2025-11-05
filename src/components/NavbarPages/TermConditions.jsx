import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const TermConditions = () => {
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
                            <h4 class="condition_h4">
                                <b>Terms And Conditions</b>
                            </h4>

                            <ol className='privacyList'>

                                <li><b> Introduction</b>
                                    <ul>
                                        <li>These Terms & Conditions apply to all customers using our website (www.indiansvisaonline.com) We only assist in the visa application process; the final decision on visa approval or rejection is solely at the discretion of the Indian government authorities.</li>
                                    </ul>
                                </li>

                                <li><b>Scope of Services</b>
                                    <ul>
                                        <li>We provide assistance with visa application submission and guidance.</li>
                                        <li>The approval or rejection of a visa is entirely at the discretion of the Indian Government or the respective embassy.</li>
                                        <li>The applicant must correctly fill out the application form and submit the necessary documents.</li>
                                    </ul>
                                </li>

                                <li><b> Eligibility</b>
                                    <ul>
                                        <li>The applicant must meet the eligibility criteria set by the Indian visa policies.</li>
                                        <li>The passport must be valid for at least six months from the date of arrival in India.</li>
                                        <li>Providing accurate and truthful information is the applicant’s responsibility; failure to do so may result in rejection.</li>
                                    </ul>
                                </li>

                                <li><b>Fees & Payment</b>
                                    <ul>
                                        <li>Visa processing fees are non-refundable, regardless of the application outcome.</li>
                                        <li>Our service charges are separate and not included in government processing fees.</li>
                                        <li>Payments must be made through authorized payment methods only.</li>
                                    </ul>
                                </li>

                                <li><b>Document Submission & Accuracy</b>
                                    <ul>
                                        <li>All documents must be clear, complete, and in the required format.</li>
                                        <li>Any incomplete or incorrect documents may result in application rejection.</li>
                                        <li>The verification and approval of documents are solely handled by the embassy or Indian immigration authorities.</li>
                                    </ul>
                                </li>

                                <li><b>Processing Time</b>
                                    <ul>
                                        <li>
                                            The estimated processing time varies depending on the type of visa applied for.
                                        </li>
                                        <li>Delays caused by the embassy or government authorities are beyond our control.</li>
                                    </ul>
                                </li>

                                <li><b>Visa Approval & Rejection</b>
                                    <ul>
                                        <li>The decision to approve or reject a visa application lies solely with the Indian Immigration authorities. </li>
                                        <li>If an application is rejected, no refund will be provided.</li>
                                        <li>We do not guarantee visa approval; we only provide guidance and filing assistance.</li>
                                    </ul>
                                </li>

                                <li><b>Cancellation & Refund Policy</b>
                                    <ul>
                                        <li>Once an application is submitted, it <b>cannot be canceled or refunded</b>.</li>
                                        <li>If an issue arises due to our service, we will provide the necessary support.</li>
                                    </ul>
                                </li>

                                <li><b>Limitation of Liability</b>
                                    <ul>
                                        <li>•	We act only as a facilitator and are not responsible for any rejection, delay, or loss caused by the visa process.</li>
                                        <li>•	We are not liable for any decisions made by Indian immigration or embassy officials.</li>
                                    </ul>
                                </li>

                                <li> <b>Privacy Policy</b>
                                    <ul>
                                        <li>Applicant information is kept secure and confidential.</li>
                                        <li>We implement proper security measures to prevent unauthorized access to personal data.</li>
                                    </ul>
                                </li>

                                <li><b>Changes to Terms & Conditions</b>
                                    <ul>
                                        <li>The company reserves the right to modify these Terms & Conditions at any time without prior notice.</li>
                                        <li>It is the customer's responsibility to stay updated with any changes.</li>
                                    </ul>
                                </li>

                                <li><b>Governing Law</b>
                                    <ul>
                                        <li>These Terms & Conditions shall be governed by and interpreted under the laws of India.</li>
                                        <li>Any disputes shall be resolved in the courts of Delhi.</li>
                                    </ul>
                                </li>

                                <li>
                                    <b>Contact Information</b>
                                    <div className='all_services'>
                                        <div className="dis-content">
                                            <h6>For any inquiries, please contact us at:</h6>
                                            <p>📧 Email: indianvisaonlines@gmail.com
                                                <br />
                                                📞 Phone: +918376836323 (WhatsApp Only)
                                                <br />
                                                🌐 Website: www.indiansvisaonline.com
                                            </p>
                                        </div>
                                    </div>
                                </li>

                            </ol>

                            <p><b>By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</b></p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermConditions