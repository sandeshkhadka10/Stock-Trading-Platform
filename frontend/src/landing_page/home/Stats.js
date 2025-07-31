import React from "react";

function Stats() {
  return (
    <div className="container-fluid py-4 ms-5">
      {/* Centered and width-constrained container */}
      <div className="mx-auto px-3 px-sm-4 px-md-5" style={{ maxWidth: "1140px" }}>
        <div className="row">
          {/* Text Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="fs-2 mb-4">Trust with confidence</h1>

            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-5">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>

          {/* Image & Links Section */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              className="img-fluid mb-4"
            />
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="#" className="text-decoration-none">
                Explore our products{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#" className="text-decoration-none">
                Try Kite{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
