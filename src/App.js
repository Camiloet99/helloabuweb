import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import ScrollToTop from "./utils/ScrollToTop";
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
  return (
    <Router className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/helloabuweb" exact element={<Home />} />
        <Route path="/helloabuweb/signup" element={<SignUp />} />
        <Route path="/helloabuweb/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
