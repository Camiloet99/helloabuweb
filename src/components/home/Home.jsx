import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HomeServices from "../HomeServices/HomeServices";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <HomeServices />
      {/* Aquí puedes incluir más secciones según sea necesario */}
    </div>
  );
}

export default Home;
