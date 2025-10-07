import React from "react";
import AboutJoin from "../components/About/AboutJoin";
import flight from "../assets/images/flight.png";
import Button from "../components/Button";
import aboutimg from "../assets/images/map.png";


const About = () => {
  return (
    <>
      <section className="about-page-wrapper py-5">
        <div className="about-section container pt-5">
          <div className="about-text row">
            <div className="about-quality col-lg-6 col-md-6 col-12">
              <div className="about-quality-1">
                <h4>Established in the year 2013,</h4>
                <p>
                 We Wom Solutions (wheelsonmap), are one of the prominent organization of this domain actively engrossed in trading and supplying the wide collection of GPS System for our valued customers. Our offered range of products consists of GPS Vehicle Tracking Devices, Vehicle Tracking Devices, and Calculating Area Device. Provided ranges of products are made from the optimum grade basic material in full compliance with the industry defined norms and standards at vendors end. Provided GPS systems are highly demanded by our valued clients for their optimum quality, long life, abrasion resistance, high durability and fine finish. To cater the diverse requirements of our valued clients, we are offering this GPS system in different specification to choose from. Additionally, we are also offering Mobile App Development Services to our clients.
                </p>
              </div>
              <div className="about-quality-2">
              </div>
              <div className="bn">
              <a href="tel:9101141251500" title="Toll Free Number"><Button>Call Now</Button></a>
              </div>
            </div>
            <div className="about-image col-lg-6 col-md-6 col-12">
              <img src={aboutimg} alt="about-image img-fluid" />
            </div>
          </div>
        </div>
        <AboutJoin />
        <div className="join-section container py-4">
          <div className="row">
            <div className="about-text col-lg-6 col-md-6 col-12">
              <h3 className="about-heading">Who we are</h3>
              <div className="about-text-para">
                <p>
                Owing to our rich vendor base in the market, we are able to offer a diverse assortment of GPS system. All our associated vendors are famous for their quality approved product ranges as they are making use of quality assure basic material in the manufacturing of the offered products. With the help of their modern production facility, they are manufacturing the offered products at a good production rate and hence fulfilling our bulk order requirements in an effective manner. Offered products are checked against the set quality parameters by our vendor’s quality checking team. Also, we offer these products under the Concox brand name in the market.

                </p>
                <p>
                Under the firm supervision of our mentor Mr. Deepak , we are able to achieve such a remarkable position in the market in a short period of time. Due to his sharp business skills, customer centric business deals and long term customer relationship approach, we are growing day by day with an increasing number of clients.
                </p>
              </div>
              {/* <Button to="/">Share Now</Button> */}
            </div>
            <div className="about-image col-lg-6 col-md-6 col-12">
              <img src={flight} alt="about-image img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
