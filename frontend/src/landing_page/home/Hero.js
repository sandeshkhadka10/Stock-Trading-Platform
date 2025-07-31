import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid px-3 px-md-5 py-5 mb-5 ms-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5 img-fluid"
          />
          <h1 className="mt-4">Invest in Everything</h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-5 mx-auto d-block"
            style={{ maxWidth: "250px", width: "80%" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
