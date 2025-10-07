import React from "react";
import { productlist } from "../assets/data/ServicesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
      <section className="similar_product_wrapper py-5">
        <h3 className="text-center">Similar Hardware</h3>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {productlist.slice(0,8).map((product, index) => {
                  return (
                    <div className="row mb-4">
                      <div
                        className="card bg-white border-1 rounded-0 m-2 product-card"
                        key={index}
                      >
                        <div className="hardware-img">
                          <img src={product.image01} alt="" className="img-fluid" />
                        </div>
                        <div className="card-body d-flex p-4">
                          <div>
                            <h4>
                              <a href={product.id} className="p-0">
                                {product.name}
                              </a>
                            </h4>
                            <p className="hardware-desc">{product.description}</p>
                            <a href={product.id} className="text-left p-0 hardware-link">
                              Check Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimilarProducts;
