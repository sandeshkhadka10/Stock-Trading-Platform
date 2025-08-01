import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6 mt-5">
            <h4>Support Portal</h4>
          </div>
          <div className="col-12 col-md-6 text-md-end mt-5 mt-md-0">
            <a href="">Track Tickets</a>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-6 p-4">
            <h1 className="fs-5 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="form-control mb-3"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected"
            />
            <div
              className="d-flex flex-wrap justify-content-between gap-2"
              style={{ fontSize: "1rem", lineHeight: "2rem" }}
            >
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-4 mt-4 mt-lg-0">
            <h1 className="fs-5">Featured</h1>
            <ol className="fs-6" style={{ lineHeight: "2.5rem" }}>
              <li>
                <a href="">MCX Crude option contract expiry - June 2025</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages and Square-off timings</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
