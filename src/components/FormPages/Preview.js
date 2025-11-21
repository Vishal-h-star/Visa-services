import React, { useState, useEffect } from "react";
import image from '../../assets/images/previewImage.jpeg';
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    getApplicationDataById,
    applicationSubmitStep7,
} from "../../apiCalls/visaApplication";
import { ImageUrl } from "../../urls";

const Preview = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [applicantData, setApplicantData] = useState({})


    const getApplicationData = async () => {
        try {
            const res = await getApplicationDataById(params.id);
            console.log(res, "res daa of application");
            if (res.status === 200 && res.data && res.data.data) {
                // merge to keep all keys
                setApplicantData((prev) => ({ ...prev, ...res.data.data }));
            }
        } catch (err) {
            console.error("Error fetching application data:", err);
        }
    };

    useEffect(() => {
        if (params?.id) getApplicationData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    return (
        <div className='enhanced-visa-container'>
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
                            <p className='preview_p'>- Please note down the Temporary Application ID : <span>{params.id}</span></p>
                        </div>
                        <div className='right_content'>
                            <div className='previewImage_div'>
                                <img
                                    // src={
                                    //     `${ImageUrl}`
                                    // }
                                    src={
                                        `${ImageUrl}` + applicantData.mainImg
                                    }
                                    alt="sample Image" />
                                {/* <img src={image} alt="sample Image" /> */}

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

                                    {applicantData?.applicationType}</span>
                            </div>
                            {/*Visa Type  */}
                            <div className='field grid'>
                                <span> <b>Visa Type &nbsp;&nbsp;:</b></span>

                                <span>
                                    {applicantData?.visaService}</span>
                            </div>
                            {/* Given Name */}
                            <div className='field grid'>
                                <span> <b>Given Name&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.givenName}</span>
                            </div>
                            {/*Port Of Arrival  */}
                            <div className='field grid'>
                                <span> <b>Port Of Arrival&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.portOfArrival}</span>
                            </div>
                            {/* Email */}
                            <div className='field grid'>
                                <span> <b>Email&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.email}</span>
                            </div>
                            {/* Contact No. with Country Code */}
                            <div className='field grid'>
                                <span> <b>Contact No. with Country Code&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.contactNo}</span>
                            </div>
                            {/* Have you ever changed your name */}
                            <div className='field grid'>
                                <span> <b>Have you ever changed your name&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.nameChanged}</span>
                            </div>
                            {/* Town/City of Birth */}
                            <div className='field grid'>
                                <span> <b>Town/City of Birth&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.cityOfBirth}</span>
                            </div>
                            {/*Citizenship/National ID No.  */}
                            <div className='field grid'>
                                <span> <b>Citizenship/National ID No.&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.nationalId}</span>
                            </div>
                            {/* Visible Identification Marks */}
                            <div className='field grid'>
                                <span> <b>Visible Identification Marks&nbsp;&nbsp;:</b></span>

                                <span>{applicantData?.identificationMark}</span>
                            </div>
                            {/*Acquired Nationality by Birth/Naturalization  */}
                            <div className='field grid'>
                                <span> <b>Acquired Nationality by Birth/Naturalization&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.nationalityAcquired}</span>
                            </div>

                            {/* Visa service */}
                            <div className='field grid'>
                                <span> <b>Visa Service&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.visaService}</span>
                            </div>


                        </div>

                        <div className='right_content'>
                            {/* Passport type */}
                            <div className='field grid'>
                                <span> <b>Passport Type&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.passportType}</span>
                            </div>
                            {/* surname */}
                            <div className='field grid'>
                                <span> <b>Surname&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.surname}</span>
                            </div>
                            {/* Date of Birth*/}
                            <div className='field grid'>
                                <span> <b>Date of Birth&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.dateOfBirth}</span>
                            </div>
                            {/* Expected Date of Arrival */}
                            <div className='field grid'>
                                <span> <b>Expected Date of Arrival&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.expectedArrival}</span>
                            </div>
                            {/* Gender */}
                            <div className='field grid'>
                                <span> <b>Gender &nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.gender}</span>
                            </div>
                             <div className='field grid'>
                                <span> <b>Nationality&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.nationality?.countryName}</span>
                            </div>
                            {/* Country of Birth*/}
                            <div className='field grid'>
                                <span> <b>Country of Birth&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.countryOfBirth?.countryName}</span>
                            </div>
                            {/* Religion */}
                            <div className='field grid'>
                                <span> <b>Religion&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.religion}</span>
                            </div>
                            {/* Educational Qualification */}
                            <div className='field grid'>
                                <span> <b>Educational Qualification&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.education}</span>
                            </div>
                            {/* 
                Have you lived for at least two years in the country where you are applying? */}
                            <div className='field grid'>
                                <span> <b>
                                    Have you lived for at least two years in the country where you are applying?&nbsp;&nbsp;:</b></span>
                                <span>{applicantData?.livedInCountry}</span>
                            </div>




                        </div>

                    </div>

                    <h2 className='details_heading'>Passport Details</h2>
                    <div className='Details-container grid'>
                        <div className='left_content'>
                            {/* Passport number */}
                            <div className='field grid'>
                                <span> <b>Passport Number&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.passportNumber}</span>
                            </div>
                            {/* Date of Issue */}
                            <div className='field grid'>
                                <span> <b>Date of Issue&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.passportDateOfIssue}</span>
                            </div>
                            {/*Any other valid Passport/Identity Certificate(IC) held  */}
                            {
                                applicantData?.otherPassport === true ? (
                                    <>
                                        <div className='field grid'>
                                            <span> <b>Any other valid Passport/Identity Certificate(IC) held&nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassport === true ? "Yes" : "No"}</span>
                                        </div>
                                        <div className='field grid'>
                                            <span> <b>Country of Issue &nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassportCountryOfIssue?.countryName}</span>
                                        </div>
                                        <div className='field grid'>
                                            <span> <b>Passport No &nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassport_PassportNo}</span>
                                        </div>
                                        <div className='field grid'>
                                            <span> <b>Date of Issue &nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassportDateOfIssue}</span>
                                        </div>
                                        <div className='field grid'>
                                            <span> <b>Place of Issue &nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassportPlaceOfIssue}</span>
                                        </div>
                                        <div className='field grid'>
                                            <span> <b>Nationality Mentioned Therein &nbsp;&nbsp;:</b></span>

                                            <span> {applicantData?.otherPassportNationaliyMentioned?.countryName}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }

                        </div>
                        <div className='right_content'>
                            {/*Place of Issue  */}
                            <div className='field grid'>
                                <span> <b>Place of Issue&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.passportPlaceOfIssue}</span>
                            </div>
                            {/* Date of Expiry */}
                            <div className='field grid'>
                                <span> <b>Date of Expiry&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.passportDateOfExpiry}</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Address Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* House No./Street */}
                            <div className='field grid'>
                                <span> <b>House No./Street&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentHouseNo}</span>
                            </div>
                            {/* Country */}
                            <div className='field grid'>
                                <span> <b>Country&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentCountry?.countryName}</span>
                            </div>
                            {/* Postal/Zip Code */}
                            <div className='field grid'>
                                <span> <b>Postal/Zip Code&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentPostalCode}</span>
                            </div>
                            {/* Mobile No.*/}
                            <div className='field grid'>
                                <span> <b>Mobile No.&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentMobileNo}</span>
                            </div>
                            {/* House No./Street */}
                            <div className='field grid'>
                                <span> <b>House No./Street&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentHouseNo}</span>
                            </div>
                            {/*State/Province/District  */}
                            <div className='field grid'>
                                <span> <b>State/Province/District&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentState}</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Village/Town/City */}
                            <div className='field grid'>
                                <span> <b>Village/Town/City&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentVillageTownCity}</span>
                            </div>
                            {/* State/Province/District */}
                            <div className='field grid'>
                                <span> <b>State/Province/District&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentState}</span>
                            </div>
                            {/* Phone No */}
                            <div className='field grid'>
                                <span> <b>Phone No&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentPhoneNo}</span>
                            </div>

                            <span style={{ color: "red", fontWeight: "500", }}>Permanent Address</span>

                            {/*  Village/Town/City*/}
                            <div style={{ marginTop: "10px" }} className='field grid'>
                                <span> <b>Village/Town/City&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentVillageTownCity}</span>
                            </div>

                            {/* Postal/Zip Code */}
                            <div className='field grid'>
                                <span> <b>Postal/Zip Code&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.permanentPostalCode}</span>
                            </div>


                        </div>
                    </div>

                    <h2 className='details_heading'>Applicant's Father Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Father's Name */}
                            <div className='field grid'>
                                <span> <b>Father's Name&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.fatherName}</span>
                            </div>
                            {/*Father's Previous Nationality  */}
                            <div className='field grid'>
                                <span> <b>Father's Previous Nationality&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.fatherPreviousNationality?.countryName}</span>
                            </div>
                            {/*Father's Country of Birth  */}
                            <div className='field grid'>
                                <span> <b>Father's Country of Birth&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.fatherCountryOfBirth?.countryName}</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/* Father's Nationality */}
                            <div className='field grid'>
                                <span> <b>Father's Nationality&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.fatherNationality?.countryName}</span>
                            </div>
                            {/*  Father's Place of Birth*/}
                            <div className='field grid'>
                                <span> <b>Father's Place of Birth&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.fatherPlaceOfBirth}</span>
                            </div>

                        </div>
                    </div>

                    <h2 className='details_heading'>Applicant's Mother Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Mother's Name */}
                            <div className='field grid'>
                                <span> <b>Mother's Name&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.motherName}</span>
                            </div>
                            {/*Mother's Previous Nationality  */}
                            <div className='field grid'>
                                <span> <b>Mother's Previous Nationality&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.motherPreviousNationality?.countryName}</span>
                            </div>
                            {/*Mother's Country of Birth  */}
                            <div className='field grid'>
                                <span> <b>Mother's Country of Birth&nbsp;&nbsp;:</b></span>
                                <span> {applicantData?.motherCountryOfBirth?.countryName}</span>
                            </div>
                        </div>
                        <div className='right_content'>
                            {/*Mother's Nationality */}
                            <div className='field grid'>
                                <span> <b>Mother's Nationality&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.motherNationality?.countryName}</span>
                            </div>
                            {/*  Mother's Place of Birth*/}
                            <div className='field grid'>
                                <span> <b>Mother's Place of Birth&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.motherPlaceOfBirth}</span>
                            </div>
                        </div>
                    </div>


                    {applicantData?.maritalStatuses === "Married" && (
                        <>
                            <h2 className='details_heading'>Applicant's Spouse Detail</h2>
                            <div className=' Details-container grid'>
                                {/* <div className='left_content'>
                            <div className='field grid'>
                                <span> <b>Marital Status&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.maritalStatus}</span>
                            </div>
                        </div> */}
                                <div className='left_content'>
                                    {/* Mother's Name */}
                                    <div className='field grid'>
                                        <span> <b>Spouse Name &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.spouseName}</span>
                                    </div>
                                    {/*Mother's Previous Nationality  */}
                                    <div className='field grid'>
                                        <span> <b>Spouse Nationality/Region &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.SpouseNationality?.countryName}</span>
                                    </div>
                                    {/*Mother's Country of Birth  */}
                                    <div className='field grid'>
                                        <span> <b>Spouse Previous Nationality &nbsp;&nbsp;:</b></span>
                                        <span> {applicantData?.SpousePrevNationality?.countryName}</span>
                                    </div>
                                </div>
                                <div className='right_content'>
                                    {/*Mother's Nationality */}
                                    <div className='field grid'>
                                        <span> <b>Spouse Place of Birth &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.SpouseBirthPlace}</span>
                                    </div>
                                    {/*  Mother's Place of Birth*/}
                                    <div className='field grid'>
                                        <span> <b>Spouse Country of Birth &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.SpouseCtryOfBirth?.countryName}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <h2 className='details_heading'>Professional /Occupation Details</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Present Occupation */}
                            <div className='field grid'>
                                <span> <b>Present Occupation&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.presentOccupation}</span>
                            </div>
                            {/*Designation  */}
                            <div className='field grid'>
                                <span> <b>Designation&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.designation}</span>
                            </div>
                            {/*  Phone No.*/}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.employerPhoneNo}</span>
                            </div>
                            {/* Are/were you in a Military/Semi- */}

                            {applicantData?.inMilitaryOrganization === "Yes" ? (
                                <>
                                    <div className='field grid'>
                                        <span> <b>Are/were you in a Military/Semi-Military/Police/Security. Organization? Yes/No If yes, give details,&nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.inMilitaryOrganization}</span>
                                    </div>
                                    <div className='field grid'>
                                        <span> <b>Organization &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.forceOrganizationName}</span>
                                    </div>
                                    <div className='field grid'>
                                        <span> <b>Designation &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.forceOrganizationDesignation}</span>
                                    </div>
                                    <div className='field grid'>
                                        <span> <b>Rank &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.forceOrganizationRank}</span>
                                    </div>
                                    <div className='field grid'>
                                        <span> <b>Place of Position &nbsp;&nbsp;:</b></span>

                                        <span> {applicantData?.forceorganizationPlace}</span>
                                    </div>
                                </>
                            ) : (
                                <>

                                </>
                            )}



                        </div>
                        <div className='right_content'>
                            {/* Employer Name/Business */}
                            <div className='field grid'>
                                <span> <b>Employer Name/Business&nbsp;&nbsp;:</b></span>
                                <span> {applicantData?.employerName}</span>
                            </div>
                            {/* Address */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.employerAddress}</span>
                            </div>
                            {/* Past Occupation, if any */}
                            <div className='field grid'>
                                <span> <b>Past Occupation, if any&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.pastOccupation}</span>
                            </div>
                        </div>
                    </div>

                    <h2 className='details_heading'>Details of VISA Sought</h2>
                    <div className=' Details-container grid'>
                        <div className='left_content'>
                            {/* Visa Type */}
                            <div className='field grid'>
                                <span> <b>Visa Type&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.visaService}</span>
                            </div>
                            {/*Place Likely to be Visited 2  */}
                            <div className='field grid'>
                                <span> <b>Place Likely to be Visited 2&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.placeVisited2}</span>
                            </div>
                            {/* Port of Exit from India */}
                            <div className='field grid'>
                                <span> <b>Port of Exit from India&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.expectedPortOfExit}</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Place Likely to be Visited 1 */}
                            <div className='field grid'>
                                <span> <b>Place Likely to be Visited 1&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.placeVisited1}</span>
                            </div>
                            {/*Port of Arrival in India  */}
                            <div className='field grid'>
                                <span> <b>Port of Arrival in India&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.portOfArrival}</span>
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

                                <span> {applicantData?.countryVisitedLast10Years}</span>
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

                                <span> {applicantData?.referenceNameIndia}</span>
                            </div>
                            {/*Phone No.  */}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.referencePhoneIndia}</span>
                            </div>
                            {/*Address  */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.referenceAddressIndia}</span>
                            </div>

                        </div>
                        <div className='right_content'>
                            {/* Address */}
                            <div className='field grid'>
                                <span> <b>Address&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.referenceAddressHome}</span>
                            </div>
                            {/* Reference Name in BARBADOS */}
                            <div className='field grid'>
                                <span> <b>Reference Name in Home Country&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.referenceNameHome}</span>
                            </div>
                            {/* Phone No. */}
                            <div className='field grid'>
                                <span> <b>Phone No.&nbsp;&nbsp;:</b></span>

                                <span> {applicantData?.referencePhoneHome}</span>
                            </div>

                        </div>
                    </div>

                    {/* <h2 className='details_heading'>Additional Question Details</h2> */}

                    <div className='Details-container'>

                        {/* <div className='field grid2'>
                            <span> <b>1. Have you ever been arrested/ prosecuted/ convicted by Court of Law of any country?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.arrested}</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>2. Have you ever been refused entry / deported by any country including India?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.deported}</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>3. Have you ever been engaged in Human trafficking/ Drug trafficking/ Child abuse/ Crime against women/ Economic offense / Financial fraud?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.trafficking}</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>4. Have you ever been engaged in Cyber crime/ Terrorist activities/ Sabotage/ Espionage/ Genocide/ Political killing/ other act of violence?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.cyberCrime}</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>5. Have you ever by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.terrorismSupport}</span>
                        </div>

                        <div className='field grid2'>
                            <span> <b>6. Have you sought asylum (political or otherwise)in any country?&nbsp;&nbsp;:</b></span>

                            <span>{applicantData?.asylum}</span>
                        </div> */}


                        <div className='preview_buttons'>
                            <Link to={`/Payment/${applicantData?.uniqueId}`}>
                                <button className='submit-button'>
                                    Verified and Continue
                                </button>
                            </Link>

                            <Link to={`/apply1/${applicantData?.uniqueId}`}>
                                <button className='submit-button'>
                                    Modify/Edit
                                </button>
                            </Link>



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