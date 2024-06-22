import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastProvider } from "./context/ToastContext";
import ScheduleCall from "./components/pages/ScheduleCall/ScheduleCall";
import "animate.css/animate.compat.css";
import "react-phone-number-input/style.css";
import 'react-datepicker/dist/react-datepicker.css';

import "./App.css";

function App() {
  return (
    <ToastProvider>
      <Router className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<ScheduleCall />} />
        </Routes>
        <Footer />
      </Router>
    </ToastProvider>
  );
}

export default App;
