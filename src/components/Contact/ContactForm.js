import React, { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const mounted = useRef(false);

  const initialValues = {
    name: "",
    number: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [valid, setValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // take name and value from input in destructring
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorCheck = validate(formValues);
    setFormErrors(errorCheck);
    setIsSubmit(true);
    console.log(formValues)
  
  };

  const resetInput = () => {
    setFormValues(initialValues);
    setValid(false);
    window.location.reload(false);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //name
    if (!/^[a-z A-Z0-9]+$/.test(values.name) || /^[ ]+$/.test(values.name)) {
      errors.name = "Name is not valid";
    }

    if (!values.name) {
      errors.name = "Name is Required";
    }

    if (values.number) {
      if (values.number.length < 10) {
        errors.number = "Enter atleast 10 digits";
      }
    }

    if (!values.number) {
      errors.number = "Phone Number is Required";
    }

    //email
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!regex.test(values.email) && values.email) {
      errors.email = "Email is not valid";
    }

    //message
    if (!values.message) {
      errors.message = "Message is Required";
    }

    //rating
   
    return errors;
  };



  return (
    <>
      <div
        className="contact-auth-section"
     
      >
          
        <div className="contact-authentication">
        <h2 className="text-center mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="Contactform-row ">
              <div className="Contactform-group  mb-2">
                {/* <label>
                  Name<span className="text-red font-weight-bold">**</span>
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  onChange={handleChange}
                  value={formValues.name}
                />
                <small className="text-red">{formErrors.name}</small>
              </div>
              <div className="Contactform-group  mb-2">
                {/* <label>
                  Contact<span className="text-red font-weight-bold">**</span>
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="number"
                  value={formValues.number}
                  onChange={handleChange}
                />
                <small className="text-red">{formErrors.number}</small>
              </div>
              <div className="Contactform-group mb-2">
                {/* <label>Email</label> */}
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <small className="text-red">{formErrors.email}</small>
              </div>
              <div className="Contactform-group  mb-3">
                {/* <label>Your Message</label> */}
                <textarea
                  row="5"
                  className="form-control"
                  placeholder="Your Message..."
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                />
                <small className="text-red">{formErrors.message}</small>
              </div>
             
              <div className="form-group text-center ">
                <button type="submit" className="submit-button" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
