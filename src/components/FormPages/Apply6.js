import React, { useState, useEffect } from "react";
import passportImage from "../../assets/images/passportsample_image.jpeg";
import { FaRegImage } from "react-icons/fa";
import { IoEyeOutline, IoClose } from "react-icons/io5";
import { useParams, useNavigate } from 'react-router-dom';
import { getApplicationDataById, applicationSubmitStep6 } from '../../apiCalls/visaApplication';
import { toast } from "react-toastify";

const Apply6 = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({
    passportCopy: null,
    //business visa
    businessCard: null,
    businessInvitationLetter: null,
    //medical, visa e-Ayush Visa, e ayush attendeant visa 
    medicalInvitationLetter: null,
    //conference visa
    organizerInvitation: null,
    politicalClearance: null,
    eventClearance: null,
  });

  const [userUploaded, setUserUploaded] = useState({
    passportCopy: false,
    businessCard: false,
    businessInvitationLetter: false,
    medicalInvitationLetter: false,
    organizerInvitation: false,
    politicalClearance: false,
    eventClearance: false,
  });
  const [currentPreview, setCurrentPreview] = useState(null);


  const getApplicationData = async () => {
    const res = await getApplicationDataById(params.id);
    console.log(res.data.data, 'res daa of application')
    if (res.status === 200) {
      setFormData(res.data.data)
    }
  }


  useEffect(() => {
    getApplicationData()
  }, [params.id])

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files.length > 1 ? Array.from(files) : files[0],
      }));

      // mark this particular input as user-uploaded
      setUserUploaded((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };



  // ✅ Validation function
  const validateForm = () => {
    const newErrors = {};
    const { passportCopy } = formData;

    if (!passportCopy) {
      newErrors.passportCopy = "Please upload your passport image.";
    } else if (!["image/jpeg", "image/png"].includes(passportCopy.type)) {
      newErrors.passportCopy = "Only JPG and PNG formats are allowed.";
    } else if (passportCopy.size > 1024 * 1024) {
      newErrors.passportCopy = "Image size must be less than 1MB.";
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
      // Simulate API request
      const formDataToSend = new FormData()
      formDataToSend.append("passportCopy", formData.passportCopy);
      formDataToSend.append("businessCard", formData.businessCard);
      formDataToSend.append("businessInvitationLetter", formData.businessInvitationLetter);
      formDataToSend.append("medicalInvitationLetter", formData.medicalInvitationLetter);
      formDataToSend.append("organizerInvitation", formData.organizerInvitation);
      formDataToSend.append("politicalClearance", formData.politicalClearance);
      formDataToSend.append("eventClearance", formData.eventClearance);

      const res = await applicationSubmitStep6(formDataToSend, params.id);
      if (res.status === 200) {
        console.log(res.data, "data we get from back");
        // toast.success(`🦄 ${res.data.message}`);
        // setIsSubmitting(true);
        setIsSubmitting(false);
        navigate(`/Payment/${res.data.data.uniqueId}`);
      } else {
        toast.error(`Some Error Happens!!`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(formData, 'form data we get from');

  return (
    <div className="enhanced-visa-container">

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
        <form onSubmit={handleSubmit} className="enhanced-visa-form image-upload">
          <div className="form-section">
            <div className="section-header centered">
              <h2>Upload Documents</h2>
            </div>
            {/* ALL TYPE */}
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
                    name="passportCopy"
                    className="field-input"
                    style={{ backgroundColor: "#f8f9fa" }}
                    disabled={isSubmitting}
                  />
                  {errors.passportCopy && (
                    <p className="error-text">{errors.passportCopy}</p>
                  )}
                </div>
                {/* Show view button after uploading */}
                {formData.passportCopy && userUploaded.passportCopy && (
                  <button
                    type="button"
                    className="view-button"
                    onClick={() => {
                      setShowImageModal(true);
                      setCurrentPreview(formData.passportCopy);
                    }}
                  >
                    <IoEyeOutline style={{ marginRight: "6px" }} />
                    View Doc
                  </button>
                )}
              </div>
            </div>
            {/* BUSINESS CATEGORY */}
            {formData?.visaService === "business" && (
              <>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Copy of Business Card *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="businessCard"
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />
                      {errors.businessCard && (
                        <p className="error-text">{errors.businessCard}</p>
                      )}
                    </div>



                    {/* Show view button after uploading */}
                    {formData.businessCard && userUploaded.businessCard && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.businessCard);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Copy of Business Invitation Letter *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="businessInvitationLetter"
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />
                      {errors.businessInvitationLetter && (
                        <p className="error-text">{errors.businessInvitationLetter}</p>
                      )}
                    </div>



                    {/* Show view button after uploading */}
                    {formData.businessCard && userUploaded.businessInvitationLetter && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.businessInvitationLetter);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {(formData?.visaService == "medical" || formData?.visaService == "ayush") && (
              <>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        System generated medical invitation letter in the defined format *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        name="medicalInvitationLetter"
                        onChange={handleFileChange}
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />

                      {errors.medicalInvitationLetter && (
                        <p className="error-text">{errors.medicalInvitationLetter}</p>
                      )}
                    </div>


                    {/* Show view button after uploading */}
                    {formData.medicalInvitationLetter && userUploaded.medicalInvitationLetter && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.medicalInvitationLetter);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* {(formData?.visaService === "medical_attendant" || formData?.visaService === "ayush_attendant") && (
              <>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        System generated medical invitation letter in the defined format *
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
              </>
            )} */}

            {formData?.visaService === "conference" && (
              <>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Invitation from organizer *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="organizerInvitation"
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />
                      {errors.organizerInvitation && (
                        <p className="error-text">{errors.organizerInvitation}</p>
                      )}
                    </div>



                    {/* Show view button after uploading */}
                    {formData.organizerInvitation && userUploaded.organizerInvitation && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.organizerInvitation);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Political clearance from Ministry of External Affairs (MEA), Government of India *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="politicalClearance"
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />

                      {errors.politicalClearance && (
                        <p className="error-text">{errors.politicalClearance}</p>
                      )}
                    </div>


                    {/* Show view button after uploading */}
                    {formData.politicalClearance && userUploaded.politicalClearance && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.politicalClearance);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
                <div className="form-grid full-row">
                  <div className="form-field form-field-inline">
                    <label className="field-label">
                      <span className="label-text">
                        Event clearance from Ministry of Home Affairs (MHA), Government of India *
                      </span>
                    </label>

                    <div className="input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        nanme="eventClearance"
                        className="field-input"
                        style={{ backgroundColor: "#f8f9fa" }}
                        disabled={isSubmitting}
                      />
                      {errors.eventClearance && (
                        <p className="error-text">{errors.eventClearance}</p>
                      )}
                    </div>



                    {/* Show view button after uploading */}
                    {formData.eventClearance && userUploaded.eventClearance && (
                      <button
                        type="button"
                        className="view-button"
                        onClick={() => {
                          setShowImageModal(true);
                          setCurrentPreview(formData.eventClearance);
                        }}
                      >
                        <IoEyeOutline style={{ marginRight: "6px" }} />
                        View Doc
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}



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
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowImageModal(false)}>
              <IoClose size={22} />
            </button>
            {currentPreview && (
              <img
                src={URL.createObjectURL(currentPreview)}
                alt="Uploaded Preview"
                className="uploaded-image-preview"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply6;
