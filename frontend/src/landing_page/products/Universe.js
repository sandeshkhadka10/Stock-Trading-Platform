import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import {Link} from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"  style={{width:"39%"}}/>
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png"  style={{width:"30%"}}/>
          <p className="text-small text-muted">Personalized advice on life</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}}/>
          <p className="text-small text-muted">Our asset management venture</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"  style={{width:"40%"}}/>
          <p className="text-small text-muted">Options trading platform that lets you</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"  style={{width:"30%"}}/>
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori.svg" style={{width:"25%"}}/>
          <p className="text-small text-muted">Investment research platform</p>
        </div>
        <Link to={"/signup"} className="p-2 btn btn-primary fs-5 mt-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</Link>
      </div>
    </div>
  );
}

export default Universe;
