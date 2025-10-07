import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { blogs } from "../assets/data/BlogData";
import { FiSettings } from 'react-icons/fi'
import Backdrop from "../components/Backdrop";
import RecentBlog from "../components/Blog/RecentBlog";


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isReadMore, setIsReadMore] = useState(true);


  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    let blog = blogs.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog)
    }
  }, [blog]);

  const categoryRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const showHideFilter = () => {
    categoryRef.current.classList.toggle("active");
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    showHideFilter();
    setDrawerIsOpen(false);
  };

  return (
    <>
      {blog ? (
        <>
         <div className="servicepage_background-banner-1 py-5" data-aos="fade-up" data-aos-duration='100'>
            <div className="container py-5">
              <h3 className="text-left text-light">{blog.name}</h3>
              <p className="text-left text-light wid-50">
                We offer a full turn-key package that includes web design, web
                promotion, software development and domain names registration.
              </p>
            </div>
          </div>
          <section className="servicepage2_wrapper">
            <div className="container">
              <div className="row py-5 blog-detail-row">
                
                <div className="col-lg-8 col-md-12 col-12 content-div">
                  <div className="servicepage-img">
                    <img src={blog.image} alt="" className="img-fluid" />
                  </div>

                  <div className="servicepage-name">
                    <h4>{blog.name}</h4>
                  </div>
                  <div className="row content-row">
                    <div className="col-lg-12 col-md-12 col-12">
                      {isReadMore ? (
                        <p>{blog.description.slice(0, 160)}...</p>
                      ) : (
                        <p> {blog.description}</p>
                      )}
                      <div className="text-center show-more">
                        <p className="read-or-hide" onClick={toggleReadMore}>
                          {isReadMore ? (
                            <>
                              <span className="read-more">Read More</span>
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                            </>
                          ) : (
                            <>
                              <span className="read-more">Read Less</span>
                              <i
                                className="fa fa-minus-circle"
                                aria-hidden="true"
                              ></i>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12 service-list">
                  <div className="category-filter-icon mb-3">
                    <div
                      className="filter-slide"
                      onClick={() => showHideFilter()}
                    >
                      <FiSettings className="filter-icon"/>
                    </div>
                  </div>
                  <div className="service-mobile-list mb-4" ref={categoryRef}>
                    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
                    <RecentBlog />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogDetail;
