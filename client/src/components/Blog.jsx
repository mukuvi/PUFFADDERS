import React, { useState } from "react";
import blogs from "./blogdata"; // Adjust the path based on your folder structure

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleExpand = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index);
  };

  return (
    <div className="blog">
      <h2>Latest Blogs</h2>
      <div className="blog-posts-container">
        {currentBlogs.map((blog, index) => (
          <div className="blog-post" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <button onClick={() => handleExpand(index)}>
              {expandedBlogIndex === index ? "Read Less" : "Read More"}
            </button>
            {expandedBlogIndex === index && (
              <p className="blog-content">{blog.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
