import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getApplicationDataById } from '../apiCalls/visaApplication';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [applicationNumber, setApplicationNumber] = useState('');
  const [status, setStatus] = useState(false);

  const checkStatus = (data) => {
    console.log(data, "This is my data");
    setApplicationNumber(data);
    setStatus(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Application Number:', applicationNumber);
    const res = await getApplicationDataById(applicationNumber);
    console.log(res, 'res daa of application')
    if (res?.status === 200) {
      console.log(res.data, 'rebsdjfdfvbjh')
      navigate(`/Apply1/${applicationNumber}`)
      // return
      // setFormData(res.data.data);
    }
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