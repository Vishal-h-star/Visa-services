import React from "react";
import Button from "../../components/Button";
import GIF from "../../assets/images/hero_img.png";

const Banner = () => {
  return (
    <>
      <section className="banner_wrapper pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src={GIF} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 my-5 my-md-0 text-md-start">
              <h1> Welcome to WOM Solutions</h1>
              <p>
                We offer a full turn-key package that includes web design, web
                promotion, software development and domain names registration.
              </p>
              <div className="mt-4">
              <Button fontBig primary>
                        CONTACT US
                    </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
