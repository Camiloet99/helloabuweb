import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer/Footer";
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/helloabuweb" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
