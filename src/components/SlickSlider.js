import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
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
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        },
      },
    ],
  };
  return (
    <>
      <section className="slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                <div className="slider-content">
                  <Link href="" title="banner">
                    <img
                      className="img-fluid w-100"
                      src={slide1}
                      alt="banner"
                      width="100%"
                    />
                  </Link>
                </div>
                <div className="slider-content">
                  <Link href="" title="banner">
                    <img
                      className="img-fluid w-100"
                      src={slide1}
                      alt="banner"
                      width="100%"
                    />
                  </Link>
                </div>
                <div className="slider-content">
                  <Link href="" title="banner">
                    <img
                      className="img-fluid w-100"
                      src={slide1}
                      alt="banner"
                      width="100%"
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlickSlider;
