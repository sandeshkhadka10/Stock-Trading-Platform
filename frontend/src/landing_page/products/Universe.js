import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Partner Logos Section */}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "40%" }}
              alt="Smallcase Logo"
            />
            <p className="text-muted mt-2">Thematic investing platform</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "30%" }}
              alt="Ditto Logo"
            />
            <p className="text-muted mt-2">Personalized advice on life</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "40%" }}
              alt="Zerodha Fund House"
            />
            <p className="text-muted mt-2">Our asset management venture</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "40%" }}
              alt="Sensibull Logo"
            />
            <p className="text-muted mt-2">
              Options trading platform that lets you
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/streakLogo.png"
              style={{ width: "30%" }}
              alt="Streak Logo"
            />
            <p className="text-muted mt-2">Systematic trading platform</p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-3 mt-4">
            <img
              src="media/images/tijori.svg"
              style={{ width: "25%" }}
              alt="Tijori Logo"
            />
            <p className="text-muted mt-2">Investment research platform</p>
          </div>
        </div>

        {/* Signup Button */}
        <div className="col-12 mt-5">
          <Link
            to="/signup"
            className="btn btn-primary fs-5 px-5 py-2"
            style={{ maxWidth: "250px", width: "80%" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
