import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import nameIcon from "../../../assets/images/icons/forms/firstname.svg";
import emailIcon from "../../../assets/images/icons/forms/email.svg";
import phoneIcon from "../../../assets/images/icons/forms/phone.svg";
import messengerIcon from "../../../assets/images/icons/socialmedia/Messenger.svg";
import whatsappIcon from "../../../assets/images/icons/socialmedia/Whatsapp.svg";
import teamsIcon from "../../../assets/images/icons/socialmedia/Teams.svg";
import zoomIcon from "../../../assets/images/icons/socialmedia/Zoom.svg";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../../api/bookings/bookingsApi";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { createBookingNoLogin } from "../../../api/bookings/bookingsApi";
import { useToast } from "../../../context/ToastContext";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleCall.scss";

const ScheduleCall = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const [selectedMethod, setSelectedMethod] = useState("");
  const [methodLink, setMethodLink] = useState("");
  const [extraData, setExtraData] = useState("");
  const [validData, setValidData] = useState(true);
  const navigate = useNavigate();
  const { triggerToast } = useToast();

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

  const isInputRequired = () => {
    return ["zoom", "facebook", "teams"].includes(selectedMethod);
  };

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const suffix = i < 12 ? "AM" : "PM";
    return `${hour}:00 ${suffix}`;
  });

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleExtraData = (event) => {
    setExtraData(event.target.value);
  };

  const handleChangeMethod = (method) => {
    setSelectedMethod(method);
    if (method === "zoom") {
      setMethodLink(extraData);
    } else if (method === "wpp") {
      setMethodLink(`https://wa.me/${user?.phoneNumber?.replace("+", "")}`);
    } else if (method === "phone") {
      setMethodLink(`tel:${user?.phoneNumber?.replace("+", "")}`);
    } else if (method === "teams") {
      setMethodLink(extraData);
    } else if (method === "facebook") {
      setMethodLink(`facebook.com/${extraData}`);
    }
  };

  const handleInstantCall = async (event) => {
    event.preventDefault();
    if (user?.fullName) {
      const booking = {
        userId: user?.userId,
        userName: user?.fullName,
        selectedPlatform: "wpp",
        location: "To be defined",
        link: `https://wa.me/${user?.phoneNumber?.replace("+", "")}`,
      };
      setIsLoading(true);
      await createBooking(booking);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/helloabuweb");
        triggerToast("Booking was created successfully!!");
      }, 1000);
    } else {
      if (name.length > 0 && email.length > 0 && phone.length > 0) {
        const booking = {
          userId: 7,
          userName: name + " " + email,
          selectedPlatform: "wpp",
          location: "To be defined",
          link: `https://wa.me/${phone.replace("+", "")}`,
        };
        setIsLoading(true);
        await createBookingNoLogin(booking);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/helloabuweb");
          triggerToast("Booking was created successfully!!");
        }, 1000);
      } else {
        triggerToast("Please provide required information");
      }
    }
  };

  const handleBooking = async (event) => {
    event.preventDefault();
    if (user?.fullName) {
      const booking = {
        userId: user?.userId,
        userName: user?.fullName,
        selectedPlatform: selectedMethod,
        location: "To be defined",
        link: methodLink,
      };
      setIsLoading(true);
      await createBooking(booking);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/helloabuweb");
        triggerToast("Booking was created successfully!!");
      }, 1000);
    } else {
      navigate("/helloabuweb/login");
    }
  };

  return (
    <div className="schedule-call">
      <h2>Book Your Appointment</h2>
      <p>
        Schedule a one-to-one call to <span>recive help</span> now.
      </p>
      <div className="schedule-call-content">
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#1d352e"
            radius="4"
            ariaLabel="three-dots-loading"
          />
        ) : (
          <form onSubmit={handleBooking}>
            <div className="instant-call">
              <button className="book-now" onClick={handleInstantCall}>
                Book an Instant Call
              </button>
              <span className="book-now-description">
                Experts are going to call you ASAP via WhatsApp! <br />
                No need to register.
              </span>
              {!user?.fullName && (
                <div className="registration-form">
                  <div className="registration-input">
                    <div className="label-group">
                      <img src={nameIcon} alt="name-logo" />
                      <label htmlFor="booking-reg-name">Name</label>
                    </div>
                    <input
                      type="text"
                      id="booking-reg-name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="registration-input">
                    <div className="label-group">
                      <img src={emailIcon} alt="email-logo" />
                      <label htmlFor="booking-reg-name">Email</label>
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      id="booking-reg-email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="registration-input">
                    <div className="label-group">
                      <img src={phoneIcon} alt="email-logo" />
                      <label htmlFor="booking-reg-name">Phone</label>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      id="booking-reg-phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="date-picker">
              <label>Choose a Date</label>
              <DatePicker
                inline
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className="time-selection">
              <label>Pick a time</label>
              <div className="times-container">
                {times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-button ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="platform-selection">
              <h4>Select a platform to receive the call</h4>
              <div className="options-container">
                <div className="contact-option">
                  <img
                    src={phoneIcon}
                    alt="Teléfono"
                    onClick={() => handleChangeMethod("phone")}
                    className={selectedMethod === "phone" ? "selected" : ""}
                  />
                </div>
                <div className="contact-option">
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    onClick={() => handleChangeMethod("wpp")}
                    className={selectedMethod === "wpp" ? "selected" : ""}
                  />
                </div>
                <div className="contact-option">
                  <img
                    src={zoomIcon}
                    alt="Zoom"
                    onClick={() => handleChangeMethod("zoom")}
                    className={selectedMethod === "zoom" ? "selected" : ""}
                  />
                </div>
                <div className="contact-option">
                  <img
                    src={messengerIcon}
                    alt="Facebook Message"
                    onClick={() => handleChangeMethod("facebook")}
                    className={selectedMethod === "facebook" ? "selected" : ""}
                  />
                </div>
                <div className="contact-option">
                  <img
                    src={teamsIcon}
                    alt="Teams Meets"
                    onClick={() => handleChangeMethod("teams")}
                    className={selectedMethod === "teams" ? "selected" : ""}
                  />
                </div>
              </div>
              {isInputRequired() && (
                <div className="extra-data">
                  <input
                    type="text"
                    value={extraData}
                    onChange={handleExtraData}
                    placeholder={`Provide your ${
                      selectedMethod === "zoom"
                        ? "Zoom user ID"
                        : selectedMethod === "teams"
                        ? "Teams profile"
                        : "Facebook profile"
                    }`}
                  />
                </div>
              )}
            </div>
            <div className="submit-booking">
              <button type="submit" disabled={validData}>
                Book Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ScheduleCall;
