import React, { useState } from 'react';

const Apply2 = () => {
  const [formData, setFormData] = useState({
    applicationType: 'Normal Processing',
    protOfArrival:'Delhi Airport',
    surname: '',
    givenName: '',
    previousSurname: '',
    previousName: '',
    nameChanged: false,
    gender: '',
    dateOfBirth: '',
    cityOfBirth: '',
    countryOfBirth: '',
    nationalId: '',
    religion: '',
    identificationMark: '',
    education: '',
    nationality: '',
    nationalityAcquired: '',
    livedInCountry: '',
    passportNumber: '',
    passportPlaceOfIssue: '',
    passportDateOfIssue: '',
    passportDateOfExpiry: '',
    otherPassport: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'UNITED ARAB EMIRATES', 'DENMARK', 'UNITED STATES', 'UNITED KINGDOM', 'CANADA', 'AUSTRALIA'
  ];

  const religions = [
    'CHRISTIAN', 'MUSLIM', 'HINDU', 'BUDDHIST', 'JEWISH', 'OTHER'
  ];

  const educationLevels = [
    'HIGHER SECONDARY', 'GRADUATE', 'POST GRADUATE', 'DOCTORATE', 'OTHER'
  ];

  const genders = ['SELECT GENDER','MALE', 'FEMALE', 'OTHER'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    alert('Application submitted successfully!');
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
          <h1 className="form-title">e-Visa Application</h1>
          <p className="form-subtitle">Complete your visa application form</p>
          <div className="application-id">
            Temporary Application ID: <strong>DEH2024K077M</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '50%'}}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="enhanced-visa-form">
          {/* Application Type Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2>Application Information</h2>
            </div>
            
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
                    style={{backgroundColor: '#f8f9fa'}}
                  />
                  {/* <span className="input-icon">✈️</span> */}
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Port of Arrival *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    value={formData.protOfArrival}
                    readOnly
                    className="field-input"
                    style={{backgroundColor: '#f8f9fa'}}
                  />
                  <span className="input-icon">✈️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2>Personal Details</h2>
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
                    className="field-input"
                  />
                  <span className="input-icon">👤</span>
                </div>
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
                    className="field-input"
                  />
                  <span className="input-icon">📝</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Name Changed</span>
                </label>
                <div className="checkbox-container">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="nameChanged"
                      checked={formData.nameChanged}
                      onChange={handleChange}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    Have you ever changed your name?
                  </label>
                </div>
              </div>

                  {/* Show previous name fields only when checkbox is checked */}
                    {formData.nameChanged && (
                        <div className="previous-name-fields">
                        <div className="form-grid">
                            <div className="form-field">
                            <label className="field-label">
                                <span className="label-text">Previous Surname</span>
                            </label>
                            <div className="input-container">
                                <input
                                type="text"
                                name="previousSurname"
                                value={formData.previousSurname}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="Enter previous surname"
                                />
                                <span className="input-icon">👤</span>
                            </div>
                            </div>

                            <div className="form-field">
                            <label className="field-label">
                                <span className="label-text">Previous Name</span>
                            </label>
                            <div className="input-container">
                                <input
                                type="text"
                                name="previousGivenName"
                                value={formData.previousName}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="Enter previous given name"
                                />
                                <span className="input-icon">📝</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    )}

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Gender *</span>
                </label>
                <div className="select-container">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="field-select"
                  >
                    {genders.map(gender => (
                      <option key={gender} value={gender}>{gender}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
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
                    className="field-input"
                  />
                  <span className="input-icon">📅</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Town / City of Birth *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="cityOfBirth"
                    value={formData.cityOfBirth}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">🏙️</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Country of Birth *</span>
                </label>
                <div className="select-container">
                  <select
                    name="countryOfBirth"
                    value={formData.countryOfBirth}
                    onChange={handleChange}
                    className="field-select"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Citizenship / National ID Number *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">🆔</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Religion *</span>
                </label>
                <div className="select-container">
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="field-select"
                  >
                    {religions.map(religion => (
                      <option key={religion} value={religion}>{religion}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Visible Identification Mark</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="identificationMark"
                    value={formData.identificationMark}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">🔍</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Educational Qualification *</span>
                </label>
                <div className="select-container">
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="field-select"
                  >
                    {educationLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
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
                    className="field-select"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Nationality Acquired By / Naturalization *</span>
                </label>
                <div className="select-container">
                  <select
                    name="nationalityAcquired"
                    value={formData.nationalityAcquired}
                    onChange={handleChange}
                    className="field-select"
                  >
                    <option value="">Select Nationality</option>
                    <option value="By birth">By birth</option>
                    <option value="By naturalization">By naturalization</option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="form-field full-width">
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
                      checked={formData.livedInCountry === 'Yes'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="livedInCountry"
                      value="No"
                      checked={formData.livedInCountry === 'No'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Passport Details Section */}
          <div className="form-section">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2>Passport Details</h2>
            </div>
            
            <div className="form-grid">
              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Passport Number *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">📘</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Place of Issue *</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    name="passportPlaceOfIssue"
                    value={formData.passportPlaceOfIssue}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">🏛️</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Date of Issue *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="passportDateOfIssue"
                    value={formData.passportDateOfIssue}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">📅</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">
                  <span className="label-text">Date of Expiry *</span>
                </label>
                <div className="input-container">
                  <input
                    type="date"
                    name="passportDateOfExpiry"
                    value={formData.passportDateOfExpiry}
                    onChange={handleChange}
                    className="field-input"
                  />
                  <span className="input-icon">📅</span>
                </div>
              </div>

              <div className="form-field full-width">
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
                      value="Yes"
                      checked={formData.otherPassport === 'Yes'}
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
                      value="No"
                      checked={formData.otherPassport === 'No'}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
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

        {/* Footer */}
        <div className="form-footer">
          <p>🔒 Your information is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Apply2;