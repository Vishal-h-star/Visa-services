import React, { useEffect, useState } from "react";
import sampleImage from "../../assets/images/sample_image.jpeg";
import { useParams, useNavigate } from "react-router-dom";
import { applicationSubmitStep5 } from "../../apiCalls/visaApplication";
import { toast } from "react-toastify";

const Apply5 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    imageFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
    }
  };

  // ✅ Validation function
  const validateForm = () => {
    const newErrors = {};
    const { imageFile } = formData;

    if (!imageFile) {
      newErrors.imageFile = "Please upload your image.";
    } else if (!["image/jpeg", "image/png"].includes(imageFile.type)) {
      newErrors.imageFile = "Only JPG and PNG formats are allowed.";
    } else if (imageFile.size > 1024 * 1024 * 10) {
      newErrors.imageFile = "Image size must be less than 10MB.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API request
      const formDataToSend = new FormData();
      formDataToSend.append("mainImg", formData.imageFile);
      const res = await applicationSubmitStep5(formDataToSend, params.id);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        // toast.success(`🦄 ${res.data.message}`);
        // setIsSubmitting(true);
        setIsSubmitting(false);
        navigate(`/apply6/${res.data.data.uniqueId}`);
      } else {
        toast.error(`Some Error Happens!!`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enhanced-visa-container">
      {/* Background Decorative Shapes */}
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
            Temporary Application ID: <strong>{params.id}</strong>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="enhanced-visa-form image-upload"
        >
          <div className="form-section">
            <div className="section-header centered">
              <h2>Upload Photograph</h2>
            </div>

            <div className="form-grid full-row">
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">
                    Image * (Upload your image)
                  </span>
                </label>

                <div className="input-container">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="field-input"
                    style={{ backgroundColor: "#f8f9fa" }}
                    disabled={isSubmitting}
                  />
                </div>

                {errors.imageFile && (
                  <p className="error-text">{errors.imageFile}</p>
                )}
              </div>
            </div>

            <div className="section-image">
              <div className="payment-notice">
                <p>
                  Kindly ensure that the photo is as per specifications
                  mentioned below. In case you are not ready for photo upload,
                  you can do it later. Please note down the Temporary
                  Application ID, close the window and press{" "}
                  <b>Save and Exit</b>. You can complete your application later
                  using <b>Complete Partially Filled Form</b> option on the home
                  page.
                </p>
              </div>
            </div>

            <div className="section-image">
              <p className="image-title">
                <b>Sample Image</b>
              </p>
              <div className="uploade_image_div">
                <img src={sampleImage} alt="Sample" width="400" height="400" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
            className="submit-button"
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
      </div>
    </div>
  );
};

export default Apply5;
