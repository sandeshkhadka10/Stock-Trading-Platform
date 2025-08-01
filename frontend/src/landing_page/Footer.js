import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-5">
          <div className="col mb-4">
            <img
              src="media/images/logo.svg"
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "50%" }}
            />
            <p style={{ fontSize: "15px", maxWidth: "80%" }}>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col mb-4">
            <p><strong>Company</strong></p>
            <a href="#" style={{ textDecoration: "none" }}>About</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Products</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Pricing</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Referral programme</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Careers</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Zerodha.tech</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Press & Media</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Zerodha cares(CSR)</a>
          </div>
          <div className="col mb-4">
            <p><strong>Support</strong></p>
            <a href="#" style={{ textDecoration: "none" }}>Contact</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Support portal</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Z-Connect blog</a><br />
            <a href="#" style={{ textDecoration: "none" }}>List of charges</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Downloads & Resources</a>
          </div>
          <div className="col mb-4">
            <p><strong>About</strong></p>
            <a href="#" style={{ textDecoration: "none" }}>Open an account</a><br />
            <a href="#" style={{ textDecoration: "none" }}>Fund transfer</a><br />
            <a href="#" style={{ textDecoration: "none" }}>60 day challenge</a>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES...
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers...
          </p>

          <div
            className="p-3 d-flex flex-wrap justify-content-center gap-3"
          >
            <a href="#" style={{ textDecoration: "none" }}>NSE</a>
            <a href="#" style={{ textDecoration: "none" }}>BSE</a>
            <a href="#" style={{ textDecoration: "none" }}>MCX</a>
            <a href="#" style={{ textDecoration: "none" }}>Terms & conditions</a>
            <a href="#" style={{ textDecoration: "none" }}>Policies & procedures</a>
            <a href="#" style={{ textDecoration: "none" }}>Privacy policy</a>
            <a href="#" style={{ textDecoration: "none" }}>Disclosure</a>
            <a href="#" style={{ textDecoration: "none" }}>For investor's</a>
            <a href="#" style={{ textDecoration: "none" }}>attention</a>
            <a href="#" style={{ textDecoration: "none" }}>Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
