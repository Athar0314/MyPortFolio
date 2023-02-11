import "./pricing.css";

import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <p>Calculator</p>
          <p>Using ReactJS</p>
          <p>Responsive Design</p>
          <Link to="/contactus" className="btn">
            View Now
          </Link>
        </div>
        <div className="card">
          <p>My PortFolio</p>
          <p>Using HTML CSS</p>
          <p>UnResponsive Design</p>
          <Link to="/contactus" className="btn">
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Bootstrap Learning</p>
          <p>Using HTML CSS BOOTSTRAP</p>
          <p>Responsive Design</p>
          <Link to="/contactus" className="btn">
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
