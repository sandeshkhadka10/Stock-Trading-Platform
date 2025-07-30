import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="education"
            className="img-fluid"
            style={{ width: "70%", maxWidth: "100%" }}
          />
        </div>

        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="fs-2 mb-3">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
