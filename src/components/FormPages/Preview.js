import React from 'react'
import image from '../../assets/images/previewImage.jpeg'

const Preview = () => {
    return (
        <div className='enhanced-visa-container'>
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className='enhanced-visa-card preview-card'>
                <div className="form-header-section">
                    <h1 className="form-title">E-Visa Application</h1>
                </div>

                <div className='previewDetails-container'>

                    <h2 className='details_heading'>Confirm Details</h2>
                    <div className="Details-container grid">
                        <div className='left_content'>
                            <p className='preview_p'>- The applicant is requested to verify the particular filled in the application Form. The applicant may face legal action (including refusal to enter India or deporation) in case of provision of wrong information.</p>
                            <p className='preview_p'>- Please verify your Registration Details. If all details are correct please Press "Verified and Continue" .</p >
                            <p className='preview_p'>- For any corrections press  <span>"Modify/Edit"</span></p>
                            <p className='preview_p'>- Please note down the Temporary Application ID : <span>BAH08666172IN</span></p>
                        </div>
                        <div className='right_content'>
                            <div className='previewImage_div'>
                                <img src={image} alt="sample Image" />
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Applicant Details</h2>
                    <div className="Details-container grid">
                        <div className='left_content'>
                            {/* Application Type */}
                            <div className='field grid'>
                                <span> <b>Application Type &nbsp;&nbsp;:</b></span>
                                <span>
                                    Normal Processing</span>
                            </div>
                            {/*Visa Type  */}
                            <div className='field grid'>
                                <span> <b>Visa Type &nbsp;&nbsp;:</b></span>

                                <span>
                                    eTOURIST VISA</span>
                            </div>
                            {/* Given Name */}
                            <div className='field grid'>
                                <span> <b>Given Name&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/*Port Of Arrival  */}
                            <div className='field grid'>
                                <span> <b>Port Of Arrival&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* Email */}
                            <div className='field grid'>
                                <span> <b>Email&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* Contact No. with Country Code */}
                            <div className='field grid'>
                                <span> <b>Contact No. with Country Code&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* Have you ever changed your name */}
                            <div className='field grid'>
                                <span> <b>Have you ever changed your name&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* Town/City of Birth */}
                            <div className='field grid'>
                                <span> <b>Town/City of Birth&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/*Citizenship/National ID No.  */}
                            <div className='field grid'>
                                <span> <b>Citizenship/National ID No.&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* Visible Identification Marks */}
                            <div className='field grid'>
                                <span> <b>Visible Identification Marks&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/*Acquired Nationality by Birth/Naturalization  */}
                            <div className='field grid'>
                                <span> <b>Acquired Nationality by Birth/Naturalization&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>

                            {/* Visa service */}
                            <div className='field grid'>
                                <span> <b>Visa Service&nbsp;&nbsp;:</b></span>
                                <span>TOURISM, RECREATION, SIGHT-SEEING</span>
                            </div>


                        </div>

                        <div className='right_content'>
                            {/* Passport type */}
                            <div className='field grid'>
                                <span> <b>Passport Type&nbsp;&nbsp;:</b></span>

                                <span></span>
                            </div>
                            {/* surname */}
                            <div className='field grid'>
                                <span> <b>Surname&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Date of Birth*/}
                            <div className='field grid'>
                                <span> <b>Date of Birth&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Expected Date of Arrival */}
                            <div className='field grid'>
                                <span> <b>Expected Date of Arrival&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Gender */}
                            <div className='field grid'>
                                <span> <b>Gender &nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Country of Birth*/}
                            <div className='field grid'>
                                <span> <b>Country of Birth&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Religion */}
                            <div className='field grid'>
                                <span> <b>Religion&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* Educational Qualification */}
                            <div className='field grid'>
                                <span> <b>Educational Qualification&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>
                            {/* 
                Have you lived for at least two years in the country where you are applying? */}
                            <div className='field grid'>
                                <span> <b>
                                    Have you lived for at least two years in the country where you are applying?&nbsp;&nbsp;:</b></span>
                                <span></span>
                            </div>




                        </div>

                    </div>

                    <h2 className='details_heading'>Passport Details</h2>
                    <div className='Details-container grid'>
                        <div className='left_content'>
                            {/* Passport number */}
                            <div className='field grid'>
                                <span> <b>Passport Number&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Date of Issue */}
                            <div className='field grid'>
                                <span> <b>Date of Issue&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Any other valid Passport/Identity Certificate(IC) held  */}
                            <div className='field grid'>
                                <span> <b>Any other valid Passport/Identity Certificate(IC) held&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/*Place of Issue  */}
                            <div className='field grid'>
                                <span> <b>Place of Issue&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Date of Expiry */}
                            <div className='field grid'>
                                <span> <b>Date of Expiry&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Address Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* House No./Street */}
                            <div className='field grid'>
                                <span> <b>House No./Street&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Country */}
                            <div className='field grid'>
                                <span> <b>Country&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Postal/Zip Code */}
                            <div className='field grid'>
                                <span> <b>Postal/Zip Code&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Mobile No.*/}
                            <div className='field grid'>
                                <span> <b>Mobile No.&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* House No./Street */}
                            <div className='field grid'>
                                <span> <b>House No./Street&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*State/Province/District  */}
                            <div className='field grid'>
                                <span> <b>State/Province/District&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Village/Town/City */}
                            <div className='field grid'>
                                <span> <b>Village/Town/City&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* State/Province/District */}
                            <div className='field grid'>
                                <span> <b>State/Province/District&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Phone No */}
                            <div className='field grid'>
                                <span> <b>Phone No&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                            <span style={{ color: "red", fontWeight: "500", }}>Permanent Address</span>

                            {/*  Village/Town/City*/}
                            <div style={{ marginTop: "10px" }} className='field grid'>
                                <span> <b>Village/Town/City&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                            {/* Postal/Zip Code */}
                            <div className='field grid'>
                                <span> <b>Postal/Zip Code&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>


                        </div>
                    </div>

                    <h2 className='details_heading'>Applicant's Father Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Father's Name */}
                            <div className='field grid'>
                                <span> <b>Father's Name&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Father's Previous Nationality  */}
                            <div className='field grid'>
                                <span> <b>Father's Previous Nationality&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Father's Country of Birth  */}
                            <div className='field grid'>
                                <span> <b>Father's Country of Birth&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/* Father's Nationality */}
                            <div className='field grid'>
                                <span> <b>Father's Nationality&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*  Father's Place of Birth*/}
                            <div className='field grid'>
                                <span> <b>Father's Place of Birth&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                    </div>

                    <h2 className='details_heading'>Applicant's Father Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Mother's Name */}
                            <div className='field grid'>
                                <span> <b>Mother's Name&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Mother's Previous Nationality  */}
                            <div className='field grid'>
                                <span> <b>Mother's Previous Nationality&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Mother's Country of Birth  */}
                            <div className='field grid'>
                                <span> <b>Mother's Country of Birth&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/*Mother's Nationality */}
                            <div className='field grid'>
                                <span> <b>Mother's Nationality&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*  Mother's Place of Birth*/}
                            <div className='field grid'>
                                <span> <b>Mother's Place of Birth&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                    </div>


                    <h2 className='details_heading'>Applicant's Spouse Detail</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Marital Status */}
                            <div className='field grid'>
                                <span> <b>Marital Status&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Professional /Occupation Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Present Occupation */}
                            <div className='field grid'>
                                <span> <b>Present Occupation&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Designation  */}
                            <div className='field grid'>
                                <span> <b>Designation&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*  Phone No.*/}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Are/were you in a Military/Semi- */}
                            <div className='field grid'>
                                <span> <b>Are/were you in a Military/Semi-Military/Police/Security. Organization? Yes/No If yes, give details,&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>


                        </div>
                        <div className='right_content'>
                            {/* Employer Name/Business */}
                            <div className='field grid'>
                                <span> <b>Employer Name/Business&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Address */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Past Occupation, if any */}
                            <div className='field grid'>
                                <span> <b>Past Occupation, if any&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Details of VISA Sought</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Visa Type */}
                            <div className='field grid'>
                                <span> <b>Visa Type&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Place Likely to be Visited 2  */}
                            <div className='field grid'>
                                <span> <b>Place Likely to be Visited 2&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Port of Exit from India */}
                            <div className='field grid'>
                                <span> <b>Port of Exit from India&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Place Likely to be Visited 1 */}
                            <div className='field grid'>
                                <span> <b>Place Likely to be Visited 1&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Port of Arrival in India  */}
                            <div className='field grid'>
                                <span> <b>Port of Arrival in India&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>

                    </div>

                    <h2 className='details_heading'>Previous Visa/Currently valid Visa Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Have you ever visited India before? */}
                            <div className='field grid'>
                                <span> <b>Have you ever visited India before?&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/* Has permission to visit or to extend stay in india previously been refused ?

 */}
                            <div className='field grid'>
                                <span> <b>Has permission to visit or to extend stay in india previously been refused ?

                                    &nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>

                    </div>

                    <h2 className='details_heading'>Other Information</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Countries Visited in Last 10 years */}
                            <div className='field grid'>
                                <span> <b>Countries Visited in Last 10 years&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>SAARC Country Visit Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Have you visited SAARC countries (except your own country) during last 3 years?  */}
                            <div className='field grid'>
                                <span> <b>Have you visited SAARC countries (except your own country) during last 3 years? &nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Reference</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Reference Name in India */}
                            <div className='field grid'>
                                <span> <b>Reference Name in India&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Phone No.  */}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/*Address  */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Address */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Reference Name in BARBADOS */}
                            <div className='field grid'>
                                <span> <b>Reference Name in BARBADOS&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>
                            {/* Phone No. */}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> -</span>
                            </div>

                        </div>
                    </div>

                    <h2 className='details_heading'>Additional Question Details</h2>

                    <div className='Details-container'>

                        <div className='field grid2'>
                            <span> <b>1. Have you ever been arrested/ prosecuted/ convicted by Court of Law of any country?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>2. Have you ever been refused entry / deported by any country including India?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>3. Have you ever been engaged in Human trafficking/ Drug trafficking/ Child abuse/ Crime against women/ Economic offense / Financial fraud?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>4. Have you ever been engaged in Cyber crime/ Terrorist activities/ Sabotage/ Espionage/ Genocide/ Political killing/ other act of violence?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>5. Have you ever by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>6. Have you sought asylum (political or otherwise)in any country?&nbsp;&nbsp;:</b></span>

                            <span>No</span>
                        </div>


                        <div className='preview_buttons'>
                            <button className='submit-button'>
                                EDIT APPLICATION
                            </button>

                            <button className='submit-button'>
                                SVAE AND CONTINUE
                            </button>
                        </div>

                    </div>

                    <div className="form-footer">
                        <p>🔒 Your information is secure and encrypted</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Preview