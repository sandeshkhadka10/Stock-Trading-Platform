import React from "react";

function Pricing() {
  return (
    <div className="container-fluid px-3 px-md-5 mb-5 ms-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row">
            {/* Text Section */}
            <div className="col-12 col-md-5 mb-4">
              <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
              <p>
                We pioneered the concept of discount broking and price transparency
                in India. Flat fees and no hidden charges.
              </p>
              <a href="#" style={{ textDecoration: "none" }}>
                See pricing{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            {/* Pricing Cards Section */}
            <div className="col-12 col-md-7">
              <div className="row text-center g-3">
                <div className="col-12 col-sm-6">
                  <div className="border p-3 h-100">
                    <h1 className="mb-3">₹0</h1>
                    <p>
                      Free equity delivery and
                      <br />
                      direct mutual funds
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="border p-3 h-100">
                    <h1 className="mb-3">₹20</h1>
                    <p>Intraday and FPO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Pricing;
