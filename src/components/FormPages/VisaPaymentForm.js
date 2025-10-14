// VisaPaymentForm.jsx
import React, { useState } from 'react';
import payImage from '../../assets/images/paypal.svg'
import { HiCreditCard } from 'react-icons/hi'; // Heroicons


const VisaPaymentForm = () => {
  const [formData, setFormData] = useState({
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    }
    return value;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Handle payment submission
    console.log('Payment data:', formData);
  };

  return (
    <div className="visa-payment-container">
      <div className="payment-card">
        {/* Header Section */}
        <div className="payment-header">
          <h1 className='payment-heading'>e-Visa Application</h1>
          <h2 className='payment-heading2'>Online e-Visa Fee Payment</h2>
          
          <div className="application-info">
            <div className="info-row">
              <span className="label">Application Type :</span>
              <span className="value">Normal Processing</span>
            </div>
            <div className="info-row">
              <span className="label">Port of arrival :</span>
              <span className="value">DELHI AIRPORT</span>
            </div>
            <div className="info-row">
              <span className="label">Application ID:</span>
              <span className="value">DEN20246677IN</span>
            </div>
            <div className="info-row highlight">
              <span className="label">India e-Visa Fee:</span>
              <span className="value">$65</span>
            </div>
          </div>
        </div>

        {/* Payment Form Section */}
        <div className="payment-form-section">
          <div className="payment-notice">
            <p>
              On pressing "Pay Now" the application will be redirected to Payment Gateway to pay the visa fee and will be outside the control of Visa Online Application. The responsibility of security of transaction process and details on payment page will be of Payment gateway. Bank Payment Gateway accepts both OTP (One Time Password) and non-OTP transactions.
            </p>
            <p>
              In case of any issue, please contact your Bank. Application ID will be blocked after three failed attempts of payment, in such case applicant has to apply again. On pressing "Pay Later", you can pay the visa fee later using your Application ID and date of birth. Please note that your application for e-Visa will not be submitted without fee payment. It should be done prior to 4 days of Journey date.
            </p>
          </div>

          {/* Card Details Section */}
          {/* <div className="card-details-section">
            <h3>Enter Card Details</h3>
            
            <div className="form-row">
              <div className="form-group full-width">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => {
                    const formattedValue = formatCardNumber(e.target.value);
                    setFormData(prev => ({ ...prev, cardNumber: formattedValue }));
                  }}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    const formattedValue = formatExpiryDate(e.target.value);
                    setFormData(prev => ({ ...prev, expiryDate: formattedValue }));
                  }}
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>
              
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="4"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  placeholder="As shown on card"
                />
              </div>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="saveCard"
                  checked={formData.saveCard}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Save card details for future payments
              </label>
            </div>
          </div> */}

          {/* Disclaimer Section */}
          <div className="disclaimer-section">
            <h3>Disclaimer</h3>
            <div className="disclaimer-content">
              <p>All travelers seeking admission to India under the e-Visa (e-Visa) scheme are required to carry printout of the Electronic Travel Authorization (ETA) sent through email by Bureau of Immigration.</p>
              <p>If your e-Visa application is approved, it establishes that you are admissible to enter India under the e-Visa scheme of the Government of India. Upon arrival in India, records would be examined by the Immigration Officer.</p>
              <p>Biometric Details (Photograph & Fingerprints) of the applicant shall be mandatorily captured upon arrival into India. Non-compliance to do so would lead to denial of entry into India. A determination that you are not eligible for e-Visa does not preclude you from applying for a regular Visa in Indian Mission. All information provided by you, or on your behalf by a designated third party, must be true and correct.</p>
              <p>An Electronic Travel Authorization (ETA) may be revoked at any time and for any reasons whatsoever. You may be subject to legal action. If you make materially false, fictitious, or fraudulent statement or representation in an Electronic Travel Authorization (ETA) application submitted by you. The transaction cannot be cancelled or amended once the fee has been paid.</p>
            </div>
          </div>

          {/* Undertaking Section */}
          <div className="undertaking-section">
            <h3>Undertaking</h3>
            <div className="undertaking-content">
              <label className="checkbox-label undertaking-checkbox">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                />
                <span className="checkmark"></span>
                <span className="undertaking-text">
                  I, the applicant, hereby certify that I agree to all the terms and conditions given on the website indiavisaonline.com and understand all the questions and statements of this application. The answers and information furnished in this application are true and correct to the best of my knowledge and belief. I understand and agree that once the fee is paid towards the Temporary application ID DEN20246677IN is 100% non-refundable and I will not claim a refund or dispute the transaction incase of cancellation request raised at my end. I also understand that indiavisaonline.com is only responsible for processing my application and the visa may be granted or rejected by the Indian government. I authorized them to take the payment from my card online.
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button type="submit" className="pay-now-btn" onClick={handleSubmit}>
              <img src={payImage}/>
            </button>
            <button type="button" className="pay-later-btn">
               <span> <HiCreditCard size={35} color="#3b82f6" />  Debit or Credit Card</span>
            </button>
          </div>

          {/* Application ID Note */}
          <div className="application-note">
            <p>
              Please note down the Application ID: <strong>DEN20246677IN</strong> which will be required for Status Enquiry, e-Visa Printing and Payment of visa processing fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPaymentForm;