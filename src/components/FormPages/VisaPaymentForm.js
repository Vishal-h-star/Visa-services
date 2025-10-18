// VisaPaymentForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PaypalPayment, PaypalPaymentApproval } from '../../apiCalls/paymentApi';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VisaPaymentForm = () => {
  const params = useParams();

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

  const createOrder = async () => {
    try {
      const response = await PaypalPayment(params.id);

      // const response = await axios.post(
      //   `${requestUrl}/paypal/create-paypal-order`,
      //   {
      //     subId: selectedSub.subId,
      //     licenses: licenseCounts[selectedSub.subId],
      //     billingCycle, // NEW
      //   }
      // );
      // return response.data.orderID;
    } catch (error) {
      console.error("Error creating PayPal order:", error);
    }
  };

  const onApprove = async (data) => {
    try {
      const response = await PaypalPaymentApproval()
      // const response = await axios.post(
      //   `${requestUrl}/paypal/capture-paypal-order`,
      //   {
      //     orderID: data.orderID,
      //   }
      // );
      // if (response.data.success) {
      //   alert("Payment successful!");
      //   navigate("/register", {
      //     state: {
      //       selectedSubId: selectedSub.subId,
      //       selectedSubName: selectedSub.subName,
      //       licenses: licenseCounts[selectedSub.subId],
      //     },
      //   });
      // }
    } catch (error) {
      console.error("Error capturing PayPal order:", error);
    }
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
              <span className="value">{params.id}</span>
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
         
            <PayPalScriptProvider options={{ clientId: "AW7wrZ31MR2WX64_wcHuwcWCOFgeBnodMeS2Yh6ByB8SXc2xaCvhThUy3nPEiq5VQtSAAzBmT0YAEhBb" }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                style={{ layout: "horizontal" }}
              />
            </PayPalScriptProvider>
          </div>

          {/* Application ID Note */}
          <div className="application-note">
            <p>
              Please note down the Application ID: <strong>{params.id}</strong> which will be required for Status Enquiry, e-Visa Printing and Payment of visa processing fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPaymentForm;