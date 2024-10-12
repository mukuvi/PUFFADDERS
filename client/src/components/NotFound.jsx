import React from "react";

function NotFound() {
  return (
    <>
      <div className="notfound">
        <h1 className="notfound-header">404</h1>
        <h3 className="notfound-title">
          Oops! The page you're looking for doesn't exist.
        </h3>
        <p className="notfound-foot">
          Please check the URL or return to the homepage.
        </p>
      </div>
    </>
  );
}

export default NotFound;
