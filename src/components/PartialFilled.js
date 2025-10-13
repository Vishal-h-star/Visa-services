import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [applicationNumber, setApplicationNumber] = useState('');
  const [status, setStatus] = useState(false);

  const checkStatus = (data) => {
    console.log(data, "This is my data");
    setApplicationNumber(data);
    setStatus(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Number:', applicationNumber);
    // navigate(`/apply/${applicationNumber}`)
    navigate(`/Apply2/${applicationNumber}`)
    setStatus(false)
  };

  return (
    <section>
      <div className="container partial-formContainer">
        <div className='row'>
          <div className='col-12'>
            <form className="application-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Application Details</h2>

              <div className="form-group flex">
                <div>
                  <label htmlFor="applicationNumber" className="form-label">
                    Enter your Application Number :
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="applicationNumber"
                    className="form-control form-input"
                    value={applicationNumber}
                    onChange={(e) => checkStatus(e.target.value)}
                    placeholder="Enter application number"
                    required
                  />
                </div>
              </div>

              {/* {status && ( */}
                <button type="submit" className="submit-buttonPartial">
                  Submit
                </button>
              {/* )} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;