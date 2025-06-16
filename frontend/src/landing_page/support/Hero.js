import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 mt-5" style={{display:"flex", justifyContent:"space-between"}}>
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
          </div>
           <div className="col-1"></div>
        </div>
      </div>

      <div className=" row p-4 mx-3">
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h1 className="fs-5 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activateF&Om why is my orderd getting rejected" className="mb-3" />
          <br></br>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "0.1rem",
              fontSize: "1rem",
              lineHeight:"2rem"
            }}
          >
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5 mt-4">
          <h1 className="fs-5">Featured</h1>
          <ol className="fs-6" style={{lineHeight:"3rem"}}>
            <li>
              <a href="">MCX Crude option contract expiry - June 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
