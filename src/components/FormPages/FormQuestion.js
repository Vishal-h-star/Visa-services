import React, { useState } from "react";
import { form_questions } from "../../assets/data/FormData";

const FormQuestion = () => {

    const [securityAnswers, setSecurityAnswers] = useState({
        arrested: "",
        deported: "",
        trafficking: "",
        cyberCrime: "",
        terrorismSupport: "",
        asylum: "",
        givenDetailarrested: "",
        givenDetaildeported: "",
        givenDetailtrafficking: "",
        givenDetailcyberCrime: "",
        givenDetailterrorismSupport: "",
        givenDetailasylum: "",
    });


    const [declared, setDeclared] = useState(false);
    const [error, setError] = useState("");

    // const questionDetails = [
    //     { key: "givenDetailarrested", value: "givenDetails" ,parent:"arrested" },
    //     { key: "givenDetailarrested", value: "givenDetails" },
    //     { key: "givenDetailarrested", value: "givenDetails" },
    //     { key: "givenDetailarrested", value: "givenDetails" },
    //     { key: "givenDetailarrested", value: "givenDetails" },
    //     { key: "givenDetailarrested", value: "givenDetails" },
    // ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSecurityAnswers((prev) => ({
            ...prev,
            [name]: value,
        }));

        // if (error[name]) {
        //     setError((prev) => ({
        //         ...prev,
        //         [name]: "",
        //     }));
        // }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!declared) {
            setError("Please accept the declaration.");
            return;
        }
        alert("form submitted successfully ");
        console.log("Form Data:", securityAnswers);

    }


    return (
        <>
            <div className="enhanced-visa-container">
                <div className="background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>

                <div className="enhanced-visa-card">
                    {/* <div className="form-header-section">
                        <h1 className="form-title question_title">e-Visa Application</h1>
                        <div className="formMainHeading">
                            <p>Application Type: <strong>Id</strong></p>
                            <p>Port of Arrival: <strong>Id</strong></p>
                            <p>Temporary Application Id: <strong>Id</strong></p>
                        </div>
                    </div> */}

                    <div className="payment-header">
                        <div className="application-info">
                            <div className="info-row">
                                <span className="label">Application Type :</span>
                                <span className="value text-uppercase"></span>
                            </div>
                            <div className="info-row">
                                <span className="label">Port of arrival :</span>
                                <span className="value text-uppercase"></span>
                            </div>
                            <div className="info-row">
                                <span className="label">Temporary Application ID</span>
                                <span className="value"></span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="enhanced-visa-form">
                        <div className="form-section">
                            <div className="form-fields-single-column ">

                                {
                                    form_questions.map((question) => (
                                        <>
                                            <div key={question.key} className="form-field-horizontal questionsForm">
                                                <label className="field-label">
                                                    <span className="label-text">
                                                        {question.label}
                                                    </span>
                                                </label>

                                                <div className="radio-group">
                                                    <label className="radio-label">
                                                        <input
                                                            type="radio"
                                                            name={question.key}
                                                            value="Yes"
                                                            checked={securityAnswers[question.key] === "Yes"}
                                                            onChange={handleChange}
                                                            className="radio-input"
                                                        />
                                                        <span className="radio-custom"></span>
                                                        Yes
                                                    </label>
                                                    <label className="radio-label">
                                                        <input
                                                            type="radio"
                                                            name={question.key}
                                                            value="No"
                                                            checked={securityAnswers[question.key] === "No"}
                                                            onChange={handleChange}
                                                            className="radio-input"
                                                        />
                                                        <span className="radio-custom"></span>
                                                        No
                                                    </label>
                                                </div>



                                            </div>
                                            {
                                                securityAnswers[question.key] === "Yes" && (
                                                    <>
                                                        <div className="subInput_div">
                                                            <div className="questionLabeldiv">
                                                                <label >{question.child.value} :</label>
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    name={question.child.key}
                                                                    value={securityAnswers[question.child.key]}
                                                                    onChange={handleChange}
                                                                    className="questions_input"
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }


                                        </>
                                    ))

                                }

                                <div className="undertaking-content question_declear">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={declared}
                                            onChange={(e) => setDeclared(e.target.checked)}
                                            required
                                            className="undertaking-checkbox"
                                        />
                                        &nbsp; "name",
                                        hereby declare that the information furnished above is correct to the best of my knowledge and belief. In case the information is found false at any stage, I am liable for legal action/deportation/blacklisting or any other action as deemed fit by the Government of India.
                                    </label>
                                </div>

                                {error && <p className="text-red-600 mt-3">{error}</p>}

                                <button
                                    type="button"
                                    className="questionForm_button submit-button"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>


                            </div>
                        </div>
                    </form >

                </div >
            </div >
        </>
    );
};

export default FormQuestion;
