import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mt-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-5">404 Not Found</h1>
          <p className="fs-5 text-muted">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
