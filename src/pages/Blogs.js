import React, { useState } from 'react';
import { blogs } from "../assets/data/BlogData";
import NoData from '../components/NoData/Nodata'
import { BiSearch } from "react-icons/bi";
import BlogLists from "../components/Blog/BlogLists";

const Blogs = () => {
  const [blog, setBlog] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState();

  const searchservice = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    setBlog(
      blogs.filter((val) => val.name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  return (
    <>
      {/* <NoData /> */}
      <section className="services_page_wrapper mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="blog-top-content p-0 mb-4 d-flex align-items-center justify-content-between">
                <h4 className='blog-heading mb-0'>Our Blogs</h4>
                <div className="search-box wid-50">
                  <input
                    type="text"
                    placeholder="search blogs..."
                    onChange={searchservice}
                  />
                  <BiSearch />
                </div>
              </div>
            </div>
            
            {
              blog.length > 0 ? (
                <BlogLists
                blogs={blog}
            />
              ) : (
                <>
                
                  <div className="col-12 text-center">
                  <NoData />
                </div>
                </>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
};

export default Blogs;
