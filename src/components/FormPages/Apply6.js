import React, { useState } from "react";
import passportImage from "../../assets/images/passportsample_image.jpeg";
import { FaRegImage } from "react-icons/fa";
import { IoEyeOutline, IoClose } from "react-icons/io5";

const Apply6 = () => {
  const [formData, setFormData] = useState({
    temporaryAppId: "asgsag",
    imageFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

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
      newErrors.imageFile = "Please upload your passport image.";
    } else if (!["image/jpeg", "image/png"].includes(imageFile.type)) {
      newErrors.imageFile = "Only JPG and PNG formats are allowed.";
    } else if (imageFile.size > 1024 * 1024) {
      newErrors.imageFile = "Image size must be less than 1MB.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
      setFormData({
        temporaryAppId: formData.temporaryAppId,
        imageFile: null,
      });
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
            Temporary Application ID: <strong>{formData.temporaryAppId}</strong>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="enhanced-visa-form image-upload">
          <div className="form-section">
            <div className="section-header centered">
              <h2>Upload Passport Page</h2>
            </div>

            <div className="form-grid full-row">
              <div className="form-field form-field-inline">
                <label className="field-label">
                  <span className="label-text">
                    Copy of Passport Page Containing Personal Particulars *
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

                {/* Show view button after uploading */}
                {formData.imageFile && (
                  <button
                    type="button"
                    className="view-button"
                    onClick={() => setShowImageModal(true)}
                  >
                    <IoEyeOutline style={{ marginRight: "6px" }} />
                    View Uploaded Image
                  </button>
                )}
              </div>
            </div>

            <div className="section-image">
              <p className="image-title">
                <b>Sample Image</b>
              </p>
              <div className="uploade_image_div">
                <img
                  src={passportImage}
                  alt="Sample"
                  width="400"
                  height="400"
                />
              </div>
            </div>

            <div className="payment-notice">
              <p>
                I have verified that all the documents are uploaded as per the
                requirement.
              </p>
            </div>
          </div>

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
      </div>

      {/* ✅ Image Preview Modal */}
      {showImageModal && (
        <div className="image-modal-overlay" onClick={() => setShowImageModal(false)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setShowImageModal(false)}>
              <IoClose size={22} />
            </button>
            <img
              src={URL.createObjectURL(formData.imageFile)}
              alt="Uploaded Preview"
              className="uploaded-image-preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply6;
