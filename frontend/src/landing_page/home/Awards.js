import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-4 p-md-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            className="img-fluid"
            alt="Largest Broker"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5 mt-4 mt-md-5">
          <h1 className="text-center text-md-start">Largest stock broker in India</h1>
          <p className="mb-5 text-center text-md-start">
            +2 million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <ul className="col-6">
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p>Commondity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>

            <ul className="col-6">
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>
                <p>Bonds and Government Security </p>
              </li>
            </ul>
          </div>
          <div className="text-center text-md-start mt-4">
            <img
              src="media/images/pressLogos.png"
              className="img-fluid"
              style={{ width: "90%", maxWidth: "100%" }}
              alt="Press Logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
