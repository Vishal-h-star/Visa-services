import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { nationalities } from "../../assets/data/FormData";
import { useParams } from "react-router-dom";
import { portsOfArrival, saarcContriesData } from "../../assets/data/FormData";
import {
  getApplicationDataById,
  applicationSubmitStep4,
} from "../../apiCalls/visaApplication";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Apply4 = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationType: "",
    portOfArrival: "",
    visaService: "",
    serviceSubCategory: "",
    serviceSubCat_subCategory: "",
    placeVisited1: "",
    placeVisited2: "",
    expectedPortOfExit: "",
    visitedIndiaBefore: "no",
    visitedIndiaBeforeAddrss: "",
    visitedIndiaBeforeCitiesVisitedInIndia: "",
    visitedIndiaBefore_Last_current_ValidVisaNo: "",
    visitedIndiaBeforeTypeOfVisa: "",
    visitedIndiaBeforePlaceOfVisa: "",
    visitedIndiaBeforeDateOfIssue: "",
    visaRefused: "no",
    visaRefusedByWhomDetails: "",
    countryVisitedLast10Years: "",
    saarcCountries: "no",
    saarcDetails: [],
    referenceNameIndia: "",
    referenceAddressIndia: "",
    referencePhoneIndia: "",
    referenceNameHome: "",
    referenceAddressHome: "",
    referencePhoneHome: "",

    // medical shortTerm-self variable
    stself_HospitalName: "",
    stself_HospitalAddress: "",
    stself_State: "",
    stself_District: "",
    stself_Phone: "",
    stself_TreatmentType: "",

    // business setup_business
    setBuz_Name: "",
    setBuz_Address: "",
    setBuz_PhNo: "",
    setBuz_Website: "",
    setBuz_NatuOfBuz: "",

    //  business sell_purchase
    selPur_ApplicantsCompanyName: "",
    selPur_Address: "",
    selPur_PhNo: "",
    selPur_website: "",
    selPur_NatuOfBuz: "",

    //  business business_meetings
    buzMeet_ApplicantsCompanyName: "",
    buzMeet_Address: "",
    buzMeet_PhNo: "",
    buzMeet_website: "",
    buzMeet_DetIndFirmName: "",
    buzMeet_IndFirmAddress: "",
    buzMeet_IndFrimPhNo: "",
    buzMeet_IndFirmWebsite: "",

    //  business recruit_manpower
    reManPow_ApplicantsCompanyName: "",
    reManPow_Address: "",
    reManPow_PhNo: "",
    reManPow_website: "",
    reManPow_NandCnoOfCopRepresentativeInIndia: "",
    reManPow_NatureOfJob: "",
    reManPow_PlaceRecruitmentConducted: "",

    // business exhibitions
    exh_ApplicantsCompanyName: "",
    exh_Address: "",
    exh_PhNo: "",
    exh_website: "",
    exh_NameAndAddOfExh: "",

    // business Project_expert
    projExp_ApplicantsCompanyName: "",
    projExp_Address: "",
    projExp_PhNo: "",
    projExp_website: "",
    projExp_DetIndFirmName: "",
    projExp_IndFirmAddress: "",
    projExp_IndFrimPhNo: "",
    projExp_IndFirmWebsite: "",

    //  business conduct_tours
    codTour_NandAddrsOfAgencyNativeCountry: "",
    codTour_CitiesVisitedDuringTour: "",
    codTour_TravelAgentNameAssociateInIndia: "",
    codTour_Address: "",
    codTour_PhNo: "",

    //  business sports_activity
    sportsAct_sportsEventName: '',
    sportsAct_eventOrganizerType: '',
    sportsAct_eventStartDate: '',
    sportsAct_eventEndDate: '',
    sportsAct_address: '',
    sportsAct_state: '',
    sportsAct_district: '',
    sportsAct_pinCode: '',
    sportsAct_organizerName: '',
    sportsAct_phoneNumber: '',
    sportsAct_emailId: '',
    sportsAct_restrictedAreaVisit: '',
    sportsAct_restrictedAreaDetails: '',
    sportsAct_previousSportsVisitDetails: '',
    sportsAct_taxComplianceDetails: '',
    sportsAct_participationType: '',

    // conference attend_conference

    atendConf_nameOfConference: '',
    atendConf_startDate: '',
    atendConf_endDate: '',
    atendConf_venueAddress: '',
    atendConf_state: '',
    atendConf_district: '',
    atendConf_pincode: '',
    atendConf_organizerName: '',
    atendConf_organizerAddress: '',
    atendConf_organizerPhone: '',
    atendConf_organizerEmail: '',

    //medical patient_travelling_emedical_visa
    patientTravMedVisa_name: '',
    patientTravMedVisa_visaNumber: '',
    patientTravMedVisa_applicationId: '',
    patientTravMedVisa_passportNumber: '',
    patientTravMedVisa_dateOfBirth: '',
    patientTravMedVisa_nationality: '',

    // e aysh visa treatment_under_ayush_Indian_sytems
    tayushInd_hospitalName: '',
    tayushInd_hospitalAddress: '',
    tayushInd_state: '',
    tayushInd_district: '',
    tayushInd_phone: '',
    tayushInd_medicalTreatmentType: '',

    // e ayush attendent  e-ayust_visa_holder

    ayushAttendent_name: '',
    ayushAttendent_visaNumber: '',
    ayushAttendent_applicationId: '',
    ayushAttendent_passportNumber: '',
    ayushAttendent_dateOfBirth: '',
    ayushAttendent_nationality: '',


  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getApplicationData = async () => {
    const res = await getApplicationDataById(params.id);
    console.log(res, "res daa of application");
    if (res.status === 200) {
      setFormData(res.data.data);
    }
  };
  console.log(formData, "initial data");

  const today = new Date();
  const tenYearsAgo = new Date();
  tenYearsAgo.setFullYear(today.getFullYear() - 10);

  const [saarcInput, setSaarcInput] = useState({
    country: "",
    year: "",
    visits: "",
  });

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 4; i++) {
    years.push(currentYear - i);
  }

  useEffect(() => {
    getApplicationData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      saarcDetails:
        name === "saarcCountries" && value === "no" ? [] : prev.saarcDetails,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // saarcCountries handleChange
  const handleSaarcInputChange = (e) => {
    const { name, value } = e.target;
    setSaarcInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSaarc = () => {
    const { country, year, visits } = saarcInput;
    if (!country || !year || !visits) {
      // optional: set a specific error or toast
      toast.error(
        "Please fill country, year and number of visits before adding."
      );
      return;
    }

    setFormData((prev) => ({
      ...prev,
      saarcDetails: [...(prev.saarcDetails || []), { country, year, visits }],
    }));

    // reset the small form
    setSaarcInput({ country: "", year: "", visits: "" });
  };

  const handleRemoveSaarc = (index) => {
    setFormData((prev) => {
      const newArr = [...(prev.saarcDetails || [])];
      newArr.splice(index, 1);
      return { ...prev, saarcDetails: newArr };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.placeVisited1.trim()) {
      newErrors.placeVisited1 = "Place to visit is required";
    }
    // if (!formData.expectedPortOfExit) {
    //   newErrors.expectedPortOfExit = "Expected port of exit is required";
    // }
    if (!formData.referenceNameIndia.trim()) {
      newErrors.referenceNameIndia = "Reference name in India is required";
    }
    if (!formData.referenceAddressIndia.trim()) {
      newErrors.referenceAddressIndia =
        "Reference address in India is required";
    }
    if (formData.saarcCountries === "yes") {
      if (!formData.saarcDetails || formData.saarcDetails.length === 0) {
        newErrors.saarcDetails =
          "Please add at least one SAARC country visit detail";
      } else {
        formData.saarcDetails.forEach((item, idx) => {
          if (!item.country)
            newErrors[`saarcDetails_${idx}_country`] = "Country is required";
          if (!item.year)
            newErrors[`saarcDetails_${idx}_year`] = "Year is required";
          if (!item.visits || Number(item.visits) <= 0)
            newErrors[`saarcDetails_${idx}_visits`] =
              "Please enter valid number of visits";
        });
      }
    }
    if (!formData.referencePhoneIndia.trim()) {
      newErrors.referencePhoneIndia =
        "Reference phone number in India is required";
    } else if (
      !/^\d{10,15}$/.test(formData.referencePhoneIndia.replace(/\D/g, ""))
    ) {
      newErrors.referencePhoneIndia = "Please enter a valid phone number";
    }
    if (!formData.referenceNameHome.trim()) {
      newErrors.referenceNameHome =
        "Reference name in home country is required";
    }
    if (!formData.referenceAddressHome.trim()) {
      newErrors.referenceAddressHome =
        "Reference address in home country is required";
    }
    if (!formData.referencePhoneHome.trim()) {
      newErrors.referencePhoneHome =
        "Reference phone number in home country is required";
    } else if (
      !/^\d{10,15}$/.test(formData.referencePhoneHome.replace(/\D/g, ""))
    ) {
      newErrors.referencePhoneHome = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("hitting api", formData);
      // return;
      const res = await applicationSubmitStep4(formData, params.id);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        // toast.success(`🦄 ${res.data.message}`);
        // setIsSubmitting(true);
        setIsSubmitting(false);
        navigate(`/apply5/${res.data.data.uniqueId}`);
      } else {
        toast.error(`Some Error Happens!!`);
      }
    }
  };

  return (
    <div className="enhanced-visa-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="enhanced-visa-card">
        <div className="form-header-section">
          <div className="header-icon">
            <i className="fas fa-passport"></i>
          </div>
          <h1 className="form-title">e-Visa Application</h1>
          <div className="application-id">
            Temporary Application ID: {params.id}
          </div>
        </div>

        <form className="enhanced-visa-form" onSubmit={handleSubmit}>
          {/* Application Type Section */}
          <div className="form-section">
            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Application Type *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    value={formData.applicationType}
                    readOnly
                    className="field-input"
                    style={{ backgroundColor: "#f8f9fa" }}
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Port of Arrival *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    value={formData.portOfArrival}
                    readOnly
                    className="field-input"
                    style={{ backgroundColor: "#f8f9fa" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Visa Service Details */}
          <div className="form-section">
            <div className="form-grid full-row">
              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Visa Service</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="visaService"
                    readOnly
                    className="field-input"
                    value={formData.visaService}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">service of Visa (in Days)</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    readOnly
                    name="serviceSubCategory"
                    className="field-input"
                    value={formData.serviceSubCategory}
                    onChange={handleChange}
                  />
                </div>
              </div> */}

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Sub Visa Category</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    readOnly
                    name="serviceSubCategory"
                    className="field-input"
                    value={formData.serviceSubCategory}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Port of Arrival in India</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    readOnly
                    name="portOfArrival"
                    className="field-input"
                    value={formData.portOfArrival}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Place likely to be Visited *
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="placeVisited1"
                    className={`field-input ${errors.placeVisited1 ? "error" : ""
                      }`}
                    value={formData.placeVisited1}
                    onChange={handleChange}
                    placeholder="Enter place to visit"
                    required
                  />
                </div>
                {errors.placeVisited1 && (
                  <div className="error-message">{errors.placeVisited1}</div>
                )}
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Place likely to be Visited 2
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="placeVisited2"
                    className="field-input"
                    value={formData.placeVisited2}
                    onChange={handleChange}
                    placeholder="Enter another place to visit (optional)"
                  />
                  <div className="input-icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                </div>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Expected Port of Exit from India
                  </span>
                </div>
                <div className="select-container">
                  <select
                    name="expectedPortOfExit"
                    className={`field-select ${errors.expectedPortOfExit ? "error" : ""
                      }`}
                    value={formData.expectedPortOfExit}
                    onChange={handleChange}
                  >
                    <option value="">Select Port Of Exit</option>
                    {portsOfArrival.map((port) => {
                      return (
                        <option key={port} value={port.value}>
                          {port.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {errors.expectedPortOfExit && (
                  <div className="error-message">
                    {errors.expectedPortOfExit}
                  </div>
                )}
              </div>
              {/* medical  SHORT TERM MEDICAL TREATMENT SELF  */}
              {formData?.serviceSubCategory === "shortTerm-self" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "SHORT TERM MEDICAL TREATMENT SELF"
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name of the Hospital where Medical treatment is to be
                        carried out *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="stself_HospitalName"
                        className="field-input"
                        value={formData.stself_HospitalName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address of Hospital *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="stself_HospitalAddress"
                        className="field-input"
                        value={formData.stself_HospitalAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">State *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="stself_State"
                        className="field-input"
                        value={formData.stself_State}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">District*</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="stself_District"
                        className="field-input"
                        value={formData.stself_District}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="stself_Phone"
                        className="field-input"
                        value={formData.stself_Phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Type of Medical Treatment required *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="stself_TreatmentType"
                        className="field-input"
                        value={formData.stself_TreatmentType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business  TO SET UP INDUSTRIAL/BUSINESS VENTURE " */}
              {formData?.serviceSubCategory === "setup_business" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose " TO SET UP INDUSTRIAL/BUSINESS VENTURE
                      "
                    </h2>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Details of the Applicants Company
                  </p>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Name *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="setBuz_Name"
                        className="field-input"
                        value={formData.setBuz_Name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="setBuz_Address"
                        className="field-input"
                        value={formData.setBuz_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="setBuz_PhNo"
                        className="field-input"
                        value={formData.setBuz_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="setBuz_Website"
                        className="field-input"
                        value={formData.setBuz_Website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Nature of Business/Product *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="setBuz_NatuOfBuz"
                        className="field-input"
                        value={formData.setBuz_NatuOfBuz}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business SALE/PURCHASE/TRADE */}
              {formData?.serviceSubCategory === "sale_purchase" && (
                <>
                  <div className="section-header centered">
                    <h2>Details of Purpose "SALE/PURCHASE/TRADE"</h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Applicants Company Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="selPur_ApplicantsCompanyName"
                        className="field-input"
                        value={formData.selPur_ApplicantsCompanyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="selPur_Address"
                        className="field-input"
                        value={formData.selPur_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="selPur_PhNo"
                        className="field-input"
                        value={formData.selPur_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="selPur_website"
                        className="field-input"
                        value={formData.selPur_website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Nature of Business/Product *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="selPur_NatuOfBuz"
                        className="field-input"
                        value={formData.selPur_NatuOfBuz}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* business ATTEND TECHNICAL/BUSINESS MEETING */}
              {formData?.serviceSubCategory === "business_meetings" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "ATTEND TECHNICAL/BUSINESS MEETING"
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Applicants Company Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_ApplicantsCompanyName"
                        className="field-input"
                        value={formData.buzMeet_ApplicantsCompanyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_Address"
                        className="field-input"
                        value={formData.buzMeet_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="buzMeet_PhNo"
                        className="field-input"
                        value={formData.buzMeet_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_website"
                        className="field-input"
                        value={formData.buzMeet_website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of Indian Firm Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_DetIndFirmName"
                        className="field-input"
                        value={formData.buzMeet_DetIndFirmName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_IndFirmAddress"
                        className="field-input"
                        value={formData.buzMeet_IndFirmAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="buzMeet_IndFrimPhNo"
                        className="field-input"
                        value={formData.buzMeet_IndFrimPhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="buzMeet_IndFirmWebsite"
                        className="field-input"
                        value={formData.buzMeet_IndFirmWebsite}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business "TO RECRUIT MANPOWER" */}
              {formData.serviceSubCategory === "recruit_manpower" && (
                <>
                  <div className="section-header centered">
                    <h2>Details of Purpose "TO RECRUIT MANPOWER"</h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Applicants Company Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_ApplicantsCompanyName"
                        className="field-input"
                        value={formData.reManPow_ApplicantsCompanyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_Address"
                        className="field-input"
                        value={formData.reManPow_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="reManPow_PhNo"
                        className="field-input"
                        value={formData.reManPow_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_website"
                        className="field-input"
                        value={formData.reManPow_website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name and contact number of the company representative in
                        India *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_NandCnoOfCopRepresentativeInIndia"
                        className="field-input"
                        value={formData.reManPow_NandCnoOfCopRepresentativeInIndia}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Nature of Job for which recruiting *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_NatureOfJob"
                        className="field-input"
                        value={formData.reManPow_NatureOfJob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Places where recruitment is to be conducted *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="reManPow_PlaceRecruitmentConducted"
                        className="field-input"
                        value={formData.reManPow_PlaceRecruitmentConducted}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS */}
              {formData.serviceSubCategory === "exhibitions" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "PARTICIPATION IN
                      EXHIBITIONS,BUSINESS/TRADE FAIRS"
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Applicants Company Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="exh_ApplicantsCompanyName"
                        className="field-input"
                        value={formData.exh_ApplicantsCompanyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="exh_Address"
                        className="field-input"
                        value={formData.exh_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="exh_PhNo"
                        className="field-input"
                        value={formData.exh_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="exh_website"
                        className="field-input"
                        value={formData.exh_website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name and address of the Exhibition/trade fair *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="exh_NameAndAddOfExh"
                        className="field-input"
                        value={formData.exh_NameAndAddOfExh}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business EXPERT/SPECIALIST IN CONNECTION WITH AN
                    ONGOING PROJECT */}
              {formData.serviceSubCategory === "project_expert" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "EXPERT/SPECIALIST IN CONNECTION WITH
                      AN ONGOING PROJECT"
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Applicants Company Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_ApplicantsCompanyName"
                        className="field-input"
                        value={formData.projExp_ApplicantsCompanyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_Address"
                        className="field-input"
                        value={formData.projExp_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="projExp_PhNo"
                        className="field-input"
                        value={formData.projExp_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_website"
                        className="field-input"
                        value={formData.projExp_website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Indian firm Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_DetIndFirmName"
                        className="field-input"
                        value={formData.projExp_DetIndFirmName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_IndFirmAddress"
                        className="field-input"
                        value={formData.projExp_IndFirmAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="projExp_IndFrimPhNo"
                        className="field-input"
                        value={formData.projExp_IndFrimPhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">website *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="projExp_IndFirmWebsite"
                        className="field-input"
                        value={formData.projExp_IndFirmWebsite}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business CONDUCTING TOURS */}
              {formData.serviceSubCategory === "conduct_tours" && (
                <>
                  <div className="section-header centered">
                    <h2>Details of Purpose "CONDUCTING TOURS"</h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name and address of the Travel Agency in native country
                        *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="codTour_NandAddrsOfAgencyNativeCountry"
                        className="field-input"
                        value={formData.codTour_NandAddrsOfAgencyNativeCountry}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Cities to be visited during the tour *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="codTour_CitiesVisitedDuringTour"
                        className="field-input"
                        value={formData.codTour_CitiesVisitedDuringTour}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of the Travel agent/associate in India Name *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="codTour_TravelAgentNameAssociateInIndia"
                        className="field-input"
                        value={formData.codTour_TravelAgentNameAssociateInIndia}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="codTour_Address"
                        className="field-input"
                        value={formData.codTour_Address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="codTour_PhNo"
                        className="field-input"
                        value={formData.codTour_PhNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* business SPORTS RELATED ACTIVITY */}
              {formData.serviceSubCategory === "sports_activity" && (
                <>
                  <div className="section-header centered">
                    <h2>Details of Purpose "SPORTS RELATED ACTIVITY"</h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name of the Sports event/tournament *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_sportsEventName"
                        className="field-input"
                        value={formData.sportsAct_sportsEventName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Whether the event is organized by Government/Amateur
                        Federation/Association or is a Commercial Sports Event?
                        *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_eventOrganizerType"
                        className="field-input"
                        value={formData.sportsAct_eventOrganizerType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <p style={{ textAlign: "center" }}>
                    Duration of the Sports Event Tournament
                  </p>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Event Start date *</span>
                    </div>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.sportsAct_eventStartDate
                            ? new Date(formData.sportsAct_eventStartDate)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date ? date.toISOString().split("T")[0] : "";
                          handleChange({
                            target: { name: "sportsAct_eventStartDate", value: formattedDate },
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        // placeholderText="Select event start date"
                        className={`field-input ${errors.sportsAct_eventStartDate ? "error" : ""
                          }`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={new Date()} // 👈 optional: event cannot start before today
                      />
                    </div>
                    {errors.sportsAct_eventStartDate && (
                      <span className="error-message">{errors.sportsAct_eventStartDate}</span>
                    )}

                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Event End date *</span>
                    </div>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.sportsAct_eventEndDate
                            ? new Date(formData.sportsAct_eventEndDate)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date ? date.toISOString().split("T")[0] : "";
                          handleChange({
                            target: { name: "sportsAct_eventEndDate", value: formattedDate },
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select event end date"
                        className={`field-input ${errors.sportsAct_eventEndDate ? "error" : ""
                          }`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={
                          formData.sportsAct_eventStartDate
                            ? new Date(formData.sportsAct_eventStartDate)
                            : new Date()
                        } // 👈 ensures end date is not before start date
                      />
                    </div>
                    {errors.sportsAct_eventEndDate && (
                      <span className="error-message">{errors.sportsAct_eventEndDate}</span>
                    )}

                  </div>

                  <p style={{ textAlign: "center" }}>
                    Venue of the Sports event/Tournament
                  </p>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_address"
                        className="field-input"
                        value={formData.sportsAct_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">State *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_state"
                        className="field-input"
                        value={formData.sportsAct_state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">District *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_district"
                        className="field-input"
                        value={formData.sportsAct_district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">PIN Code *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_pinCode"
                        className="field-input"
                        value={formData.sportsAct_pinCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <p style={{ textAlign: "center" }}>
                    Details of the organizer
                  </p>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name of the Organizer *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_organizerName"
                        className="field-input"
                        value={formData.sportsAct_organizerName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone Number *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="sportsAct_phoneNumber"
                        className="field-input"
                        value={formData.sportsAct_phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Email ID *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="email"
                        name="sportsAct_emailId"
                        className="field-input"
                        value={formData.sportsAct_emailId}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        If the sports event entails visit to Restricted or
                        Protected areas in India. *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_restrictedAreaVisit"
                        className="field-input"
                        value={formData.sportsAct_restrictedAreaVisit}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        If the sports event entails visit to Restricted or
                        Protected areas in India. *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_restrictedAreaDetails"
                        className="field-input"
                        value={formData.sportsAct_restrictedAreaDetails}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of your previous Sports related visit *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_previousSportsVisitDetails"
                        className="field-input"
                        value={formData.sportsAct_previousSportsVisitDetails}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Tax Compliance details *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_taxComplianceDetails"
                        className="field-input"
                        value={formData.sportsAct_taxComplianceDetails}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Whether you are participating in individual capacity or
                        sponsored by the native Government/Private Company? *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="sportsAct_participationType"
                        className="field-input"
                        value={formData.sportsAct_participationType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* conference  TO ATTEND A
                      CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY A MINISTRY OR
                      DEPARTMENT OF THE GOVERNMENT OF INDIA,STATE GOVERNMENTS OR
                      UT ADMINISTRATIONS AND THEIR SUBORDINATE/ ATTACHED
                      ORGANIZATIONS AND PSUS" */}
              {formData.serviceSubCategory === "attend_conference" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "TO ATTEND A
                      CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY A MINISTRY OR
                      DEPARTMENT OF THE GOVERNMENT OF INDIA,STATE GOVERNMENTS OR
                      UT ADMINISTRATIONS AND THEIR SUBORDINATE/ ATTACHED
                      ORGANIZATIONS AND PSUS"
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name/subject of the conference *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_nameOfConference"
                        className="field-input"
                        value={formData.atendConf_nameOfConference}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Duration of conference Start date *
                      </span>
                    </div>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.atendConf_startDate
                            ? new Date(formData.atendConf_startDate)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date ? date.toISOString().split("T")[0] : "";
                          handleChange({
                            target: { name: "atendConf_startDate", value: formattedDate },
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select start date"
                        className={`field-input ${errors.atendConf_startDate ? "error" : ""}`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={new Date()} // 👈 optional — prevents picking past dates
                      />
                    </div>
                    {errors.atendConf_startDate && (
                      <span className="error-message">{errors.atendConf_startDate}</span>
                    )}

                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">End date *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_endDate"
                        className="field-input"
                        value={formData.atendConf_endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Venue of conference Address *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_venueAddress"
                        className="field-input"
                        value={formData.atendConf_venueAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">State *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_state"
                        className="field-input"
                        value={formData.atendConf_state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">District *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_district"
                        className="field-input"
                        value={formData.atendConf_district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Pincode *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_pincode"
                        className="field-input"
                        value={formData.atendConf_pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Details of organizer of conference Name of organizer *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_organizerName"
                        className="field-input"
                        value={formData.atendConf_organizerName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="atendConf_organizerAddress"
                        className="field-input"
                        value={formData.atendConf_organizerAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Phone no. *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="number"
                        name="atendConf_organizerPhone"
                        className="field-input"
                        value={formData.atendConf_organizerPhone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Email id *</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="email"
                        name="atendConf_organizerEmail"
                        className="field-input"
                        value={formData.atendConf_organizerEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {formData.serviceSubCategory ===
                "patient_travelling_emedical_visa" && (
                  <>
                    <div className="section-header centered">
                      <h2>
                        Details of Purpose "TO ACCOMPANY PATIENT TRAVELLING TO
                        INDIA ON EMEDICAL VISA"
                      </h2>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Name of the principal e-Medical Visa holder (i.e. the
                          patient) *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="patientTravMedVisa_name"
                          className="field-input"
                          value={formData.patientTravMedVisa_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Visa number of principal e-Medical Visa holder *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="patientTravMedVisa_visaNumber"
                          className="field-input"
                          value={formData.patientTravMedVisa_visaNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Application id of principal e-Medical Visa holder *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="patientTravMedVisa_applicationId"
                          className="field-input"
                          value={formData.patientTravMedVisa_applicationId}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Passport number of principal e-Medical Visa holder *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="patientTravMedVisa_passportNumber"
                          className="field-input"
                          value={formData.patientTravMedVisa_passportNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Date of birth of principal e-Medical Visa holder **
                        </span>
                      </div>
                      <div className="input-container">
                        <DatePicker
                          selected={
                            formData.patientTravMedVisa_dateOfBirth
                              ? new Date(formData.patientTravMedVisa_dateOfBirth)
                              : null
                          }
                          onChange={(date) => {
                            const formattedDate = date
                              ? date.toISOString().split("T")[0]
                              : "";
                            handleChange({
                              target: { name: "patientTravMedVisa_dateOfBirth", value: formattedDate },
                            });
                          }}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Date"
                          className={`field-input ${errors.patientTravMedVisa_dateOfBirth ? "error" : ""
                            }`}
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          maxDate={new Date()}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <label className="field-label">
                        <span className="label-text">Nationality *</span>
                      </label>
                      <div className="select-container">
                        <select
                          name="patientTravMedVisa_nationality"
                          value={formData.patientTravMedVisa_nationality || ""}
                          onChange={handleChange}
                          className={`field-select ${errors.patientTravMedVisa_nationality ? "error" : ""
                            }`}
                        >
                          <option value=""></option>
                          {nationalities.map((nation) => (
                            <option key={nation.value} value={nation.value}>
                              {nation.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.patientTravMedVisa_nationality && (
                        <span className="error-message">
                          {errors.patientTravMedVisa_nationality}
                        </span>
                      )}
                    </div>


                  </>
                )}

              {/* e ayush visa   TREATMENT UNDER AYUSH SYSTEMS/INDIAN  */}
              {formData.serviceSubCategory ===
                "treatment_under_ayush_Indian_sytems" && (
                  <>
                    <div className="section-header centered">
                      <h2>
                        Details of Purpose "TREATMENT UNDER AYUSH SYSTEMS/INDIAN
                        SYSTEMS OF MEDICINE"
                      </h2>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Name of the Hospital where Medical treatment is to be
                          carried out *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="tayushInd_hospitalName"
                          className="field-input"
                          value={formData.tayushInd_hospitalName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">Address of Hospital *</span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="tayushInd_hospitalAddress"
                          className="field-input"
                          value={formData.tayushInd_hospitalAddress}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">State *</span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="tayushInd_state"
                          className="field-input"
                          value={formData.tayushInd_state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">District *</span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="tayushInd_district"
                          className="field-input"
                          value={formData.tayushInd_district}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">Phone *</span>
                      </div>
                      <div className="input-container">
                        <input
                          type="number"
                          name="tayushInd_phone"
                          className="field-input"
                          value={formData.tayushInd_phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field form-field-inline">
                      <div className="field-label">
                        <span className="label-text">
                          Type of Medical Treatment required *
                        </span>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          name="tayushInd_medicalTreatmentType"
                          className="field-input"
                          value={formData.tayushInd_medicalTreatmentType}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                )}

              {/* e ayush attendent  */}

              {formData.serviceSubCategory === "e-ayush_visa_holder" && (
                <>
                  <div className="section-header centered">
                    <h2>
                      Details of Purpose "AS ATTENDANT TO AN E-AYUSH VISA
                      HOLDER."
                    </h2>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Name of the principal e-Medical Visa holder (i.e. the
                        patient) *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="ayushAttendent_name"
                        className="field-input"
                        value={formData.ayushAttendent_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Visa number of principal e-Medical Visa holder *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="ayushAttendent_visaNumber"
                        className="field-input"
                        value={formData.ayushAttendent_visaNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Application id of principal e-Medical Visa holder *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="ayushAttendent_applicationId"
                        className="field-input"
                        value={formData.ayushAttendent_applicationId}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Passport number of principal e-Medical Visa holder *
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="ayushAttendent_passportNumber"
                        className="field-input"
                        value={formData.ayushAttendent_passportNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Date of birth of principal e-Medical Visa holder *
                      </span>
                    </div>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.ayushAttendent_dateOfBirth
                            ? new Date(formData.ayushAttendent_dateOfBirth)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date
                            ? date.toISOString().split("T")[0]
                            : "";
                          handleChange({
                            target: { name: "ayushAttendent_dateOfBirth", value: formattedDate },
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select date"
                        className={`field-input ${errors.ayushAttendent_dateOfBirth ? "error" : ""
                          }`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date()} // restrict DOB to past dates
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Nationality of principal e-Medical Visa holder  *</span>
                    </label>
                    <div className="select-container">
                      <select
                        name="ayushAttendent_nationality"
                        value={formData.ayushAttendent_nationality || ""}
                        onChange={handleChange}
                        className={`field-select ${errors.ayushAttendent_nationality ? "error" : ""
                          }`}
                      >
                        <option value=""></option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.ayushAttendent_nationality && (
                      <span className="error-message">
                        {errors.ayushAttendent_nationality}
                      </span>
                    )}
                  </div>

                </>
              )}

              <div className="section-header centered">
                <h2>Previous Visa/Currently valid Visa Details</h2>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Have you ever visited India before?
                  </span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visitedIndiaBefore"
                      value="yes"
                      checked={formData.visitedIndiaBefore === "yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visitedIndiaBefore"
                      value="no"
                      checked={formData.visitedIndiaBefore === "no"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              {formData.visitedIndiaBefore === "yes" && (
                <>
                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Address</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBeforeAddrss"
                        className="field-input"
                        value={formData.visitedIndiaBeforeAddrss}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Cities previously visited in india
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBeforeCitiesVisitedInIndia"
                        className="field-input"
                        value={formData.visitedIndiaBeforeCitiesVisitedInIndia}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">
                        Last Indian Visa No/Currently valid Indian Visa No.
                      </span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBefore_Last_current_ValidVisaNo"
                        className="field-input"
                        value={
                          formData.visitedIndiaBefore_Last_current_ValidVisaNo
                        }
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Type of Visa</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBeforeTypeOfVisa"
                        className="field-input"
                        value={formData.visitedIndiaBeforeTypeOfVisa}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Place of Issue</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBeforePlaceOfVisa"
                        className="field-input"
                        value={formData.visitedIndiaBeforePlaceOfVisa}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* <div className="form-field form-field-inline">
                    <div className="field-label">
                      <span className="label-text">Date of Issue</span>
                    </div>
                    <div className="input-container">
                      <input
                        type="text"
                        name="visitedIndiaBeforeDateOfIssue"
                        className="field-input"
                        value={formData.visitedIndiaBeforeDateOfIssue}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div> */}

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Date of Issue *</span>
                    </label>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.visitedIndiaBeforeDateOfIssue
                            ? new Date(formData.visitedIndiaBeforeDateOfIssue)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date
                            ? date.toISOString().split("T")[0]
                            : "";
                          handleChange({
                            target: {
                              name: "visitedIndiaBeforeDateOfIssue",
                              value: formattedDate,
                            },
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select issue date"
                        className={`field-input ${errors.visitedIndiaBeforeDateOfIssue ? "error" : ""
                          }`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={tenYearsAgo}
                        maxDate={today}
                      />
                    </div>
                    {errors.visitedIndiaBeforeDateOfIssue && (
                      <span className="error-message">
                        {errors.visitedIndiaBeforeDateOfIssue}
                      </span>
                    )}
                  </div>
                </>
              )}

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Has permission to visit or stay in India previously been
                    refused?
                  </span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="yes"
                      checked={formData.visaRefused === "yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="no"
                      checked={formData.visaRefused === "no"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              {formData.visaRefused === "yes" && (
                <div className="form-field form-field-inline">
                  <div className="field-label">
                    <span className="label-text">
                      If so, when and by whom (Mention Control No. and date
                      also)*
                    </span>
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      name="visaRefusedByWhomDetails"
                      className="field-input"
                      value={formData.visaRefusedByWhomDetails}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="section-header centered">
                <h2>Other information</h2>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Countries Visited In Last 10 Years
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="countryVisitedLast10Years"
                    className="field-input"
                    value={formData.countryVisitedLast10Years}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="section-header centered">
                <h2>SAARC Country Visit Details</h2>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    SAARC Country Visit Details
                  </span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="saarcCountries"
                      value="yes"
                      checked={formData.saarcCountries === "yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="saarcCountries"
                      value="no"
                      checked={formData.saarcCountries === "no"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              {/* {formData.saarcCountries === "yes" && (
                <>
                  <div className="saarc_container">
                    <div className="child">
                      <select
                        name="country"
                        value={saarcInput.country}
                        onChange={handleSaarcInputChange}
                      >
                        <option>Select Country</option>
                        {saarcContriesData.map((country) => {
                          return (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="child">
                      <select
                        name="year"
                        value={saarcInput.year}
                        onChange={handleSaarcInputChange}
                      >
                        <option>Select Year</option>
                        {years.map((year) => {
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="child">
                      <input
                        type="number"
                        name="visits"
                        min="1"
                        value={saarcInput.visits}
                        onChange={handleSaarcInputChange}
                        placeholder="No. of visits"
                      />
                    </div>


                    <div className="child">
                      <button type="button" onClick={handleAddSaarc}> Add</button>
                    </div>

                  </div>
                </>
              )} */}

              {/* Radio controls (already present) */}

              {formData.saarcCountries === "yes" && (
                <div className="saarc_section">
                  <div className="saarc_container">
                    <div className="child">
                      <select
                        name="country"
                        value={saarcInput.country}
                        onChange={handleSaarcInputChange}
                      >
                        <option value="">Select Country</option>
                        {saarcContriesData.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="child">
                      <select
                        name="year"
                        value={saarcInput.year}
                        onChange={handleSaarcInputChange}
                      >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="child">
                      <input
                        type="number"
                        name="visits"
                        min="1"
                        value={saarcInput.visits}
                        onChange={handleSaarcInputChange}
                        placeholder="No. of visits"
                      />
                    </div>

                    <div className="child">
                      <button
                        type="button"
                        className="saarcbutton"
                        onClick={handleAddSaarc}
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* show validation error */}
                  {errors.saarcDetails && (
                    <div className="error-message">{errors.saarcDetails}</div>
                  )}

                  {/* Display added records with remove button */}
                  {formData.saarcDetails &&
                    formData.saarcDetails.length > 0 && (
                      <div className="saarc-list">
                        <h4 className="saarc_details_heading">
                          Added SAARC Visits
                        </h4>
                        <div className="saarc_details_container">
                          {formData.saarcDetails.map((it, idx) => (
                            <div key={idx} className="saarc-item">
                              <div className="flex_saarc saarc_item_box">
                                {" "}
                                {it.country}{" "}
                              </div>
                              <div className="flex_saarc  saarc_item_box">
                                {" "}
                                {it.year}{" "}
                              </div>
                              <div className="flex_saarc  saarc_item_box">
                                {" "}
                                {it.visits}{" "}
                              </div>
                              <button
                                type="button"
                                className="saarcbutton"
                                onClick={() => handleRemoveSaarc(idx)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}

              <div className="section-header centered">
                <h2>Reference</h2>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Reference Name in India *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceNameIndia"
                    className={`field-input ${errors.referenceNameIndia ? "error" : ""
                      }`}
                    value={formData.referenceNameIndia}
                    onChange={handleChange}
                    placeholder="Enter reference name"
                  />
                </div>
                {errors.referenceNameIndia && (
                  <div className="error-message">
                    {errors.referenceNameIndia}
                  </div>
                )}
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Address *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceAddressIndia"
                    className={`field-input ${errors.referenceAddressIndia ? "error" : ""
                      }`}
                    value={formData.referenceAddressIndia}
                    onChange={handleChange}
                    placeholder="Enter address"
                  />
                </div>
                {errors.referenceAddressIndia && (
                  <div className="error-message">
                    {errors.referenceAddressIndia}
                  </div>
                )}
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Phone No. *</span>
                </div>
                <div className="input-container">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="referencePhoneIndia"
                    className={`field-input ${errors.referencePhoneIndia ? "error" : ""
                      }`}
                    value={formData.referencePhoneIndia}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.referencePhoneIndia && (
                  <div className="error-message">
                    {errors.referencePhoneIndia}
                  </div>
                )}
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">
                    Reference Name in Home Country *
                  </span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceNameHome"
                    className={`field-input ${errors.referenceNameHome ? "error" : ""
                      }`}
                    value={formData.referenceNameHome}
                    onChange={handleChange}
                    placeholder="Enter reference name"
                  />
                </div>
                {errors.referenceNameHome && (
                  <div className="error-message">
                    {errors.referenceNameHome}
                  </div>
                )}
              </div>

              <div className="form-field form-field-inline ">
                <div className="field-label">
                  <span className="label-text">Address *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceAddressHome"
                    className={`field-input ${errors.referenceAddressHome ? "error" : ""
                      }`}
                    value={formData.referenceAddressHome}
                    onChange={handleChange}
                    placeholder="Enter address"
                  />
                </div>
                {errors.referenceAddressHome && (
                  <div className="error-message">
                    {errors.referenceAddressHome}
                  </div>
                )}
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Phone No. *</span>
                </div>
                <div className="input-container">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="referencePhoneHome"
                    className={`field-input ${errors.referencePhoneHome ? "error" : ""
                      }`}
                    value={formData.referencePhoneHome}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.referencePhoneHome && (
                  <div className="error-message">
                    {errors.referencePhoneHome}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Previous Visa Details */}
          {/* <div className="form-section">

            <div className="form-grid full-row">
              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Have you ever visited India before?</span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visitedIndiaBefore"
                      value="yes"
                      checked={formData.visitedIndiaBefore === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visitedIndiaBefore"
                      value="no"
                      checked={formData.visitedIndiaBefore === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Has permission to visit or stay in India previously been refused?</span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="yes"
                      checked={formData.visaRefused === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="visaRefused"
                      value="no"
                      checked={formData.visaRefused === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
          </div> */}

          {/* Other Information */}
          {/* <div className="form-section">

            <div className="form-grid full-row">
              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Countries Visited In Last 10 Years</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    className="field-input"
                    placeholder="List countries visited (optional)"
                  />
                  <div className="input-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">SAARC Country Visit Details</span>
                </div>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="saarcCountries"
                      value="yes"
                      checked={formData.saarcCountries === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="saarcCountries"
                      value="no"
                      checked={formData.saarcCountries === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Add SAARC Country</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    className="field-input"
                    placeholder="Enter SAARC country (optional)"
                  />
                  <div className="input-icon">
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* References */}
          {/* <div className="form-section">
            <div className="form-grid">
              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Reference Name in India *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceNameIndia"
                    className={`field-input ${errors.referenceNameIndia ? 'error' : ''}`}
                    value={formData.referenceNameIndia}
                    onChange={handleChange}
                    placeholder="Enter reference name"
                  />
                  <div className="input-icon">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                {errors.referenceNameIndia && <div className="error-message">{errors.referenceNameIndia}</div>}
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Address *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceAddressIndia"
                    className={`field-input ${errors.referenceAddressIndia ? 'error' : ''}`}
                    value={formData.referenceAddressIndia}
                    onChange={handleChange}
                    placeholder="Enter address"
                  />
                  <div className="input-icon">
                    <i className="fas fa-home"></i>
                  </div>
                </div>
                {errors.referenceAddressIndia && <div className="error-message">{errors.referenceAddressIndia}</div>}
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Phone No. *</span>
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="referencePhoneIndia"
                    className={`field-input ${errors.referencePhoneIndia ? 'error' : ''}`}
                    value={formData.referencePhoneIndia}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                  <div className="input-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                {errors.referencePhoneIndia && <div className="error-message">{errors.referencePhoneIndia}</div>}
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Reference Name in Home Country *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceNameHome"
                    className={`field-input ${errors.referenceNameHome ? 'error' : ''}`}
                    value={formData.referenceNameHome}
                    onChange={handleChange}
                    placeholder="Enter reference name"
                  />
                  <div className="input-icon">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                {errors.referenceNameHome && <div className="error-message">{errors.referenceNameHome}</div>}
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Address *</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="referenceAddressHome"
                    className={`field-input ${errors.referenceAddressHome ? 'error' : ''}`}
                    value={formData.referenceAddressHome}
                    onChange={handleChange}
                    placeholder="Enter address"
                  />
                  <div className="input-icon">
                    <i className="fas fa-home"></i>
                  </div>
                </div>
                {errors.referenceAddressHome && <div className="error-message">{errors.referenceAddressHome}</div>}
              </div>

              <div className="form-field">
                <div className="field-label">
                  <span className="label-text">Phone No. *</span>
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="referencePhoneHome"
                    className={`field-input ${errors.referencePhoneHome ? 'error' : ''}`}
                    value={formData.referencePhoneHome}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                  <div className="input-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                {errors.referencePhoneHome && <div className="error-message">{errors.referencePhoneHome}</div>}
              </div>
            </div>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                {/* <i className="fas fa-arrow-right button-arrow"></i> */}
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <p>
            <i className="fas fa-shield-alt"></i>
            Your information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apply4;
