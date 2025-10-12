// EnhancedVisaForm.jsx
import React, { useState } from 'react';
import { nationalities, portsOfArrival, visaServices, applicationTypes } from '../assets/data/FormData';
import { newApplicationSubmit } from '../apiCalls/visaApplication';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const VisaApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationType: '',
    passportType: '',
    surname: '',
    givenName: '',
    nationality: '',
    portOfArrival: '',
    dateOfBirth: '',
    email: '',
    confirmEmail: '',
    contactNo: '',
    expectedArrival: '',
    visaService: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Enhanced dropdown options with icons

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      'applicationType', 'passportType', 'surname', 'givenName',
      'nationality', 'portOfArrival', 'dateOfBirth', 'email',
      'confirmEmail', 'contactNo', 'expectedArrival', 'visaService'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Email confirmation validation
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Emails do not match';
    }

    // Contact number validation
    if (formData.contactNo && !/^\+\d{1,3}\d{7,15}$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Please enter a valid contact number with country code (e.g., +1234567890)';
    }

    // Date validation
    const today = new Date();
    const expectedArrival = new Date(formData.expectedArrival);
    if (formData.expectedArrival && expectedArrival <= today) {
      newErrors.expectedArrival = 'Expected arrival date must be in the future';
    }

    const dob = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - dob.getFullYear();
    if (formData.dateOfBirth && age < 18) {
      newErrors.dateOfBirth = 'Applicant must be at least 18 years old';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // setIsSubmitting(true);

      const res = await newApplicationSubmit(formData);
      if (res.status === 200) {
        console.log(res.data, 'data we get from back')
        // return
        toast.success(`🦄 ${res.data.message}`);
        setIsSubmitting(true);
        navigate(`/apply2/${res.data.data.uniqueId}`); 
      }

      // console.log('Form submitted:', formData);

      // return

      setFormData({
        applicationType: '',
        passportType: '',
        surname: '',
        givenName: '',
        nationality: '',
        portOfArrival: '',
        dateOfBirth: '',
        email: '',
        confirmEmail: '',
        contactNo: '',
        expectedArrival: '',
        visaService: ''
      })
      setIsSubmitting(false);
      // alert('Application submitted successfully!');
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
          <div className="header-icon">🛂</div>
          <h1 className="form-title">E-Visa Application</h1>
          <p className="form-subtitle">Complete your visa application in just a few minutes</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '33%' }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="enhanced-visa-form">
          {/* Personal Information Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2>Personal Information</h2>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Surname *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`field-input ${errors.surname ? 'error' : ''}`}
                    placeholder="Enter your surname"
                  />
                  <span className="input-icon">👤</span>
                </div>
                {errors.surname && <span className="error-message">{errors.surname}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Given Name *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="givenName"
                    value={formData.givenName}
                    onChange={handleChange}
                    className={`field-input ${errors.givenName ? 'error' : ''}`}
                    placeholder="Enter your given name"
                  />
                  <span className="input-icon">📝</span>
                </div>
                {errors.givenName && <span className="error-message">{errors.givenName}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Date of Birth *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`field-input ${errors.dateOfBirth ? 'error' : ''}`}
                  />
                  <span className="input-icon">📅</span>
                </div>
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Nationality *</span>
                </label>
                <div className="select-container">
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={`field-select ${errors.nationality ? 'error' : ''}`}
                  >
                    <option value="">Select your nationality</option>
                    {nationalities.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.flag} {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.nationality && <span className="error-message">{errors.nationality}</span>}
              </div>
            </div>
          </div>

          {/* Travel Details Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2>Travel Details</h2>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Port of Arrival *</span>
                </label>
                <div className="select-container">
                  <select
                    name="portOfArrival"
                    value={formData.portOfArrival}
                    onChange={handleChange}
                    className={`field-select ${errors.portOfArrival ? 'error' : ''}`}
                  >
                    <option value="">Select arrival port</option>
                    {portsOfArrival.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.type === 'airport' ? '✈️' : '🚢'} {option.label} - {option.value}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.portOfArrival && <span className="error-message">{errors.portOfArrival}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Expected Arrival Date *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="expectedArrival"
                    value={formData.expectedArrival}
                    onChange={handleChange}
                    className={`field-input ${errors.expectedArrival ? 'error' : ''}`}
                  />
                  <span className="input-icon">✈️</span>
                </div>
                {errors.expectedArrival && <span className="error-message">{errors.expectedArrival}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Application Type *</span>
                </label>
                <div className="select-container">
                  <select
                    name="applicationType"
                    value={formData.applicationType}
                    onChange={handleChange}
                    className={`field-select ${errors.applicationType ? 'error' : ''}`}
                  >
                    <option value="">Select processing type</option>
                    {applicationTypes.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.icon} {option.label} - {option.description}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.applicationType && <span className="error-message">{errors.applicationType}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Passport Type *</span>
                </label>
                <div className="select-container">
                  <select
                    name="passportType"
                    value={formData.passportType}
                    onChange={handleChange}
                    className={`field-select ${errors.passportType ? 'error' : ''}`}
                  >
                    <option value="">Select passport type</option>
                    <option value="ordinary"> 📘 Ordianry Passport </option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.passportType && <span className="error-message">{errors.passportType}</span>}
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2>Contact Information</h2>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Email Address *</span>
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field-input ${errors.email ? 'error' : ''}`}
                    placeholder="your@email.com"
                  />
                  <span className="input-icon">📧</span>
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Confirm Email *</span>
                </label>
                <div className="input-container">
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className={`field-input ${errors.confirmEmail ? 'error' : ''}`}
                    placeholder="confirm@email.com"
                  />
                  <span className="input-icon">✅</span>
                </div>
                {errors.confirmEmail && <span className="error-message">{errors.confirmEmail}</span>}
              </div>

              <div className="form-field full-width">
                <label className="field-label">
                  <span className="label-text">Contact Number *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className={`field-input ${errors.contactNo ? 'error' : ''}`}
                    placeholder="+1234567890"
                  />
                  <span className="input-icon">📞</span>
                </div>
                {errors.contactNo && <span className="error-message">{errors.contactNo}</span>}
              </div>
            </div>
          </div>

          {/* Visa Service Selection */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2>Visa Service Selection</h2>
            </div>

            <div className="visa-cards-grid">
              {visaServices.map(service => (
                <label key={service.value} className="visa-card">
                  <input
                    type="radio"
                    name="visaService"
                    value={service.value}
                    checked={formData.visaService === service.value}
                    onChange={handleChange}
                    className="visa-card-input"
                  />
                  <div className="visa-card-content">
                    <div className="visa-card-icon" style={{ backgroundColor: service.color }}>
                      {service.icon}
                    </div>
                    <div className="visa-card-text">
                      <h3>{service.label}</h3>
                    </div>
                    <div className="checkmark"></div>
                  </div>
                </label>
              ))}
            </div>
            {errors.visaService && <span className="error-message">{errors.visaService}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            className="submit-button"
          // disabled={isSubmitting}
          >
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

export default VisaApplicationForm;