// EnhancedVisaForm.jsx
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getApplicationDataById,
  applicationSubmitStep1,
} from "../../apiCalls/visaApplication";
import { useParams } from "react-router-dom";
import {
  nationalities,
  portsOfArrival,
  visaServices,
  applicationTypes,
} from "../../assets/data/FormData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Apply1 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    applicationType: "",
    passportType: "",
    surname: "",
    givenName: "",
    nationality: "",
    portOfArrival: "",
    dateOfBirth: "",
    email: "",
    confirmEmail: "",
    contactNo: "",
    expectedArrival: "",
    visaService: "",
    serviceSubCategory: "",
    serviceSubCat_subCategory: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getApplicationData = async () => {
    const res = await getApplicationDataById(params.id);
    console.log(res, "res daa of application");
    if (res.status === 200) {
      console.log(res.data.data, "res data from application");
      setFormData(res.data.data);
    }
  };

  useEffect(() => {
    getApplicationData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      "applicationType",
      "passportType",
      "surname",
      "givenName",
      "nationality",
      "portOfArrival",
      "dateOfBirth",
      "email",
      "confirmEmail",
      "contactNo",
      "expectedArrival",
      "visaService",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    // Service sub category validation
    const selectedService = visaServices.find(
      (service) => service.value === formData.visaService
    );
    if (
      selectedService &&
      selectedService.options &&
      selectedService.options.length > 0 &&
      !formData.serviceSubCategory
    ) {
      newErrors.serviceSubCategory = "Please select a service sub category";
    }

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Email confirmation validation
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
    }

    // Contact number validation
    if (formData.contactNo && !/^\+\d{1,3}\d{7,15}$/.test(formData.contactNo)) {
      newErrors.contactNo =
        "Please enter a valid contact number with country code (e.g., +1234567890)";
    }

    // Date validation
    const today = new Date();
    const expectedArrival = new Date(formData.expectedArrival);
    if (formData.expectedArrival && expectedArrival <= today) {
      newErrors.expectedArrival = "Expected arrival date must be in the future";
    }

    const dob = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - dob.getFullYear();
    if (formData.dateOfBirth && age < 18) {
      newErrors.dateOfBirth = "Applicant must be at least 18 years old";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

      e.preventDefault();
      console.log("Form Data:", formData);
      console.log("hitting api");
      const res = await applicationSubmitStep1(formData, params.id);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        // toast.success(`🦄 ${res.data.message}`);
        // setIsSubmitting(true);
        setIsSubmitting(false);
        navigate(`/apply2/${res.data.data.uniqueId}`);
      } else {
        toast.error(`Some Error Happens!!`);
      }
    };

  return (
    <div className="enhanced-visa-container">
      {/* Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="enhanced-visa-card">
        {/* Header Section */}
        <div className="form-header-section">
          <h1 className="form-title">E-Visa Application</h1>
        </div>

        <form onSubmit={handleSubmit} className="enhanced-visa-form">
          {/* Single Column Form Fields with Horizontal Layout */}
          <div className="form-section">
            <div className="form-fields-single-column">
              {/* Application Type */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Application Type *</span>
                </label>
                <div className="select-container">
                  <select
                    name="applicationType"
                    value={formData.applicationType}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.applicationType ? "error" : ""
                    }`}
                  >
                    <option value="">Select Application Type</option>
                    {applicationTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.applicationType && (
                  <span className="error-message">
                    {errors.applicationType}
                  </span>
                )}
              </div>

              {/* Passport Type */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Passport Type *</span>
                </label>
                <div className="select-container">
                  <select
                    name="passportType"
                    value={formData.passportType}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.passportType ? "error" : ""
                    }`}
                  >
                    <option value="">Select Passport Type</option>
                    <option value="ordinary">Ordinary Passport</option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.passportType && (
                  <span className="error-message">{errors.passportType}</span>
                )}
              </div>

              {/* Surname */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Surname *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`field-input ${errors.surname ? "error" : ""}`}
                    placeholder="Enter your surname"
                  />
                </div>
                {errors.surname && (
                  <span className="error-message">{errors.surname}</span>
                )}
              </div>

              {/* Given Name */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Given Name *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="givenName"
                    value={formData.givenName}
                    onChange={handleChange}
                    className={`field-input ${errors.givenName ? "error" : ""}`}
                    placeholder="Enter your given name"
                  />
                </div>
                {errors.givenName && (
                  <span className="error-message">{errors.givenName}</span>
                )}
              </div>

              {/* Nationality */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Nationality *</span>
                </label>
                <div className="select-container">
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.nationality ? "error" : ""
                    }`}
                  >
                    <option value="">Select Nationality</option>
                    {nationalities
                      .filter((option) => option.status === true)
                      .map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.nationality && (
                  <span className="error-message">{errors.nationality}</span>
                )}
              </div>

              {/* Port of Arrival */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Port Of Arrival *</span>
                </label>
                <div className="select-container">
                  <select
                    name="portOfArrival"
                    value={formData.portOfArrival}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.portOfArrival ? "error" : ""
                    }`}
                  >
                    <option value="">Select Port Of Arrival</option>
                    {portsOfArrival.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.portOfArrival && (
                  <span className="error-message">{errors.portOfArrival}</span>
                )}
              </div>

              {/* Date of Birth */}
              {/* <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Date of Birth *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.dateOfBirth ? "error" : ""
                    }`}
                  />
                </div>
                {errors.dateOfBirth && (
                  <span className="error-message">{errors.dateOfBirth}</span>
                )}
              </div> */}

              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Date of Birth *</span>
                </label>
                <div className="input-container">
                  <DatePicker
                    selected={
                      formData.dateOfBirth
                        ? new Date(formData.dateOfBirth)
                        : null
                    }
                    onChange={(date) => {
                      const formattedDate = date
                        ? date.toISOString().split("T")[0]
                        : "";
                      handleChange({
                        target: { name: "dateOfBirth", value: formattedDate },
                      });
                    }}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select your date of birth"
                    className={`field-input ${
                      errors.dateOfBirth ? "error" : ""
                    }`}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={new Date()} // restrict DOB to past dates
                  />
                </div>
                {errors.dateOfBirth && (
                  <span className="error-message">{errors.dateOfBirth}</span>
                )}
              </div>

              {/* Email */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Email *</span>
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field-input ${errors.email ? "error" : ""}`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* Confirm Email */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Re-enter Email *</span>
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.confirmEmail ? "error" : ""
                    }`}
                    placeholder="confirm@email.com"
                  />
                </div>
                {errors.confirmEmail && (
                  <span className="error-message">{errors.confirmEmail}</span>
                )}
              </div>

              {/* Contact Number */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">
                    Contact No. with Country Code *
                  </span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className={`field-input ${errors.contactNo ? "error" : ""}`}
                    placeholder="+1234567890"
                  />
                </div>
                {errors.contactNo && (
                  <span className="error-message">{errors.contactNo}</span>
                )}
              </div>

              {/* Expected Arrival Date */}
              {/* <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Expected Date of Arrival *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="expectedArrival"
                    value={formData.expectedArrival}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.expectedArrival ? "error" : ""
                    }`}
                  />
                </div>
                {errors.expectedArrival && (
                  <span className="error-message">
                    {errors.expectedArrival}
                  </span>
                )}
              </div> */}
              <div className="form-field-horizontal">
                <label className="field-label">
                  <span className="label-text">Expected Date of Arrival *</span>
                </label>
                <div className="input-container">
                  <DatePicker
                    selected={
                      formData.expectedArrival
                        ? new Date(formData.expectedArrival)
                        : null
                    }
                    onChange={(date) => {
                      const formattedDate = date
                        ? date.toISOString().split("T")[0]
                        : "";
                      handleChange({
                        target: {
                          name: "expectedArrival",
                          value: formattedDate,
                        },
                      });
                    }}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select expected arrival date"
                    className={`field-input ${
                      errors.expectedArrival ? "error" : ""
                    }`}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    minDate={new Date()} // restrict to future dates only
                  />
                </div>
                {errors.expectedArrival && (
                  <span className="error-message">
                    {errors.expectedArrival}
                  </span>
                )}
              </div>

              {/* Visa Service - Fixed structure with subcategories below each service */}
              <div className="form-field-horizontal radio-field">
                <label className="field-label">
                  <span className="label-text">Visa Service *</span>
                </label>

                <div className="radio-buttons-container">
                  <div className="radio-buttons-horizontal">
                    {visaServices.map((service) => (
                      <div
                        key={service.value}
                        className="service-option-wrapper"
                      >
                        {/* --- Main Visa Service --- */}
                        <label className="radio-button-label">
                          <input
                            type="radio"
                            name="visaService"
                            value={service.value}
                            checked={formData.visaService === service.value}
                            onChange={handleChange}
                            className="radio-button-input"
                          />
                          <span className="radio-button-text">
                            {service.label}
                          </span>
                        </label>

                        {/* --- Subcategories (Level 2) --- */}
                        {service.options &&
                          formData.visaService === service.value && (
                            <div
                              className={`nested-options ${
                                errors.serviceSubCategory ? "error" : ""
                              }`}
                            >
                              <div className="radio-buttons-horizontal">
                                {service.options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="nested-group"
                                  >
                                    <label
                                      className={`radio-button-label nested ${
                                        formData.serviceSubCategory ===
                                        option.value
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name="serviceSubCategory"
                                        value={option.value}
                                        checked={
                                          formData.serviceSubCategory ===
                                          option.value
                                        }
                                        onChange={handleChange}
                                        className="radio-button-input"
                                      />
                                      <span className="radio-button-text">
                                        {option.label}
                                      </span>
                                    </label>

                                    {/* --- Sub-options (Level 3) --- */}
                                    {option.subOption &&
                                      formData.serviceSubCategory ===
                                        option.value && (
                                        <div className="nested-options level3">
                                          {option.subOption.map((sub) => (
                                            <label
                                              key={sub.value}
                                              className={`radio-button-label nested ${
                                                formData.serviceSubCat_subCategory ===
                                                sub.value
                                                  ? "active"
                                                  : ""
                                              }`}
                                            >
                                              <input
                                                type="radio"
                                                name="serviceSubCat_subCategory"
                                                value={sub.value}
                                                checked={
                                                  formData.serviceSubCat_subCategory ===
                                                  sub.value
                                                }
                                                onChange={handleChange}
                                                className="radio-button-input"
                                              />
                                              <span className="radio-button-text">
                                                {sub.label}
                                              </span>
                                            </label>
                                          ))}
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </div>

                              {errors.serviceSubCategory && (
                                <span className="error-message">
                                  {errors.serviceSubCategory}
                                </span>
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>

                  {errors.visaService && (
                    <span className="error-message">{errors.visaService}</span>
                  )}
                </div>
              </div>

              {/* <div className="form-field-horizontal radio-field">
                <label className="field-label">
                  <span className="label-text">Visa Service *</span>
                </label>

                <div className="radio-buttons-container">
                  <div className="radio-buttons-horizontal">
                    {visaServices.map((service) => (
                      <div
                        key={service.value}
                        className="service-option-wrapper"
                      >
                        
                        <label className="radio-button-label">
                          <input
                            type="radio"
                            name="visaService"
                            value={service.value}
                            checked={formData.visaService === service.value}
                            onChange={handleChange}
                          />
                          <span className="radio-button-text">
                            {service.label}
                          </span>
                        </label>

                       
                        {service.options &&
                          formData.visaService === service.value && (
                            <div
                              className={`nested-options ${
                                errors.serviceSubCategory ? "error" : ""
                              }`}
                            >
                              <div className="radio-buttons-horizontal">
                                {service.options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="nested-group"
                                  >
                                    <label
                                      className={`radio-button-label nested ${
                                        formData.serviceSubCategory ===
                                        option.value
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name="serviceSubCategory"
                                        value={option.value}
                                        checked={
                                          formData.serviceSubCategory ===
                                          option.value
                                        }
                                        onChange={handleChange}
                                      />
                                      <span className="radio-button-text">
                                        {option.label}
                                      </span>
                                    </label>

                                 
                                    {option.subOption &&
                                      formData.serviceSubCategory ===
                                        option.value && (
                                        <div className="nested-options level3">
                                          {option.subOption.map((sub) => (
                                            <label
                                              key={sub.value}
                                              className={`radio-button-label nested ${
                                                formData.serviceSubCat_subCategory ===
                                                sub.value
                                                  ? "active"
                                                  : ""
                                              }`}
                                            >
                                              <input
                                                type="radio"
                                                name="serviceSubCat_subCategory"
                                                value={sub.value}
                                                checked={
                                                  formData.serviceSubCat_subCategory ===
                                                  sub.value
                                                }
                                                onChange={handleChange}
                                              />
                                              <span className="radio-button-text">
                                                {sub.label}
                                              </span>
                                            </label>
                                          ))}
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </div>

                              {errors.serviceSubCategory && (
                                <span className="error-message">
                                  {errors.serviceSubCategory}
                                </span>
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>

                  {errors.visaService && (
                    <span className="error-message">{errors.visaService}</span>
                  )}
                </div>
              </div> */}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Processing Application...
              </>
            ) : (
              <>
                <span>Save and Continue</span>
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

export default Apply1;
