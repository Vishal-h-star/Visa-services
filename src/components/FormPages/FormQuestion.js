import React, { useState, useEffect } from "react";
import { form_questions } from "../../assets/data/FormData";
import { useParams, useNavigate } from "react-router-dom";
import {
    getApplicationDataById,
    applicationSubmitStep7,
} from "../../apiCalls/visaApplication";
import { toast } from "react-toastify";

const FormQuestion = () => {
    const navigate = useNavigate();
    const params = useParams();
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

    const getApplicationData = async () => {
        try {
            const res = await getApplicationDataById(params.id);
            console.log(res, "res daa of application");
            if (res.status === 200 && res.data && res.data.data) {
                // merge to keep all keys
                setSecurityAnswers((prev) => ({ ...prev, ...res.data.data }));
            }
        } catch (err) {
            console.error("Error fetching application data:", err);
        }
    };

    useEffect(() => {
        if (params?.id) getApplicationData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSecurityAnswers((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!declared) {
            setError("Please accept the declaration.");
            return;
        }
        try {
            console.log("Form Data:", securityAnswers);
            const res = await applicationSubmitStep7(securityAnswers, params.id);

            if (res.status === 200) {
                console.log(res.data, "data we get from back");
                navigate(`/Preview/${res.data.data.uniqueId}`);
            } else {
                toast.error(`Some Error Happens!!`);
            }
        } catch (err) {
            console.error(err);
            toast.error("Error submitting application");
        }

    }


    return (
        <>
            <div className="enhanced-visa-container">
                <div className="enhanced-visa-card">
                    <div className="payment-header">
                        <div className="application-info">
                            <div className="info-row">
                                <span className="label">Application Type : <strong className="text-uppercase">{securityAnswers?.applicationType}</strong></span>
                                <span className="value text-uppercase"></span>
                            </div>
                            <div className="info-row">
                                <span className="label">Port of arrival : <strong className="text-uppercase">{securityAnswers?.portOfArrival}</strong></span>
                            </div>
                            <div className="info-row">
                                <span className="label">Temporary Application ID: <strong>{params?.id}</strong></span>
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
