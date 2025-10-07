import React from "react";
import blogImg from "../assets/images/service2.jpg";
import Title from "./Title/Title";
import Para from './Title/Para'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className="blog_wrapper py-4">
      <Title title="Our blog" />
        <Para para="We offer a full turn-key package that includes web design, web promotion, software development and domain names registration." />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card bg-white border-0 rounded-0">
                  <img src={blogImg} alt="" className="img-fluid" />
                <div className="card-body d-flex p-4">
                  <div>
                    <ul>
                      <li>10 JAN. 2022</li>
                    </ul>
                    <h4>
                      <Link to="/" className="p-0">Brilliant minds</Link>
                    </h4>
                    <p>
                      We offer a full turn-key package that includes web design,
                      web promotion, software development and
                      registration.
                    </p>
                    <Link to="/" className="text-left p-0">Read More...</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card bg-white border-0 rounded-0">
                  <img src={blogImg} alt="" className="img-fluid" />
                <div className="card-body d-flex p-4">
                  <div>
                    <ul>
                      <li>10 JAN. 2022</li>
                    </ul>
                    <h4>
                      <Link to="/" className="p-0">Brilliant minds</Link>
                    </h4>
                    <p>
                      We offer a full turn-key package that includes web design,
                      web promotion, software development and
                      registration.
                    </p>
                    <Link to="/" className="text-left p-0">Read More...</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card bg-white border-0 rounded-0">
                  <img src={blogImg} alt="" className="img-fluid" />
                <div className="card-body d-flex p-4">
                  <div>
                    <ul>
                      <li>10 JAN. 2022</li>
                    </ul>
                    <h4>
                      <Link to="/" className="p-0">Brilliant minds</Link>
                    </h4>
                    <p>
                      We offer a full turn-key package that includes web design,
                      web promotion, software development and
                      registration.
                    </p>
                    <Link to="/" className="text-left p-0">Read More...</Link>
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

export default Blog;
