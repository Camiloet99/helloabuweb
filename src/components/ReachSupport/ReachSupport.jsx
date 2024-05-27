import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import nameIcon from "../../assets/images/icons/forms/firstname.svg";
import emailIcon from "../../assets/images/icons/forms/email.svg";
import { ThreeDots } from "react-loader-spinner";
import "./ReachSupport.scss";

const ReachSupport = () => {
  const { t } = useTranslation("home");
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFormStatus("");
    }, 3000);
  }, [formStatus]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_z6alxhp",
        "template_c4yo9dq",
        e.target,
        "rf_16tAWdTNMHLY8S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Email has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setFormStatus(
            "Ups! There was an error sending the email, please try again!"
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="reach-support-section">
      <div className="reach-support-section-container">
        <h2>{t("ReachSupport.Title")}</h2>
        <p>{t("ReachSupport.Description")}</p>
        <form onSubmit={sendEmail}>
          <div className="reach-support-content">
            <div className="label-content">
              <img src={nameIcon} alt="name logo" />
              <label htmlFor="first-name">{t("ReachSupport.NameLabel")}</label>
            </div>
            <img src={nameIcon} alt="name logo" className="hidden-logo" />
            <input
              type="text"
              name="name"
              id="first-name"
              placeholder={t("ReachSupport.FirstNamePlaceholder")}
              required
            />
          </div>
          <div className="reach-support-content">
            <div className="label-content">
              <img src={emailIcon} alt="email logo" />
              <label htmlFor="email">{t("ReachSupport.EmailLabel")}</label>
            </div>
            <img src={emailIcon} alt="email logo" className="hidden-logo" />
            <input
              type="email"
              name="email"
              id="support-email"
              placeholder={t("ReachSupport.EmailPlaceholder")}
              required
            />
          </div>
          {loading ? (
            <ThreeDots
              visible={true}
              height="30"
              width="30"
              color="#1d352e"
              radius="4"
              ariaLabel="three-dots-loading"
            />
          ) : (
            <button type="submit">{t("ReachSupport.ContactButton")}</button>
          )}
        </form>
        <span className="form-status">{formStatus}</span>
      </div>
    </div>
  );
};

export default ReachSupport;
