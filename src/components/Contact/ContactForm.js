import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import AOS from "aos";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

const ContactForm = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      AOS.init({
        duration: 50,
      });
      AOS.refresh();
    }
    return () => (mounted.current = false);
  }, []);

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const initialValues = {
    name: "",
    number: "",
    email: "",
    country: "IN",
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
    if (Object.keys(errorCheck).length === 0) {
      const res = await fetch(
        "https://woms-312009-default-rtdb.firebaseio.com/contactform.json",
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
        alert("Form Submitted Successfully, We Respond to your message soon.");
        resetInput();
      } else {
        alert("some error");
      }
    }
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
    if (!values.country) {
      errors.country = "Please select Country";
    }
    return errors;
  };

  function onChange(value) {
    // setFormValues({isverified: true})
    setValid(true);
    console.log("Captcha value:", value);
  }
   

  return (
    <>
      <div
        className="contact-auth-section"
        data-aos="flip-right"
        data-aos-duration="700"
      >
        <div className="contact-authentication">
          <h2 className="text-center mb-4">Send Us a Message</h2>
          <form method="POST">
            <div className="form-row">
              <div className="form-group col-md-6 mb-2">
                <label>
                  Name<span className="text-red font-weight-bold">**</span>
                </label>
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
              <div className="form-group col-md-6 mb-2">
                <label>
                  Contact<span className="text-red font-weight-bold">**</span>
                </label>
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
              <div className="form-group col-md-6 mb-2">
                <label>Email</label>
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
              <div className="form-group col-md-6 mb-2">
                <label>Country</label>
                {/* <select
                  name="country"
                  className="form-control"
                  value={formValues.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="india">India</option>
                  <option value="pakistan">pakistan</option>
                  <option value="china">china</option>
                  <option value="russia">russia</option>
                </select> */}
                <select
                  value={formValues.country}
                  onChange={handleChange}
                  name="country"
                  className="form-control"
                >
                  {countryArr.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <small className="text-red">{formErrors.country}</small>
              </div>
              <div className="form-group col-12 mb-3">
                <label>Your Message</label>
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
             
              {/* <ReCAPTCHA sitekey="6LceamAfAAAAAAr1YMkQNzabwMNmWJJPERzfouqq" onChange={onChange} /> */}
              <div className="form-group col-md-6">
                <Button type="submit" onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
