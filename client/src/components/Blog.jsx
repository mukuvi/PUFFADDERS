import React, { useState, useEffect } from "react";

const Blog = () => {
  const blogs = Array.from({ length: 30 }, (_, index) => ({
    title: `Blog Title ${index + 1}`,
    excerpt: `Excerpt from blog ${index + 1}...`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="blog">
      <h2>Latest Blogs</h2>
      <div className="blog-posts-container">
        {currentBlogs.map((blog, index) => (
          <div className="blog-post" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
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
