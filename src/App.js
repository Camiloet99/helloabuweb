import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
