import React from 'react'
import PagesLeftSideSupporAndLinkFormet from './PagesLeftSideSupporAndLinkFormet';
import { countryFeesPrice } from '../../assets/data/FeesData';

const FeesDetails = () => {
    return (
        <section className="main_Content">
            <div className="container">
                <div className="row">
                    <PagesLeftSideSupporAndLinkFormet />

                    <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
                        <div class="containt">
                            <h4>
                                <b>Indian Visa Fee Details</b>
                            </h4>

                            <h6><b style={{ color: "blue", fontSize: "1.41rem" }}>Fee Structure</b></h6>

                            <p>At www.indiansvisaonline.com, we believe in complete transparency. The total fee payable through our website includes two components — our service fee and the official Government of India visa fee.</p>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6><b>1. Our Service Fee: -</b></h6>
                                    <p>We are a professional visa assistance service provider, offering complete support throughout your e-Visa application process. Our services include step-by-step guidance during the application, form completion and verification, document checking and submission assistance, and real-time updates and customer support until visa delivery. These services are designed to make the e-Visa process simple, accurate, and stress-free for travelers.</p>
                                </div>
                            </div>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6><b>2. Government of India Fee: - </b></h6>
                                    <p>We are a professional visa assistance service provider, offering complete support throughout your e-Visa application process. Our services include step-by-step guidance during the application, form completion and verification, document checking and submission assistance, and real-time updates and customer support until visa delivery. These services are designed to make the e-Visa process simple, accurate, and stress-free for travelers.</p>

                                    <h6>Total Payable Fee: -</h6>
                                    <p>The total amount payable (including our service fee and the government fee) varies based on the applicant’s nationality and visa type. We maintain a no hidden charges policy — what you see is exactly what you pay.</p>

                                    <h6>Normal Processing: -</h6>
                                    <p>For standard e-Visa applications, the processing time is typically 3 to 5 business days from the date of submission. This includes both our verification process and government approval.</p>

                                    <h6>Urgent / Express Processing: -</h6>
                                    <p>If you need your visa more quickly, you can choose the Urgent / Express Processing option. An additional $60 USD is charged over the total normal processing fee (which already includes both the service and government fees). Urgent applications are usually processed within 1 to 4 business days, depending on approval by the Indian authorities.</p>
                                </div>
                            </div>

                            <div class="table-container ">
                                <h6> <b>Indian e-Visa Fee by Country</b></h6>
                                <table class="visa-fees-table">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>30 Days</th>
                                            <th>1 Year</th>
                                            <th>5 Years</th>
                                            <th>Business/Mdeical Conference</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {countryFeesPrice.map((data) => (
                                            <tr key={data.country}>
                                                <td style={{ color: "black" }}><strong>{data.country}</strong></td>
                                                <td >{data.thirtyDaysPrice}</td>
                                                <td >{data.oneYearPrice}</td>
                                                <td>{data.fiveYearPrice}</td>
                                                <td>{data.businessMedConfPrice}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>


                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>Additional / Urgent Processing Fee:</h6>
                                    <p><b>If you require urgent visa processing, an additional fee of $60 will be charged for all visa categories. Urgent applications are processed within 48 to 72 business hours.</b></p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeesDetails