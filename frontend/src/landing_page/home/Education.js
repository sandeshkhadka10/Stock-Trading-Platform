import React from "react";

function Education() {
  return (
    <div className="container mt-5 ms-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row g-4 align-items-center">
            {/* Left Image Section */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="media/images/education.svg"
                alt="education"
                className="img-fluid"
              />
            </div>

            {/* Right Text Section */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h1 className="fs-2 mb-3">Free and open market education</h1>
              <p className="text-muted">
                Varsity, the largest online stock market education book in the world
                covering everything from the basics to advanced trading.
              </p>
              <a href="#" className="text-decoration-none">
                Varsity{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <p className="text-muted mt-4">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="#" className="text-decoration-none">
                TradingQ&A{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
