import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center text-center mt-5 p-3">
        <div className="col-12 col-md-10">
          <h1 className="fs-2">Technology</h1>
          <h3 className="text-muted mt-3 fs-5">
            Sleek, modern and intuitive trading platform
          </h3>
          <p className="mt-3 mb-5 fs-6">
            Checkout our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offering{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
