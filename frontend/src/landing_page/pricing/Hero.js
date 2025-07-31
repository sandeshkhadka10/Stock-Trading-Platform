import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5 border-bottom p-4 p-md-5 ms-5">
        <div className="col-12 col-md-10 col-lg-8">
          <h1>Pricing</h1>
          <h3 className="text-muted fs-6 fs-md-5 mt-3">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      <div className="row justify-content-center mt-4 mt-md-5 p-3 p-md-5 ms-5">
        <div className="col-12 col-md-4 p-3 p-md-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid mb-3"
          />
          <h1 className="fs-5 fs-md-4">Free equity delivery</h1>
          <p className="text-muted px-2 px-md-0">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 p-3 p-md-4 text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
          />
          <h1 className="fs-5 fs-md-4">Intraday and F&O trades</h1>
          <p className="text-muted px-2 px-md-0">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 p-3 p-md-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct MF"
            className="img-fluid mb-3"
          />
          <h1 className="fs-5 fs-md-4">Free direct MF</h1>
          <p className="text-muted px-2 px-md-0">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
