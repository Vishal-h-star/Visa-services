import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getApplicationDataById, applicationSubmitStep3 } from '../../apiCalls/visaApplication';
import { nationalities, maritalStatuses } from "../../assets/data/FormData";
import { toast } from "react-toastify";

const Apply3 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    // Application Information
    applicationType: "",
    portOfArrival: "",
    // Present Address
    presentHouseNo: "",
    presentVillageTownCity: "",
    presentCountry: "",
    presentState: "",
    presentPostalCode: "",
    presentPhoneNo: "",
    presentMobileNo: "",
    presentEmail: "",
    sameAsPermanent: false,

    // Permanent Address
    permanentHouseNo: "",
    permanentVillageTownCity: "",
    permanentState: "",
    permanentPostalCode: "",

    // Family Details - Father
    fatherName: "",
    fatherNationality: "",
    fatherPreviousNationality: "",
    fatherPlaceOfBirth: "",
    fatherCountryOfBirth: "",

    // Family Details - Mother
    motherName: "",
    motherNationality: "",
    motherPreviousNationality: "",
    motherPlaceOfBirth: "",
    motherCountryOfBirth: "",

    // Family Details - Spouse
    maritalStatus: "",
    spouseName: "",
    SpouseNationality: "",
    SpousePrevNationality: "",
    SpouseBirthPlace: "",
    SpouseCtryOfBirth: "",
    grandparentPakistani: "",
    grandparentPakistaniYes: "",

    // Profession/Occupation Details
    presentOccupation: "",
    employerName: "",
    employerAddress: "",
    designation: "",
    employerPhoneNo: "",
    pastOccupation: "",

    // Military/Police Organization
    inMilitaryOrganization: "No",
    organizationName: "",
    organizationDesignation: "",
    organizationRank: "",
    organizationPlace: "",
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

  const occupations = [
    "Engineer",
    "Doctor",
    "Teacher",
    "Business",
    "Student",
    "Government Employee",
    "Private Employee",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // If "same as permanent address" is checked, copy present address to permanent address
      if (name === "sameAsPermanent" && checked) {
        updatedData.permanentHouseNo = prev.presentHouseNo;
        updatedData.permanentVillageTownCity = prev.presentVillageTownCity;
        updatedData.permanentState = prev.presentState;
        updatedData.permanentPostalCode = prev.presentPostalCode;
      }

      return updatedData;
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      "presentHouseNo",
      "presentVillageTownCity",
      "presentCountry",
      "presentState",
      "presentPostalCode",
      "presentPhoneNo",
      "presentMobileNo",
      "presentEmail",
      "fatherName",
      "fatherNationality",
      "fatherPlaceOfBirth",
      "fatherCountryOfBirth",
      "motherName",
      "motherNationality",
      "motherPlaceOfBirth",
      "motherCountryOfBirth",
      "maritalStatus",
      "grandparentPakistani",
      "presentOccupation",
      "employerName",
      "employerAddress",
      "employerPhoneNo",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (formData.presentEmail && !/\S+@\S+\.\S+/.test(formData.presentEmail)) {
      newErrors.presentEmail = "Please enter a valid email address";
    }

    // Phone number validation
    if (
      formData.presentPhoneNo &&
      !/^\d{7,15}$/.test(formData.presentPhoneNo.replace(/\D/g, ""))
    ) {
      newErrors.presentPhoneNo = "Please enter a valid phone number";
    }

    if (
      formData.presentMobileNo &&
      !/^\d{10,15}$/.test(formData.presentMobileNo.replace(/\D/g, ""))
    ) {
      newErrors.presentMobileNo = "Please enter a valid mobile number";
    }

    // Military organization fields validation if Yes is selected
    if (formData.inMilitaryOrganization === "Yes") {
      const militaryFields = [
        "organizationName",
        "organizationDesignation",
        "organizationRank",
        "organizationPlace",
      ];
      militaryFields.forEach((field) => {
        if (!formData[field] || formData[field].trim() === "") {
          newErrors[field] =
            "This field is required when serving in military organization";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('hitting api')
      const res = await applicationSubmitStep3(formData);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        toast.success(`🦄 ${res.data.message}`);
        // setIsSubmitting(true);
        setIsSubmitting(false);
        navigate(`/apply4/${res.data.data.uniqueId}`);
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
        {/* Header Section */}
        <div className="form-header-section">
          <h1 className="form-title">e-Visa Application</h1>
          <p className="form-subtitle">Complete your visa application form</p>
          <div className="application-id">
            Temporary Application ID: <strong>{params?.id}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="enhanced-visa-form">
          {/* Application Information */}
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
          {/* Present Address */}
          <div className="form-section">
            <div className="form-grid full-row">
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">House No./Street *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="presentHouseNo"
                    value={formData.presentHouseNo}
                    onChange={handleChange}
                    className={`field-input ${errors.presentHouseNo ? "error" : ""
                      }`}
                    placeholder="Enter house number and street"
                  />
      
                </div>
                {errors.presentHouseNo && (
                  <span className="error-message">{errors.presentHouseNo}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Village/Town/City *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="presentVillageTownCity"
                    value={formData.presentVillageTownCity}
                    onChange={handleChange}
                    className={`field-input ${errors.presentVillageTownCity ? "error" : ""
                      }`}
                    placeholder="Enter village/town/city"
                  />

                </div>
                {errors.presentVillageTownCity && (
                  <span className="error-message">
                    {errors.presentVillageTownCity}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Country *</span>
                </label>
                <div className="select-container">
                  <select
                    name="presentCountry"
                    value={formData.presentCountry}
                    onChange={handleChange}
                    className={`field-select ${errors.presentCountry ? "error" : ""
                      }`}
                  >
                    <option value="">Select Country</option>
                    {nationalities.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.presentCountry && (
                  <span className="error-message">{errors.presentCountry}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">State/Province/District *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="presentState"
                    value={formData.presentState}
                    onChange={handleChange}
                    className={`field-input ${errors.presentState ? "error" : ""
                      }`}
                    placeholder="Enter state/province"
                  />
                </div>
                {errors.presentState && (
                  <span className="error-message">{errors.presentState}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Postal/Zip Code *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="presentPostalCode"
                    value={formData.presentPostalCode}
                    onChange={handleChange}
                    className={`field-input ${errors.presentPostalCode ? "error" : ""
                      }`}
                    placeholder="Enter postal code"
                  />
                </div>
                {errors.presentPostalCode && (
                  <span className="error-message">
                    {errors.presentPostalCode}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Phone No *</span>
                </label>
                <div className="input-container">
                  <input
                    type="tel"
                    name="presentPhoneNo"
                    value={formData.presentPhoneNo}
                    onChange={handleChange}
                    className={`field-input ${errors.presentPhoneNo ? "error" : ""
                      }`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.presentPhoneNo && (
                  <span className="error-message">{errors.presentPhoneNo}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Mobile No *</span>
                </label>
                <div className="input-container">
                  <input
                    type="tel"
                    name="presentMobileNo"
                    value={formData.presentMobileNo}
                    onChange={handleChange}
                    className={`field-input ${errors.presentMobileNo ? "error" : ""
                      }`}
                    placeholder="Enter mobile number"
                  />
                </div>
                {errors.presentMobileNo && (
                  <span className="error-message">
                    {errors.presentMobileNo}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Email ID *</span>
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    name="presentEmail"
                    value={formData.presentEmail}
                    onChange={handleChange}
                    className={`field-input ${errors.presentEmail ? "error" : ""
                      }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.presentEmail && (
                  <span className="error-message">{errors.presentEmail}</span>
                )}
              </div>

              <div className="form-field full-width">
                <div className="checkbox-container">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="sameAsPermanent"
                      checked={formData.sameAsPermanent}
                      onChange={handleChange}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    Click Here for same address? If yes, click the box.
                  </label>
                </div>
              </div>

              <div className="section-header centered">
                <h2>Permanent Address</h2>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">House No./Street</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentHouseNo"
                    value={formData.permanentHouseNo}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter house number and street"
                    disabled={formData.sameAsPermanent}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Village/Town/City</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentVillageTownCity"
                    value={formData.permanentVillageTownCity}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter village/town/city"
                    disabled={formData.sameAsPermanent}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">State/Province/District</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentState"
                    value={formData.permanentState}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter state/province"
                    disabled={formData.sameAsPermanent}
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Postal/Zip Code</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentPostalCode"
                    value={formData.permanentPostalCode}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter postal code"
                    disabled={formData.sameAsPermanent}
                  />
                </div>
              </div>

              <div className="section-header centered">
                <h2>Family Details</h2>
              </div>
              {/*    fathers details */}

              <div className="subsection">
                <h3 className="subsection-title"> Father's Details</h3>

                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Father's Name *</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        className={`field-input ${errors.fatherName ? "error" : ""
                          }`}
                        placeholder="Enter father's name"
                      />
                    </div>
                    {errors.fatherName && (
                      <span className="error-message">{errors.fatherName}</span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Father's Nationality *</span>
                    </label>
                    <div className="select-container">
                      <select
                        name="fatherNationality"
                        value={formData.fatherNationality}
                        onChange={handleChange}
                        className={`field-select ${errors.fatherNationality ? "error" : ""
                          }`}
                      >
                        <option value="">Select Nationality</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.fatherNationality && (
                      <span className="error-message">
                        {errors.fatherNationality}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Father's Previous Nationality
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="fatherPreviousNationality"
                        value={formData.fatherPreviousNationality}
                        onChange={handleChange}
                        className="field-select"
                      >
                        <option value="">Select Previous Nationality</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Father's Place of Birth *
                      </span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="fatherPlaceOfBirth"
                        value={formData.fatherPlaceOfBirth}
                        onChange={handleChange}
                        className={`field-input ${errors.fatherPlaceOfBirth ? "error" : ""
                          }`}
                        placeholder="Enter place of birth"
                      />
                    </div>
                    {errors.fatherPlaceOfBirth && (
                      <span className="error-message">
                        {errors.fatherPlaceOfBirth}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Father's Country of Birth *
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="fatherCountryOfBirth"
                        value={formData.fatherCountryOfBirth}
                        onChange={handleChange}
                        className={`field-select ${errors.fatherCountryOfBirth ? "error" : ""
                          }`}
                      >
                        <option value="">Select Country</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.fatherCountryOfBirth && (
                      <span className="error-message">
                        {errors.fatherCountryOfBirth}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/*  mothers details  */}
              <div className="subsection">
                <h3 className="subsection-title">Mother's Details</h3>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Mother's Name *</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        className={`field-input ${errors.motherName ? "error" : ""
                          }`}
                        placeholder="Enter mother's name"
                      />
                    </div>
                    {errors.motherName && (
                      <span className="error-message">{errors.motherName}</span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Mother's Nationality *</span>
                    </label>
                    <div className="select-container">
                      <select
                        name="motherNationality"
                        value={formData.motherNationality}
                        onChange={handleChange}
                        className={`field-select ${errors.motherNationality ? "error" : ""
                          }`}
                      >
                        <option value="">Select Nationality</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.motherNationality && (
                      <span className="error-message">
                        {errors.motherNationality}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Mother's Previous Nationality
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="motherPreviousNationality"
                        value={formData.motherPreviousNationality}
                        onChange={handleChange}
                        className="field-select"
                      >
                        <option value="">Select Previous Nationality</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Mother's Place of Birth *
                      </span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="motherPlaceOfBirth"
                        value={formData.motherPlaceOfBirth}
                        onChange={handleChange}
                        className={`field-input ${errors.motherPlaceOfBirth ? "error" : ""
                          }`}
                        placeholder="Enter place of birth"
                      />
                    </div>
                    {errors.motherPlaceOfBirth && (
                      <span className="error-message">
                        {errors.motherPlaceOfBirth}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Mother's Country of Birth *
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="motherCountryOfBirth"
                        value={formData.motherCountryOfBirth}
                        onChange={handleChange}
                        className={`field-select ${errors.motherCountryOfBirth ? "error" : ""
                          }`}
                      >
                        <option value="">Select Country</option>
                        {nationalities.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.motherCountryOfBirth && (
                      <span className="error-message">
                        {errors.motherCountryOfBirth}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Spouse details */}
              <div className="subsection">
                <h3 className="subsection-title">Spouse Details</h3>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Applicant's Marital Status *
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className={`field-select ${errors.maritalStatus ? "error" : ""
                          }`}
                      >
                        <option value="">Select Marital Status</option>
                        {maritalStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.maritalStatus && (
                      <span className="error-message">
                        {errors.maritalStatus}
                      </span>
                    )}
                  </div>

                  {formData.maritalStatus === "Married" && (
                    <>
                      <div className="form-field form-field-inline">
                        <label className="field-label">
                          <span className="label-text">Spouse Name *</span>
                        </label>
                        <div className="input-container">
                          <input
                            type="text"
                            name="spouseName"
                            value={formData.spouseName}
                            onChange={handleChange}
                            className={`field-input ${errors.spouseName ? "error" : ""
                              }`}
                            placeholder="Enter spouse name"
                          />
                        </div>
                        {errors.motherName && (
                          <span className="error-message">
                            {errors.motherName}
                          </span>
                        )}
                      </div>

                      <div className="form-field form-field-inline">
                        <label className="field-label">
                          <span className="label-text">
                            Spouse Nationality/Region *
                          </span>
                        </label>
                        <div className="select-container">
                          <select
                            name="SpouseNationality"
                            value={formData.SpouseNationality}
                            onChange={handleChange}
                            className={`field-select ${errors.SpouseNationality ? "error" : ""
                              }`}
                          >
                            <option value="">Select nationality</option>
                            {nationalities.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          <span className="select-arrow">▼</span>
                        </div>
                        {errors.presentCountry && (
                          <span className="error-message">
                            {errors.presentCountry}
                          </span>
                        )}
                      </div>

                      <div className="form-field form-field-inline">
                        <label className="field-label">
                          <span className="label-text">
                            Spouse Previous Nationality
                          </span>
                        </label>
                        <div className="select-container">
                          <select
                            name="SpousePrevNationality"
                            value={formData.SpousePrevNationality}
                            onChange={handleChange}
                            className="field-select"
                          // className={`field-select ${
                          //   errors.SpousePrevNationality ? "error" : ""
                          // }`}
                          >
                            <option value="">Select nationality</option>
                            {nationalities.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          <span className="select-arrow">▼</span>
                        </div>
                        {errors.presentCountry && (
                          <span className="error-message">
                            {errors.presentCountry}
                          </span>
                        )}
                      </div>

                      <div className="form-field form-field-inline">
                        <label className="field-label">
                          <span className="label-text">
                            Spouse Place of Birth *
                          </span>
                        </label>
                        <div className="input-container">
                          <input
                            type="text"
                            name="SpouseBirthPlace"
                            value={formData.SpouseBirthPlace}
                            onChange={handleChange}
                            className={`field-input ${errors.SpouseBirthPlace ? "error" : ""
                              }`}
                            placeholder="Birth place"
                          />
                        </div>
                        {errors.motherName && (
                          <span className="error-message">
                            {errors.motherName}
                          </span>
                        )}
                      </div>

                      <div className="form-field form-field-inline">
                        <label className="field-label">
                          <span className="label-text">
                            Spouse Country of Birth *
                          </span>
                        </label>
                        <div className="select-container">
                          <select
                            name="SpouseCtryOfBirth"
                            value={formData.SpouseCtryOfBirth}
                            onChange={handleChange}
                            className={`field-select ${errors.SpouseCtryOfBirth ? "error" : ""
                              }`}
                          >
                            <option value="">Select Country</option>
                            {nationalities.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          <span className="select-arrow">▼</span>
                        </div>
                        {errors.presentCountry && (
                          <span className="error-message">
                            {errors.presentCountry}
                          </span>
                        )}
                      </div>
                    </>
                  )}

                  <div className="form-field form-field-inline ">
                    <label className="field-label">
                      <span className="label-text">
                        Grandparent Pakistan Nationals Belong to Pakistan *
                      </span>
                    </label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="grandparentPakistani"
                          value="Yes"
                          checked={formData.grandparentPakistani === "Yes"}
                          onChange={handleChange}
                          className="radio-input"
                        />
                        <span className="radio-custom"></span>
                        Yes
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="grandparentPakistani"
                          value="No"
                          checked={formData.grandparentPakistani === "No"}
                          onChange={handleChange}
                          className="radio-input"
                        />
                        <span className="radio-custom"></span>
                        No
                      </label>
                    </div>
                    {errors.grandparentPakistani && (
                      <span className="error-message">
                        {errors.grandparentPakistani}
                      </span>
                    )}
                  </div>

                  {formData.grandparentPakistani === "Yes" && (
                    <div className="form-field form-field-inline">
                      <label className="field-label">
                        <span className="label-text">
                          Give Details *
                        </span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="grandparentPakistaniYes"
                          value={formData.grandparentPakistaniYes}
                          onChange={handleChange}
                          className={`field-input ${errors.grandparentPakistaniYes ? "error" : ""
                            }`}
                          placeholder="Give details"
                        />
                      </div>
                      {errors.employerName && (
                        <span className="error-message">
                          {errors.employerName}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Present Occupation *</span>
                </label>
                <div className="select-container">
                  <select
                    name="presentOccupation"
                    value={formData.presentOccupation}
                    onChange={handleChange}
                    className={`field-select ${errors.presentOccupation ? "error" : ""
                      }`}
                  >
                    <option value="">Select Occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.presentOccupation && (
                  <span className="error-message">
                    {errors.presentOccupation}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Employer Name / Business *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="employerName"
                    value={formData.employerName}
                    onChange={handleChange}
                    className={`field-input ${errors.employerName ? "error" : ""
                      }`}
                    placeholder="Enter employer name"
                  />
                </div>
                {errors.employerName && (
                  <span className="error-message">{errors.employerName}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Employer Address *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="employerAddress"
                    value={formData.employerAddress}
                    onChange={handleChange}
                    className={`field-input ${errors.employerAddress ? "error" : ""
                      }`}
                    placeholder="Enter employer address"
                  />
                </div>
                {errors.employerAddress && (
                  <span className="error-message">
                    {errors.employerAddress}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Designation</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter designation"
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Phone No. *</span>
                </label>
                <div className="input-container">
                  <input
                    type="tel"
                    name="employerPhoneNo"
                    value={formData.employerPhoneNo}
                    onChange={handleChange}
                    className={`field-input ${errors.employerPhoneNo ? "error" : ""
                      }`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.employerPhoneNo && (
                  <span className="error-message">
                    {errors.employerPhoneNo}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Past Occupation, if any</span>
                </label>
                <div className="select-container">
                  <select
                    name="pastOccupation"
                    value={formData.pastOccupation}
                    onChange={handleChange}
                    className="field-select"
                  >
                    <option value="">Select Past Occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">
                    Are/were you in Military/Security/Police Organization? *
                  </span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inMilitaryOrganization"
                      value="Yes"
                      checked={formData.inMilitaryOrganization === "Yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inMilitaryOrganization"
                      value="No"
                      checked={formData.inMilitaryOrganization === "No"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              {formData.inMilitaryOrganization === "Yes" && (
                <div className="military-fields full-width">
                  <div className="form-grid">
                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Organization *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          className={`field-input ${errors.organizationName ? "error" : ""
                            }`}
                          placeholder="Enter organization name"
                        />
                        <span className="input-icon">🏛️</span>
                      </div>
                      {errors.organizationName && (
                        <span className="error-message">
                          {errors.organizationName}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Designation *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationDesignation"
                          value={formData.organizationDesignation}
                          onChange={handleChange}
                          className={`field-input ${errors.organizationDesignation ? "error" : ""
                            }`}
                          placeholder="Enter designation"
                        />
                        <span className="input-icon">💼</span>
                      </div>
                      {errors.organizationDesignation && (
                        <span className="error-message">
                          {errors.organizationDesignation}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Rank *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationRank"
                          value={formData.organizationRank}
                          onChange={handleChange}
                          className={`field-input ${errors.organizationRank ? "error" : ""
                            }`}
                          placeholder="Enter rank"
                        />
                        <span className="input-icon">⭐</span>
                      </div>
                      {errors.organizationRank && (
                        <span className="error-message">
                          {errors.organizationRank}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Place of Position *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationPlace"
                          value={formData.organizationPlace}
                          onChange={handleChange}
                          className={`field-input ${errors.organizationPlace ? "error" : ""
                            }`}
                          placeholder="Enter place of position"
                        />
                        <span className="input-icon">📍</span>
                      </div>
                      {errors.organizationPlace && (
                        <span className="error-message">
                          {errors.organizationPlace}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Permanent Address */}
          {/* <div className="form-section">
            
            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">House No./Street</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentHouseNo"
                    value={formData.permanentHouseNo}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter house number and street"
                    disabled={formData.sameAsPermanent}
                  />
                  <span className="input-icon">🏠</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Village/Town/City</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentVillageTownCity"
                    value={formData.permanentVillageTownCity}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter village/town/city"
                    disabled={formData.sameAsPermanent}
                  />
                  <span className="input-icon">🏙️</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">State/Province/District</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentState"
                    value={formData.permanentState}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter state/province"
                    disabled={formData.sameAsPermanent}
                  />
                  <span className="input-icon">🗺️</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Postal/Zip Code</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="permanentPostalCode"
                    value={formData.permanentPostalCode}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter postal code"
                    disabled={formData.sameAsPermanent}
                  />
                  <span className="input-icon">📮</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Family Details */}
          {/* <div className="form-section">
            Father's Details
            <div className="subsection">
              <h3 className="subsection-title">👨 Father's Details</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Father's Name *</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={`field-input ${errors.fatherName ? 'error' : ''}`}
                      placeholder="Enter father's name"
                    />
                    <span className="input-icon">👨</span>
                  </div>
                  {errors.fatherName && <span className="error-message">{errors.fatherName}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Father's Nationality *</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="fatherNationality"
                      value={formData.fatherNationality}
                      onChange={handleChange}
                      className={`field-select ${errors.fatherNationality ? 'error' : ''}`}
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                  {errors.fatherNationality && <span className="error-message">{errors.fatherNationality}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Father's Previous Nationality</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="fatherPreviousNationality"
                      value={formData.fatherPreviousNationality}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="">Select Previous Nationality</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Father's Place of Birth *</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="fatherPlaceOfBirth"
                      value={formData.fatherPlaceOfBirth}
                      onChange={handleChange}
                      className={`field-input ${errors.fatherPlaceOfBirth ? 'error' : ''}`}
                      placeholder="Enter place of birth"
                    />
                    <span className="input-icon">📍</span>
                  </div>
                  {errors.fatherPlaceOfBirth && <span className="error-message">{errors.fatherPlaceOfBirth}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Father's Country of Birth *</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="fatherCountryOfBirth"
                      value={formData.fatherCountryOfBirth}
                      onChange={handleChange}
                      className={`field-select ${errors.fatherCountryOfBirth ? 'error' : ''}`}
                    >
                      <option value="">Select Country</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                  {errors.fatherCountryOfBirth && <span className="error-message">{errors.fatherCountryOfBirth}</span>}
                </div>
              </div>
            </div>

            Mother's Details
            <div className="subsection">
              <h3 className="subsection-title">👩 Mother's Details</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Mother's Name *</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className={`field-input ${errors.motherName ? 'error' : ''}`}
                      placeholder="Enter mother's name"
                    />
                    <span className="input-icon">👩</span>
                  </div>
                  {errors.motherName && <span className="error-message">{errors.motherName}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Mother's Nationality *</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="motherNationality"
                      value={formData.motherNationality}
                      onChange={handleChange}
                      className={`field-select ${errors.motherNationality ? 'error' : ''}`}
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                  {errors.motherNationality && <span className="error-message">{errors.motherNationality}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Mother's Previous Nationality</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="motherPreviousNationality"
                      value={formData.motherPreviousNationality}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="">Select Previous Nationality</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Mother's Place of Birth *</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="motherPlaceOfBirth"
                      value={formData.motherPlaceOfBirth}
                      onChange={handleChange}
                      className={`field-input ${errors.motherPlaceOfBirth ? 'error' : ''}`}
                      placeholder="Enter place of birth"
                    />
                    <span className="input-icon">📍</span>
                  </div>
                  {errors.motherPlaceOfBirth && <span className="error-message">{errors.motherPlaceOfBirth}</span>}
                </div>

                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">Mother's Country of Birth *</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="motherCountryOfBirth"
                      value={formData.motherCountryOfBirth}
                      onChange={handleChange}
                      className={`field-select ${errors.motherCountryOfBirth ? 'error' : ''}`}
                    >
                      <option value="">Select Country</option>
                      {nationalities.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                  {errors.motherCountryOfBirth && <span className="error-message">{errors.motherCountryOfBirth}</span>}
                </div>
              </div>
            </div>

            Spouse Details
            <div className="subsection">
              <h3 className="subsection-title">💍 Spouse Details</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label className="field-label">
                    <span className="label-text">
                      Applicant's Marital Status *
                    </span>
                  </label>
                  <div className="select-container">
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className={`field-select ${
                        errors.maritalStatus ? "error" : ""
                      }`}
                    >
                      <option value="">Select Marital Status</option>
                      {maritalStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                  {errors.maritalStatus && (
                    <span className="error-message">
                      {errors.maritalStatus}
                    </span>
                  )}
                </div>

                <div className="form-field full-width">
                  <label className="field-label">
                    <span className="label-text">
                      Grandparent Pakistan Nationals Belong to Pakistan *
                    </span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="grandparentPakistani"
                        value="Yes"
                        checked={formData.grandparentPakistani === "Yes"}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span className="radio-custom"></span>
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="grandparentPakistani"
                        value="No"
                        checked={formData.grandparentPakistani === "No"}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      <span className="radio-custom"></span>
                      No
                    </label>
                  </div>
                  {errors.grandparentPakistani && (
                    <span className="error-message">
                      {errors.grandparentPakistani}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          {/* Profession/Occupation Details */}
          {/* <div className="form-section">

            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Present Occupation *</span>
                </label>
                <div className="select-container">
                  <select
                    name="presentOccupation"
                    value={formData.presentOccupation}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.presentOccupation ? "error" : ""
                    }`}
                  >
                    <option value="">Select Occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.presentOccupation && (
                  <span className="error-message">
                    {errors.presentOccupation}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Employer Name / Business *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="employerName"
                    value={formData.employerName}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.employerName ? "error" : ""
                    }`}
                    placeholder="Enter employer name"
                  />
                  <span className="input-icon">🏢</span>
                </div>
                {errors.employerName && (
                  <span className="error-message">{errors.employerName}</span>
                )}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Employer Address *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="employerAddress"
                    value={formData.employerAddress}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.employerAddress ? "error" : ""
                    }`}
                    placeholder="Enter employer address"
                  />
                  <span className="input-icon">📬</span>
                </div>
                {errors.employerAddress && (
                  <span className="error-message">
                    {errors.employerAddress}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Designation</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter designation"
                  />
                  <span className="input-icon">💼</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Phone No. *</span>
                </label>
                <div className="input-container">
                  <input
                    type="tel"
                    name="employerPhoneNo"
                    value={formData.employerPhoneNo}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.employerPhoneNo ? "error" : ""
                    }`}
                    placeholder="Enter phone number"
                  />
                  <span className="input-icon">📞</span>
                </div>
                {errors.employerPhoneNo && (
                  <span className="error-message">
                    {errors.employerPhoneNo}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Past Occupation, if any</span>
                </label>
                <div className="select-container">
                  <select
                    name="pastOccupation"
                    value={formData.pastOccupation}
                    onChange={handleChange}
                    className="field-select"
                  >
                    <option value="">Select Past Occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field full-width">
                <label className="field-label">
                  <span className="label-text">
                    Are/were you in Military/Security/Police Organization? *
                  </span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inMilitaryOrganization"
                      value="Yes"
                      checked={formData.inMilitaryOrganization === "Yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="inMilitaryOrganization"
                      value="No"
                      checked={formData.inMilitaryOrganization === "No"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>

              Military Organization Fields - Only show if Yes is selected
              {formData.inMilitaryOrganization === "Yes" && (
                <div className="military-fields full-width">
                  <div className="form-grid">
                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Organization *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          className={`field-input ${
                            errors.organizationName ? "error" : ""
                          }`}
                          placeholder="Enter organization name"
                        />
                        <span className="input-icon">🏛️</span>
                      </div>
                      {errors.organizationName && (
                        <span className="error-message">
                          {errors.organizationName}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Designation *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationDesignation"
                          value={formData.organizationDesignation}
                          onChange={handleChange}
                          className={`field-input ${
                            errors.organizationDesignation ? "error" : ""
                          }`}
                          placeholder="Enter designation"
                        />
                        <span className="input-icon">💼</span>
                      </div>
                      {errors.organizationDesignation && (
                        <span className="error-message">
                          {errors.organizationDesignation}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Rank *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationRank"
                          value={formData.organizationRank}
                          onChange={handleChange}
                          className={`field-input ${
                            errors.organizationRank ? "error" : ""
                          }`}
                          placeholder="Enter rank"
                        />
                        <span className="input-icon">⭐</span>
                      </div>
                      {errors.organizationRank && (
                        <span className="error-message">
                          {errors.organizationRank}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        <span className="label-text">Place of Position *</span>
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          name="organizationPlace"
                          value={formData.organizationPlace}
                          onChange={handleChange}
                          className={`field-input ${
                            errors.organizationPlace ? "error" : ""
                          }`}
                          placeholder="Enter place of position"
                        />
                        <span className="input-icon">📍</span>
                      </div>
                      {errors.organizationPlace && (
                        <span className="error-message">
                          {errors.organizationPlace}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
                Processing Application...
              </>
            ) : (
              <>
                <span>Submit and Next</span>
                <span className="button-arrow">→</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="form-footer">
          <p>🔒 Your information is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Apply3;
