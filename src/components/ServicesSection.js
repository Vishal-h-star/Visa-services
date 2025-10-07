import React, { useState, useEffect } from "react";
import Button from "./Button";
import softwareDevelopment from "../assets/images/service/software-development.jpg";
import Title from "./Title/Title";
import Para from './Title/Para'
import { Link } from 'react-router-dom'
import { servicelist } from "../assets/data/ServicesData";

const Services = () => {
  console.log(servicelist, 'servicelist')
  const [servlist, setServList] = useState(servicelist);

  useEffect(() => {

    setServList(servlist.filter((data) => data.home === true));
  }, []);

  return (
    <>
      <section className="services_wrapper py-5">
        <Title title="Our Services" />
        <Para para="We offer a full turn-key package that includes web design, web promotion, software development and domain names registration." />
        <div className="container">
          <div className="row pb-5">
            {servlist.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="card bg-white border-1 rounded-2 text-center services-card">
                    <div className="service-image-div">
                      <img src={data.image01} alt={data.name} className="img-fluid" />
                    </div>
                    <div className="card-body p-3">
                      <Link to={`services/${data.id}`}><h2>{data.name}</h2></Link>
                      <p className="text-center">
                       {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
          <div className="row">
            <div className="col-12 ser-btn-col">
              <Link to="/services"><Button>More Services</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
