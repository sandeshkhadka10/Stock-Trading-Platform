import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center px-3 px-md-4 ms-5">
        {/* Image Section */}
        <div className="col-12 col-sm-10 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid w-75" alt={productName} />
        </div>

        {/* Text Section */}
        <div className="col-12 col-sm-10 col-md-6 text-center text-md-start mt-4 mt-md-5 px-md-4">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>

          {/* Demo & Learn More Links */}
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 my-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
                alt="Google Play Store"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
