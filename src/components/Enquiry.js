import React, { useState, useEffect } from "react";
import Button from './Button'

const Enquiry = () => {
  const initialValues = {
    name: "",
    number: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorCheck = validate(formValues);
    setFormErrors(errorCheck);
    setIsSubmit(true);
    if (Object.keys(errorCheck).length === 0) {
      const res = await fetch(
        "https://woms-312009-default-rtdb.firebaseio.com/enquiryform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formValues,
          }),
        }
      );
      if (res) {
          alert("done");
          resetInput();
        } else {
          alert("some error");
        }
    }
  };

  const resetInput = () => {
    setFormValues(initialValues);
  }


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

    //message
    if (!values.message) {
      errors.message = "Message is Required";
    }

    return errors;
  };

  return (
    <>
      <div className="enquiry text-left">
        <h3 className="enquiry-heading">Save time! Get the Best Deal</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                name="number"
                placeholder="Phone Number"
                value={formValues.number}
                onChange={handleChange}
              />
              <small className="text-red">{formErrors.number}</small>
            </div>
            <div className="form-group col-md-6">
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
            <div className="form-group col-12 mb-3">
              <textarea
                row="8"
                className="form-control"
                name="message"
                placeholder="Describe your requirement..."
                value={formValues.message}
                onChange={handleChange}
              />
              <small className="text-red">{formErrors.message}</small>
            </div>
            <div className="form-group col-12 text-center">
              <Button type="submit" onClick={handleSubmit}>
                Enquiry Now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Enquiry;
