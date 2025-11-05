import React from 'react'
import PagesLeftSideSupporAndLinkFormet from './PagesLeftSideSupporAndLinkFormet';


const Faq = () => {
    return (
        <section className="main_Content">
            <div className="container">
                <div className="row">
                     <PagesLeftSideSupporAndLinkFormet/>

                    <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
                        <div class="containt">
                            <h4>
                                <b>Frequently Asked Questions (FAQ)</b>
                            </h4>

                            <h5>What is the Indian e-Visa?</h5>

                            <p><b>The Indian e-Visa is an official electronic travel authorization issued by the Government of India, allowing eligible foreign nationals to visit India for short-term purposes such as tourism, business, or medical treatment.</b>
                                <br />
                                <b>Unlike traditional visas that require a stamp or sticker in your passport, the e-Visa is issued digitally and delivered directly to your email, making the process faster, simpler, and entirely online.</b>
                            </p>



                            <h6>Can I apply for an e-Visa directly?</h6>
                            <p>Yes. Travelers can apply directly through the official Government of India website without paying any additional service charges. Our website is a private consultancy service provider, offering application assistance and value-added services for applicants who prefer guided support.</p>

                            <h6>How will I receive my e-Visa?</h6>
                            <p>Once approved by the Indian authorities, the e-Visa is sent electronically to the applicant’s email address. Applicants are required to print a copy and carry it during travel. On arrival in India, immigration officials will verify the e-Visa and stamp the traveler’s passport.</p>

                            <h6>What details should I check on my e-Visa?</h6>
                            <span style={{ fontSize: "15px" }}>It is important to carefully check your e-Visa for:</span>
                            <ol>
                                <li>Full name (as in passport)</li>
                                <li>Passport number</li>
                                <li>Visa number</li>
                                <li>Nationality</li>
                                <li>Validity period of the visa</li>
                            </ol>

                            <h6>Do children need an e-Visa to visit India?</h6>
                            <p>Yes. All travelers, including children and infants, must hold a valid e-Visa or visa to enter India. A separate application must be submitted for each child.</p>

                            <h6>How long does it take to process an e-Visa?</h6>
                            <p>Processing time typically ranges from 3 to 5 business days, but urgent processing options may be available.</p>

                            <h6>What is the validity of an e-Visa?</h6>
                            <ul>
                                <li>Tourist e-Visa: 30 days, 1 year, or 5 years</li>
                                <li>Business e-Visa: 1 year</li>
                                <li>Medical e-Visa: 60 days (with triple entry)</li>
                                <li>Conference Visa: 30 days (Single entry)</li>
                            </ul>

                            <h6>What documents are required for an Indian visa application?</h6>
                            <ul>
                                <li>Passport with at least six months of validity</li>
                                <li>Recent passport-sized photograph</li>
                                <li>Completed application form</li>
                                <li>Proof of travel (e.g., flight tickets) if applicable</li>
                                <li>Additional documents based on visa type (e.g., business invitation letter</li>
                            </ul>

                            <h6>Can I convert my e-Visa to any other Visa?</h6>
                            <p>No, e-Visa is non-extendable and non-convertible.</p>


                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>I change the port of arrival/departure?</h6>
                                    <p><b>Ans-</b> You may arrive at <b>31 designated Airports</b> i.e. Ahmedabad, Amritsar, Bagdogra, Bengaluru, Bhubaneshwar, Calicut, Chennai, Chandigarh, Cochin, Coimbatore, Delhi, Gaya, Goa(Dabolim), Goa(Mopa), Guwahati, Hyderabad,Indore
                                        Jaipur,Kannur, Kolkata, Lucknow, Madurai, Mangalore, Mumbai, Nagpur, Port Blair, Pune, Tiruchirapalli, Trivandrum, Varanasi & Visakhapatnam, and <b>5 designated seaports</b> (i.e. Cochin, Goa, Mangalore,
                                        Chennai and Mumbai seaports). You may depart from any of the Indian Immigration Check Posts (ICPs).
                                    </p>
                                </div>
                            </div>

                            <div className='all_services'>
                                <div className="dis-content">
                                    <h6>I got a new passport but my ETA was on old passport and it is still valid. How can I proceed now?</h6>
                                    <p>You may be allowed entry into India on the new passport even if ETA has been issued on the old passport with the condition that you must carry the new Passport and old passport on which ETA was issued.
                                    </p>
                                </div>
                            </div>

                              <div className='all_services'>
                                <div className="dis-content">
                                    <h6>What payment methods are accepted?</h6>
                                    <p>We accept all <b>major credit and debit cards</b>, as well as net banking and other secure online payment options for your convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq