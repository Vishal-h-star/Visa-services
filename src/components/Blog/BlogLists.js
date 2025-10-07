import React from "react";
import BlogItem from "./BlogItem";

const BlogLists = ({ blogs }) => {
  return (
    <div className="col-lg-12">
      <div className="row mb-4">
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
