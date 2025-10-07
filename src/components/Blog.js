import React from "react";
import { blogs } from "../assets/data/BlogData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import blogImg from "../assets/images/service2.jpg";
import Title from "./Title/Title";
import Para from "./Title/Para";
import { Link } from "react-router-dom";

const Blog = () => {
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
      <section className="blog_wrapper py-5">
        <Title title="Our blogs" />
        <Para para="We offer a full turn-key package that includes web design, web promotion, software development and domain names registration." />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {blogs.map((blog, index) => {
                  return (
                    <div className="row mb-4">
                      <div
                        className="card bg-white border-1 rounded-0 m-2 blog-card"
                        key={index}
                      >
                        <div className="blog-img">
                        <img src={blog.image} alt="" className="img-fluid" />
                        </div>
                        <div className="card-body d-flex p-4">
                          <div>
                            <ul>
                              <li>
                                {blog.date}
                              </li>
                            </ul>
                            <h4>
                              <Link to="/" className="p-0">
                                {blog.name}
                              </Link>
                            </h4>
                            <p className="blog-desc">{blog.description}</p>
                            <Link to="/" className="text-left p-0">
                              {blog.more}
                            </Link>
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

export default Blog;
