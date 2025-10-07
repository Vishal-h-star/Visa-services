import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import { BsCardList } from "react-icons/bs";
import { useParams } from "react-router";
import { blogs } from "../../assets/data/BlogData";
import { useHistory } from "react-router-dom";

const RecentBlog = () => {
  const history = useHistory();
  const { id } = useParams();
  const [blogged, setBlogged] = useState(blogs);

  useEffect(() => {
    let blog = blogs.find((blog) => blog.id === id);
    if (blog) {
      history.push(`/blogs/${id}`);
      setBlogged(blog);
    }
  }, [blogged]);

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      AOS.init({
        duration: 50,
      });
      AOS.refresh();
    }
  }, []);

  return (
    <>
      <ul className="service-menu-items">
        {blogged.map((blogdata, index) => {
          return (
            <li className="blog-menu-item">
              <a exact href={`/blogs/${blogdata.id}`} className="blog-nav-link">
                <span className="icon">
                  <img src={blogdata.image} alt="" width="100" />
                </span>
                <div className="blog-data">
                  <span className="blog-name">{blogdata.name}</span>
                  <span className="blog-date">{blogdata.date}</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecentBlog;
