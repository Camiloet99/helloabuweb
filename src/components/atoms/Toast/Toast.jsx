import React, { useEffect } from "react";
import "./Toast.scss";

const Toast = ({ message, show, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  return <div className={`toast ${show ? "show" : ""}`}>{message}</div>;
};

export default Toast;
