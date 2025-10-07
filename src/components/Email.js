import React from "react";
import Button from "../components/Button";
import Title from "./Title/Title";
import Para from "./Title/Para";
import CountUp from 'react-countup';

const Email = () => {
  return (
    <>
      <section className="blog_wrapper">
        <div className="newsletter_wrapper">
          <div className="container py-5">
            <div className="row">
              <div className="col-12">
                <div className="counter text-center">
                  <div className="couter-content">
                    <h3 className="text-white counter-number"><CountUp end={2013}  duration={5.75}/><span></span></h3>
                    <p>No. of Eatablishment</p>
                  </div>
                  <div className="couter-content">
                    <h3 className="text-white counter-number"><CountUp end={25}  duration={5.75}/><span> +</span></h3>
                    <p>Employees</p>
                  </div>
                  <div className="couter-content">
                    <h3 className="text-white counter-number"><CountUp end={150}  duration={5.75}/><span> +</span></h3>
                    <p>Happy Clients</p>
                  </div>
                  <div className="couter-content">
                    <h3 className="text-white counter-number"><CountUp end={200}  duration={5.75}/><span> +</span></h3>
                    <p>Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
