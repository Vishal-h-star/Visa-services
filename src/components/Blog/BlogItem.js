import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: { name, description, image, websitType, id }
}) => {
  return (
    //   <div className="row">
    <div className="col-lg-4 col-md-6 col-12">
      <div
        className="card bg-white border-1 rounded-1 mb-4 service-list-card"
        data-aos="zoom-in"
      >
        <div className="img-div">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="card-body d-flex p-4">
          <div>
            <p className="p-0 m-0 service-type">{websitType}</p>
            <h4 className="service-name">
              <Link to={`blogs/${id}`} className="p-0">
                {name}
              </Link>
            </h4>
            <p className="service-description">{description}</p>
            <Link to={`blogs/${id}`} className="text-left p-0">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
