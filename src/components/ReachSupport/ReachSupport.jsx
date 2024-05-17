import React from "react";
import "./ReachSupport.scss";

const ReachSupport = () => {
  return (
    <div className="reach-support-section">
      <div className="reach-support-section-container">
        <h1>Reach for support</h1>
        <p>
          Questions? Need assistance? Our dedicated support team is here to help
          you every step of the way:
        </p>
        <form action="">
          <input type="text" placeholder="Enter Your First Name" />
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Contact us</button>
        </form>
      </div>
    </div>
  );
};

export default ReachSupport;
