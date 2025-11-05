import React from 'react'
import PagesLeftSideSupporAndLinkFormet from './PagesLeftSideSupporAndLinkFormet';

const Refund = () => {
    return (
        <section className="main_Content">
            <div className="container">
                <div className="row">
                   <PagesLeftSideSupporAndLinkFormet/>

                    <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
                        <div class="containt">
                            <h4>
                                <b>Refund and Cancellation Policy</b>
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