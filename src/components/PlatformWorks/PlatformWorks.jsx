import React from "react";
import nurse from "../../assets/images/doctor.png";
import "./PlatformWorks.scss";

const PlatformWorks = () => {
  return (
    <div className="platform-section">
      <div className="platform-section-content">
        <div className="platform-text">
          <h2>
            How <span>our platform</span> works
          </h2>
          <p>
            Your healthcare journey with Hello Abu is smooth and
            straightforward. Simply follow the steps outlined below to access
            your chosen services. For additional information, please consult our
            FAQ section.
          </p>
        </div>
        <div className="platform-steps">
          <ul className="platform-steps-list">
            <li>
              <h3>
                <span>1</span> Create Your Profile
              </h3>
              <p>
                Register and securely enter your information. By setting up your
                profile in this manner, you'll keep current with your processes.
              </p>
            </li>
            <li>
              <h3>
                <span>2</span> Choose Your Service
              </h3>
              <p>
                Choose from our array of services and schedule a consultation.
                Arranging a consultation with Hello Abu is quite simple and
                direct.
              </p>
            </li>
            <li>
              <h3>
                <span>3</span> Meet Your Helper
              </h3>
              <p>
                Engage in a virtual consultation with one of our certified
                specialists.
              </p>
            </li>
            <span className="steps-line" />
          </ul>
          <div className="steps-image">
            <img src={nurse} alt="nurse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformWorks;
