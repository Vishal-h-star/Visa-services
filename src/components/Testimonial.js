import React from "react";
import { slides } from "../assets/data/SlideData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title/Title";
import Para from "./Title/Para";

const Testimonial = () => {



  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonial-area pt-5 pb-5 bg-gray-3 ml-70 mr-70 bg-gray-3">
        <Title title="What Our Clients Says" />
        <Para para="Great job, everyone! Congratulations to all our teams." />
          <Para para="At WOM Solutions, we naturally collaborate closely with our clients and partners. We specialize in creating outstanding software for logistics and transport management, warehouse and inventory management, and digital vehicle inspection checklists. These tools help improve efficiency and streamline operations across the board." />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 ml-auto mr-auto">
              <div className="testimonial-active nav-style-1 nav-testi-style ">
                <Slider {...settings}>
                  {slides.map((slide, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <div className="single-testimonial text-center">
                          <img
                            className="img-fluid"
                            src={slide.image}
                            alt={slide.alt}
                            loading="lazy"
                            height="90"
                            width="90"
                          />
                          {/* {ReactHtmlParser(item.testimonial)} */}
                          <p className="w-75 mx-auto">{slide.testimonial}</p>
                          <div className="client-info">
                            <i className="fa fa-quote-left"></i>
                            <h5>{slide.name}</h5>
                            <span>{slide.city}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
