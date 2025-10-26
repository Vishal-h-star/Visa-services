import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  getApplicationDataById,
  applicationSubmitStep2,
} from "../../apiCalls/visaApplication";
import {
  nationalities,
  religions,
  genders,
  educationLevels,
} from "../../assets/data/FormData";
import { toast } from "react-toastify";

const Apply2 = () => {
  const navigate = useNavigate();
  const params = useParams();

  // initialize today and tenYearsAgo helpers once
  const today = new Date();
  const tenYearsAgo = new Date();
  tenYearsAgo.setFullYear(today.getFullYear() - 10);
  tenYearsAgo.setHours(0, 0, 0, 0);

  const [formData, setFormData] = useState({
    applicationType: "",
    portOfArrival: "",
    surname: "",
    givenName: "",
    previousSurname: "",
    previousName: "",
    nameChanged: false,
    gender: "",
    dateOfBirth: "",
    cityOfBirth: "",
    countryOfBirth: "",
    nationalId: "",
    religion: "",
    identificationMark: "",
    education: "",
    nationality: "",
    nationalityAcquired: "",
    nationalityAcquiredDetails: "",
    livedInCountry: "",
    passportNumber: "",
    passportPlaceOfIssue: "",
    passportDateOfIssue: "",
    passportDateOfExpiry: "",
    otherPassport: "",
    otherPassportCountryOfIssue: "",
    otherPassport_PassportNo: "",
    otherPassportDateOfIssue: "",
    otherPassportPlaceOfIssue: "",
    otherPassportNationaliyMentioned: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // fetch application data if editing
  const getApplicationData = async () => {
    try {
      const res = await getApplicationDataById(params.id);
      console.log(res, "res daa of application");
      if (res.status === 200 && res.data && res.data.data) {
        // merge to keep all keys
        setFormData((prev) => ({ ...prev, ...res.data.data }));
      }
    } catch (err) {
      console.error("Error fetching application data:", err);
    }
  };

  useEffect(() => {
    if (params?.id) getApplicationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newVal }));

    // clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // helper: accurate age calculation (considers month/day)
  const calculateAge = (dobString) => {
    if (!dobString) return null;
    const dob = new Date(dobString);
    const todayLocal = new Date();
    let age = todayLocal.getFullYear() - dob.getFullYear();
    const m = todayLocal.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && todayLocal.getDate() < dob.getDate())) age--;
    return age;
  };

  const validateForm = () => {
    const newErrors = {};

    // list of base required fields (match your UI)
    const requiredFields = [
      "applicationType",
      "portOfArrival",
      "surname",
      "givenName",
      "gender",
      "dateOfBirth",
      "cityOfBirth",
      "countryOfBirth",
      "nationalId",
      "religion",
      "education",
      "nationality",
      "nationalityAcquired",
      "livedInCountry",
      "passportNumber",
      "passportPlaceOfIssue",
      "passportDateOfIssue",
      "passportDateOfExpiry",
    ];

    requiredFields.forEach((f) => {
      const val = formData[f];
      if (
        val === undefined ||
        val === null ||
        (typeof val === "string" && val.trim() === "")
      ) {
        newErrors[f] = "This field is required";
      }
    });

    // conditional: previous names if nameChanged
    if (formData.nameChanged) {
      if (
        !formData.previousSurname ||
        (typeof formData.previousSurname === "string" &&
          formData.previousSurname.trim() === "")
      ) {
        newErrors.previousSurname = "Please enter previous surname";
      }
      if (
        !formData.previousName ||
        (typeof formData.previousName === "string" &&
          formData.previousName.trim() === "")
      ) {
        newErrors.previousName = "Please enter previous given name";
      }
    }

    // conditional: nationality acquired details
    if (formData.nationalityAcquired === "By naturalization") {
      if (
        !formData.nationalityAcquiredDetails ||
        (typeof formData.nationalityAcquiredDetails === "string" &&
          formData.nationalityAcquiredDetails.trim() === "")
      ) {
        newErrors.nationalityAcquiredDetails =
          "Please select previous nationality";
      }
    }

    // conditional: other passport fields required when otherPassport === "true"
    if (formData.otherPassport === "true") {
      const otherReq = [
        "otherPassportCountryOfIssue",
        "otherPassport_PassportNo",
        "otherPassportDateOfIssue",
        "otherPassportPlaceOfIssue",
        "otherPassportNationaliyMentioned",
      ];
      otherReq.forEach((f) => {
        const val = formData[f];
        if (
          val === undefined ||
          val === null ||
          (typeof val === "string" && val.trim() === "")
        ) {
          newErrors[f] = "This field is required";
        }
      });
    }

    // DOB age validation (>=18) with accurate month/day check
    if (formData.dateOfBirth) {
      const age = calculateAge(formData.dateOfBirth);
      if (age === null) {
        newErrors.dateOfBirth = "Invalid date";
      } else if (age < 18) {
        newErrors.dateOfBirth = "Applicant must be at least 18 years old";
      }
    }

    // Passport Date of Issue validation: must be within last 10 years and not future
    if (formData.passportDateOfIssue) {
      const issue = new Date(formData.passportDateOfIssue);
      // normalize to midnight for comparison
      issue.setHours(0, 0, 0, 0);
      const minIssue = new Date(tenYearsAgo);
      minIssue.setHours(0, 0, 0, 0);
      const maxIssue = new Date();
      maxIssue.setHours(23, 59, 59, 999);

      if (issue < minIssue || issue > maxIssue) {
        newErrors.passportDateOfIssue =
          "Issue date must be within the last 10 years";
      }
    }

    // otherPassportDateOfIssue same constraint when present
    if (formData.otherPassportDateOfIssue) {
      const issue = new Date(formData.otherPassportDateOfIssue);
      issue.setHours(0, 0, 0, 0);
      const minIssue = new Date(tenYearsAgo);
      minIssue.setHours(0, 0, 0, 0);
      const maxIssue = new Date();
      maxIssue.setHours(23, 59, 59, 999);

      if (issue < minIssue || issue > maxIssue) {
        newErrors.otherPassportDateOfIssue =
          "Issue date must be within the last 10 years";
      }
    }

    // Passport expiry must be after issue
    if (formData.passportDateOfIssue && formData.passportDateOfExpiry) {
      const issue = new Date(formData.passportDateOfIssue);
      const expiry = new Date(formData.passportDateOfExpiry);
      issue.setHours(0, 0, 0, 0);
      expiry.setHours(0, 0, 0, 0);
      if (expiry <= issue) {
        newErrors.passportDateOfExpiry =
          "Expiry date must be after the issue date";
      }
    }

    // otherPassport expiry (if present) - if you had such a field, you'd validate similarly
    // (not present in original form; left out)

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = validateForm();
    if (!ok) {
      toast.error("Please correct the highlighted errors before continuing.");
      // optional: scroll to first error (not included automatically)
      return;
    }

    try {
      setIsSubmitting(true);
      console.log("Form Data:", formData);
      const res = await applicationSubmitStep2(formData, params.id);

  
  
      setIsSubmitting(false);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
       // toast.success(`🦄 ${res.data.message}`);
        navigate(`/apply3/${res.data.data.uniqueId}`);
      } else {
        toast.error(`Some Error Happens!!`);
      }
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
      toast.error("Error submitting application");
    }
  };

  // helpers for DatePicker change handlers (to keep error clearing inline)
  const handleDateChange = (name, date) => {
    const formatted = date ? date.toISOString().split("T")[0] : "";
    setFormData((prev) => ({ ...prev, [name]: formatted }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="enhanced-visa-container">
      {/* Background Elements (kept as in your original) */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="enhanced-visa-card">
        {/* Header Section */}
        <div className="form-header-section">
          <h1 className="form-title">e-Visa Application</h1>
          <div className="application-id">
            Temporary Application ID: <strong>{params?.id}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="enhanced-visa-form">
          {/* Combined Personal + Passport Details Section */}
          <div className="form-section">
            <div className="section-header centered">
              <h2>Application Detail Form</h2>
            </div>

            <div className="form-grid full-row">
              {/* Personal Details */}
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Surname *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname || ""}
                    onChange={handleChange}
                    className={`field-input ${errors.surname ? "error" : ""}`}
                  />
                </div>
                {errors.surname && (
                  <span className="error-message">{errors.surname}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Given Name *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="givenName"
                    value={formData.givenName || ""}
                    onChange={handleChange}
                    className={`field-input ${errors.givenName ? "error" : ""}`}
                  />
                </div>
                {errors.givenName && (
                  <span className="error-message">{errors.givenName}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Name Changed</span>
                </label>
                <div className="checkbox-container">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="nameChanged"
                      checked={!!formData.nameChanged}
                      onChange={handleChange}
                      className="checkbox-input"
                    />
                    Have you ever changed your name?
                  </label>
                </div>
              </div>

              {formData.nameChanged && (
                <>
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Previous Surname</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="previousSurname"
                        value={formData.previousSurname || ""}
                        onChange={handleChange}
                        className={`field-input ${
                          errors.previousSurname ? "error" : ""
                        }`}
                      />
                    </div>
                    {errors.previousSurname && (
                      <span className="error-message">
                        {errors.previousSurname}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Previous Given Name</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="previousName"
                        value={formData.previousName || ""}
                        onChange={handleChange}
                        className={`field-input ${
                          errors.previousName ? "error" : ""
                        }`}
                      />
                    </div>
                    {errors.previousName && (
                      <span className="error-message">{errors.previousName}</span>
                    )}
                  </div>
                </>
              )}

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Gender *</span>
                </label>
                <div className="select-container">
                  <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    className={`field-select ${errors.gender ? "error" : ""}`}
                  >
                    <option value="">Select Gender</option>
                    {genders.map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.gender && (
                  <span className="error-message">{errors.gender}</span>
                )}
              </div>

              {/* Date of Birth */}
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Date of Birth *</span>
                </label>
                <div className="input-container">
                  <DatePicker
                    selected={
                      formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
                    }
                    onChange={(date) =>
                      handleDateChange(
                        "dateOfBirth",
                        date ? date : null
                      )
                    }
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select your date of birth"
                    className={`field-input ${
                      errors.dateOfBirth ? "error" : ""
                    }`}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={new Date()}
                  />
                </div>
                {errors.dateOfBirth && (
                  <span className="error-message">{errors.dateOfBirth}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Town / City of Birth *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="cityOfBirth"
                    value={formData.cityOfBirth || ""}
                    onChange={handleChange}
                    className={`field-input ${errors.cityOfBirth ? "error" : ""}`}
                  />
                </div>
                {errors.cityOfBirth && (
                  <span className="error-message">{errors.cityOfBirth}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Country of Birth *</span>
                </label>
                <div className="select-container">
                  <select
                    name="countryOfBirth"
                    value={formData.countryOfBirth || ""}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.countryOfBirth ? "error" : ""
                    }`}
                  >
                    <option value="">Select Country of birth</option>
                    {nationalities.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.countryOfBirth && (
                  <span className="error-message">{errors.countryOfBirth}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">National ID *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId || ""}
                    onChange={handleChange}
                    className={`field-input ${errors.nationalId ? "error" : ""}`}
                  />
                </div>
                {errors.nationalId && (
                  <span className="error-message">{errors.nationalId}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Religion *</span>
                </label>
                <div className="select-container">
                  <select
                    name="religion"
                    value={formData.religion || ""}
                    onChange={handleChange}
                    className={`field-select ${errors.religion ? "error" : ""}`}
                  >
                    <option value=""> Select your religion</option>
                    {religions.map((religion) => (
                      <option key={religion} value={religion}>
                        {religion}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.religion && (
                  <span className="error-message">{errors.religion}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Visible Identification Mark</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="identificationMark"
                    value={formData.identificationMark || ""}
                    onChange={handleChange}
                    className="field-input"
                  />
                </div>
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Educational Qualification *</span>
                </label>
                <div className="select-container">
                  <select
                    name="education"
                    value={formData.education || ""}
                    onChange={handleChange}
                    className={`field-select ${errors.education ? "error" : ""}`}
                  >
                    <option value="">Select Qualification</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.education && (
                  <span className="error-message">{errors.education}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Nationality *</span>
                </label>
                <div className="select-container">
                  <select
                    name="nationality"
                    value={formData.nationality || ""}
                    onChange={handleChange}
                    className={`field-select ${errors.nationality ? "error" : ""}`}
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
                {errors.nationality && (
                  <span className="error-message">{errors.nationality}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">
                    Did you acquire Nationality by birth or by naturalization? *
                  </span>
                </label>
                <div className="select-container">
                  <select
                    name="nationalityAcquired"
                    value={formData.nationalityAcquired || ""}
                    onChange={handleChange}
                    className={`field-select ${
                      errors.nationalityAcquired ? "error" : ""
                    }`}
                  >
                    <option value="">Select Nationality</option>
                    <option value="By birth">By Birth</option>
                    <option value="By naturalization">Naturalization</option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.nationalityAcquired && (
                  <span className="error-message">
                    {errors.nationalityAcquired}
                  </span>
                )}
              </div>

              {formData.nationalityAcquired === "By naturalization" && (
                <div className="form-field form-field-inline">
                  <label className="field-label">
                    <span className="label-text"> Prev. Nationality: *</span>
                  </label>
                  <div className="select-container">
                    <select
                      name="nationalityAcquiredDetails"
                      value={formData.nationalityAcquiredDetails || ""}
                      onChange={handleChange}
                      className={`field-select ${
                        errors.nationalityAcquiredDetails ? "error" : ""
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
                  {errors.nationalityAcquiredDetails && (
                    <span className="error-message">
                      {errors.nationalityAcquiredDetails}
                    </span>
                  )}
                </div>
              )}

              <div className="form-field form-field-inline">
                <label className="field-label">

                  <span className="label-text">
                    Have you lived for at least two years in the country where you are applying visa? *
                  </span>

                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="livedInCountry"
                      value="Yes"
                      checked={formData.livedInCountry === "Yes"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="livedInCountry"
                      value="No"
                      checked={formData.livedInCountry === "No"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
                {errors.livedInCountry && (
                  <span className="error-message">{errors.livedInCountry}</span>
                )}
              </div>

              <div className="section-header centered">
                <h2>Passport Details</h2>
              </div>

              {/* Passport Details */}
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Passport Number *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber || ""}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.passportNumber ? "error" : ""
                    }`}
                  />
                </div>
                {errors.passportNumber && (
                  <span className="error-message">{errors.passportNumber}</span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Place of Issue *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="passportPlaceOfIssue"
                    value={formData.passportPlaceOfIssue || ""}
                    onChange={handleChange}
                    className={`field-input ${
                      errors.passportPlaceOfIssue ? "error" : ""
                    }`}
                  />
                </div>
                {errors.passportPlaceOfIssue && (
                  <span className="error-message">
                    {errors.passportPlaceOfIssue}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Date of Issue *</span>
                </label>
                <div className="input-container">
                  <DatePicker
                    selected={
                      formData.passportDateOfIssue
                        ? new Date(formData.passportDateOfIssue)
                        : null
                    }
                    onChange={(date) => handleDateChange("passportDateOfIssue", date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select issue date"
                    className={`field-input ${
                      errors.passportDateOfIssue ? "error" : ""
                    }`}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    // allow selection from tenYearsAgo up to today
                    minDate={tenYearsAgo}
                    maxDate={today}
                  />
                </div>
                {errors.passportDateOfIssue && (
                  <span className="error-message">
                    {errors.passportDateOfIssue}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">Date of Expiry *</span>
                </label>
                <div className="input-container">
                  <DatePicker
                    selected={
                      formData.passportDateOfExpiry
                        ? new Date(formData.passportDateOfExpiry)
                        : null
                    }
                    onChange={(date) => handleDateChange("passportDateOfExpiry", date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select expiry date"
                    className={`field-input ${
                      errors.passportDateOfExpiry ? "error" : ""
                    }`}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
                {errors.passportDateOfExpiry && (
                  <span className="error-message">
                    {errors.passportDateOfExpiry}
                  </span>
                )}
              </div>

              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">
                    Any other valid Passport/Nationality Certificate/ID card? *
                  </span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="otherPassport"
                      value="true"
                      checked={formData.otherPassport === "true"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="otherPassport"
                      value="false"
                      checked={formData.otherPassport === "false"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
                {errors.otherPassport && (
                  <span className="error-message">{errors.otherPassport}</span>
                )}
              </div>

              {formData.otherPassport === "true" && (
                <>
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Country of Issue *</span>
                    </label>
                    <div className="select-container">
                      <select
                        name="otherPassportCountryOfIssue"
                        value={formData.otherPassportCountryOfIssue || ""}
                        onChange={handleChange}
                        className={`field-select ${
                          errors.otherPassportCountryOfIssue ? "error" : ""
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
                    {errors.otherPassportCountryOfIssue && (
                      <span className="error-message">
                        {errors.otherPassportCountryOfIssue}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Passport No *</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="otherPassport_PassportNo"
                        value={formData.otherPassport_PassportNo || ""}
                        onChange={handleChange}
                        className={`field-input ${
                          errors.otherPassport_PassportNo ? "error" : ""
                        }`}
                      />
                    </div>
                    {errors.otherPassport_PassportNo && (
                      <span className="error-message">
                        {errors.otherPassport_PassportNo}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Date of Issue *</span>
                    </label>
                    <div className="input-container">
                      <DatePicker
                        selected={
                          formData.otherPassportDateOfIssue
                            ? new Date(formData.otherPassportDateOfIssue)
                            : null
                        }
                        onChange={(date) =>
                          handleDateChange("otherPassportDateOfIssue", date)
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select other passport issue date"
                        className={`field-input ${
                          errors.otherPassportDateOfIssue ? "error" : ""
                        }`}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        minDate={tenYearsAgo}
                        maxDate={today}
                      />
                    </div>
                    {errors.otherPassportDateOfIssue && (
                      <span className="error-message">
                        {errors.otherPassportDateOfIssue}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">Place of Issue *</span>
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="otherPassportPlaceOfIssue"
                        value={formData.otherPassportPlaceOfIssue || ""}
                        onChange={handleChange}
                        className={`field-input ${
                          errors.otherPassportPlaceOfIssue ? "error" : ""
                        }`}
                      />
                    </div>
                    {errors.otherPassportPlaceOfIssue && (
                      <span className="error-message">
                        {errors.otherPassportPlaceOfIssue}
                      </span>
                    )}
                  </div>

                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Nationality Mentioned Therein *
                      </span>
                    </label>
                    <div className="select-container">
                      <select
                        name="otherPassportNationaliyMentioned"
                        value={formData.otherPassportNationaliyMentioned || ""}
                        onChange={handleChange}
                        className={`field-select ${
                          errors.otherPassportNationaliyMentioned ? "error" : ""
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
                    {errors.otherPassportNationaliyMentioned && (
                      <span className="error-message">
                        {errors.otherPassportNationaliyMentioned}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

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
                <span>Submit Application</span>
                <span className="button-arrow">→</span>
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <p>🔒 Your information is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Apply2;
