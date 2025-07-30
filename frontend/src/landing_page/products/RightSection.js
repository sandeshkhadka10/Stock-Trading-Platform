import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 mt-4 mt-md-5 p-3 p-md-5 text-center text-md-start">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxHeight: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
