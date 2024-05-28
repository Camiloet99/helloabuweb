import React, { createContext, useContext, useState } from "react";
import Toast from "../components/atoms/Toast/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const triggerToast = (msg) => {
    setMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <ToastContext.Provider value={{ triggerToast }}>
      {children}
      <Toast
        message={message}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
