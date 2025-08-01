import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css"; // Optional for button colors

const Funds = () => {
  return (
    <div className="container mt-4">
      <div className="funds text-center mb-4">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 mb-4">
          <span>
            <p className="fw-bold">Equity</p>
          </span>

          <div className="table border rounded p-3 bg-light">
            <div className="data d-flex justify-content-between">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data d-flex justify-content-between">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data d-flex justify-content-between">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data d-flex justify-content-between">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <div className="commodity text-center border p-4 rounded bg-light w-100">
            <p className="mb-3">You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
