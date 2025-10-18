import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { portsOfArrival } from "../../assets/data/FormData";
import { getApplicationDataById, applicationSubmitStep4 } from '../../apiCalls/visaApplication';

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Apply4 = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationType: "Normal Processing",
    portOfArrival: "",
    visaService: "",
    duration: "",
    subVisaCategory: "",
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
    referenceNameIndia: "",
    referenceAddressIndia: "",
    referencePhoneIndia: "",
    referenceNameHome: "",
    referenceAddressHome: "",
    referencePhoneHome: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getApplicationData = async () => {
    const res = await getApplicationDataById(params.id);
    console.log(res, 'res daa of application')
    if (res.status === 200) {
      setFormData(res.data.data)
    }
  }


  useEffect(() => {
    getApplicationData()
  }, [params.id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.placeVisited1.trim()) {
      newErrors.placeVisited1 = "Place to visit is required";
    }
    if (!formData.expectedPortOfExit) {
      newErrors.expectedPortOfExit = "Expected port of exit is required";
    }
    if (!formData.referenceNameIndia.trim()) {
      newErrors.referenceNameIndia = "Reference name in India is required";
    }
    if (!formData.referenceAddressIndia.trim()) {
      newErrors.referenceAddressIndia =
        "Reference address in India is required";
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
      console.log('hitting api')
      const res = await applicationSubmitStep4(formData);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        toast.success(`🦄 ${res.data.message}`);
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
                    className="field-input"
                    value={formData.visaService}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Duration of Visa (in Days)</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="duration"
                    className="field-input"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <div className="field-label">
                  <span className="label-text">Sub Visa Category</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="subVisaCategory"
                    className="field-input"
                    value={formData.subVisaCategory}
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
                    Expected Port of Exit from India *
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

                  <div className="form-field form-field-inline">
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
                    required
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
