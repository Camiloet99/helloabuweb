import React from "react";
import "./WhyUs.scss";

const WhyUs = () => {
  return (
    <div className="why-us-section">
      <div className="why-us-content">
        <div className="why-us-image"></div>
        <div className="why-us-text">
          <h3>WHY CHOOSE US</h3>
          <h2>The Right Care for you</h2>
          <p>
            Hello Abu stands out as the premier platform for elderly care,
            specifically designed to cater to the unique healthcare needs of
            grandparents. By integrating cutting-edge technology with a
            compassionate approach, Hello Abu ensures that seniors receive the
            best possible care from the comfort of their homes.
          </p>
          <div className="why-us-values">
            <div className="why-us-value">
              <span>Logo</span>
              <b>Quality Support</b>
            </div>
            <div className="why-us-value">
              <span>Logo</span>
              <b>Elder Care</b>
            </div>
            <div className="why-us-value">
              <span>Logo</span>
              <b>Caring Staff</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
