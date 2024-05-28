import React, { useState, useEffect } from "react";
import messenger from "../../assets/images/icons/socialmedia/Messenger.svg";
import whatsapp from "../../assets/images/icons/socialmedia/Whatsapp.svg";
import google from "../../assets/images/icons/socialmedia/Messenger.svg";
import zoom from "../../assets/images/icons/socialmedia/Messenger.svg";
import phone from "../../assets/images/icons/forms/phone.svg";
import { createBooking } from "../../api/bookings/bookingsApi";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import "./ContactModal.scss";

const ContactModal = ({ user, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [methodLink, setMethodLink] = useState("");
  const [extraData, setExtraData] = useState("");
  const [validData, setValidData] = useState(true);
  const navigate = useNavigate();
  const { triggerToast } = useToast();

  const handleChangeMethod = (method) => {
    setSelectedMethod(method);
    if (method === "zoom") {
      setMethodLink(extraData);
    } else if (method === "wpp") {
      setMethodLink(`https://wa.me/${user?.phoneNumber?.replace("+", "")}`);
    } else if (method === "phone") {
      setMethodLink(`tel:${user?.phoneNumber?.replace("+", "")}`);
    } else if (method === "google") {
      setMethodLink(extraData);
    } else if (method === "facebook") {
      setMethodLink(`facebook.com/${extraData}`);
    }
  };

  const isInputRequired = () => {
    return ["zoom", "facebook", "google"].includes(selectedMethod);
  };

  const handleExtraData = (event) => {
    setExtraData(event.target.value);
  };

  const handleBooking = async () => {
    if (user?.fullName) {
      const booking = {
        userId: user?.userId,
        userName: user?.fullName,
        selectedPlatform: selectedMethod,
        location: "To be defined",
        link: methodLink,
      };
      await createBooking(booking);
      triggerToast("Booking was created successfully!!");
      onClose();
    } else {
      navigate("/helloabuweb/login");
    }
  };

  useEffect(() => {
    if (["zoom", "facebook", "google"].includes(selectedMethod)) {
      if (extraData.length > 0) {
        setValidData(false);
      } else {
        setValidData(true);
      }
    } else if (["phone", "wpp"].includes(selectedMethod)) {
      setValidData(false);
    }
  }, [selectedMethod, extraData]);

  return (
    <div className="contact-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>¿Cómo quieres ser contactado?</h2>
        <div className="options-container">
          <div className="contact-option">
            <img
              src={phone}
              alt="Teléfono"
              onClick={() => handleChangeMethod("phone")}
              className={selectedMethod === "phone" ? "selected" : ""}
            />
          </div>
          <div className="contact-option">
            <img
              src={whatsapp}
              alt="WhatsApp"
              onClick={() => handleChangeMethod("wpp")}
              className={selectedMethod === "wpp" ? "selected" : ""}
            />
          </div>
          <div className="contact-option">
            <img
              src={zoom}
              alt="Zoom"
              onClick={() => handleChangeMethod("zoom")}
              className={selectedMethod === "zoom" ? "selected" : ""}
            />
          </div>
          <div className="contact-option">
            <img
              src={messenger}
              alt="Facebook Message"
              onClick={() => handleChangeMethod("facebook")}
              className={selectedMethod === "facebook" ? "selected" : ""}
            />
          </div>
          <div className="contact-option">
            <img
              src={google}
              alt="Google Meets"
              onClick={() => handleChangeMethod("google")}
              className={selectedMethod === "google" ? "selected" : ""}
            />
          </div>
        </div>
        {isInputRequired() && (
          <input
            type="text"
            value={extraData}
            onChange={handleExtraData}
            placeholder={`Ingresa tu ${
              selectedMethod === "zoom"
                ? "ID de Zoom"
                : selectedMethod === "google"
                ? "email de Google"
                : "perfil de Facebook"
            }`}
          />
        )}
        <button onClick={handleBooking} disabled={validData}>
          Book
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
