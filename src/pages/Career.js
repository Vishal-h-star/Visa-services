import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiUserSearchLine } from 'react-icons/ri';
import { TbHandClick } from 'react-icons/tb'

const Career = () => {
  return (
    <div className="career-page">
      {/* Breadcrumb Start */}
      <div className="breadcrumb breadcrumb-career text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Career</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      <section className="career-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="career-inner-h1 mb-4">
                "We Wom Solutions (wheelsonmap), are one of the prominent organization of this domain actively engrossed in trading and supplying the wide collection of GPS System"
              </p>
            </div>
            <div className="col-md-7">
              <div className="career-inner-left">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Software Developer</Accordion.Header>
                    <Accordion.Body>
                    Minimum 2 years of development experience in ASP.Net Core with Entity Framework, Rest API, Anugular and Sql Developer. We are looking full stack developer.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Sales Person</Accordion.Header>
                    <Accordion.Body>
                     Job Opening for Sales Person
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Tele Caller</Accordion.Header>
                    <Accordion.Body>
                    We are looking telesales executive having 2 years of experience having computer knowledge and good communication skills.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Digital Marketing Executive</Accordion.Header>
                    <Accordion.Body>
                    We are looking good digital marketing executive having minimum 1 year of experience in Linkedin and knowledge of all other social marketing platforms.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Admin/Accountant Executive</Accordion.Header>
                    <Accordion.Body>
                     Job Opening for Admin/Accountant Executive
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Business Development Manager</Accordion.Header>
                    <Accordion.Body>
                    Job Opening for Business Development Manager
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-md-5">
              <div className="career-inner-right mt-4 mt-md-0">
                <div className="section-title text-center">
                  <h2>Current Opening</h2>
                </div>
                <ul className="ul-style-1">
                  <li>
                    <BsFillBriefcaseFill className="me-1" /> <span>Software Developer</span>
                  </li>
                  <li>
                    <BsFillBriefcaseFill className="me-1" /> <span>Sales Person</span>
                  </li>
                  <li>
                    <BsFillBriefcaseFill className="me-1" /><span> Tele Caller</span>
                  </li>
                  <li>
                    <BsFillBriefcaseFill className="me-1" /> <span>Digital Marketing Executive</span>
                  </li>
                  <li>
                    <BsFillBriefcaseFill className="me-1" /> <span>Admin/Accountant Exec.</span>
                  </li>
                  <li>
                    <BsFillBriefcaseFill className="me-1" /> <span>Business Dev. Manager</span>
                  </li>
                </ul>

                <div className="applylink">
                  <a href="https://forms.gle/FPnc5wHZo1eozzFC6">Apply Now <span><TbHandClick className="apply-icon"/></span></a>
                  
                </div>

                <div className="bg-light-icon">
                  <RiUserSearchLine />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {/* <div className="col-md-7">
              <div className="career-side-img text-center">
                <img src={CareerImg} alt="Career" className="img-fluid" />
              </div>
            </div> */}

            {/* <div className="col-md-5">
              <div className="section-title text-center mt-3">
                <h2>APPLY NOW</h2>
                <p className="sub-sec-title mt-3">
                  And we'll get back to you within 48 hours.
                </p>
              </div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd6kEzRo31j0kmJg18C8q_Ditj2ny7jerHAzWOYxvo-ebJOvQ/viewform?embedded=true" width="640" height="1103" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
